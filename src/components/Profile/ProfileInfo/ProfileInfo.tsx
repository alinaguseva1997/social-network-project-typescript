import React from "react";
import styles from "./ProfileInfo.module.css";
import {UserProfileType} from "../../../redux/redux-store";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: UserProfileType
    status: string
    updateUserStatusTC: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <>
{/*            <div>
            <img
                src="https://img.freepik.com/premium-photo/christian-woman-holds-bible-in-her-hands-reading-the-holy-bible-on-the-sea-during-beautiful-sunset_176445-5868.jpg?w=740"
                alt="image"/>
            </div>*/}
            <ProfileStatus status = {props.status} updateUserStatusTC={props.updateUserStatusTC}/>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <h2>{props.profile.fullName}</h2>
                <span>{props.profile.lookingForAJobDescription}</span>
                <p>About me: {props.profile.status}</p>
                <ul> Contacts:
                    <li>{props.profile.contacts.facebook}</li>
                    <li>{props.profile.contacts.github}</li>
                    <li>{props.profile.contacts.vk}</li>
                    <li>{props.profile.contacts.twitter}</li>
                    <li>{props.profile.contacts.instagram}</li>
                </ul>
            </div>
        </>
    )
}