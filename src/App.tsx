import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionType, stateType} from "./redux/state";

type AppPropsType = {
    state: stateType
    dispatch: (action: ActionType) => void
}

function App(props:AppPropsType) {
    return (
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route exact path = '/dialogs' render={()=> <Dialogs state={props.state.dialogsPage} />}/>
                    <Route path = '/profile' render={() => <Profile state ={props.state.profilePage} dispatch = {props.dispatch} />}/>
                    <Route path = '/news' render={() => <News />}/>
                    <Route path = '/music' render={() => <Music />}/>
                    <Route path = '/settings' render={() => <Settings />}/>
                </div>
            </div>
    );
}

export default App;