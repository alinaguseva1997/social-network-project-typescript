import {combineReducers, createStore} from "redux";
import {AddPostActionType, ProfilePageReducer, UpdateNewPostTextActionType} from "./profilePage-reducer";
import {DialogsPageReducer, sendNewMessageTextActionType, UpdateNewMessageTextActionType} from "./dialogsPage-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import {
    followActionType,
    setCurrentPageAC, setCurrentPageActionType, setTotalUsersCountActionType,
    setUsersActionType,
    unfollowActionType,
    UsersReducer
} from "./users-reducer";

export type StoreType = any
export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: sidebarType
    usersPage: UsersPageType
}
export type profilePageType ={
    posts: postsDataType[]
    newPostText: string
}
export type dialogsPageType = {
    dialogs: dialogsDataType[]
    messages: messagesDataType[]
    newMessageText: string
}
export type sidebarType = {

}
export type dialogsDataType  = {
    id: number
    name: string
}
export type messagesDataType = {
    id: number
    message: string
}
export type postsDataType = {
    id: number
    message: string
    likesCount: number
}
export type UsersPageType = {
    users: UsersType[]
    pageSize: number,
    totalCount: number
    currentPage: number
}
export type UsersType = {
    id: number
    photoURL: string
    followed: boolean
    fullName: string
    status: string
    location: {city: string, country: string}
}
export type ActionType =
| AddPostActionType
| UpdateNewPostTextActionType
| UpdateNewMessageTextActionType
| sendNewMessageTextActionType
| followActionType
| unfollowActionType
| setUsersActionType
| setCurrentPageActionType
| setTotalUsersCountActionType

export const rootReducer = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer
})
export const store = createStore(rootReducer);