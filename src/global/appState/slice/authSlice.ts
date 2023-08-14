import { createSlice } from "@reduxjs/toolkit";

// Define the reducer logic for 'twoSlice'
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    loading: false,
  },
  reducers: {
    // Define the actions and corresponding state updates for 'twoSlice'
    setToke(state, action) {
      state.token = action.payload;
    },
    setAuthLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setToke, setAuthLoading } = authSlice.actions;

export default authSlice;
