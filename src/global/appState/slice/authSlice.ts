import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { setSecureCookieStorage } from "@/global/utils/secureCoookie";
// Define the reducer logic for 'twoSlice'
const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    token: "",
    userInfo: null,
  },
  reducers: {
    // Define the actions and corresponding state updates for 'twoSlice'

    setAuthLoading(state, action) {
      state.loading = action.payload;
    },

    setAuthData(state, action) {
      console.log("Authentication", action.payload);

      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
      setSecureCookieStorage("token", action.payload.payload.token)
    },
  },
});

export const { setAuthLoading, setAuthData } = authSlice.actions;

export default authSlice;
