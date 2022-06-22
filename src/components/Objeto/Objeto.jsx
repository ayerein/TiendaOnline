import { Link } from 'react-router-dom'

import './Objeto.css'


const Objeto = ({ img, nombre, descripcion, id }) => {
    return(
        <Link to= {`/detalle/${id} `} >
            <div className='contenedor-objeto'>
                <div key={id} className='objeto'>
                    <img src={img}  alt={nombre} />
                    <p className='titulo-objeto'>{nombre}</p>
                    <p className='descripcion'>{descripcion}</p>
                </div>
            </div>
        </Link>
    )
}

export default Objeto