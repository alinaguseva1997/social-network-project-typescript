import {connect} from "react-redux";
import {Users} from "./Users";
import {ActionType, stateType, UsersType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

export const mapStateToProps = (state: stateType) => {
    return {
        users: state.usersPage.users
    }
}
export const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)
