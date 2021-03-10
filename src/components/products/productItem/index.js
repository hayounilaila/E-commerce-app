import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

export function ProductItem({ product }) {
  return (
    <Card>
      <CardImg top width="100%" src={product.images[0]} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{product.title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {product.price} DH
        </CardSubtitle>
      </CardBody>
    </Card>
  );
}
