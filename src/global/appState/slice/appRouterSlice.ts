import { createSlice } from "@reduxjs/toolkit";

// Define the reducer logic for 'twoSlice'
const appRouterSlice = createSlice({
    name: 'appRouter',
    initialState: {
        params: ""
    },
    reducers: {
        // Define the actions and corresponding state updates for 'twoSlice'
        setUrlPathParams(state, action) {
            state.params = action.payload;
        },
    },
});

export const { setUrlPathParams } = appRouterSlice.actions;

export default appRouterSlice
