/* import ItemCount from '../ItemCount/ItemCount'; */
import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({ img, precio, nombre, descripcion, id, stock }) => {
    
    return(
        <Link to= {`/detalle/${id} `} >
            <div className='contenedor-item'>
                    <div key={id} className='item'>
                        <img src={img}  alt={nombre} />
                        <p className='titulo-item'>{nombre}</p>
                        <p className='descripcion'>{descripcion}</p>
                        {/* <p>Precio: ${precio}</p>
                        <ItemCount stock={stock}/> */}
                    </div>
                
            </div>
        </Link>
    )
}

export default Item