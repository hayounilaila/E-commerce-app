import { Switch, Route } from "react-router-dom";

import ProductDetails from "../components/products/productDetails";
import Products from "../containers/Products";

export const AppRoutes = function () {
  return (
    <Switch>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/productDetails/:id">
        <ProductDetails />
      </Route>
    </Switch>
  );
};
