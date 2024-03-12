import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataTC, logoutTC} from "../../redux/auth-reducer";
import {AuthType} from "../../redux/redux-store";

export type HeaderContainerPropsType = {
    getAuthUserDataTC: () => void
    logoutTC: () => void
    login: string
    isAuth: boolean
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserDataTC()
    }
    render() {
         return <Header {...this.props} />
    }
}
const mapStateToProps = (state: AuthType) => {
    return {
        isAuth: state.isAuth,
        login: state.login,
    }
}

export default connect(mapStateToProps,{getAuthUserDataTC, logoutTC})(HeaderContainer)