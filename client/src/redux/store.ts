import { configureStore } from "@reduxjs/toolkit";
import {  alertReducer, bookReducer, modalReducer, notificationReducer } from "./slices/";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    books: bookReducer,
    modal: modalReducer,
    notification: notificationReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;