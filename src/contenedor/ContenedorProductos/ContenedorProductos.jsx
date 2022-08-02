import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

import ListaObjetos from '../../components/ListaObjetos/ListaObjetos';

const ContenedorProductos = () => {
  const [productos, cambioProductos] = useState([])

  const { categoria } = useParams()

  useEffect(() => {
    const datos = getFirestore()
    const coleccion = collection(datos, 'productos')
    const filtroColeccion = categoria ? query(coleccion, where('categoria', '==', categoria)) : coleccion
    getDocs(filtroColeccion)
    .then(resp => cambioProductos( resp.docs.map(item => ({ id: item.id, ...item.data()})) ))
    .catch((err) => console.log(err))
  }, [categoria])
    
  return(
    <div className="contenedor-lista">
      { 
        productos.length ? ( <ListaObjetos producto={productos}/> ) : (
        <img className="img-cargando" src="https://cdn.dribbble.com/users/619790/screenshots/2308625/media/107daa959aa7a5e737ae6d97a712b866.gif" alt="cargando" />
        ) 
      }
    </div>
  )
}

export default ContenedorProductos