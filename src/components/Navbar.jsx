import CartWidget from './CartWidget'

function Navbar() {
  return (
    <div style={{ display: 'flex', gap: 15 }}>
      <p>logo</p>
      <p>Juegos Fisicos</p>
      <p>Juegos Digitales</p>
      <p>Consolas</p>
      <p>Perifericos</p>

      <CartWidget></CartWidget>
    </div>
  )
}

export default Navbar
