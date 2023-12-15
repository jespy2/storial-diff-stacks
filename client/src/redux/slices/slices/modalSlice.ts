import { createSlice } from "@reduxjs/toolkit";
import { IModalState } from "../../../types";

const initialModalState: IModalState = {
    isOpen: false,
    modalContentType: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalContentType = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalContentType = "";
    },
  },
});