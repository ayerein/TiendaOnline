import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import InputCount from '../InputCount/InputCount'
import { useState, } from 'react'
import { useCartContext } from '../../context/CartContext'

const ItemDetail = ( { producto } ) => {

    let [count, setCount] = useState(1)
    let [stockActual, setStock] = useState(producto.stock)
    const [ inputType, setInputType] = useState('button')   
    const {addToCart, cartList} = useCartContext()

    function sumar () {
        if (count < stockActual) {setCount(count +1)}
    }

    function restar () {
        if (count > 1) {setCount(count - 1)}
    }

    function agregar () {
        if (stockActual > 0){
            setStock(stockActual - count)
            setInputType('ínput')
            addToCart({...producto, count})
        }
    }

    return(
        <div className="contenedor-detalles">
            <div className='contenedor-izquierda'>
                <img src={producto.img} alt="" />
            </div>
            <div className='contenedor-derecha'>
                <p className='titulo-detalle'>{producto.nombre}</p>
                <p className='descripcion-detalle'>{producto.descripcion}</p>
                <p className='precio-detalle'>Precio: ${producto.precio}</p>
                {

                    inputType === 'button' ?
                    <ItemCount 
                    stockActual = {stockActual}
                    count = {count}
                    restar = {restar}
                    sumar = {sumar}
                    agregar = {agregar}
                    />
                    :
                <InputCount />
                }
            </div>
            
        </div>
        
    )
}

export default ItemDetail 