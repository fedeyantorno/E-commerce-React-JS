import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'
import CartContainer from '../CartContainer/CartContainer'


export const CartWidget = () => {
  
  const cartIcon = <FontAwesomeIcon icon={faBasketShopping} />
  const {cart, getQuantity} = useContext(CartContext)

  return (
    <li className="navbar-brand nav-right hidden-sm hidden-xs">
      <ul>
        <li className="nav-cart">
          <div className="nav-cart-inner">
            <Link to={'/cart'} className="nav-cart-icon">
              {cartIcon}
              <span className="nav-cart-badge">{getQuantity()}</span>
            </Link>
          </div>
          {cart.length > 0 &&  <CartContainer />}
        </li>
      </ul>
    </li>
  )
}