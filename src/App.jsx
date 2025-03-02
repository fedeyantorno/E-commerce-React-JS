import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { ItemListContainer } from "./components/SectionHome/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/Views/ItemDetail/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Views/Cart/Cart";
import { Checkout } from "./components/Views/Checkout/Checkout";
import Home from "./components/SectionHome/Home/Home";

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
          <Route exact path="/products" element={<ItemListContainer title = 'Bienvenido a Cuisine Bazar'/>} />
          <Route exact path="/:categoryId" element={<ItemListContainer title = 'Productos'/>} />
          <Route exact path="/subcategory/:subcategoryId" element={<ItemListContainer title = 'Productos'/>} />
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