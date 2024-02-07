import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC} from "../../redux/profilePage-reducer";
import {stateType, UserProfileType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

export type  PropsType = MapStatePropsType & MapDispatchPropsType

export type MapStatePropsType = {
    profile: UserProfileType
}
export type MapDispatchPropsType = {
    getUserProfileTC: (profile: UserProfileType) => void
}

type PathParamType = {
    userId: string
}
type ProfileContainerPropsType = RouteComponentProps<PathParamType> & PropsType
class ProfileContainer extends React.Component<ProfileContainerPropsType>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        // @ts-ignore
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

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

let mapStateToProps = (state: stateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let WithURLDataContainerComponent = withRouter<any, any>(AuthRedirectComponent)

export default connect (mapStateToProps, {getUserProfileTC})(WithURLDataContainerComponent);