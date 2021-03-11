import { call, put, takeEvery } from "redux-saga/effects";

import { setProducts, setProduct, errorGetProducts } from "./actions";
import { getAllProductsApi, getProductApi } from "./api";
import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_ID } from "./actionTypes";

function* getAllProducts({ payload }) {
  try {
    const response = yield call(getAllProductsApi);
    yield put(setProducts(response.data));
    payload.successCallBack(response.data);
  } catch (error) {
    console.log(error);
    yield put(errorGetProducts("erreur"));
  }
}
function* getProduct({ payload }) {
  try {
    const response = yield call(getProductApi, payload);
    yield put(setProduct(response.data));
  } catch (error) {
    console.log(error);
    yield put(errorGetProducts("erreur"));
  }
}
export default function* actionWatcherProduct() {
  yield takeEvery(GET_ALL_PRODUCTS, getAllProducts);
  yield takeEvery(GET_PRODUCT_BY_ID, getProduct);
}
