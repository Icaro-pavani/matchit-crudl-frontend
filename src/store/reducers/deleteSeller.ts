import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    deleteSellerRequest: (
      state,
      action: PayloadAction<{ sellerId: number }>
    ) => {
      state.isLoading = true;
      state.isFailure = false;
    },
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

export const { deleteSellerFailure, deleteSellerRequest, deleteSellerSuccess } =
  deleteSellerSlice.actions;

export default deleteSellerSlice.reducer;
