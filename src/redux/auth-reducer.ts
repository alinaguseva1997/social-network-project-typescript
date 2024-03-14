import {ActionType, AuthType, RootStateType} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";

let initialState: AuthType = {
    id: null,
    email: '',
    login: '',
    isAuth: false
}

export const AuthReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {...state, ...action.payload}
        }
        default: {
            return state
        }
    }
}

export const setAuthUserData = (id:any, login: string, email: string, isAuth: boolean) => ({type: "SET-USER-DATA", payload: {id,login, email, isAuth}} as const)

export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
   return authAPI.me()
        .then((res) => {
            if (res.data.resultCode === 0 ) {
                let {id,login, email} = res.data.data
                dispatch(setAuthUserData(id,login, email, true))
            }
        })
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email,password,rememberMe)
        .then((res) => {
            if (res.data.resultCode === 0 ) {
                dispatch(getAuthUserDataTC())
            } else {
                let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}
export const logoutTC = () => (dispatch: ThunkDispatch<RootStateType, unknown, ActionType>) => {
    authAPI.logout()
        .then((res) => {
            if (res.data.resultCode === 0 ) {
                dispatch(setAuthUserData(null,'', '', false))
            }
        })
}

export type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>