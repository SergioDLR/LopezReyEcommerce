import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartProvider from './components/CartContext'
import './index.css'
import Cart from './components/Cart'
import { createFirebaseApp } from './utils/configFirebase'
import Checkout from './components/Checkout'
function App() {
  createFirebaseApp()

  return (
    <BrowserRouter>
      {import.meta.env.VITE_A}
      <CartProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
