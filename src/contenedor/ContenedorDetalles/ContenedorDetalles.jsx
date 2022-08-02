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
                    <img className="img-cargando" src="https://cdn.dribbble.com/users/619790/screenshots/2308625/media/107daa959aa7a5e737ae6d97a712b866.gif" alt="cargando" />
                </div>
            )}
        </div>
    )
}

export default ContenedorDetalles