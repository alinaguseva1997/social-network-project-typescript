import {RootStateType} from "./redux-store";
export const getUsers = (state: RootStateType)=> state.usersPage.users;
export const getPageSize = (state: RootStateType) => state.usersPage.pageSize;
export const getTotalCount = (state: RootStateType) => state.usersPage.totalCount;
export const getCurrentPage = (state: RootStateType) => state.usersPage.currentPage;
export const getIsFetching = (state: RootStateType) => state.usersPage.isFetching;
export const getFollowingInProgress = (state: RootStateType) => state.usersPage.followingInProgress;