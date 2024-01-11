import {UsersPageType, UsersType} from "./redux-store";

export type followActionType = ReturnType<typeof follow>
export type unfollowActionType = ReturnType<typeof unfollow>
export type setUsersActionType = ReturnType<typeof setUsers>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>

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

export const unfollow = (userID: number) => {
    return {
        type: 'UNFOLLOW', userID
    } as const
}
export const follow = (userID: number) => {
    return {
        type: 'FOLLOW', userID
    } as const
}
export const setUsers = (users: UsersType[]) => {
    return {
        type: 'SET-USERS', users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE', currentPage
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT', totalCount
    } as const
}