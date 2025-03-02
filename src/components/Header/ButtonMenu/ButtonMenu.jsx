import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ButtonMenu.css";
import { getProducts } from "../../../firebase/firebase.js";
import { ButtonSubMenu } from "./ButtonSubMenu.jsx";

export const ButtonMenu = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(products => setProducts(products))
  }, []);

  const categories = [...new Set(products.map(product => product.category))];

  return (
    <>
      {categories.map((category) => (

          <li className="nav-item dropdown" key={category}>
          <Link className="nav-link" aria-expanded="false" to={`/${category}`}>{category}</Link>
          <ul className="dropdown-menu">
            <ButtonSubMenu category={category} />
          </ul>
        </li>
        
      ))}
    </>
  );
}
