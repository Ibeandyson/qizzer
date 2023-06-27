import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  successModal: {
    show: boolean;
    title: string;
    description: string;
    buttonLabel: string;
    path: string;
  };
}

const initialState: InitialStateType = {
  successModal: {
    show: false,
    title: "",
    description: "",
    buttonLabel: "",
    path: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setShowSuccessModal(state, action) {
      state.successModal = action.payload;
    },
  },
});

export const { setShowSuccessModal } = uiSlice.actions;

export default uiSlice;
