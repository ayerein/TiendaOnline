import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from "react"
import { getFetch } from '../../helpers/getFetch';
import { Link, useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [producto, setProducto] = useState([])

    const { categoria } = useParams()

    useEffect(() => {
        if (categoria) {
          getFetch()
          .then(respuesta => setProducto(respuesta.filter((prods) => prods.categoria === categoria )))
          
          .catch((err) => console.log(err))
        } else {
          getFetch()
          .then(respuesta => setProducto(respuesta))
          .catch((err) => console.log(err))
        }
    }, [categoria])

    
    return(
        <div className="contenedor-itemlist">
          {
            producto.length ? (
              <Link to= { `/detalle/${producto.id}` }>
                <ItemList producto={producto}/>
              </Link>
        ) : (
            <img className="img-loading" src="https://icon-library.com/images/loading-icon-gif/loading-icon-gif-10.jpg" alt="cargando" />
          )
        }
      </div>
                  
    )
}

export default ItemListContainer