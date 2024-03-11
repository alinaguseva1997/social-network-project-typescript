import React, {ComponentType} from "react";
import {sendNewMessageTextAC} from "../../redux/dialogsPage-reducer";
import {connect} from "react-redux";
import {dialogsPageType, stateType, store} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {Dialogs} from "./Dialogs";
import {compose, Dispatch} from "redux";

export type mapDispatchToPropsType = {
    sendNewMessageText: (newMessageText: string) => void
}
export type mapStateToPropsType = dialogsPageType

let mapStateToProps = (state: stateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) =>{
    return {
        sendNewMessageText: (newMessageText: string)=>{
            dispatch(sendNewMessageTextAC(newMessageText))
        }
    }
}
export default compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps), /*WithAuthRedirect*/)(Dialogs)
