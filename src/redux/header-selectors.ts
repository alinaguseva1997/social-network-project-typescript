import {RootStateType} from "./redux-store";
export const getLogin= (state: RootStateType) => state.auth.login;
export const getIsAuth = (state: RootStateType) => state.auth.isAuth;
