import { UsarContexto } from "../../contexto/Contexto"


const Elementos = ( {continuar} ) => {

    const { listaCarrito, removerItem, sumarCant, restarCant, precioTotal, vaciarCarrito } = UsarContexto()

    return(
        <div>
                    {
                    listaCarrito.map(producto =>  
                    <div className='contenedor-carrito-elementos' key={producto.id}>
                        <div className='contenedor-carrito-ind'>
                            <img src={producto.img} alt=""/>
                            <p>{producto.nombre}</p>
                            <p>Precio: ${producto.precio}</p> 
                            <div className="contenedor-cantidad">
                                <button className='btn-cantidad' onClick={ () => restarCant(producto)}>-</button>
                                <p>{producto.contador}</p>
                                <button className='btn-cantidad' onClick={ () => sumarCant(producto)}>+</button>
                            </div> 
                        </div>
                        <button className='btn-input' onClick={ () => removerItem(producto.id)}>Eliminar</button>
                    </div>
                    )
                    }
                    <div className="contenedor-botones-carrito">
                        {
                        listaCarrito.length === 0 ? <></> :
                        <>
                        <p>Precio total: ${precioTotal()}</p>
                        <button className='btn-input' onClick={vaciarCarrito}>Vaciar Carrito</button>
                        <button className='btn-input' onClick={continuar}>Continuar</button>
                        </>
                        }
                    </div>
                </div>
    )
}

export default Elementos