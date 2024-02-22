import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={'Login'} name={'Login'} component={'input'}/>
            </div>
            <div>
                <Field type="text" placeholder={'Password'} name={'Password'} component={'input'}/>
            </div>
            <div>
                <Field type="checkbox" name={'Remember me'} component={'input'}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login' // уникальное имя для формы
})(LoginForm)