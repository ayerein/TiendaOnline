
import './ItemCount.css';


const ItemCount = ({stockActual, count, restar, sumar, agregar}) => {


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