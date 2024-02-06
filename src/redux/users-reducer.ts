import {UsersPageType, UsersType} from "./redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type followActionType = ReturnType<typeof followSuccess>
export type unfollowActionType = ReturnType<typeof unfollowSuccess>
export type setUsersActionType = ReturnType<typeof setUsers>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export type toggleFollowingProgressActionType = ReturnType<typeof toggleFollowingProgress>

let initialState: UsersPageType = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const UsersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET-USERS' : {
            return {...state, users: [...action.users]}
        }
        case 'UNFOLLOW' : {
            return {...state,  users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)}
        }
        case 'FOLLOW' : {
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)}
        }
        case 'SET-CURRENT-PAGE' : {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-USERS-COUNT' : {
            return {...state, totalCount: action.totalCount}
        }
        case 'TOGGLE-IS-FETCHING' : {
            return {...state, isFetching: action.isFetching}
        }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS' : {
            return {...state, followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)}
        }
        default: {
            return state;
        }
    }
};

export const unfollowSuccess = (userID: number) => ({type: 'UNFOLLOW', userID} as const)
export const followSuccess = (userID: number) => ({type: 'FOLLOW', userID} as const)
export const setUsers = (users: UsersType[]) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: 'SET-TOTAL-USERS-COUNT', totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const toggleFollowingProgress = (followingInProgress: boolean, userID: number) => ({type: 'TOGGLE-IS-FOLLOWING-PROGRESS', followingInProgress, userID} as const)

export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then((data) => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
}
export const unfollowTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.unfollow(userId)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
}
export const followTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.follow(userId)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
}