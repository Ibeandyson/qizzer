import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import userSlice from "./slice/userSlice";
import uiSlice from "./slice/uiSlice";
import appRouterSlice from "./slice/appRouterSlice";
import storeSlice from "./slice/storeSlice";

// Combine the reducers into a single root reducer
const rootReducer = combineReducers({
  auth: authSlice.reducer,
  user: userSlice.reducer,
  ui: uiSlice.reducer,
  store: storeSlice.reducer,
  appRouter: appRouterSlice.reducer,
});

// Configure the store with the root reducer
const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
