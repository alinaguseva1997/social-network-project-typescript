import React from "react";
import {Post} from './Post/Post'
import styles from './MyPosts.module.css'

export function MyPosts() {
    debugger;
    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                    <button>remove</button>
                </div>
                <div className={styles.posts}>
                    <Post message='Hi, how are you?' likesCount='0'/>
                    <Post message="It's my first post" likesCount='23'/>
                </div>
            </div>
        </div>
    )
}