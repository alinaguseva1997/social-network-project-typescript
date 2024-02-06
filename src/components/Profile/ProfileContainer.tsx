import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC} from "../../redux/profilePage-reducer";
import {stateType, UserProfileType} from "../../redux/redux-store";
import {Redirect, withRouter} from "react-router-dom";

export type ProfileContainerPropsType = {
    profile: UserProfileType
    getUserProfileTC: (userId: number) => void
    match: any
    isAuth: boolean
}

class ProfileContainer extends React.Component<ProfileContainerPropsType>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfileTC(userId)
    }
    render () {

        if(!this.props.isAuth) return <Redirect to={'/login'} />

        return (
            <div>
                <Profile {...this.props} profile = {this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: stateType ) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }

}

let WithURLDataContainerComponent = withRouter<any, any>(ProfileContainer)

export default connect (mapStateToProps, {getUserProfileTC})(WithURLDataContainerComponent);