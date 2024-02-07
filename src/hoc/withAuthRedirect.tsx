import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {stateType} from "../redux/redux-store";
import {connect} from "react-redux";

type mapStateToPropsForRedirectType = {
    isAuth: boolean
}
let mapStateToPropsForRedirect = (state: stateType): mapStateToPropsForRedirectType => {
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

