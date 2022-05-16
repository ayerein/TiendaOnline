
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFetch } from '../../helpers/getFetch'
import { useState, useEffect } from 'react'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getFetch('1')
        .then(respuesta => setProducto(respuesta))
        .catch((err) => console.log(err))
        .finally(()=> setLoading(true))
    }, [])

    
    return(
        <div>
            {
            loading ? (
                <ItemDetail producto={producto}/>
        ) : (
            <div className='contenedor-loading'>
                <img className="img-loading" src="https://icon-library.com/images/loading-icon-gif/loading-icon-gif-10.jpg" alt="cargando" />
            </div>
          )
        }
        
        </div>
                  
    )
}

export default ItemDetailContainer