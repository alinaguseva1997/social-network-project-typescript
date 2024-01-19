import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profilePage-reducer";
import {stateType, UserProfileType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

export type ProfileContainerPropsType = {
    profile: UserProfileType
    setUserProfile: (profile: UserProfileType) => void
    match: any
}

class ProfileContainer extends React.Component<ProfileContainerPropsType>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        usersAPI.getUserProfile(userId)
            .then((data) => {
                this.props.setUserProfile(data)
            })
    }
    render () {
        return (
            <div>
                <Profile {...this.props} profile = {this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: stateType ) => {
    return {
        profile: state.profilePage.profile
    }

}

let WithURLDataContainerComponent = withRouter<any, any>(ProfileContainer)

export default connect (mapStateToProps, {setUserProfile})(WithURLDataContainerComponent);