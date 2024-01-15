import React, {ReactNode} from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AuthType, stateType} from "../../redux/redux-store";

export type HeaderContainerPropsType = {
    // children?: ReactNode
    setAuthUserData: (id: AuthType,login: AuthType, email: AuthType) => void
    login: string
    isAuth: boolean
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        // this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then((res) => {
                if (res.data.resultCode === 0 ) {
                    let {id,login, email} = res.data.data
                    this.props.setAuthUserData(id,login, email)
                }
            })
    }

    render() {
         return <Header {...this.props} />
    }
}

const mapStateToProps = (state: stateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
        // isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer)