import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SellerData } from "../../services/api";
import masks from "../../utils/masks";
import { SellerType } from "../types/sellers";

const initialState: {
  sellerInfoData: SellerData;
  isLoading: boolean;
  message: string;
} = {
  sellerInfoData: {
    name: "",
    cnpj: "",
    address: "",
  },
  isLoading: false,
  message: "",
};

const createSellerSlice = createSlice({
  name: "createSeller",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = "";
      state.sellerInfoData = {
        name: "",
        cnpj: "",
        address: "",
      };
    },
    createSellerUpdateInfo: (
      state,
      action: PayloadAction<{ sellerInfo: SellerData }>
    ) => {
      const modifiedCnpj = masks.cnpjMask(action.payload.sellerInfo.cnpj);
      state.sellerInfoData = {
        ...action.payload.sellerInfo,
        cnpj: modifiedCnpj,
      };
    },
    createSellerRequest: (
      state,
      action: PayloadAction<{ sellerInfo: SellerData }>
    ) => {
      state.isLoading = true;
      state.message = "";
    },
    createSellerSuccess: (
      state,
      action: PayloadAction<{ message: string }>
    ) => {
      state.message = action.payload.message;
      state.isLoading = false;
      state.sellerInfoData = {
        name: "",
        cnpj: "",
        address: "",
      };
    },
    createSellerFailure: (
      state,
      action: PayloadAction<{ message: string }>
    ) => {
      state.isLoading = false;
      state.message = action.payload.message;
    },
    getOneSellerRequest: (
      state,
      action: PayloadAction<{ sellerId: number }>
    ) => {
      state.isLoading = true;
      state.message = "";
    },
    getOneSellerSuccess: (
      state,
      action: PayloadAction<{ sellerInfoData: SellerType }>
    ) => {
      const { name, cnpj, address } = action.payload.sellerInfoData;
      state.sellerInfoData = { name, cnpj, address };
      state.isLoading = false;
      state.message = "";
    },
    getOneSellerFailure: (
      state,
      action: PayloadAction<{ message: string }>
    ) => {
      state.isLoading = true;
      state.message = action.payload.message;
    },
    updateSellerRequest: (
      state,
      action: PayloadAction<{ sellerData: SellerData; sellerId: number }>
    ) => {
      state.isLoading = true;
      state.message = "";
    },
    updateSellerSuccess: (
      state,
      action: PayloadAction<{ message: string }>
    ) => {
      state.message = action.payload.message;
      state.isLoading = false;
      state.sellerInfoData = {
        name: "",
        cnpj: "",
        address: "",
      };
    },
    updateSellerFailure: (
      state,
      action: PayloadAction<{ message: string }>
    ) => {
      state.isLoading = false;
      state.message = action.payload.message;
    },
  },
});

export const {
  createSellerUpdateInfo,
  createSellerFailure,
  createSellerSuccess,
  createSellerRequest,
  resetMessage,
  getOneSellerRequest,
  getOneSellerFailure,
  getOneSellerSuccess,
  updateSellerFailure,
  updateSellerRequest,
  updateSellerSuccess,
} = createSellerSlice.actions;

export default createSellerSlice.reducer;
