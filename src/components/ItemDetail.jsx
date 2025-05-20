import ItemCount from './ItemCount'

const ItemDetail = ({ product }) => {
  console.log(product)
  return (
    <div className={'card'}>
      <p className={'card-title'}>{product?.title}</p>
      <div className={'card-content'}>
        <img src={product?.pictureUrl}></img>
        <p>{product?.description}</p>
        <p>Precio: {product?.price}</p>
        {product.stock === 0 ? (
          <p style={{ color: 'red', fontSize: '24px' }}>No hay stock</p>
        ) : (
          <>
            <ItemCount product={product}></ItemCount>
            <p>Stock disponible: {product.stock}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default ItemDetail
