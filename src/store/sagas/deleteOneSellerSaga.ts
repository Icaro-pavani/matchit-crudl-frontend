import { call, put, takeEvery } from "redux-saga/effects";
import api from "../../services/api";
import { deleteSeller } from "../actions/seller.actions.types";
import {
  deleteSellerFailure,
  deleteSellerSuccess,
} from "../reducers/deleteSeller";

function* workDeleteSeller({ payload: { sellerId } }: any) {
  try {
    yield call((sellerId: number) => api.deleteSeller(sellerId), sellerId);
    yield put(deleteSellerSuccess());
  } catch (error) {
    yield put(deleteSellerFailure());
  }
}

function* deleteOneSellerSaga() {
  yield takeEvery(deleteSeller, workDeleteSeller);
}

export default deleteOneSellerSaga;
