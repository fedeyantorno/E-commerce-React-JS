import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";
import ItemCart from "./ItemCart";
import LoadingComponent from "../../LoadingComponent";

export default function Cart() {
  const [cart, setCart, addItem] = useContext(CartContext);
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
  
  return (
    <>
      <h2 className="pb-4 text-center">Carrito</h2>
      {(emptyCart == 0) ? (
        loading ? <LoadingComponent /> : <h5 className="mt-2">Su carrito está vacío</h5>
      ) : (
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
      )}      
    </>
  );
}
