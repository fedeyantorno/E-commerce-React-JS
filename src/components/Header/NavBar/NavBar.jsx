import './NavBar.css'
import ButtonMenuComponent from "../ButtonMenu/ButtonMenuComponent";
import CartWidgetComponent from "../CartWidget/CartWidgetComponent";
import { CartContext } from "../../../context/CartContext";
import { useContext, useEffect, useState } from "react";

const NavBar = () => {

  const [cart] = useContext(CartContext);

  const [showCartWidget, setShowCartWidget] = useState(false)

  useEffect(() => {
    cart.length >= 1 ? setShowCartWidget(true) :
    setShowCartWidget(false)
  }, [cart])

  return (
              
        <nav>
          <ul>
            <ButtonMenuComponent/>
            {showCartWidget && <CartWidgetComponent /> }            
          </ul>
        </nav>
  )
}

export default NavBar
