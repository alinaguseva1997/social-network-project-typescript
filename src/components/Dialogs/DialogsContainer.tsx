import React from "react";
import {sendNewMessageTextAC, updateNewMessageTextAC} from "../../redux/dialogsPage-reducer";
import {connect} from "react-redux";
import {ActionType, stateType, store} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";

let mapStateToProps = (state: stateType) => {
    return {
        state: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) =>{
    return {
        updateNewMessageText: (body: string) => {
            dispatch(updateNewMessageTextAC(body))
        },
        sendNewMessageText: ()=>{
            let newMessageText = store.getState().dialogsPage.newMessageText
            dispatch(sendNewMessageTextAC(newMessageText))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
