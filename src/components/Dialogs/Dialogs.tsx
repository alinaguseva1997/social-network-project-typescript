import React, {ChangeEvent, ReactNode} from "react";
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogsPageType} from "../../redux/store";

type DialogsPropsType = {
    dialogsPage: dialogsPageType
    sendNewMessageText: () => void
    updateNewMessageText: (body: string) => void
    newMessageText: string
    isAuth: boolean
    children: ReactNode
}

export const Dialogs = (props: DialogsPropsType) => {
    debugger
    let dialogsMap = props.dialogsPage.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id} />)
    let messagesMap = props.dialogsPage.messages.map(el => <Message key={el.id} message={el.message} />)

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
