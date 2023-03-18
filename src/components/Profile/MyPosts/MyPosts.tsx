import React from "react";
import {Post} from './Post/Post'

export function MyPosts() {
    debugger;
    return (
        <div>
            My posts
            <textarea></textarea>
            <button>add post</button>
            <button>remove</button>
            <Post message = 'Hi, how are you?' likesCount = '0'/>
            <Post message = "It's my first post" likesCount = '23'/>

        </div>
    )
}