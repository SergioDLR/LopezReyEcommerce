import { useContext, useState } from 'react'
import { cartContext } from './CartContext'
import Swal from 'sweetalert2'

function ItemCount({ product }) {
  const { onAdd } = useContext(cartContext)

  const [contador, setContador] = useState(0)

  function sumar() {
    if (contador < product.stock) setContador(contador + 1)
    else Swal.fire(`El stock disponible del producto es de maximo ${product.stock}`)
  }

  function restar() {
    if (contador > 0) setContador(contador - 1)
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <button onClick={restar}>-</button>
        <h1>{contador}</h1>
        <button onClick={sumar}>+</button>
      </div>
      <button
        onClick={() => {
          onAdd(product, contador)
        }}
      >
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
