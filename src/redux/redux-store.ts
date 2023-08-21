import {combineReducers, createStore} from "redux";
import {AddPostActionType, ProfilePageReducer, UpdateNewPostTextActionType} from "./profilePage-reducer";
import {DialogsPageReducer, sendNewMessageTextActionType, UpdateNewMessageTextActionType} from "./dialogsPage-reducer";
import {SidebarReducer} from "./sidebar-reducer";

export type StoreType = any
export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: sidebarType
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
export type ActionType =
| AddPostActionType
| UpdateNewPostTextActionType
| UpdateNewMessageTextActionType
| sendNewMessageTextActionType

export const rootReducer = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    sidebar: SidebarReducer
})
export const store = createStore(rootReducer);