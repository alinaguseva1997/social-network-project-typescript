import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profilePage-reducer";
import {MyPosts} from "./MyPosts";
import { StoreContext } from "../../../StoreContext";

export function MyPostsContainer() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const addPost = () => {
                        store.dispatch(addPostAC())
                    }

                    const onPostChangeHangler = (newText: string) => {
                        store.dispatch(updateNewPostTextAC(newText))
                    }
                    return <MyPosts updateNewPostText={onPostChangeHangler}
                                    addPost={addPost}
                                    posts={store.getState().profilePage.posts}
                                    newPostText={store.getState().profilePage.newPostText}/>

                }
            }
        </StoreContext.Consumer>
    )
}