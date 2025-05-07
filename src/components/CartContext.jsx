import { createContext, useState } from 'react'

export const cartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const onAdd = (product, quantity) => {
    //Verificar si el producto ya esta en cart
    //si esta sumar las cantidades
    //si no esta:
    setCart([...cart, { product: product, quantity: quantity }])
  }

  const cleanCart = () => {
    setCart([])
  }

  const removeItem = (productId) => {
    setCart(cart.filter((cartProduct) => cartProduct.product.id !== productId))
  }

  const getTotalPrice = () => {
    let totalPrice = 0

    cart.forEach((cartProduct) => {
      totalPrice = totalPrice + cartProduct.product.price * cartProduct.quantity
    })

    return totalPrice
  }

  const getTotalItemsInCart = () => {
    let totalItemsInCart = 0

    cart.forEach((cartProduct) => {
      totalItemsInCart = totalItemsInCart + cartProduct.quantity
    })
    return totalItemsInCart
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        onAdd,
        cleanCart,
        removeItem,
        getTotalPrice,
        getTotalItemsInCart
      }}
    >
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider
