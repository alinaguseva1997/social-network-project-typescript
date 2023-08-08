import React, {ChangeEvent} from "react";
import {Post} from './Post/Post'
import styles from './MyPosts.module.css'
import {postsDataType} from "../../../redux/state";

type MyPostsPropsType = {
    postsData: postsDataType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export function MyPosts(props: MyPostsPropsType) {

    const postDataMap = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostEl = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
            props.addPost()
    }

    const onPostChangeHangler = () => {
        if (newPostEl.current) {
            let text = newPostEl.current.value
            props.updateNewPostText(text)
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