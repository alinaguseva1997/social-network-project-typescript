import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm";

export const Login = () => {
    const onSubmitForm = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmitForm} />
        </div>
    );
};
