import Img from '../carrito.png'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return(
        <>
        <Link to="/">    
            <img src={ Img} alt="icono carrito" />
        </Link>
        </>
    )
}

export default CartWidget