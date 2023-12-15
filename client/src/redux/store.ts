import { configureStore } from "@reduxjs/toolkit";
import {  bookReducer, modalReducer } from "./slices/";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    modal: modalReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;