import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {profilePageType} from "../../redux/redux-store";

// type ProfilePropsType = {
//     state: profilePageType
//     dispatch:(action: ActionType) => void
// }

export function Profile() {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer/>
        </div>
    )
}