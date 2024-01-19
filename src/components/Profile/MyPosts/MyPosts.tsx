import React from "react";
import {Post} from './Post/Post'
import styles from './MyPosts.module.css'
import {postsDataType} from "../../../redux/redux-store";

type MyPostsPropsType = {
    posts: postsDataType[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export function MyPosts(props: MyPostsPropsType) {

    const postsMap = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
    let newPostEl = React.createRef<HTMLTextAreaElement>();
    const onAddPost = () => {
            props.addPost()
    }
    const onPostChangeHangler = () => {
        if (newPostEl.current) {
            let newText = newPostEl.current.value
            props.updateNewPostText(newText)
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
                    <button onClick={onAddPost}>add post</button>
                </div>
                <div className={styles.posts}>
                    {postsMap}
                </div>
            </div>
        </div>
    )
}