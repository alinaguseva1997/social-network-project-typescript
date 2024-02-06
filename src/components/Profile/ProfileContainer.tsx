import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC} from "../../redux/profilePage-reducer";
import {stateType, UserProfileType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";

export type ProfileContainerPropsType = {
    profile: UserProfileType
    getUserProfileTC: (userId: number) => void
    match: any
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

export default connect (mapStateToProps, {getUserProfileTC})(WithURLDataContainerComponent);