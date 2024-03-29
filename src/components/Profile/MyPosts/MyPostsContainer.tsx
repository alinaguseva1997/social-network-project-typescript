import React from "react";
import {addPostAC} from "../../../redux/profilePage-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ActionType, RootStateType} from "../../../redux/redux-store";

let mapStateToProps = (state: RootStateType) => {
    return {
        posts:state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
