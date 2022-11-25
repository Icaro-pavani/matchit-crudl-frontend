import { createSlice } from "@reduxjs/toolkit";
import { SellerType } from "../types/sellers";

const initialState: {
  sellers: SellerType[];
  isLoading: boolean;
  isFailure: boolean;
} = {
  sellers: [],
  isLoading: false,
  isFailure: false,
};

const sellerSlice = createSlice({
  name: "sellers",
  initialState,
  reducers: {
    getSellersFetch: (state) => {
      state.isLoading = true;
      state.isFailure = false;
    },
    getSellersSuccess: (state, action) => {
      state.sellers = action.payload;
      state.isLoading = false;
    },
    getSellersFailure: (state) => {
      state.isLoading = false;
      state.isFailure = true;
    },
  },
});

export const { getSellersFailure, getSellersFetch, getSellersSuccess } =
  sellerSlice.actions;

export default sellerSlice.reducer;
