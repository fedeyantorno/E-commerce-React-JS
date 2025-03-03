import { Link } from 'react-router-dom'
import './Brand.css'
import cuisineLogo from "../../../../public/logo-cuisine.png"

export const Brand = () => {

    return (
        <div className="logo navbar-brand">
          <Link to={'/'}><img src={cuisineLogo} alt="Logo" /></Link>
        </div>
    )    
}