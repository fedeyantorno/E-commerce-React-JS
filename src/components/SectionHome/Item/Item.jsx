import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ id, image, name, price }) => {
  
  return (
    <div className="card">
      <Link to={`/item/${id}`}><img src={image} className="card-img-top" alt={name} /></Link>
      <div className="card-body">
      <Link to={`/item/${id}`}><h4 className="card-title">{name}</h4></Link>        
      </div>
      <div className="d-flex justify-content-between set-price-btn">
        <h6 className="text-price mt-2"><span className="grey">Precio:</span> <span className="green">${price}.-</span></h6>        
        <Link to={`/item/${id}`}><button className="btn btn-lightblue btn-text">Ver detalles</button></Link>        
        </div>
    </div>
  );
}
