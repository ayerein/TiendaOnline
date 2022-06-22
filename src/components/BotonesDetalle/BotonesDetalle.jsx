import { Link } from "react-router-dom"

import './BotonesDetalle.css'

const BotonesDetalle = () => {
    return(
        <>
        <Link to='/carrito'>
            <button className="btn-input" >
                Ir al carrito
            </button>
        </Link>
        <Link to='/'>
            <button className="btn-input" >
                Seguir comprando
            </button>
        </Link>
        </>
    )
}

export default BotonesDetalle