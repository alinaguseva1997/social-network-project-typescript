import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={'Login'} name={'Login'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type="password" placeholder={'Password'} name={'Password'} component={Input} validate={[required]}/>
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
