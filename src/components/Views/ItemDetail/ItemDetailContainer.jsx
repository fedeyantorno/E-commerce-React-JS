import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail.jsx"
import { getProductById } from "../../../firebase/firebase"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Loading } from "../../Loading"

export const ItemDetailContainer = () => {

  const { prodId } = useParams()
  const [prod, setProd] = useState(null)
  const [error, setError] = useState(false)
  // Hacemos un renderizado condicional con el Loading
  const [loading, setLoading] = useState(true);

  const arrowLeftIcon = <FontAwesomeIcon icon={faArrowLeft} />

  const fetchProduct = async () => {
    try {
      const fetchedProduct = await getProductById(prodId);
      fetchedProduct ? setProd(fetchedProduct) : setError(true);
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener el producto:', error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [prodId]);

  if (loading) return <Loading />

  return (
    <div className="container mt-5">
      <h1 className="pb-4 text-center bottom-line">Detalles del Producto</h1>
      { !error ?
        (
        <div className="row">
          <div className="col-lg-12">
          {prod && <ItemDetail product={prod} />}
          </div>
        </div>
        ) : ( 
          <div className="d-flex flex-column align-items-center">
          <h5 className="mt-2">Producto inexistente</h5>
          <Link to={'/'}><button className="btn btn-outline-success mt-3">
          {arrowLeftIcon} Volver a la tienda
          </button></Link>
          </div>        
        )
      }
    </div>
  );
}