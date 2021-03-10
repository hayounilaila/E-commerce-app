import { all } from "redux-saga/effects";

import actionWatcherProduct from "./products/saga";
export default function* rootSaga() {
  yield all([actionWatcherProduct()]);
}
