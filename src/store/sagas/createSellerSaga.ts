import { call, put, takeEvery } from "redux-saga/effects";
import api, { SellerData } from "../../services/api";
import {
  createSellerFailure,
  createSellerRequest,
  createSellerSuccess,
  getOneSellerFailure,
  getOneSellerRequest,
  getOneSellerSuccess,
  updateSellerFailure,
  updateSellerRequest,
  updateSellerSuccess,
} from "../reducers/createSeller";
import { SellerType } from "../types/sellers";

function* workCreateSeller({
  payload: { sellerInfo },
}: {
  payload: { sellerInfo: SellerData };
}) {
  try {
    const response: { data: { message: string } } = yield call(
      (sellerInfo) => api.createSeller(sellerInfo),
      sellerInfo
    );
    yield put(createSellerSuccess({ message: response.data.message }));
  } catch (error: { response: { data: { message: string } } } | any) {
    yield put(createSellerFailure({ message: error.response.data.message }));
  }
}

function* workUpdateSeller({
  payload,
}: {
  payload: { sellerData: SellerData; sellerId: number };
}) {
  try {
    const response: { data: { message: string } } = yield call(
      (payload: { sellerData: SellerData; sellerId: number }) =>
        api.updateSeller(payload),
      payload
    );
    yield put(updateSellerSuccess({ message: response.data.message }));
  } catch (error: { response: { data: { message: string } } } | any) {
    yield put(updateSellerFailure({ message: error.response.data.message }));
  }
}

function* workGetOneSeller({
  payload: { sellerId },
}: {
  payload: { sellerId: number };
}) {
  try {
    const response: { data: { data: SellerType } } = yield call(
      (sellerId) => api.getOneSeller(sellerId),
      sellerId
    );
    yield put(getOneSellerSuccess({ sellerInfoData: response.data.data }));
  } catch (error: { response: { data: { message: string } } } | any) {
    yield put(getOneSellerFailure({ message: error.response.data.message }));
  }
}

function* createSellerSaga() {
  yield takeEvery(createSellerRequest, workCreateSeller);
  yield takeEvery(getOneSellerRequest, workGetOneSeller);
  yield takeEvery(updateSellerRequest, workUpdateSeller);
}

export default createSellerSaga;
