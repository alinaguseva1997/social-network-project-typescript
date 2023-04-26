import React from "react";
import styles from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsDataType, profilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: profilePageType
}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData = {props.state.posts}/>
        </div>
    )
}