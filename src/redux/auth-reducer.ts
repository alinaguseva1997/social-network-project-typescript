import {ActionType, AuthType} from "./redux-store";

let initialState: AuthType = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

export const AuthReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {...state, ...action.data, isAuth: true}
        }
        default: {
            return state
        }
    }
}

export const setAuthUserData = (id: AuthType,login: AuthType, email: AuthType) => ({type: "SET-USER-DATA", data: {id,login, email}} as const)

export type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>