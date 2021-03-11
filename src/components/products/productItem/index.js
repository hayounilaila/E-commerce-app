import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

import "./style.css";

export function ProductItem({ product }) {
  return (
    <Card>
      <CardImg top src={product.images[0]} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5" className="title">
          {product.title}
        </CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {product.price} DH
        </CardSubtitle>
      </CardBody>
    </Card>
  );
}
