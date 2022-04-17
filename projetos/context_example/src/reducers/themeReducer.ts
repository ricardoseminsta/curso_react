import { reducerActionType } from "../types/reducerActionTypes";
export type ThemeType = {
   status: 'dark' | 'light';
   bgColor: string;
   color: string;
}

export const themeInitialState: ThemeType = {
    status: 'light',
    bgColor: '#EEE',
    color: '#000'
}

export const themeReducer = (state: ThemeType, action: reducerActionType) => {
    switch (action.type) {
        case 'CHANGE_STATUS':
            return {...state,
                status: action.payload.status,
                bgColor: action.payload.bgColor,
                color: action.payload.color
            };
        break
    }
    
    return state
}