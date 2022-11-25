import { combineReducers } from "@reduxjs/toolkit";
import sellersReducer from "./sellers";
import deleteSellerReducer from "./deleteSeller";

const reducers = combineReducers({
  sellers: sellersReducer,
  deleteOneSeller: deleteSellerReducer,
});

export default reducers;
