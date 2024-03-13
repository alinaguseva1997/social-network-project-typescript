import React, {ComponentType} from "react";
import {sendNewMessageTextAC} from "../../redux/dialogsPage-reducer";
import {connect} from "react-redux";
import {RootStateType,} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {Dialogs} from "./Dialogs";
import {compose, Dispatch} from "redux";

let mapStateToProps = (state: RootStateType) => {
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
export default compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps),WithAuthRedirect)(Dialogs)
