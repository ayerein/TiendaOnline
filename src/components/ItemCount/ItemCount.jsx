import { useState } from "react";
import './ItemCount.css';




const ItemCount = ({stock}) => {
    let [count, setCount] = useState(1)
    let [stockActual, setStock] = useState(stock)

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
            alert(`Agregaste ${count} productos al carrito`)
            setCount(count = 1)
        } else{
            alert('No hay mas stock')
        }
    }
    

    return(

        <div className="contenedor-count">
            <div className="contador">
                <p>Stock: {stockActual}</p>
                <button onClick={restar}>-</button>
                    {count}
                <button onClick={sumar}>+</button>
            </div>
            
            <button className="btn-agregar" onClick={agregar}>Agregar al carrito</button>
        </div>

    )
}

export default ItemCount