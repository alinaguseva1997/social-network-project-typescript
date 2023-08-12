import {ActionType, dialogsPageType} from "./state";

export type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>
export type sendNewMessageTextActionType = ReturnType<typeof sendNewMessageTextAC>

export const DialogsPageReducer = (state: dialogsPageType, action:ActionType) => {
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
