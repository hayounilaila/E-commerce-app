import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Spinner, Alert } from "reactstrap";

import { ProductsList } from "../components/products/productsList";
import { getProducts } from "../redux/products/actions";

const Products = function Products(props) {
  const [productsList, setProductsList] = useState([]);

  const successCallBack = (response) => {
    setProductsList(response);
  };

  const filterByExpd = (check) => {
    if (check)
      setProductsList(productsList.filter((p) => p.prixLivraison === 0));
    else setProductsList(props.products);
  };

  useEffect(() => {
    props.getProducts(successCallBack);
  }, []);

  return props.isLoading ? (
    <Spinner size="sm" color="teal" className="center" type="grow" />
  ) : !props.error ? (
    <ProductsList
      products={productsList}
      sortPriceAsc={() =>
        setProductsList([...productsList].sort((a, b) => a.price - b.price))
      }
      sortPriceDesc={() =>
        setProductsList([...productsList].sort((a, b) => b.price - a.price))
      }
      filterByExpd={filterByExpd}
      sortByInsertDayAsc={() =>
        setProductsList([...productsList].sort((a, b) => a.id - b.id))
      }
      sortByInsertDayDesc={() =>
        setProductsList([...productsList].sort((a, b) => b.id - a.id))
      }
      resetFilter={() => setProductsList(props.products)}
    />
  ) : (
    <Alert color="danger">{props.error}</Alert>
  );
};
const mapStateToProps = ({ products }) => {
  return {
    products: products.products,
    isLoading: products.isLoading,
    error: products.errorGetAllProducts,
  };
};
export default connect(mapStateToProps, { getProducts })(Products);
