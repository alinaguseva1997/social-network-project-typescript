import React, {ReactNode} from 'react';
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

export type HeaderPropsType = {
    children?: ReactNode
    isAuth: boolean
    login: string
}
export function Header(props: HeaderPropsType) {
    return (
        <header className={styles.header}>
            <img src="https://png.pngtree.com/png-clipart/20190515/original/pngtree-coffee-time-png-image_3626459.jpg"
                 alt="logo"/>

            <div className={styles.loginBlock}>
                {props.isAuth ? props.login
            :<NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}