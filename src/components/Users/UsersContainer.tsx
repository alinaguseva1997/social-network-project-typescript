import {connect} from "react-redux";
import {stateType, UsersPageType, UsersType} from "../../redux/redux-store";
import {follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow} from "../../redux/users-reducer";
import React, {ReactNode} from "react";
import axios from "axios";
import {Users} from "./Users";

export type UsersPropsType = UsersPageType & {
    follow: (userID: number)=>void
    unfollow: (userID: number)=> void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    children?: ReactNode
}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged (pageNumber: number) {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <Users onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize}
                      totalCount={this.props.totalCount}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}/>
    }
}

export const mapStateToProps = (state: stateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}

export default connect (mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount})(UsersContainer)
