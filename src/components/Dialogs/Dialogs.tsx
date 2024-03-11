import React from "react";
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogsPageType} from "../../redux/redux-store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type DialogsPropsType = {
    dialogsPage: dialogsPageType
    sendNewMessageText: (newMessageText: string) => void
    isAuth: boolean
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogsMap = props.dialogsPage.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id} />)
    let messagesMap = props.dialogsPage.messages.map(el => <Message key={el.id} message={el.message} />)
    const addNewMessage = (values: any) => {
        props.sendNewMessageText(values.newMessageText)
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
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

export type DialogsFormDataType = {
    newMessageText: string
}

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageText'} placeholder={'Enter your message'}/>
            </div>
            <button>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: "dialogsAddMessageForm"
})(AddMessageForm)