import {UsersPageType, UsersType} from "./redux-store";

export type followActionType = ReturnType<typeof followAC>
export type unfollowActionType = ReturnType<typeof unfollowAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>

let initialState: UsersPageType = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1
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
        default: {
            return state;
        }
    }
};

export const unfollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW', userID
    } as const
}
export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW', userID
    } as const
}
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: 'SET-USERS', users
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE', currentPage
    } as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT', totalCount
    } as const
}