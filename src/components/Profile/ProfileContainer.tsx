import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC, getUserStatusTC, updateUserStatusTC} from "../../redux/profilePage-reducer";
import {RootStateType, UserProfileType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type  PropsType = MapStatePropsType & MapDispatchPropsType

export type MapStatePropsType = {
    profile: UserProfileType
    status: string
    authorizedUserId: string
    isAuth: boolean
}
export type MapDispatchPropsType = {
    getUserProfileTC: (profile: UserProfileType) => void
    getUserStatusTC: (userId: UserProfileType) => void
    updateUserStatusTC: (status: string) => void
}

type PathParamType = {
    userId: string
}
type ProfileContainerPropsType = RouteComponentProps<PathParamType> & PropsType
class ProfileContainer extends React.Component<ProfileContainerPropsType>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        //@ts-ignore
        this.props.getUserProfileTC(userId)
        //@ts-ignore
        this.props.getUserStatusTC(userId)
    }
    render () {
        return (
                <Profile {...this.props} profile = {this.props.profile} status={this.props.status} updateUserStatusTC={this.props.updateUserStatusTC}/>
        )
    }
}

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}
export default compose<ComponentType>( connect (mapStateToProps, {getUserProfileTC,getUserStatusTC, updateUserStatusTC}),
    withRouter,
    WithAuthRedirect)(ProfileContainer)