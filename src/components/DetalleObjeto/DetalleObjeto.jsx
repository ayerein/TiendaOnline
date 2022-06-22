import { useState } from 'react'

import { UsarContexto } from '../../contexto/Contexto'
import ContadorObjeto from '../ContadorObjeto/ContadorObjeto'
import BotonesDetalle from '../BotonesDetalle/BotonesDetalle'

import './DetalleObjeto.css'


const DetalleObjeto = ( { producto } ) => {

    let [contador, cambioContador] = useState(1)
    let [stockActual, cambioStock] = useState(producto.stock)
    const [ tipoDeInput, cambioTipoDeInput] = useState('button')   
    const {añadirAlCarrito} = UsarContexto()

    function sumar () {
        if (contador < stockActual) {cambioContador(contador +1)}
    }

    function restar () {
        if (contador > 1) {cambioContador(contador - 1)}
    }

    function agregar () {
        if (stockActual > 0){
            cambioStock(stockActual - contador)
            cambioTipoDeInput('ínput')
            añadirAlCarrito({...producto, contador})
        }
    }

 
    return(
        <div className='contenedor-detalles'>
            <div className='contenedor-izquierda'>
                <img src={producto.img} alt='Imagen del producto.'  />
            </div>
            <div className='contenedor-derecha'>
                <p className='titulo-detalle'>{producto.nombre}</p>
                <p className='descripcion-detalle'>{producto.descripcion}</p>
                <p className='precio-detalle'>Precio: ${producto.precio}</p>
                {

                    tipoDeInput === 'button' ?
                    <ContadorObjeto
                    stockActual = {stockActual}
                    contador = {contador}
                    restar = {restar}
                    sumar = {sumar}
                    agregar = {agregar}
                    />
                    :
                <BotonesDetalle />
                }
            </div>
            
        </div>
        
    ) 
}

export default DetalleObjeto