import React from "react";
import {sendNewMessageTextAC, updateNewMessageTextAC} from "../../redux/dialogsPage-reducer";
import {Dialogs} from "./Dialogs";
import { StoreContext } from "../../StoreContext";

export function DialogsContainer() {
    return <StoreContext.Consumer>
        {
        (store) => {
            const onClickSendMessageHandler = () => {
                store.dispatch(sendNewMessageTextAC(store.getState().dialogsPage.newMessageText))
            }
            let onNewMessageChangeHandler = (body: string) => {
                store.dispatch(updateNewMessageTextAC(body))
            }
            return (
        <Dialogs state={store.getState().dialogsPage} sendNewMessageText={onClickSendMessageHandler}
                 updateNewMessageText={onNewMessageChangeHandler}
                 newMessageText={store.getState().dialogsPage.newMessageText}/>
            )}
        }
    </StoreContext.Consumer>
}
