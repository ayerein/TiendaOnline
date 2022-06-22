import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

import DetalleObjeto from '../../components/DetalleObjeto/DetalleObjeto'

import './ContenedorDetalles.css'

const ContenedorDetalles = () => {
    const [producto, cambioProducto] = useState({})
    const [carga, cambioCarga] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        const datos = getFirestore()
        const consultaDatos = doc(datos, 'productos', id)
        getDoc(consultaDatos)
        .then(resp => cambioProducto( { id: resp.id, ...resp.data()}))
        .catch((err) => console.log(err))
        .finally(()=> cambioCarga(true))
    }, [id])


    return(
        <div>
            { carga ? ( <DetalleObjeto producto={producto}/> ) : (
                <div className='contenedor-cargando'>
                    <img className="img-cargando" src="https://icon-library.com/images/loading-icon-gif/loading-icon-gif-10.jpg" alt="cargando" />
                </div>
            )}
        </div>
    )
}

export default ContenedorDetalles