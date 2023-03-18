import React from 'react';
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <img src="https://png.pngtree.com/png-clipart/20190515/original/pngtree-coffee-time-png-image_3626459.jpg"
                 alt="logo"/>
        </header>
    )
}