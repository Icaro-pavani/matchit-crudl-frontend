import { createAction } from "redux-actions";

export const GET_SELLERS_FETCH = "GET_SELLERS_FETCH";
export const getSellersFetch = createAction(GET_SELLERS_FETCH);
export const GET_SELLERS_SUCCESS = "GET_SELLERS_SUCCESS";
export const getSellersS = createAction(GET_SELLERS_SUCCESS);
export const GET_SELLERS_FAILURE = "GET_SELLERS_FAILURE";
export const getSellersFailure = createAction(GET_SELLERS_FAILURE);

export const DELETE = "DELETE";
export const deleteSeller = createAction<{ sellerId: number }>(DELETE);
