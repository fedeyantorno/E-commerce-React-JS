import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCart from "./ItemCart";
import { Loading } from "../../components/Loading";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

export const Cart = () => {
  const {cart, setCart, getTotalPrice} = useContext(CartContext);
  // Hacemos un renderizado condicional con el emptyCart
  const [emptyCart, setEmptyCart] = useState(0);
  // Hacemos un renderizado condicional con el Loading
  const [loading, setLoading] = useState(true);

  const arrowLeftIcon = <FontAwesomeIcon icon={faArrowLeft} />
  
  useEffect(() => {
    setEmptyCart(cart.length)
    console.log(cart.length)
    console.log(cart)

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [cart]);

  const confirmDelete = () => {
      Swal.fire({
        title: "Está seguro?",
        text: `Está por vaciar el carrito.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#1f7a8c",
        confirmButtonText: "Vaciar",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Vaciado",
            text: "Carrito vaciado correctamente.",
            icon: "success"
          });
          clearCart()
        }
      });
     }

  const clearCart = () => {
    setCart([])
    setEmptyCart(0)
  }
  
  return (
    <>
      <h2 className="pb-4 text-center">Carrito</h2>
      {(emptyCart == 0) ? (
        loading ? <Loading /> : 
        <div className="d-flex flex-column align-items-center">
        <h5 className="mt-2">Su carrito está vacío</h5>
        <Link to={'/products'}><button className="btn btn-outline-success mt-3">
        {arrowLeftIcon} Volver a la tienda
        </button></Link>
        </div>        
      ) : (
        <>
        <div className="d-flex flex-column align-items-center mt-3">
        <h5 className="mb-4"><span className="grey">Total carrito:</span><span className="green"> ${getTotalPrice()}.-</span></h5>
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
          <Link to={'/products'}><button className="btn btn-outline-success">
            Seguir comprando
          </button></Link>
          <button onClick={confirmDelete} className="btn btn-outline-danger">
            Vaciar carrito
          </button>
          
          <Link to={'/checkout'}><button className="btn btn-outline-success">
            Finalizar comprar
          </button></Link>
        </div>
        </>
      )}      
    </>
  );
}
