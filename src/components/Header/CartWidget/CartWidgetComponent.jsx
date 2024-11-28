import './CartWidgetComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'

const cartIcon = <FontAwesomeIcon icon={faBasketShopping} />

export default function CartWidgetComponent() {

  const [cart, setCart] = useContext(CartContext)

  return (
    <li className="nav-right">
      <ul>
        <li className="nav-cart">
          <div className="nav-cart-inner">
            <Link to={'/cart'} className="nav-cart-icon">
              {cartIcon}
              <span className="nav-cart-badge">{cart.length}</span>
            </Link>
          </div>
        </li>
      </ul>
    </li>
  )
}