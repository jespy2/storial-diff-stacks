import { configureStore } from "@reduxjs/toolkit";
import {  alertReducer, bookReducer, modalReducer } from "./slices/";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    books: bookReducer,
    modal: modalReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;