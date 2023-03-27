import React from "react";
import styles from './NavBar.module.css'
import {NavLink} from "react-router-dom";

export function NavBar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to='/profile' activeClassName={styles.item_active}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/dialogs' activeClassName={styles.item_active}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/news' activeClassName={styles.item_active}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/music' activeClassName={styles.item_active}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/settings' activeClassName={styles.item_active}>Settings</NavLink>
            </div>
        </nav>
    )
}