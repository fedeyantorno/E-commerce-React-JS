import { useContext, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { CartContext } from "../../../context/CartContext";
import { sendOrder, updateProductStock } from "../../../firebase/firebase";
import LoadingComponent from "../../LoadingComponent";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Checkout() {
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState('')

  const [cart, setCart , , , , getTotalPrice] = useContext(CartContext)

  const arrowLeftIcon = <FontAwesomeIcon icon={faArrowLeft} />

  const createOrder = ({name, phone, email}) => {

    setLoading(true)
    const newOrder = {
      buyer: {
        name, phone, email
      },
      items: cart,
      total: getTotalPrice(),
      date: new Date()
    }

    // Enviamos la orden y actualizamos el stock
    sendOrder(newOrder)
    .then((id) => {
      // Actualizamos el stock de cada producto
      const stockUpdates = cart.map(item => {
        return updateProductStock(item.id, item.quantity);
      });      
      // Esperamos que todas las actualizaciones de stock se completen
      return Promise.all([id, ...stockUpdates]);
    })
    .then((id) => {
      setOrderId(id)
      setLoading(false)
      setCart([])
    })
  }
    
  return (
    <>
    { orderId == '' ? (
      !loading ? <CheckoutForm onConfirm={createOrder}/> :
      <> 
      <h2>Se está generando su orden</h2>
      <LoadingComponent />
      </>
    ) :
    <>
    <div className="flex flex-column align-items-center">
    <h2 className="mb-4">Gracias por su compra!</h2>
    <h4><span className="grey"> El id de su orden es:</span><span className="green"> {orderId}</span></h4>
    <Link to={'/'}> <button className="btn btn-primary btn-text mt-3 btn-return">{arrowLeftIcon} Volver a la tienda</button> </Link>
    </div>    
    </> }
    </>
  )
}
