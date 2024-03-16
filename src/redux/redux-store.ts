import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {
    AddPostActionType,
    ProfilePageReducer, SetStatusProfileActionType,
    SetUserProfileActionType,
} from "./profilePage-reducer";
import {DialogsPageReducer, sendNewMessageTextActionType} from "./dialogsPage-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import {
    followActionType, setCurrentPageActionType, setTotalUsersCountActionType,
    setUsersActionType, toggleFollowingProgressActionType, toggleIsFetchingActionType,
    unfollowActionType,
    UsersReducer
} from "./users-reducer";
import {AuthReducer, setAuthUserDataActionType} from "./auth-reducer";
import {thunk} from "redux-thunk";
import {reducer as formReducer } from "redux-form";
import {AppReducer, initializedSuccess} from "./app-reducer";

export type AuthType = {
    id: any
    email: string
    login: string
    isAuth: boolean
}

export type profilePageType ={
    posts: postsDataType[]
    newPostText: string
    profile: UserProfileType
    status: string
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
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
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
    | sendNewMessageTextActionType
    | followActionType
    | unfollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType
    | toggleIsFetchingActionType
    | SetUserProfileActionType
    | setAuthUserDataActionType
    | toggleFollowingProgressActionType
    | SetStatusProfileActionType
    | ReturnType<typeof initializedSuccess>

export type RootStateType = ReturnType<typeof rootReducer>
export const rootReducer = combineReducers({
    app: AppReducer,
    auth: AuthReducer,
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    form: formReducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

//@ts-ignore
window.store = store