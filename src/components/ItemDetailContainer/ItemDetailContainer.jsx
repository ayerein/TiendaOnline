
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFetch } from '../../helpers/getFetch'
import { useState, useEffect } from 'react'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        getFetch(id)
        .then(respuesta => setProducto(respuesta))
        .catch((err) => console.log(err))
        .finally(()=> setLoading(true))
    }, [id])

    

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