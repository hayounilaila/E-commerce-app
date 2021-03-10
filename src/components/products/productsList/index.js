import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import { ProductItem } from "../productItem";
import { FilterProduct } from "../filterProduct";

export function ProductsList(props) {
  return (
    <div className="App">
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
              <Link to={{ pathname: `/productDetails/${p.id}` }}>
                <ProductItem product={p} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
