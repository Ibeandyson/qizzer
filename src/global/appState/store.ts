import {  combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice  from "./slice/userSlice"

// Combine the reducers into a single root reducer
const rootReducer = combineReducers({
  user: userSlice.reducer
});

// Configure the store with the root reducer
const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;