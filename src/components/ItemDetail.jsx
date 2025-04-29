import ItemCount from './ItemCount'

const ItemDetail = (props) => {
  return (
    <div className={'card'}>
      <p className={'card-title'}>{props.product?.title}</p>
      <div className={'card-content'}>
        <img src={props.product?.pictureUrl}></img>
        <p>{props.product?.description}</p>
        <p>Precio: {props.product?.price}</p>
        <ItemCount></ItemCount>
      </div>
    </div>
  )
}

export default ItemDetail
