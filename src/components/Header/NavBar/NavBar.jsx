import './NavBar.css'
import ButtonMenu from "../ButtonMenu/ButtonMenu"
import CartWidget from "../CartWidget/CartWidget"
import { CartContext } from "../../../context/CartContext"
import { useContext, useEffect, useState } from "react"

const NavBar = () => {

  const [cart] = useContext(CartContext)
  const [showCartWidget, setShowCartWidget] = useState(false)

  useEffect(() => {
    cart.length >= 1 ? setShowCartWidget(true) :
    setShowCartWidget(false)
  }, [cart])

  return (              
        <nav>
          <ul>
            <ButtonMenu/>
            {showCartWidget && <CartWidget /> }            
          </ul>
        </nav>
  )
}

export default NavBar
