import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
const ItemDetailContainer = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getFirestore()
    const documentRef = doc(db, 'products', productId)

    getDoc(documentRef)
      .then((response) => {
        setProduct({ ...response.data(), id: response.id })
        setLoading(false)
      })
      .catch(() => {
        console.log('error en carga de producto')
      })
  }, [productId])

  if (loading)
    return (
      <div>
        <span className="skeleton">&zwnj;</span>
        <span className="skeleton">&zwnj;</span>
        <span className="skeleton">&zwnj;</span>
        <span className="skeleton">&zwnj;</span>
        <span className="skeleton">&zwnj;</span>
      </div>
    )

  return (
    <div>
      <ItemDetail product={product}></ItemDetail>
    </div>
  )
}

export default ItemDetailContainer
