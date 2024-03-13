import React, {ComponentType} from 'react';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppTC} from "./redux/app-reducer";
import {RootStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {withExtraArgument} from "redux-thunk";

export type AppPropsType = {
    isInitialized: boolean
    initializeAppTC: () => void
}
class App extends React.Component<AppPropsType>{
    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.isInitialized) {
             return <Preloader/>
         }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state: RootStateType) => ({
    isInitialized: state.app.isInitialized
})
export default compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeAppTC}))(App);