import { createSlice } from "@reduxjs/toolkit";
import { SellerType } from "../types/sellers";

const initialState: {
  sellersData: SellerType[];
  isLoading: boolean;
  isFailure: boolean;
} = {
  sellersData: [],
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
      state.sellersData = action.payload;
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
