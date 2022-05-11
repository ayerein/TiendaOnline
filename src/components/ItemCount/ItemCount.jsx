import { useState } from "react";
import './ItemCount.css';




const ItemCount = () => {
    let [count, setCount] = useState(1)
    let [stock, setStock] = useState(5)

    function sumar () {
        if (count < stock){
            setCount(count +1)
        }
    }

    function restar () {
        if (count > 1){
            setCount(count - 1)
        }
    }

    function agregar () {
        if (stock > 0){
            setStock(stock - count)
            alert(`Agregaste ${count} productos al carrito`)
            setCount(count = 1)
        } else{
            alert('No hay mas stock')
        }
    }

    return(

        <div className="contenedor-count">
            <div className="contador">
                <p>Stock: {stock}</p>
                <button onClick={restar}>-</button>
                    {count}
                <button onClick={sumar}>+</button>
            </div>
            
            <button className="btn-agregar" onClick={agregar}>Agregar al carrito</button>
        </div>

    )
}

export default ItemCount