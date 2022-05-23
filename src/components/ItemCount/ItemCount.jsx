import { useState } from "react";
import './ItemCount.css';
import InputCount from '../InputCount/InputCount'




const ItemCount = ({stock}) => {
    let [count, setCount] = useState(1)
    let [stockActual, setStock] = useState(stock)
    const [ inputType, setInputType] = useState('button')

    function sumar () {
        if (count < stockActual){
            setCount(count +1)
        }
    }

    function restar () {
        if (count > 1){
            setCount(count - 1)
        }
    }

    function agregar () {
        if (stockActual > 0){
            setStock(stockActual - count)
            setInputType('ínput')
            alert(`Agregaste ${count} productos al carrito`)
            setCount(count = 1)
        } else{
            alert('No hay mas stock')
        }
    }
    

    return(
        inputType === 'button' ?

        <div className="contenedor-count">
            <div className="contador">
                <p>Stock: {stockActual}</p>
                <button onClick={restar}>-</button>
                    {count}
                <button onClick={sumar}>+</button>
            </div>
            
            <button className="btn-agregar" onClick={agregar}>Agregar al carrito</button>
        </div>

        :
        <InputCount />
    )
}

export default ItemCount