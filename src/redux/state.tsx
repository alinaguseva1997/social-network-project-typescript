import React from 'react';

export type storeType = {
    _state: stateType
    getState: () => stateType
    _callSubscriber: (state: stateType) => void
    subscribe: (observer: (state: stateType) => void) => void
    dispatch: (action: ActionType) => void
}
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
export type ActionType = AddPostActionType | UpdateNewPostTextActionType
export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

let store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 11},
                {id: 2, message: 'It\'s my first post', likesCount: 12},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sweta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ]
        },
        sidebar: {}
    }, //приватное св-во
    _callSubscriber() {
        console.log('State chanced')
    },

    getState () {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch (action: ActionType) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state);
        }
    }
}

export default store;