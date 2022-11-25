import { all } from "redux-saga/effects";
import deleteOneSellerSaga from "./deleteOneSellerSaga";
import getAllSellersSaga from "./getAllSellersSaga";

const sagas = function* sagas() {
  yield all([getAllSellersSaga(), deleteOneSellerSaga()]);
};

export default sagas;
