import './NavBar.css'
import { ButtonMenu } from "../ButtonMenu/ButtonMenu"
import { Brand } from '../Brand/Brand'
import { Search } from '../Search/Search'
import { Link } from "react-router-dom"


export const NavBar = () => {

  return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Brand/>    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link" to={`/`}>Inicio</Link></li>
        <li className="nav-item"><Link className="nav-link" to={`/products`}>Productos</Link></li>
        <ButtonMenu/>
      </ul>
      <Search/>
    </div>
  </div>
</nav>
        </>            
  )
}
