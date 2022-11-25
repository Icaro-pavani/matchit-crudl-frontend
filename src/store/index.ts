import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import reducers from "./reducers";

export default function configureMainStore() {
  const saga = createSagaMiddleware();
  const store = configureStore({
    reducer: reducers,
    middleware: [saga],
  });
  saga.run(sagas);

  return { store };
}
