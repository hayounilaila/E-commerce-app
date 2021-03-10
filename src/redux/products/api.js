import axios from "axios";

export const getAllProductsApi = () => {
  return axios.get(
    "https://604731389e5ab30017394534.mockapi.io/api/v1/products"
  );
};
export const getProductApi = (id) => {
  return axios.get(
    `https://604731389e5ab30017394534.mockapi.io/api/v1/products/${id}`
  );
};
