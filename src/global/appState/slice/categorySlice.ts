import { createSlice } from "@reduxjs/toolkit";

// Define the reducer logic for 'twoSlice'
const categorySlice = createSlice({
    name: "category",
    initialState: {
        categoryLoading: false,
        categoryData: []
    },
    reducers: {
        // Define the actions and corresponding state updates for 'twoSlice'
        setCategoryLoading(state, action) {
            state.categoryLoading = action.payload;
        },
        setCategoryData(state, action) {
            state.categoryData = action.payload;
        },
    },
});

export const { setCategoryLoading, setCategoryData } = categorySlice.actions;

export default categorySlice;
