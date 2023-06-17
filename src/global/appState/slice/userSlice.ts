import { createSlice } from "@reduxjs/toolkit";
  
  // Define the reducer logic for 'twoSlice'
  const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: "",
        loading: false
    },
    reducers: {
      // Define the actions and corresponding state updates for 'twoSlice'
      setToke(state, action) {
        state.token = action.payload;
      },
      setUserLoading(state, action) {
        state.loading = action.payload;
      },
    },
  });

  export const {setToke, setUserLoading} = userSlice.actions;

  export default userSlice
  