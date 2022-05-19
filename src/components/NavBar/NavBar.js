import './NavBar.css';
import Carrito from '../Carrito/Carrito';
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
          <Link to="/categoria/interior">
            <p>Plantas interior</p>
          </Link>
          <Link to="/categoria/exterior">
            <p>Plantas exterior</p>
          </Link>
          <Link to="/categoria/sustratos">
            <p>Sustratos</p>
          </Link>
          </ul>
      </div>
      <div className="Contenedor-Carrito">
        <Carrito />
      </div>
    </nav>
  )
}

export default NavBar