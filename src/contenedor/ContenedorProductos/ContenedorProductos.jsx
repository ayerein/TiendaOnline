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
        <img className="img-cargando" src="https://icon-library.com/images/loading-icon-gif/loading-icon-gif-10.jpg" alt="cargando" />
        ) 
      }
    </div>
  )
}

export default ContenedorProductos