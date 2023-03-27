import React from "react";
import styles from "./ProfileInfo.module.css";

export function ProfileInfo() {
    return (
        <>
            <div>
                <img
                    src="https://playboyrussia.com/images/cache/2022/2/3/fit_930_519_false_crop_1109_623_0_229_q90_848721_d304741806493f7cc136c8050.jpeg"
                    alt="image"/>
            </div>
            <div className={styles.descriptionBlock}>
                avatar + description
            </div>
        </>
    )
}