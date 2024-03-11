import {ActionType, UserProfileType} from "./redux-store";
import {profileAPI} from "../api/api";
import {Dispatch} from "redux";

export type AddPostActionType = ReturnType<typeof addPostAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type SetStatusProfileActionType = ReturnType<typeof setStatusProfileAC>

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It\'s my first post', likesCount: 12},
    ],
    profile: {
        photos: {
            small: '',
            large: ''
        },
        lookingForAJob: false,
        status: '',
        name: '',
        followed: false,
        id: 0,
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        fullName: '',
        userId: 0,
        lookingForAJobDescription: ''
    },
    status: ''
}

export const ProfilePageReducer = (state = initialState, action:ActionType) => {
    switch (action.type) {
        case 'ADD-POST' : {
            return {...state, posts: [...state.posts,{id: 8, message: action.newPostText, likesCount: 0}]}
        }
        case 'SET-USER-PROFILE' : {
            return {...state, profile: action.profile}
        }
        case 'SET-STATUS-PROFILE' : {
            return {...state, status: action.status}
        }
        default: {
            return state;
        }
    }
}

export const addPostAC = (newPostText: string) => ({type: "ADD-POST", newPostText} as const)
export const setUserProfile = (profile: UserProfileType) => ({type: "SET-USER-PROFILE", profile} as const)
export const setStatusProfileAC = (status: string) => ({type: "SET-STATUS-PROFILE", status} as const)

export const getUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getUserProfile(userId)
        .then((data) => {
            dispatch(setUserProfile(data))
        })
}
export const getUserStatusTC = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getUserStatus(userId)
        .then((data) => {
            dispatch(setStatusProfileAC(data))
        })
}
export const updateUserStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateUserStatus(status)
        .then((res) => {
            if (res.resultCode === 0) {
                dispatch(setStatusProfileAC(status))
            }
        })
}