import {ActionType, profilePageType} from "./store";

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

let initialState: profilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It\'s my first post', likesCount: 12},
    ],
        newPostText: 'it-kamasutra.com'
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
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}


