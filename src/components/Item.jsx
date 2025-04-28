const Item = (props) => {
  return (
    <div style={{ border: '2px solid black', borderRadius: '8px', padding: '20px', width: 200 }}>
      <h4>{props.product.title}</h4>
      <img width={120} src={props.product.pictureUrl}></img>
      <h3>$ {props.product.price}</h3>
    </div>
  )
}

export default Item
