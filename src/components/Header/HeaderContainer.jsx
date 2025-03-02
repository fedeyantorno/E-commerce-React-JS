import { NavBar } from "./NavBar/NavBar";
import "./HeaderContainer.css";
import { CartWidget } from "./CartWidget/CartWidget";

export const HeaderContainer = () => {
  return (
    <header>
      <NavBar />
      <CartWidget/>
    </header>
  );
}
