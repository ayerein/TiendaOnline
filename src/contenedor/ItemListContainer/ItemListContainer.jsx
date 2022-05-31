import ItemList from '../../components/ItemList/ItemList';
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    const { categoria } = useParams()

    useEffect(() => {
      if (categoria) {
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        const queryCollectionFilter = query(queryCollection, where('categoria', '==', categoria))
        getDocs(queryCollectionFilter)
        .then(resp => setProductos( resp.docs.map(item => ({ id: item.id, ...item.data()})) ))
        .catch((err) => console.log(err))
      } else {
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        getDocs(queryCollection)
        .then(resp => setProductos( resp.docs.map(item => ({ id: item.id, ...item.data()})) ))
        .catch((err) => console.log(err))
      }
    }, [categoria])
    
    
    return(
        <div className="contenedor-itemlist">
          {
            productos.length ? (
                <ItemList producto={productos}/>
             
        ) : (
            <img className="img-loading" src="https://icon-library.com/images/loading-icon-gif/loading-icon-gif-10.jpg" alt="cargando" />
          )
        }
      </div>
                  
    )
}

export default ItemListContainer