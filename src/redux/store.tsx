import React from 'react';
import {
    ProfilePageReducer,
} from "./profilePage-reducer";
import {DialogsPageReducer} from "./dialogsPage-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import {ActionType, stateType, StoreType} from "./redux-store";

// export type storeType = {
//     _state: stateType
//     getState: () => stateType
//     _callSubscriber: (state: stateType) => void
//     subscribe: (observer: (state: stateType) => void) => void
//     dispatch: (action: ActionType) => void
// }
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

let store: StoreType = {
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
            ],
            newMessageText: '',
        },
        sidebar: {}
    }, //приватное св-во
    _callSubscriber() {
        console.log('State chanced')
    },
    getState () {
        return this._state
    },
    subscribe(observer:(state: stateType) => void) {
        this._callSubscriber = observer
    },
    dispatch (action: ActionType) {
            this._state.profilePage = ProfilePageReducer(this._state.profilePage, action)
            this._state.dialogsPage = DialogsPageReducer(this._state.dialogsPage, action)
            this._state.sidebar = SidebarReducer(this._state.sidebar, action)
            this._callSubscriber(this._state);
    }
}

export default store;