import React, {ChangeEvent} from "react";
import {Post} from './Post/Post'
import styles from './MyPosts.module.css'
import {ActionType, postsDataType} from "../../../redux/state";
import {access} from "fs";

type MyPostsPropsType = {
    postsData: postsDataType[]
    newPostText: string
    dispatch: (action: ActionType) => void
}

export function MyPosts(props: MyPostsPropsType) {

    const postDataMap = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostEl = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
            props.dispatch({type: "ADD-POST"})
    }

    const onPostChangeHangler = () => {
        if (newPostEl.current) {
            let newText = newPostEl.current.value
            props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText})
        }
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostEl} onChange={onPostChangeHangler} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
                <div className={styles.posts}>
                    {postDataMap}
                </div>
            </div>
        </div>
    )
}