import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  reloadPage: boolean;
  isLoading: boolean;
  isFailure: boolean;
} = {
  reloadPage: false,
  isLoading: false,
  isFailure: false,
};

const deleteSellerSlice = createSlice({
  name: "deleteSeller",
  initialState,
  reducers: {
    deleteSellerSuccess: (state) => {
      state.reloadPage = !state.reloadPage;
      state.isLoading = false;
    },
    deleteSellerFailure: (state) => {
      state.isLoading = false;
      state.isFailure = true;
    },
  },
});

export const { deleteSellerFailure, deleteSellerSuccess } =
  deleteSellerSlice.actions;

export default deleteSellerSlice.reducer;
