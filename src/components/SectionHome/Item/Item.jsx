import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ product }) {
  
  return (
    <div className="card">
      <Link to={`/item/${product.id}`}><img src={product.image} className="card-img-top" alt={product.name} /></Link>
      <div className="card-body">
      <Link to={`/item/${product.id}`}><h4 className="card-title">{product.name}</h4></Link>        
      </div>
      <div className="d-flex justify-content-between set-price-btn">
        <h6 className="text-price mt-2"><span className="grey">Precio:</span> <span className="green">${product.price}.-</span></h6>        
        <Link to={`/item/${product.id}`}><button className="btn btn-lightblue btn-text">Ver detalles</button></Link>        
        </div>
    </div>
  );
}
