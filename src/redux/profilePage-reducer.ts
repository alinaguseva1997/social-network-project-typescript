import {ActionType, profilePageType, UserProfileType} from "./redux-store";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>

let initialState: profilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It\'s my first post', likesCount: 12},
    ],
    newPostText: 'it-kamasutra.com',
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
    }
}

export const ProfilePageReducer = (state = initialState, action:ActionType) => {
    switch (action.type) {
        case 'ADD-POST' : {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.newPostText = ''
            return {...state, posts: [...state.posts, newPost]}
        }
        case 'UPDATE-NEW-POST-TEXT' : {
            return {...state, newPostText: action.newText}
        }
        case 'SET-USER-PROFILE' : {
            return {...state, profile: action.profile}
        }
        default: {
            return state;
        }
    }
}

export const addPostAC = () => ({type: "ADD-POST"} as const)
export const updateNewPostTextAC = (newText: string) => ({type: "UPDATE-NEW-POST-TEXT", newText} as const)
export const setUserProfile = (profile: UserProfileType) => ({type: "SET-USER-PROFILE", profile} as const)

export const getUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getUserProfile(userId)
        .then((data) => {
            dispatch(setUserProfile(data))
        })
}


