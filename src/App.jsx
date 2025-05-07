import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartProvider from './components/CartContext'
import './index.css'
import Cart from './components/Cart'

function App() {
  //Que un estado cambie
  //Que alguna de las props del componente cambien
  //Es cuando el componente Padre se renderiza
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
