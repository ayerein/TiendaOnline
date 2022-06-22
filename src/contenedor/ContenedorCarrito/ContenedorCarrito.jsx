import { Link } from "react-router-dom"

import ElementosCarrito from '../../components/ElementosCarrito/ElementosCarrito'
import { UsarContexto } from '../../contexto/Contexto'

import './ContenedorCarrito.css'


const ContenedorCarrito = () => {

    const { listaCarrito } = UsarContexto()

    return(
        <div className="contenedor-carrito">
            
            
            <div>
                {
                        listaCarrito.length === 0 ?
                            <div className='carrito-vacio'>
                                <h3>Tu carrito esta vacio</h3>
                                <Link to='/'>
                                    <button className="btn-input" >
                                        Ir a comprar
                                    </button>
                                </Link>
                            </div>  
                        :
                        <ElementosCarrito />
                }
            </div>
            
                
                          
            
            

        </div>
    )
}

export default ContenedorCarrito