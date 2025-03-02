import { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";

export const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <div className="d-flex flex-column align-items-center mt-5"><div><FadeLoader color="grey" height={15} margin={2}/></div><h5 className="mt-2">Cargando...</h5></div> : null}
    </>
  );
}
