import { createContext, useState } from "react";

// Lo que tenenmos que consumir
export const CartContext = createContext(false);


// el que provee acceso al contexto
export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    // funciones para administrar cambios en el cart
    const addItem = (item, quantity) => {
      // Pasamos la cantidad de un mismo producto
      const itemWithQuantity = {
        ...item,
        quantity: quantity
      }
        setCart([...cart, itemWithQuantity])
    }
    // Obtenemos la cantidad de cada producto
    const getItemQuantity = (itemId) => {
        const item = cart.find(item => item.id === itemId);
        return item ? item.quantity : 0;
    }
    // Obtenemos la cantidad total de productos en el cart
    const getQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0)
    }

    console.log(cart)
    console.log(cart.length)

  return (
    <CartContext.Provider value={[cart, setCart, addItem, getItemQuantity, getQuantity]}>
      {children}
    </CartContext.Provider>
  );
}
