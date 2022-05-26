import './NavBar.css';
import Carrito from '../Carrito/Carrito';
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';

function NavBar(){
  const { cantidadTotal } = useCartContext()
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
        {cantidadTotal() !==0 && cantidadTotal()}
        <Carrito />
      </div>
    </nav>
  )
}

export default NavBar