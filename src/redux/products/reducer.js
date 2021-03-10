import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_ID,
  SET_PRODUCTS_DATA,
  SET_PRODUCT_DATA,
} from "./actionTypes";
const initialState = {
  products: [],
  isLoading: false,
  searchedProduct: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        isLoading: true,
      };
    case SET_PRODUCTS_DATA:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case SET_PRODUCT_DATA:
      return {
        ...state,
        searchedProduct: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
