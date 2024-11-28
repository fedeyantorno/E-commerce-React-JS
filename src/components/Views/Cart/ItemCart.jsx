import { Link } from "react-router-dom";
import "./ItemCart.css";
import ItemCountComponent from "../../SectionHome/ItemCount/ItemCountComponent";

export default function ItemCart({ product }) {
  return (
    <div className="card mb-4 cart-item">
      <div className="row g-0">
        <div className="col-lg-4">
          <Link to={`/item/${product.id}`}>
            <img
              src={product.image}
              className="img-fluid rounded-start"
              alt={product.name}
            />
          </Link>
        </div>

        <div className="col-lg-8">
          <div className="card-body d-flex flex-column">
            <Link to={`/item/${product.id}`}>
              <h4 className="card-title">{product.name}</h4>
            </Link>
            <div className="d-flex flex-column mt-3">
              <h6 className="text-price mt-2">
                <span className="grey">Precio:</span>{" "}
                <span className="green">${product.price}.-</span>
              </h6>
              <h6 className="text-price mt-2">
                <span className="grey">Precio total:</span>{" "}
                <span className="green">${product.price}.-</span>
              </h6>
            </div>

            <div className="d-flex justify-content-start align-items-center">
              <p className="text-item-count mt-2">Agregue o reste items </p>
              <div>
                <ItemCountComponent stock={product.stock}/>
              </div>
            </div>

            <button className="btn btn-primary btn-text">
              Eliminar del carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
