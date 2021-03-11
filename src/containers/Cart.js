import { useEffect, useState } from "react";
import { CartComponent } from "../components/cart";

export function Cart() {
  const [commandes, setCommandes] = useState(
    JSON.parse(localStorage.getItem("commandes")) || []
  );
  const deleteProduct = (product) => {
    setCommandes(commandes.filter((c) => c.id !== product.id));
  };
  useEffect(() => {
    localStorage.setItem("commandes", JSON.stringify(commandes));
  }, [commandes]);
  return <CartComponent commandes={commandes} deleteProduct={deleteProduct} />;
}
