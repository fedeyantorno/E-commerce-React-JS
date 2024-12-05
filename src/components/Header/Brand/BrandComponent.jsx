import { Link } from 'react-router-dom'
import './BrandComponent.css'
import cuisineLogo from "./logo-cuisine.png"

const BrandComponent = () => {

    return (
        <div className="logo">
          <Link to={'/'}><img src={cuisineLogo} alt="Logo" /></Link>
        </div>
    )    
}

export default BrandComponent