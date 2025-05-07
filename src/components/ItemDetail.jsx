import ItemCount from './ItemCount'

const ItemDetail = ({ product }) => {
  return (
    <div className={'card'}>
      <p className={'card-title'}>{product?.title}</p>
      <div className={'card-content'}>
        <img src={product?.pictureUrl}></img>
        <p>{product?.description}</p>
        <p>Precio: {product?.price}</p>
        <ItemCount product={product}></ItemCount>
      </div>
    </div>
  )
}

export default ItemDetail
