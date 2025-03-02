import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

export default function ItemCartContainer( { product } ) {
  let { cart, setCart, getItemQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState(getItemQuantity(product.id));

  const trashIcon = <FontAwesomeIcon icon={faTrash} />

  const sendCounterValue = (count) => {
    setQuantity(count);
    // Actualizamos la cantidad en el cart
    const updatedCartQuantity = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: count } : item
    );
    setCart(updatedCartQuantity);
  };

  const confirmDelete = () => {
    Swal.fire({
      title: "Está seguro?",
      text: `Está por eliminar el producto "${product.name}".`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#1f7a8c",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado",
          text: "Producto eliminado correctamente.",
          icon: "success"
        });
        removeItem()
      }
    });
   }

  const removeItem = () => {
    // Filtramos todos los items por ID
    const updatedRemoveItem = cart.filter(item => item.id !== product.id);
    // Actualizamos el estado del cart con items filtrados
    setCart(updatedRemoveItem);
    // Si se elimina el último item reasignamos el cart con un array vacío
    if (updatedRemoveItem.length === 0) {
      cart = [];
    }
    console.log(updatedRemoveItem.length)
    console.log(cart);
  }

  useEffect(() => {
    setQuantity(getItemQuantity(product.id));
  }, [cart, product.id, getItemQuantity]);

  const totalPrice = product.price * quantity

  return (
    <div className="nav-cart-items">
    <div className="nav-cart-item clearfix">
      <div className="nav-cart-img">
      <Link to={`/item/${product.id}`}>
          <img src={product.image} alt={product.name} title={product.name} />
        </Link>
      </div>
      <div className="nav-cart-title">
      <Link to={`/item/${product.id}`}>
        {product.name}
        </Link>
        <div className="nav-cart-price">
          <span>{quantity} x </span>
          <span>${product.price}</span><br/>
          <span>Total: ${totalPrice}</span>
        </div>
      </div>
      <div className="nav-cart-remove" onClick={confirmDelete}>
        {trashIcon}
      </div>
    </div>
    </div>
  );
}
