import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from 'react-router-dom';
import ItemCartContainer from "../ItemCartContainer/ItemCartContainer";
import "./CartContainer.css";

export default function CartContainer() {
    const {cart, getTotalPrice} = useContext(CartContext);
  // Hacemos un renderizado condicional con el emptyCart
  const [emptyCart, setEmptyCart] = useState(0);

  useEffect(() => {
    setEmptyCart(cart.length)
  }, [cart])

  return (
    <div className="nav-cart-container">

      {cart
              .filter((product, index) => {
                return cart.findIndex((p) => p.id === product.id) === index;
              })
              .map((product) => (
                <div key={product.id}>
                  <ItemCartContainer product={product} />
                </div>
              ))}


      <div className="nav-cart-summary">
        <span>Total</span>
        <span className="total-price">${getTotalPrice()}.-</span>
      </div>

      <div className="d-flex flex-column nav-cart-actions mt-3">
        <Link to="/cart" className="btn btn-md btn-lightblue btn-text">
          Ver Carrito
          </Link>
          <Link to="/checkout" className="btn btn-md btn-primary btn-text mt-2">
          Finalizar compra
          </Link>
        </div>
    </div>
  );
}
