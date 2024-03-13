import {ActionType, RootStateType} from "./redux-store";
import {getAuthUserDataTC} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";

let initialState = {
    isInitialized: false
}

export const AppReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET-INITIALIZED": {
            return {...state, isInitialized: action.isInitialized}
        }
        default: {
            return state
        }
    }
}

export const initializedSuccess = (isInitialized: boolean) => ({type: "SET-INITIALIZED", isInitialized} as const)
export const initializeAppTC = () => (dispatch: ThunkDispatch<RootStateType, unknown, ActionType>) => {
   let promise= dispatch(getAuthUserDataTC())
    promise.then(()=>{
            dispatch(initializedSuccess(true))
        })

}