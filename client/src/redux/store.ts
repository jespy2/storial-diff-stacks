import { configureStore } from "@reduxjs/toolkit";
import {  bookReducer, modalSlice } from "./slices/";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    modal: modalSlice.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;