import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAlertState } from "../../../types";

const initialAlertState: IAlertState = {
  isOpen: false,
  message: '',
  onConfirm: () => { },
};

export const alertSlice = createSlice({
  name: "alert",
  initialState: initialAlertState,
  reducers: {
    openAlert: (state, action: PayloadAction<{message: string, onConfirm: () => void}>) => {
      state.isOpen = true;
      state.message = action.payload.message;
      state.onConfirm = action.payload.onConfirm;
    },
    closeAlert: (state) => {
      state.isOpen = false;
      state.message = '';
      state.onConfirm = () => { };
    },
  },
});

export const { reducer: alertReducer, actions: alertActions } = alertSlice;
export const { openAlert, closeAlert } = alertActions;