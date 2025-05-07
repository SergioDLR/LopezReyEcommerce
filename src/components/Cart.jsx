import { useContext } from 'react'
import { cartContext } from './CartContext'

const Cart = () => {
  const { cart, cleanCart, removeItem, getTotalPrice } = useContext(cartContext)

  const totalPrice = formatearImporte(getTotalPrice())

  function formatearImporte(numero) {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    }).format(numero)
  }

  if (cart.length === 0) return <h2>Todavia no añadiste productos!</h2>

  return (
    <div>
      {cart.length === 1 ? <h2>Añadiste solo un producto, añadi mas!</h2> : <h2>Añadiste mas de un producto!</h2>}
      <h3>Tu total es de: {totalPrice} </h3>
      <button onClick={cleanCart}>Vaciar carrito</button>
      <h2>Tus productos!</h2>
      {cart.map((cartProduct) => (
        <div key={cartProduct.product.id}>
          <img src={cartProduct.product.pictureUrl} width={100}></img>
          <h3>{cartProduct.product.title}</h3>
          <h3>Precio unitario: {formatearImporte(cartProduct.product.price)}</h3>
          <h3>Cantidad: {cartProduct.quantity}</h3>
          <button
            onClick={() => {
              removeItem(cartProduct.product.id)
            }}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  )
}

export default Cart
