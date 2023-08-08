import React from "react";
import styles from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: profilePageType
    addPost:() => void
    updateNewPostText: (newText: string) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData = {props.state.posts} addPost = {props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.state.newPostText}/>
        </div>
    )
}