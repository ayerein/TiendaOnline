import './NavBar.css';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom'

function NavBar(){
  return(
    <nav className="Contenedor-nav">
      <div className="Titulo-vivero">
        <Link to="/">
          <p className="titulo">Vivero</p>
        </Link>
      </div> 
      <div className="Contenedor-menu">
        <ul>
          <Link to="/int">
            <p>Plantas interior</p>
          </Link>
          <Link to="/ext">
          <p>Plantas exterior</p>
          </Link>
          <Link to="/sus">
          <p>Sustratos</p>
          </Link>
          <Link to="/contactanos">
          <p>Contactanos</p>
          </Link>
          </ul>
      </div>
      <div className="Contenedor-Carrito">
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar