import { call, put, takeEvery } from "redux-saga/effects";
import api from "../../services/api";
import { SellerType } from "../types/sellers";
import {
  getSellersFailure,
  getSellersFetch,
  getSellersSuccess,
} from "../reducers/sellers";

function* workGetSellersFetch() {
  try {
    const sellers: { data: { data: SellerType[] } } = yield call(() =>
      api.getSellers()
    );
    yield put(getSellersSuccess(sellers.data.data));
  } catch (error) {
    yield put(getSellersFailure());
  }
}

function* getAllSellersSaga() {
  yield takeEvery(getSellersFetch, workGetSellersFetch);
}

export default getAllSellersSaga;
