import { useState } from "react";
import { Nav, NavItem, NavLink, Input, Label } from "reactstrap";

import "./style.css";

export function FilterProduct(props) {
  const [checked, setChecked] = useState(false);
  const handleOnChange = (e) => {
    setChecked(e.target.checked);
    props.filterByExpd(e.target.checked);
  };

  return (
    <div className="aside-nav">
      <h6>Prix</h6>
      <Nav vertical>
        <NavItem>
          <NavLink onClick={() => props.sortPriceAsc()}>Croissant</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => props.sortPriceDesc()}>Décroissant</NavLink>
        </NavItem>
      </Nav>
      <hr />
      <h6>Livraison</h6>
      <Nav vertical>
        <NavItem>
          <NavLink>
            <Input
              type="checkbox"
              id="checkbox"
              checked={checked}
              onChange={handleOnChange}
            />
            <Label check htmlFor="checkbox">
              Livraison gratuite
            </Label>
          </NavLink>
        </NavItem>
      </Nav>
      <hr />
      <h6>Date d'ajout</h6>
      <Nav vertical>
        <NavItem>
          <NavLink onClick={() => props.sortByInsertDayAsc()}>
            Croissant
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => props.sortByInsertDayDesc()}>
            Décroissant
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
