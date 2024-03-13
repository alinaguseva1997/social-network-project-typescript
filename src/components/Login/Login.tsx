import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AuthType, RootStateType} from "../../redux/redux-store";
import {Preloader} from "../common/Preloader/Preloader";

export type LoginPropsType = {
    isAuth: boolean
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}
const Login = (props: LoginPropsType) => {
    const onSubmitForm = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmitForm}/>
        </>
    );
};

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {loginTC})(Login)
