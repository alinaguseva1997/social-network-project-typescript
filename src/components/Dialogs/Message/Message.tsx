import styles from "../Dialogs.module.css";
import React from "react";

type MessagePropsType = {
    message: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}