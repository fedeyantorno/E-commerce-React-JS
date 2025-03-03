import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { Products } from "./pages/Products/Products";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./pages/Cart/Cart";
import { Checkout } from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";

export const App = () => {

  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <HeaderContainer />
        <section className="section-wrap">
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:categoryId" element={<Products title = 'Productos'/>} />
          <Route exact path="/subcategory/:subcategoryId" element={<Products title = 'Productos'/>} />
          <Route exact path="/item/:prodId" element={<ItemDetailContainer />} />
          <Route exact path="/search" element={<ItemDetailContainer title = 'Resultados' />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
        </div>
        </section>
      </CartProvider>
      </BrowserRouter>
    </>
  );
}