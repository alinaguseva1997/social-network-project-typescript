import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {stateType, store } from "./redux/redux-store";
import {Provider } from "./StoreContext";

let rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store = {store}>
                <App/>
            </Provider>
        </BrowserRouter>,
    document.getElementById('root')
);
}

rerenderEntireTree(store.getState());
store.subscribe(()=> {
    rerenderEntireTree(store.getState());
})