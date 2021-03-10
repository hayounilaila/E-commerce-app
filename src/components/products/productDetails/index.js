import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
  Input,
} from "reactstrap";

import "./index.css";
import { getProductById, getProducts } from "../../../redux/products/actions";
import ProductImageCarousel from "./ProductImageCarousel";
import { ProductItem } from "../productItem";

function ProductDetails(props) {
  let { id } = useParams();

  useEffect(() => {
    props.getProductById(id);
    props.getProducts(() => {});
  }, [id]);

  return (
    <div>
      <div className="cardImg">
        <ProductImageCarousel top product={props.product} />
        <CardBody>
          <CardTitle tag="h5">{props.product.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {props.product.price} DH
          </CardSubtitle>
          <CardText>{props.product.description}</CardText>
          <Input type="number" placeholder="quantité" className="inputQte" />
          <Button>Ajouter au panier</Button>
        </CardBody>
      </div>
      <h5>Voir aussi</h5>
      <Row xs="3">
        {props.products
          .filter((p) => p.category === props.product.category)
          .map((p) => (
            <Col key={p.id}>
              <Link to={{ pathname: `/productDetails/${p.id}` }}>
                <ProductItem product={p} />
              </Link>
            </Col>
          ))}
      </Row>
    </div>
  );
}
const mapStateToProps = ({ products }) => {
  return {
    product: products.searchedProduct,
    products: products.products,
    isLoading: products.isLoading,
  };
};
export default connect(mapStateToProps, { getProductById, getProducts })(
  ProductDetails
);
