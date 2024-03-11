import {ActionType, dialogsPageType} from "./redux-store";

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
    newMessageText: ''
}

export const DialogsPageReducer = (state = initialState, action:ActionType): dialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE' : {
            return {...state, messages: [...state.messages, {id: 7, message: action.newMessage} ]}
        }
        default: {
            return state;
        }
    }
}
export const sendNewMessageTextAC = (newMessage: string) => ({type: "SEND-MESSAGE", newMessage} as const)
