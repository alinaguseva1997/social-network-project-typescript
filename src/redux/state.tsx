import React from 'react';

export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: sidebarType
}

export type profilePageType ={
    posts: postsDataType[]
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

export let state: stateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 11},
            {id: 2, message: 'It\'s my first post', likesCount: 12},
        ],
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
}