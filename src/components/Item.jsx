const Item = (props) => {
  return (
    <div style={{ border: '2px solid black', borderRadius: '8px', padding: '20px', minWidth: 200 }}>
      <h2>{props.product.title}</h2>
      <h3>$ {props.product.price}</h3>
    </div>
  )
}

export default Item
