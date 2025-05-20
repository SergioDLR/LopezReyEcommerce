import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div style={{ border: '2px solid black', borderRadius: '8px', padding: '20px', width: 200 }}>
      <h4>{props.product.title}</h4>
      <img width={120} src={props.product.pictureUrl}></img>
      <h3>$ {props.product.price}</h3>
      {props.product.stock === 0 ? (
        <p style={{ color: 'red', fontSize: '24px' }}>No hay stock</p>
      ) : (
        <Link to={`/item/${props.product.id}`}>Ver detalle!</Link>
      )}
    </div>
  )
}

export default Item
