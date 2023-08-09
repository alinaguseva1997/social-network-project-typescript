import React from "react";
import styles from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, profilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: profilePageType
    dispatch:(action: ActionType) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData = {props.state.posts} dispatch={props.dispatch} newPostText={props.state.newPostText}/>
        </div>
    )
}