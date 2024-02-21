import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/redux-store";

export type ProfilePropsType = {
    profile: UserProfileType
    status: string
    updateUserStatusTC: (status: string) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo status={props.status} profile = {props.profile} updateUserStatusTC={props.updateUserStatusTC}/>
            <MyPostsContainer/>
        </div>
    )
}