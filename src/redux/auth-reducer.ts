import {ActionType, AuthType} from "./redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {toggleIsFetching} from "./users-reducer";

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

export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
    usersAPI.getAuthUserData()
        .then((data) => {
            if (data.resultCode === 0 ) {
                let {id,login, email} = data.data
                dispatch(setAuthUserData(id,login, email))
            }
        })
}

export type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>