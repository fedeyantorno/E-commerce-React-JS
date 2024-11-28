import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.jsx";
import { getSingleProduct } from "../../../firebase/firebase";

export default function ItemDetailContainer() {

  const { prodId } = useParams();

  const [prod, setProd] = useState(null);

  useEffect(() => {
    getSingleProduct(prodId).then(product => setProd(product));
    console.log(prodId)
  }, [])


  return (
    <div className="container mt-5">
      <h1 className="pb-4 text-center bottom-line">Detalles del Producto</h1>
      {
        <div className="row">
          <div className="col-lg-12">
          {prod && <ItemDetail product={prod} />}
          </div>
        </div>
      }
    </div>
  );
}