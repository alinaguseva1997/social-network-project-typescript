import {UsersPageType, UsersType} from "./redux-store";

export type followActionType = ReturnType<typeof follow>
export type unfollowActionType = ReturnType<typeof unfollow>
export type setUsersActionType = ReturnType<typeof setUsers>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>

let initialState: UsersPageType = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isFetching: false
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
        default: {
            return state;
        }
    }
};

export const unfollow = (userID: number) => ({type: 'UNFOLLOW', userID} as const)
export const follow = (userID: number) => ({type: 'FOLLOW', userID} as const)
export const setUsers = (users: UsersType[]) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: 'SET-TOTAL-USERS-COUNT', totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
