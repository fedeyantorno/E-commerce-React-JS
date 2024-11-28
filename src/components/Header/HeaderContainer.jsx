import BrandComponent from "./Brand/BrandComponent";
import NavBar from "./NavBar/NavBar";
import "./HeaderContainer.css";

export default function HeaderContainer() {
  return (
    <header>
      <BrandComponent />
      <NavBar />
    </header>
  );
}
