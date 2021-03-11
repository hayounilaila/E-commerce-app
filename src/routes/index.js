import { Switch, Route } from "react-router-dom";

import ProductDetails from "../containers/ProductDetails";
import { Cart } from "../containers/Cart";
import Products from "../containers/Products";

export const AppRoutes = function () {
  return (
    <Switch>
      <Route exact path="/">
        <Products />
      </Route>
      <Route path="/productDetails/:id">
        <ProductDetails />
      </Route>
      <Route path="/panier">
        <Cart />
      </Route>
    </Switch>
  );
};
