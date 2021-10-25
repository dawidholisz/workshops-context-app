import React, { useContext, useState } from 'react'
import products from 'data/products.json'

const CartContext = React.createContext({ cart: [] })

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addProductToCart = (id) => {
    setCart([...cart, products.find(({ id: productId }) => id === productId)])
  }
  const removeProductFromCart = (id) => {
    setCart(cart.filter(({ id: productId }) => id !== productId))
  }
  return (
    <CartContext.Provider value={{
      cart,
      addProductToCart,
      removeProductFromCart,
      itemsInCartCount: cart.length,
    }}>{children}</CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartContext, CartProvider, useCart }
