import React from "react";
import {addPostAC} from "../../../redux/profilePage-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ActionType, stateType} from "../../../redux/redux-store";

let mapStateToProps = (state: stateType) => {
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
