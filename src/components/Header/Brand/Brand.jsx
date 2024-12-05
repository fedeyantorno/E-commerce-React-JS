import { Link } from 'react-router-dom'
import './Brand.css'
import cuisineLogo from "./logo-cuisine.png"

const Brand = () => {

    return (
        <div className="logo">
          <Link to={'/'}><img src={cuisineLogo} alt="Logo" /></Link>
        </div>
    )    
}

export default Brand