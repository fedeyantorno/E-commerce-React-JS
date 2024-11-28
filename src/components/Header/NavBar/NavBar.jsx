import './NavBar.css'
import ButtonMenuComponent from "../ButtonMenu/ButtonMenuComponent";
import CartWidgetComponent from "../CartWidget/CartWidgetComponent";

const NavBar = () => {

  return (
              
        <nav>
          <ul>
            <ButtonMenuComponent/>
            <CartWidgetComponent />
          </ul>
        </nav>
  )
}

export default NavBar
