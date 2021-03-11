import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";

import "./style.css";

export function Header() {
  return (
    <header className="header">
      <Link to="/" className="btn-header">
        <h6>E-commerce</h6>
      </Link>
      <Link to="/panier" className="btn-header">
        <IoCart color="white" size={28} />
        <h6>Panier</h6>
      </Link>
    </header>
  );
}
