import React, {ChangeEvent} from "react";
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, dialogsPageType} from "../../redux/state";
import {sendNewMessageTextAC, updateNewMessageTextAC} from "../../redux/dialogsPage-reducer";

type DialogsPropsType = {
    state: dialogsPageType
    dispatch: (action: ActionType) => void
}

export function Dialogs(props: DialogsPropsType) {

    const messagesDataMap = props.state.messages.map(message => <Message message={message.message}/>)
    const dialogsDataMap = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const onClickSendMessageHandler = () => {
        props.dispatch(sendNewMessageTextAC(props.state.newMessageText))
    }
    let onNewMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }

    return (
        <div>
            <div className={styles.dialogs}>
                <div className={styles.dialogs_item}>
                    {dialogsDataMap}
                </div>
                <div className={styles.messages}>
                    {messagesDataMap}
                </div>
            </div>
            <div>
                <textarea onChange={onNewMessageChangeHandler}
                          placeholder='Enter your message'
                          value={props.state.newMessageText}/>
            </div>
            <button onClick={onClickSendMessageHandler}>Send</button>

        </div>
    )
}
