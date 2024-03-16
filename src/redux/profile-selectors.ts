import {RootStateType} from "./redux-store";
export const getProfile = (state: RootStateType) => state.profilePage.profile;
export const getStatus = (state: RootStateType) => state.profilePage.status;
export const getAuthorizedUserId = (state: RootStateType) => state.auth.id;
export const getIsAuth = (state: RootStateType) => state.auth.isAuth;
