import './NavBar.css';
import CartWidget from './CartWidget/CartWidget';

function NavBar(){
  return(
    <nav className="Contenedor-nav">
      <div className="Titulo-vivero">
        <p className="titulo">Vivero</p>
      </div> 
      <div className="Contenedor-menu">
        <ul>
          <li><a href="index.html">Plantas interior</a></li>
          <li><a href="index.html">Plantas exterios</a></li>
          <li><a href="index.html">Sustratos</a></li>
          <li><a href="index.html">Contactanos</a></li>
          </ul>
      </div>
      <div className="Contenedor-Carrito">
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar