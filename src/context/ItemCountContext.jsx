import { createContext, useState } from "react"


// Lo que tenenmos que consumir
export const ItemCountContext = createContext(false)

// Lo que provee acceso al contexo
export function ItemCountProvider({ children }) {

    const [counter, setCounter] = useState(0)

  return (

    <ItemCountContext.Provider value={counter}>
        {children}
    </ItemCountContext.Provider>
  )
}
