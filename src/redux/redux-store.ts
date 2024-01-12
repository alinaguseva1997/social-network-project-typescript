import {combineReducers, createStore} from "redux";
import {
    AddPostActionType,
    ProfilePageReducer,
    SetUserProfileActionType,
    UpdateNewPostTextActionType
} from "./profilePage-reducer";
import {DialogsPageReducer, sendNewMessageTextActionType, UpdateNewMessageTextActionType} from "./dialogsPage-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import {
    followActionType,
    setCurrentPage, setCurrentPageActionType, setTotalUsersCountActionType,
    setUsersActionType, toggleIsFetchingActionType,
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
    profile: UserProfileType
}

export type UserProfileType = UsersType & {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsUserType
}
export type ContactsUserType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
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
    isFetching: boolean
}
export type UsersType = {
    id: number
    name: string
    status: string
    followed: boolean
    photos: {
        small: string
        large: string
    }
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
    | toggleIsFetchingActionType
    | SetUserProfileActionType

export const rootReducer = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer
})
export const store = createStore(rootReducer);