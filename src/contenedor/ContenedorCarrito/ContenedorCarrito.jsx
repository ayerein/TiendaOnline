import './ContenedorCarrito.css'
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { getFirestore, collection, addDoc } from 'firebase/firestore'


const ContenedorCarrito = () => {

    const { cartList, vaciarCarrito, precioTotal, removerItem, sumarCant, restarCant } = useCartContext()
    
    
    function generarOrden () {
        let orden = {}

        orden.buyer = { nombre: 'Maria', email: 'maria@gmail.com', telefono:'02455888'}
        orden.total = precioTotal()

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.nombre
            const precio = cartItem.precio * cartItem.count
            const cantidad = cartItem.count

            return {id, precio, nombre, cantidad}
        })
        const db = getFirestore()
        const queryCollection = collection(db, 'ordenes')
        addDoc(queryCollection, orden)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(() => vaciarCarrito())
    }


    return(
        <div className="contenedor-carrito">
            {cartList.map(producto =>   <div className='contenedor-carrito-elementos' key={producto.id}>
                                            <div className='contenedor-carrito-ind'>
                                                <img src={producto.img} alt=""/>
                                                <p>{producto.nombre}</p>
                                                <p>Precio: ${producto.precio}</p> 
                                                <div className="contenedor-cantidad">
                                                    <button className='btn-cantidad' onClick={ () => restarCant(producto)}>-</button>
                                                    <p>{producto.count}</p>
                                                    <button className='btn-cantidad' onClick={ () => sumarCant(producto)}>+</button>
                                                </div> 
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
                            <Link to='/finalizarCompra'>
                            <button className='btn-input' onClick={generarOrden}>Finalizar Compra</button> 
                            </Link>
                            
                            
                        </div>   
                }
            </div>
            
                
                          
            
            

        </div>
    )
}

export default ContenedorCarrito