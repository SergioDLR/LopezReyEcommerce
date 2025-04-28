import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import './index.css'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer gretting={'Bienvenidos a mi tienda!'}></ItemListContainer>
    </>
  )
}

export default App
