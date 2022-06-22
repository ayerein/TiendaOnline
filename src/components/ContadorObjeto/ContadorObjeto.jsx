import './ContadorObjeto.css';

const ContadorObjeto = ({stockActual, contador, restar, sumar, agregar}) => {

    return(
        <div className="contenedor-contador-objeto">
            <div className="contador">
                <p>Stock: {stockActual}</p>
                <button onClick={restar}>-</button>
                    {contador}
                <button onClick={sumar}>+</button>
            </div>
            
            <button className="btn-agregar" onClick={agregar}>Agregar al carrito</button>
        </div>
    )
}

export default ContadorObjeto