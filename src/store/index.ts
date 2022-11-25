import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sellersReducer from "./reducers/sellers";
import sellersSaga from "./sagas/sellersSaga";

export default function configureMainStore() {
  const saga = createSagaMiddleware();
  const store = configureStore({
    reducer: {
      sellers: sellersReducer,
    },
    middleware: [saga],
  });
  saga.run(sellersSaga);

  return {store};
}
