import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ButtonFilter.css";
import { getProducts } from "../../../firebase/firebase.js";

export const ButtonFilterCategory = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(products => setProducts(products))
  }, []);

  const categories = [...new Set(products.map(product => product.category))];

  return (
    <>
      {categories.map((category) => (
        <li key={category}>
          <Link to={`/${category}`}>{category}</Link>
        </li>
        
      ))}
    </>
  );
}
