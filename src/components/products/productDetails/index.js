import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
  Input,
  Container,
} from "reactstrap";

import ProductImageCarousel from "./ProductImageCarousel";
import { ProductItem } from "../productItem";
import "./style.css";

export default function ProductDetailsComponent(props) {
  const [qte, setQte] = useState(0);

  return (
    <Container fluid={true} className="margin-div">
      <div className="cardImg">
        <ProductImageCarousel top images={props.product.images || []} />
        <CardBody>
          <CardTitle tag="h5">{props.product.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {props.product.price} DH
          </CardSubtitle>
          <CardText>{props.product.description}</CardText>
          <Input
            type="number"
            placeholder="quantité"
            className="inputQte"
            onChange={(e) => setQte(e.target.value)}
            min={1}
          />
          <Button
            className="btnP"
            onClick={() => {
              if (qte > 0) {
                props.handleAdd(qte);
              } else alert("Veuillez saisir la quantité");
            }}
          >
            Ajouter au panier
          </Button>
        </CardBody>
      </div>
      <hr />
      <h5>Voir aussi</h5>
      <Row xs="3">
        {props.products
          .filter((p) => p.category === props.product.category)
          .slice(0, 3)
          .map((p) => (
            <Col key={p.id}>
              <Link
                to={{ pathname: `/productDetails/${p.id}` }}
                className="link"
              >
                <ProductItem product={p} />
              </Link>
            </Col>
          ))}
      </Row>
    </Container>
  );
}
