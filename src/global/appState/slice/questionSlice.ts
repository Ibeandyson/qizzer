import { createSlice } from "@reduxjs/toolkit";

// Define the reducer logic for 'twoSlice'
const questionSlice = createSlice({
    name: "question",
    initialState: {
        questionLoading: false,
        questionData: []
    },
    reducers: {
        // Define the actions and corresponding state updates for 'twoSlice'
        setQuestionLoading(state, action) {
            state.questionLoading = action.payload;
        },
        setQuestionData(state, action) {
            state.questionData = action.payload;
        },
    },
});

export const { setQuestionLoading, setQuestionData } = questionSlice.actions;

export default questionSlice;
