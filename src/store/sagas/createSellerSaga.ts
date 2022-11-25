import { call, put, takeEvery } from "redux-saga/effects";
import api, { SellerData } from "../../services/api";
import {
  createSellerFailure,
  createSellerRequest,
  createSellerSuccess,
} from "../reducers/createSeller";

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

function* createSellerSaga() {
  yield takeEvery(createSellerRequest, workCreateSeller);
}

export default createSellerSaga;
