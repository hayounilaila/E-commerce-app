import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_ID,
  SET_PRODUCTS_DATA,
  SET_PRODUCT_DATA,
  ERROR_GET_ALL_PRODUCTS,
} from "./actionTypes";

export const getProducts = (successCallBack) => ({
  type: GET_ALL_PRODUCTS,
  payload: { successCallBack },
});
export const errorGetProducts = (error) => ({
  type: ERROR_GET_ALL_PRODUCTS,
  payload: error,
});
export const setProducts = (data) => ({
  type: SET_PRODUCTS_DATA,
  payload: data,
});
export const getProductById = (id) => ({
  type: GET_PRODUCT_BY_ID,
  payload: id,
});
export const setProduct = (data) => ({
  type: SET_PRODUCT_DATA,
  payload: data,
});
