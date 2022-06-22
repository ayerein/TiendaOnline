import { Link } from 'react-router-dom'

import Img from '../carrito.png'

const Carrito = () => {
    return(
        <>
        <Link to="/carrito">    
            <img src={ Img} alt="icono carrito" />
        </Link>
        </>
    )
}

export default Carrito