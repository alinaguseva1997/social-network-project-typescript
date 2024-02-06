import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/redux-store";

export type ProfilePropsType = {
    profile: UserProfileType
}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo profile = {props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}