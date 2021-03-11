import { Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

import { ProductItem } from "../productItem";
import { FilterProduct } from "../filterProduct";
import "./style.css";

export function ProductsList(props) {
  return (
    <div className="container-div">
      <FilterProduct
        sortPriceAsc={props.sortPriceAsc}
        sortPriceDesc={props.sortPriceDesc}
        filterByExpd={props.filterByExpd}
        sortByInsertDayAsc={props.sortByInsertDayAsc}
        sortByInsertDayDesc={props.sortByInsertDayDesc}
      />
      <Container>
        <Row xs="3">
          {props.products.map((p) => (
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
    </div>
  );
}
