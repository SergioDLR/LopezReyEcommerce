import { Link } from 'react-router-dom'
import cartSvg from '../assets/icons/cart.svg'
import { useContext } from 'react'
import { cartContext } from './CartContext'

function CartWidget() {
  const { getTotalItemsInCart } = useContext(cartContext)
  const totalItemsInCart = getTotalItemsInCart()

  return (
    <div style={{ marginLeft: 'auto', display: 'flex', gap: 10 }}>
      <h2>{totalItemsInCart > 0 && totalItemsInCart}</h2>
      <Link to="/cart">
        <img src={cartSvg} alt="carrito" width={50} />
      </Link>
    </div>
  )
}

export default CartWidget
