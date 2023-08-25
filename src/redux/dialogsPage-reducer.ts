import {ActionType, dialogsPageType} from "./store";

export type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>
export type sendNewMessageTextActionType = ReturnType<typeof sendNewMessageTextAC>

let initialState: dialogsPageType = {
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
}

export const DialogsPageReducer = (state = initialState, action:ActionType) => {
    switch (action.type) {
        case 'SEND-MESSAGE' : {
            state.newMessageText = ''
            let newMessage = { id: 6, message: action.newMessage }
            return {...state, messages: [...state.messages, newMessage]}
        }
        case 'UPDATE-NEW-MESSAGE-TEXT' : {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newMessage
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}

export const updateNewMessageTextAC = (newMessage: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newMessage: newMessage
    } as const
}

export const sendNewMessageTextAC = (newMessage: string) => {
    return {
        type: "SEND-MESSAGE",
        newMessage: newMessage
    } as const
}
