import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ( { producto } ) => {

    return(
        <div className="contenedor-detalles">
            <div className='contenedor-izquierda'>
                <img src={producto.img} alt="" />
            </div>
            <div className='contenedor-derecha'>
                <p className='titulo-detalle'>{producto.nombre}</p>
                <p className='descripcion-detalle'>{producto.descripcion}</p>
                <p className='precio-detalle'>Precio: ${producto.precio}</p>
                <ItemCount stock={producto.stock}/>
            </div>
            
        </div>
        
    )
}

export default ItemDetail 