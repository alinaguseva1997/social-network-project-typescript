import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AuthType} from "../../redux/redux-store";

export type LoginPropsType = {
    isAuth: boolean
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}
const Login = (props: LoginPropsType) => {
    const onSubmitForm = (formData: FormDataType) => {
        props.loginTC(formData.login, formData.password, formData.rememberMe) //undefined????????
    }

    if(props.isAuth) return <Redirect to={'/profile'} />

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmitForm} />
        </div>
    );
};

const mapStateToProps = (state: AuthType) => ({
    isAuth: state.isAuth
})
export default connect(mapStateToProps, {loginTC})(Login)
