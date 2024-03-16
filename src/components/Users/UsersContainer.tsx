import {connect} from "react-redux";
import {RootStateType, UsersType} from "../../redux/redux-store";
import {
    followTC, getUsersTC,
    setCurrentPage,
    toggleFollowingProgress,
    unfollowTC
} from "../../redux/users-reducer";
import React, {ComponentType} from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalCount,
    getUsers
} from "../../redux/users-selectors";

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType
export type mapStateToPropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    users: UsersType[]
    totalCount: number
    followingInProgress: number[]
}
export type mapDispatchToPropsType = {
    followTC: (userID: number)=>void
    unfollowTC: (userID: number)=> void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (isFetching: boolean, userID: number) => void
    getUsersTC: (page: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (page: number) => {
        this.props.getUsersTC(page, this.props.pageSize)
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

export const mapStateToProps = (state: RootStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<ComponentType>(connect (mapStateToProps,
        {followTC, unfollowTC, setCurrentPage, toggleFollowingProgress, getUsersTC}))(UsersContainer)
