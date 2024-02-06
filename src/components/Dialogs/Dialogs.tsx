import React, {ChangeEvent} from "react";
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogsPageType} from "../../redux/store";
import {Redirect} from "react-router-dom";

type DialogsPropsType = {
    dialogsPage: dialogsPageType
    sendNewMessageText: () => void
    updateNewMessageText: (body: string) => void
    newMessageText: string
    isAuth: boolean
}

export function Dialogs(props: DialogsPropsType) {

    let dialogsMap = props.dialogsPage.dialogs.map(el => <DialogItem name={el.name} id={el.id} />)
    let messagesMap = props.dialogsPage.messages.map(el => <Message message={el.message} />)

    const onClickSendMessageHandler = () => {
        props.sendNewMessageText()
    }
    let onNewMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    if(!props.isAuth) return <Redirect to={'/login'} />

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
