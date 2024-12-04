import { createContext, useState } from "react";

// Lo que tenenmos que consumir
export const CartContext = createContext(false);


// el que provee acceso al contexto
export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    const addItem = (product) => {
      setCart((prevCart) => {
        const existingProduct = prevCart.find(item => item.id === product.id);
        if (existingProduct) {
          // Si el producto ya existe, actualizamos la cantidad
          return prevCart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + product.quantity }
              : item
          );
        } else {
          // Si no existe, agregamos el nuevo producto
          return [...prevCart, product];
        }
      });
    };

    // Obtenemos la cantidad de cada producto
    const getItemQuantity = (itemId) => {
        const item = cart.find(item => item.id === itemId);
        return item ? item.quantity : 0;
    }
    // Obtenemos la cantidad total de productos en el cart
    const getQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0)
    }
    // Obtenemos el precio total del cart
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    }

    console.log(cart)
    console.log(cart.length)

  return (
    <CartContext.Provider value={[cart, setCart, addItem, getItemQuantity, getQuantity, getTotalPrice]}>
      {children}
    </CartContext.Provider>
  );
}
