import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

function Navbar() {
  return (
    <div style={{ display: 'flex', gap: 15 }}>
      <Link to="/">Logo</Link>

      <Link to={'/category/fisic'}>Juegos Fisicos</Link>
      <Link to={'/category/cd-key'}>Juegos Digitales</Link>
      <Link to={'/category/console'}>Consolas</Link>
      <Link to={'/category/peripherals'}>Perifericos</Link>

      <CartWidget></CartWidget>
    </div>
  )
}

export default Navbar
