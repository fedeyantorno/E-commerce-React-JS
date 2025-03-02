import { useEffect, useState } from "react";
import { getProducts } from "../../../firebase/firebase";
import "./ButtonMenu.css";
import { Link } from "react-router-dom";

export const ButtonSubMenu = ({ category }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  const subCategories = [...new Set(products.filter((product) => product.category === category).map((product) => product.subcategory))];

  return (
    <>
      {subCategories.map((subcategory) => (
        <li key={subcategory}>
          <Link className="nav-dropdown-menu" to={`/subcategory/${subcategory}`}>{subcategory}</Link>
        </li>
      ))}
    </>
  );
};
