import React from "react";
import {Post} from './Post/Post'
import styles from './MyPosts.module.css'
import {postsDataType} from "../../../redux/state";

type MyPostsPropsType = {
    postsData: postsDataType[]
}

export function MyPosts(props: MyPostsPropsType) {

    const postDataMap = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
                <div className={styles.posts}>
                    {postDataMap}
                </div>
            </div>
        </div>
    )
}