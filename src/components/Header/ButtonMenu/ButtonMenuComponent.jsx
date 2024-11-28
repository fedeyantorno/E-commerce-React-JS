import { Link } from "react-router-dom";
import "./ButtonMenuComponent.css";
import { categories } from "../../../asyncMock.js"

const ButtonMenuComponent = () => {

  categories.sort()

  return (
    <>
      {categories.map((category) => (
        <li key={category}>
          <Link to={`/category/${category}`}>{category}</Link>
        </li>
      ))}
    </>
  );
};

export default ButtonMenuComponent;
