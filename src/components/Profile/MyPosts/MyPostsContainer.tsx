import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profilePage-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ActionType, stateType} from "../../../redux/redux-store";

let mapStateToProps = (state: stateType) => {
    return {
        posts:state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextAC(newText))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
