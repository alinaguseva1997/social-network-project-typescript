import React from "react";
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogsDataType, dialogsPageType, messagesDataType} from "../../redux/state";

type DialogsPropsType = {
    state: dialogsPageType
}

export function Dialogs(props: DialogsPropsType) {

    const messagesDataMap = props.state.messages.map(message => <Message message={message.message}/>)
    const dialogsDataMap = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

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
        </div>
    )
}
