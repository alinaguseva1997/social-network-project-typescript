import React, {ReactNode} from "react";
import {store} from "./redux/redux-store";
import {StoreType} from "./redux/redux-store";

export const StoreContext = React.createContext(store);

export type ProviderProps = {
    store: StoreType
    children: ReactNode
}
export const Provider = (props: ProviderProps) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
        </StoreContext.Provider>
}