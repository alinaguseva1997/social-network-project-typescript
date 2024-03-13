import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataTC, logoutTC} from "../../redux/auth-reducer";
import {AuthType, RootStateType} from "../../redux/redux-store";

export type HeaderContainerPropsType = {
    logoutTC: () => void
    login: string
    isAuth: boolean
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    render() {
         return <Header {...this.props} />
    }
}
const mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps,{logoutTC})(HeaderContainer)