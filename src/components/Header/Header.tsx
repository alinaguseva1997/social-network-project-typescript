import React from 'react';
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

export type HeaderPropsType = {
    isAuth: boolean
    login: string
    logoutTC: () => void
}
export function Header(props: HeaderPropsType) {
    return (
        <header className={styles.header}>
            <img src="https://png.pngtree.com/png-clipart/20190515/original/pngtree-coffee-time-png-image_3626459.jpg"
                 alt="logo"/>

            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}
                        <button onClick={props.logoutTC}>Log out</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}