import axios from "axios";

import { SERVER_API_URL } from "../../util/constants";

export const getAllProductsApi = () => {
  return axios.get(SERVER_API_URL + "/products");
};
export const getProductApi = (id) => {
  return axios.get(SERVER_API_URL + "/products/" + id);
};
