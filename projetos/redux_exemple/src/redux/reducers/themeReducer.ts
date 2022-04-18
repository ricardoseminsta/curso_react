import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'theme',
    initialState: {
        status: 'light',
        class: 'container'
    },
    reducers:{
        setThemeStatus: (state, action) => {
            state.status = action.payload;
        },
        setClass: (state, action) => {
            state.class = action.payload;
        }
    }

    
});

export const { setThemeStatus, setClass } = slice.actions;
export default slice.reducer;