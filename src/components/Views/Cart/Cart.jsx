import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";
import ItemCart from "./ItemCart";
import LoadingComponent from "../../LoadingComponent";
import { Link } from 'react-router-dom';

export default function Cart() {
  const [cart, setCart] = useContext(CartContext);
  // Hacemos un renderizado condicional con el emptyCart
  const [emptyCart, setEmptyCart] = useState(0);
  // Hacemos un renderizado condicional con el loadingComponent
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    setEmptyCart(cart.length)
    console.log(cart.length)
    console.log(cart)

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [cart]);

  const clearCart = () => {
    setCart([])
    setEmptyCart(0)
  }
  
  return (
    <>
      <h2 className="pb-4 text-center">Carrito</h2>
      {(emptyCart == 0) ? (
        loading ? <LoadingComponent /> : 
        <div className="d-flex flex-column align-items-center">
        <h5 className="mt-2">Su carrito está vacío</h5>
        <Link to={'/'}><button className="btn btn-outline-success">
          Seguir comprando
        </button></Link>
        </div>        
      ) : (
        <>
        <div className="d-flex flex-column align-items-center mt-5">
            {cart
              .filter((product, index) => {
                return cart.findIndex((p) => p.id === product.id) === index;
              })
              .map((product) => (
                <div className="col-lg-12" key={product.id}>
                  <ItemCart product={product} />
                </div>
              ))}
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Link to={'/'}><button className="btn btn-outline-success">
            Seguir comprando
          </button></Link>
          <button onClick={clearCart} className="btn btn-outline-danger">
            Vaciar carrito
          </button>
          <Link to={'/'}><button className="btn btn-outline-success">
            Finalizar comprar
          </button></Link>
        </div>
        </>
      )}      
    </>
  );
}
