import React from "react";
import styles from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";


export function Profile() {
    return (
        <div className={styles.content}>
            <div>
                <img
                    src="https://playboyrussia.com/images/cache/2022/2/3/fit_930_519_false_crop_1109_623_0_229_q90_848721_d304741806493f7cc136c8050.jpeg"
                    alt="image"/>
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts />
        </div>
    )
}