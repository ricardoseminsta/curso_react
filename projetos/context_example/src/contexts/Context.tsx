import { createContext, useReducer } from "react";

import { UserType, userInitialState, userReducer } from '../reducers/userReducer';
import { reducerActionType } from "../types/reducerActionTypes";

type initialStateType = {
    user: UserType;
}

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}

const initialState = {
    user: userInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action)
});
