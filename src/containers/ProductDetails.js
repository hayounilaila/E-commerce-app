import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Spinner, Alert } from "reactstrap";

import ProductDetailsComponents from "../components/products/productDetails";
import { getProductById, getProducts } from "../redux/products/actions";

function ProductDetails(props) {
  const [commandes, setCommandes] = useState(
    JSON.parse(localStorage.getItem("commandes")) || []
  );

  let { id } = useParams();

  const addToCards = (qte) => {
    let commande = { ...props.product, qte: qte };
    if (commandes.find((c) => c.id === props.product.id)) {
      setCommandes(
        commandes.map((c) => {
          if (c.id === props.product.id) {
            c.qte = Number(c.qte) + Number(qte);
            return c;
          }
          return c;
        })
      );
    } else setCommandes([...commandes, commande]);
  };

  useEffect(() => {
    props.getProductById(id);
    props.getProducts(() => {});
    localStorage.setItem("commandes", JSON.stringify(commandes));
  }, [id, commandes]);

  return props.isLoading ? (
    <Spinner size="sm" color="teal" className="center" type="grow" />
  ) : !props.error ? (
    <ProductDetailsComponents
      product={props.product || {}}
      products={props.products || []}
      handleAdd={addToCards}
    />
  ) : (
    <Alert color="danger">{props.error}</Alert>
  );
}
const mapStateToProps = ({ products }) => {
  return {
    product: products.searchedProduct,
    products: products.products,
    isLoading: products.isLoading,
    error: products.errorGetAllProducts,
  };
};
export default connect(mapStateToProps, { getProductById, getProducts })(
  ProductDetails
);
