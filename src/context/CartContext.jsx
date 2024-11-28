import { createContext, useState } from "react";

// Lo que tenenmos que consumir
export const CartContext = createContext(false);


// el que provee acceso al contexto
export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    // funciones para administrar cambios en el cart
    const addItem = (item, addCart, goCart, itemCount) => {
        setCart([...cart, item])
        // addCart.classList.add('hide');
        // goCart.classList.remove('hide');
        // itemCount.setAttribute('class', 'hidden')
    }

  return (
    <CartContext.Provider value={[cart, setCart, addItem]}>
      {children}
    </CartContext.Provider>
  );
}
