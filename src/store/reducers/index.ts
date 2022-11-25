import { combineReducers } from "@reduxjs/toolkit";
import sellersReducer from "./sellers";
import deleteSellerReducer from "./deleteSeller";
import createSellerReducer from "./createSeller";

const reducers = combineReducers({
  sellers: sellersReducer,
  deleteOneSeller: deleteSellerReducer,
  createSeller: createSellerReducer,
});

export default reducers;
