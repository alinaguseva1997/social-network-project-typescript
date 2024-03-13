import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AuthType, RootStateType} from "../redux/redux-store";

type mapStateToPropsForRedirectType = {
    isAuth: boolean
}
let mapStateToPropsForRedirect = (state: RootStateType): mapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    const AuthRedirectComponent = (props: mapStateToPropsForRedirectType) => {
        let {isAuth, ...restProps} = props
            if(!isAuth) return <Redirect to={'/login'} />
                return <Component {...restProps as T}/>
    }//HOC


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)
    return ConnectedAuthRedirectComponent;
};

