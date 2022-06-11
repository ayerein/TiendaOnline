
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'

import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = doc(db, 'productos', id)
        getDoc(dbQuery)
        .then(resp => setProducto( { id: resp.id, ...resp.data()}))
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