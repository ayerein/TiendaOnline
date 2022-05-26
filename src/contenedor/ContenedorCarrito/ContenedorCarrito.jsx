import './ContenedorCarrito.css'
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ContenedorCarrito = () => {

    const { cartList, vaciarCarrito, precioTotal, removerItem } = useCartContext()
    
    return(
        <div className="contenedor-carrito">
            {cartList.map(producto =>   <div className='contenedor-carrito-elementos' key={producto.id}>
                                            <div className='contenedor-carrito-ind'>
                                                <img src={producto.img} alt=""/>
                                                <p>{producto.nombre}</p>
                                                <p>Precio: ${producto.precio}</p> 
                                                <p>Cantidad: {producto.count}</p>
                                                </div>
                                            <button className='btn-input' onClick={ () => removerItem(producto.id)}>Eliminar</button>
                                        </div>
                        )}


            <div>
                {
                    cartList.length === 0 ?
                        <div className='carrito-vacio'>
                            <h3>Tu carrito esta vacio</h3>
                            <Link to='/'>
                                <button className="btn-input" >
                                    Ir a comprar
                                </button>
                            </Link>
                        </div>  
                    :
                    <div className='contenedor-carrito-finalizar'>
                        <p>Precio total: ${precioTotal()}</p>
                        <button className='btn-input' onClick={vaciarCarrito}>Vaciar Carrito</button> 
                    </div>
                }
            </div>
            
                
                          
            
            

        </div>
    )
}

export default ContenedorCarrito