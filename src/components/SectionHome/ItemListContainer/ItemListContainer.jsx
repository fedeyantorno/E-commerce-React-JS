import { useEffect, useState } from "react";
import { Item } from "../Item/Item";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { Loading } from "../../Loading.jsx";
import { getProducts, getCategory, getSubCategory } from "../../../firebase/firebase";
import { ButtonFilterCategory } from "../ButtonFilter/ButtonFilterCategory.jsx";
import { ButtonFilterSubcategory } from "../ButtonFilter/ButtonFilterSubcategory.jsx";

export const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const { categoryId, subcategoryId } = useParams();
  // Hacemos un renderizado condicional con el Loading
  const [loading, setLoading] = useState(true);

  const getData = async () => {
		const fn = categoryId || subcategoryId ? (categoryId ? () => getCategory(categoryId) : () => getSubCategory(subcategoryId)) : () => getProducts(); // --- Porque no se le pasa products al getProducts? ---
		const products = await fn();
		setProducts(products);
		setLoading(false);
	};

	useEffect(() => {
		getData();
	}, [categoryId, subcategoryId]);

  	if (loading) return <Loading />;

	return (
		<>
			<h2 className="pb-4 text-center">
				{title} {categoryId} {subcategoryId}
			</h2>
			<div className="d-flex justify-content-between">
            <aside className="sidebar">
                <h5>Categorías</h5>
                <ul className="filter">
					<ButtonFilterCategory/>
                </ul>
                <h5 className="mt-4">Subcategorías</h5>
                <ul className="filter">
					<ButtonFilterSubcategory/>
                </ul>
            </aside>
            <main className="main-content">
			<div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
				{products &&
					products.map((product) => (
						<div className="col" key={product.id}>
							<Item {...product} />
						</div>
					))}
			</div>
            </main>
        </div>
		</>
	);
}
