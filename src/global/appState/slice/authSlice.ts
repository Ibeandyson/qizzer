import { createSlice } from "@reduxjs/toolkit";

// Define the reducer logic for 'twoSlice'
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    loading: false,
    message: { title: "", status: "" },
  },
  reducers: {
    // Define the actions and corresponding state updates for 'twoSlice'
    setToke(state, action) {
      state.token = action.payload;
    },
    setAuthLoading(state, action) {
      state.loading = action.payload;
    },
    setAuthMessage(state, action) {
      state.message = {
        title: action.payload.title,
        status: action.payload.status,
      };
    },
  },
});

export const { setToke, setAuthLoading, setAuthMessage } = authSlice.actions;

export default authSlice;
