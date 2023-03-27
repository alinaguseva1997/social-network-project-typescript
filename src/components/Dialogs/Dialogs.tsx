import React from "react";
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {NavBar} from "../NavBar/NavBar";
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";

export function Dialogs() {
    return (
        <div>
            <div className={styles.dialogs}>
                <div className={styles.dialogs_item}>
                    <DialogItem name='Dimych' id='1'/>
                    <DialogItem name='Andrey' id='2'/>
                    <DialogItem name='Sweta' id='3'/>
                    <DialogItem name='Sasha' id='4'/>
                    <DialogItem name='Victor' id='5'/>
                    <DialogItem name='Valera' id='6'/>
                </div>

                <div className={styles.messages}>
                    <Message message='Hi'/>
                    <Message message='How is your it'/>
                    <Message message='Yo'/>
                    <Message message='Yo'/>
                    <Message message='Yo'/>
                </div>
            </div>
        </div>
    )
}
