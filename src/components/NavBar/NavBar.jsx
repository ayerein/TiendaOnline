import { Link } from 'react-router-dom'

import Carrito from '../Carrito/Carrito';
import { UsarContexto } from '../../contexto/Contexto';

import './NavBar.css';


function NavBar(){
  const { cantidadTotal } = UsarContexto()
  return(
    <nav className="contenedor-nav">
      <div className="titulo-vivero">
        <Link to="/">
          <p className="titulo">Vivero</p> 
        </Link>
      </div> 
      <div className="contenedor-menu">
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
      <div className="contenedor-carrito-nav">
        {cantidadTotal() !==0 && cantidadTotal()}
        <Carrito />
      </div>
    </nav>
  )
}

export default NavBar