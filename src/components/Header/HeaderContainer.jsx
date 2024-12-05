import Brand from "./Brand/Brand";
import NavBar from "./NavBar/NavBar";
import "./HeaderContainer.css";

export default function HeaderContainer() {
  return (
    <header>
      <Brand />
      <NavBar />
    </header>
  );
}
