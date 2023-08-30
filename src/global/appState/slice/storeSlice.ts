import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// Define the reducer logic for 'twoSlice'
const storeSlice = createSlice({
    name: "store",
    initialState: {
        loading: false,
    },
    reducers: {
        // Define the actions and corresponding state updates for 'twoSlice'
        setStoreLoading(state, action) {
            state.loading = action.payload;
        },
    },
});

export const { setStoreLoading } = storeSlice.actions;

export default storeSlice;
