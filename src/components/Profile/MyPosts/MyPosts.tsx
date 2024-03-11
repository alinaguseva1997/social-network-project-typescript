import React from "react";
import {Post} from './Post/Post'
import styles from './MyPosts.module.css'
import {postsDataType} from "../../../redux/redux-store";
import {Field, reduxForm} from "redux-form";

type MyPostsPropsType = {
    posts: postsDataType[]
    addPost: (newPostText: string) => void
}

export function MyPosts(props: MyPostsPropsType) {

    const postsMap = props.posts?.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)
    const onAddPost = (values: any) => {
            props.addPost(values.newPostText)
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
                <div className={styles.posts}>
                    {postsMap}
                </div>
            </div>
        </div>
    )
}

type AddNewPostFormType = {
    newPostText: string
}
const AddNewPost = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'} placeholder={'Enter your text'}/>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({
    form: "profileAddNewPostForm"
})(AddNewPost)