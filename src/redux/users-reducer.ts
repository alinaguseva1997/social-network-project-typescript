import {UsersPageType, UsersType} from "./redux-store";

export type followActionType = ReturnType<typeof followAC>
export type unfollowActionType = ReturnType<typeof unfollowAC>
export type setUsersActionType = ReturnType<typeof setUsersAC>

let initialState: UsersPageType = {
    users: []
}

export const UsersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET-USERS' : {
            return {...state, users: [...state.users, ...action.users]}
        }
        case 'UNFOLLOW' : {
            debugger
            return {...state,  users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : el)}
        }
        case 'FOLLOW' : {
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : el)}
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