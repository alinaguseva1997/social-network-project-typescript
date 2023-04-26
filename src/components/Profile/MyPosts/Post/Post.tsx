import React from "react";
import styles from './Post.module.css'

type PostPropsType = {
    message: string;
    likesCount: number
}

export function Post(props: PostPropsType) {
    return (
        <div className={styles.item}>
            <img
                src="https://i.discogs.com/8OQW-tEWTIaT9Bz7bcXWoZY7gVut5ATdLK6Mpv3zAOQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTUzMTQ3/MzMtMTYxOTE2OTE4/Ni02NTUwLmpwZWc.jpeg"
                alt="avatar"/>
            {props.message}
            <div>
                <span>like </span>{props.likesCount}
            </div>
        </div>
    )
}