import React, {ChangeEvent} from "react";
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, dialogsPageType} from "../../redux/store";

type DialogsPropsType = {
    state: dialogsPageType
    sendNewMessageText: () => void
    updateNewMessageText: (body: string) => void
    newMessageText: string
}

export function Dialogs(props: DialogsPropsType) {

    let dialogsMap = props.state.dialogs.map(el => <DialogItem name={el.name} id={el.id} />)
    let messagesMap = props.state.messages.map(el => <Message message={el.message} />)

    const onClickSendMessageHandler = () => {
        props.sendNewMessageText()
    }
    let onNewMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    return (
        <div>
            <div className={styles.dialogs}>
                <div className={styles.dialogs_item}>
                    {dialogsMap}
                </div>
                <div className={styles.messages}>
                    {messagesMap}
                </div>
            </div>
            <div>
                <textarea onChange={onNewMessageChangeHandler}
                          placeholder='Enter your message'
                          value={props.newMessageText}/>
            </div>
            <button onClick={onClickSendMessageHandler}>Send</button>

        </div>
    )
}
