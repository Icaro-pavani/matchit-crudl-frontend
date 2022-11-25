import { call, put, takeEvery } from "redux-saga/effects";
import api from "../../services/api";
import {
  deleteSellerFailure,
  deleteSellerRequest,
  deleteSellerSuccess,
} from "../reducers/deleteSeller";

function* workDeleteSeller({
  payload: { sellerId },
}: {
  payload: { sellerId: number };
}) {
  try {
    yield call((sellerId: number) => api.deleteSeller(sellerId), sellerId);
    yield put(deleteSellerSuccess());
  } catch (error) {
    yield put(deleteSellerFailure());
  }
}

function* deleteOneSellerSaga() {
  yield takeEvery(deleteSellerRequest, workDeleteSeller);
}

export default deleteOneSellerSaga;
