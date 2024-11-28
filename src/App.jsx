import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import ItemListContainer from "./components/SectionHome/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Views/ItemDetail/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Views/Cart/Cart";
import { ItemCountProvider } from "./context/ItemCountContext";

export default function App() {

  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <ItemCountProvider>        
        <HeaderContainer />
        <section className="section-wrap section-home">
        <div className="container-fluid">
        <Routes>
          <Route exact path="/" element={<ItemListContainer title = 'Bienvenido a Cuisine Bazar'/>} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer title = 'Productos'/>} />
          <Route exact path="/item/:prodId" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        </div>
        </section>
        </ItemCountProvider>
      </CartProvider>
      </BrowserRouter>
    </>
  );
}