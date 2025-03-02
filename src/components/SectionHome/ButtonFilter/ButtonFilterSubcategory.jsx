import { useEffect, useState } from "react";
import { getProducts } from "../../../firebase/firebase";
import "./ButtonFilter.css";
import { Link } from "react-router-dom";

export const ButtonFilterSubcategory = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  const subCategories = [...new Set(products.map((product) => product.subcategory))];

  return (
    <>
      {subCategories.map((subcategory) => (
        <li key={subcategory}>
          <Link to={`/subcategory/${subcategory}`}>{subcategory}</Link>
        </li>
      ))}
    </>
  );
};
