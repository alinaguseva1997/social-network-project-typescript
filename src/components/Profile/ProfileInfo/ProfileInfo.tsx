import React from "react";
import styles from "./ProfileInfo.module.css";

export function ProfileInfo() {
    return (
        <>
            <div>
                <img
                    src="https://img.freepik.com/premium-photo/christian-woman-holds-bible-in-her-hands-reading-the-holy-bible-on-the-sea-during-beautiful-sunset_176445-5868.jpg?w=740"
                    alt="image"/>
            </div>
            <div className={styles.descriptionBlock}>
                avatar + description
            </div>
        </>
    )
}