import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    name: string
    id: number
}

export function DialogItem(props: DialogItemPropsType) {
    let path = '/dialogs/1' + props.id
    return (
        <div className={styles.dialog}>
            <NavLink to={path}
                     activeClassName={styles.dialog + ' ' + styles.active}>{props.name}</NavLink>
        </div>
    )
}