import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AuthType, stateType} from "../../redux/redux-store";
import {getAuthUserDataTC} from "../../redux/auth-reducer";

export type HeaderContainerPropsType = {
    getAuthUserDataTC: () => void
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

const mapStateToProps = (state: stateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps,{getAuthUserDataTC})(HeaderContainer)