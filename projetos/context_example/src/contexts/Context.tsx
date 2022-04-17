import { createContext, useReducer } from "react";

import { UserType, userInitialState, userReducer } from '../reducers/userReducer';
import { ThemeType, themeInitialState, themeReducer } from '../reducers/themeReducer'
import { reducerActionType } from "../types/reducerActionTypes";

type initialStateType = {
    user: UserType;
    theme: ThemeType;
}
type Props = {
    children: JSX.Element;
}
type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}

const initialState = {
    user: userInitialState,
    theme: themeInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action),
    theme: themeReducer(state.theme, action)
});

export const ContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)
    
    return <Context.Provider value={{ state, dispatch }}>
        {children}
        </Context.Provider>
}