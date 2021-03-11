import { Table, Container, Button } from "reactstrap";
import { IoTrash } from "react-icons/io5";

import "./style.css";

export function CartComponent(props) {
  return (
    <Container fluid={true}>
      <Table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Nom</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.commandes.map((c) => (
            <tr key={c.id}>
              <th scope="row">
                <img src={c.images[0]} alt="product" />
              </th>
              <td>{c.title}</td>
              <td>{c.price} DH</td>
              <td>{c.qte}</td>
              <td>{c.price * c.qte} DH</td>
              <td>
                <Button
                  className="icon-btn"
                  onClick={() => {
                    props.deleteProduct(c);
                  }}
                >
                  <IoTrash color="white" />
                  Supprimer
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <td className="tfooter" colSpan={6}>
              <h6>
                Total :{" "}
                {props.commandes.reduce((a, b) => a + b.price * b.qte, 0)} DH
              </h6>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
