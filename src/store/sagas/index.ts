import { all } from "redux-saga/effects";
import createSellerSaga from "./createSellerSaga";
import deleteOneSellerSaga from "./deleteOneSellerSaga";
import getAllSellersSaga from "./getAllSellersSaga";

const sagas = function* sagas() {
  yield all([getAllSellersSaga(), deleteOneSellerSaga(), createSellerSaga()]);
};

export default sagas;
