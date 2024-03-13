import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import s from './../common/FormsControls/FormsControls.module.css'

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={'email'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type="password" placeholder={'password'} name={'password'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component={'input'}/> Remember me
            </div>

            {props.error && <div className={s.formSummaryError}>{props.error}</div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login' // уникальное имя для формы
})(LoginForm)
