import React, {ComponentType} from "react";
import {sendNewMessageTextAC, updateNewMessageTextAC} from "../../redux/dialogsPage-reducer";
import {connect} from "react-redux";
import {dialogsPageType, stateType, store} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {Dialogs} from "./Dialogs";
import {compose, Dispatch} from "redux";

export type mapDispatchToPropsType = {
    updateNewMessageText: (body: string) => void
    sendNewMessageText: () => void
}
export type mapStateToPropsType = dialogsPageType

let mapStateToProps = (state: stateType) => {
    return {
        dialogsPage: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText,
        messages: state.dialogsPage.messages
    }
}

let mapDispatchToProps = (dispatch: Dispatch) =>{
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
export default compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs)
