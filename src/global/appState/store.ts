import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slice/categorySlice";
import questionSlice from "./slice/questionSlice";

// Combine the reducers into a single root reducer
const rootReducer = combineReducers({
  category: categorySlice.reducer,
  questions: questionSlice.reducer,
});

// Configure the store with the root reducer
const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
