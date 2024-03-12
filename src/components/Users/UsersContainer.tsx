import {connect} from "react-redux";
import { UsersPageType} from "../../redux/redux-store";
import {
    followTC, getUsersTC,
    setCurrentPage,
    toggleFollowingProgress,
    unfollowTC
} from "../../redux/users-reducer";
import React, {ComponentType} from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType
export type mapStateToPropsType = UsersPageType
export type mapDispatchToPropsType = {
    followTC: (userID: number)=>void
    unfollowTC: (userID: number)=> void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (followingInProgress: boolean, userID: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged (currentPage: number) {
        this.props.getUsersTC(currentPage, this.props.pageSize)
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null}
            <Users onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   totalCount={this.props.totalCount}
                   followTC={this.props.followTC}
                   unfollowTC={this.props.unfollowTC}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}/>
            </>
    }
}

export const mapStateToProps = (state: UsersPageType):mapStateToPropsType => {
    return {
        users: state.users,
        pageSize: state.pageSize,
        totalCount: state.totalCount,
        currentPage: state.currentPage,
        isFetching: state.isFetching,
        followingInProgress: state.followingInProgress
    }
}

export default compose<ComponentType>(connect (mapStateToProps,
        {followTC, unfollowTC, setCurrentPage, toggleFollowingProgress, getUsersTC}),
    WithAuthRedirect)(UsersContainer)
