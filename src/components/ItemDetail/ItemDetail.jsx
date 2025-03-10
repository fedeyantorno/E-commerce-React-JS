import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";

export const ItemDetail = ({ product }) => {

  const {addItem, cart} = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)
  const [sendCart, setSendCart] = useState(false)

  const handleClick = () => {
    addItem({ ...product, quantity: quantity })
    setSendCart(true)
  }

  const sendCounterValue = count => setQuantity(count)

  useEffect(() => {
    const isInCart = cart.some(item => item.id === product.id);
    setSendCart(isInCart);
  }, [cart, product.id]);

  return (
    <div className="row">
      <div className="col-lg-6 col-xs-12">
      <img src={product.image} className="card-img-top" alt={product.name || "Producto"}/>
      </div>

      <div className="col-lg-6 col-xs-12 single-product-description">

        <div className="d-flex align-content-center align-items-center breadcrumbs">
        <p className="breadcrumbs-title"><span className="grey">Categorías: </span></p>
          <div className="breadcrumbs-list-item">
          <Link to={'/'} className="breadcrumbs-link">Home</Link>
          </div>
          <div className="breadcrumbs-list-item">
          <Link to={`/category/${product.category}`} className="breadcrumbs-link">{product.category}</Link>
          </div>
        </div>

        <h2 className="product-title single-product-description-title mb-2">{product.name}</h2>
        <p className="single-product-description-text grey">{product.description}</p>
        <h5 className="single-product-description-price mt-3"><span className="grey">Precio:</span> <span className="green">${product.price}.-</span></h5>
        <p><span className="grey">Stock:</span> <span className="green">{product.stock}</span></p>
        <div className="d-flex flex-row align-items-center gap-4 mt-4">
            {product.stock === 0 ? (
              <p className="text-danger">Producto sin stock</p>
            ) : (
            <>
              {!sendCart ? (
                <>
                <div>
                <ItemCount stock={product.stock} sendCounterValue={sendCounterValue}/>
                </div>
                <div>
                <button onClick={handleClick} className="btn btn-lightblue btn-text">Añadir al carrito</button>
                </div>
                </>
                ) : (
                <div >                
                <Link to={'/cart'}><button className="btn btn-lightblue btn-text">Ir al carrito</button></Link>
                </div>
              )}
            </>
            )}
        </div>
      </div>
    </div>
  );
}
