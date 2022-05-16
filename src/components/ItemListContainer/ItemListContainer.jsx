import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from "react"
import { getFetch } from '../../helpers/getFetch';

const ItemListContainer = () => {
    const [producto, setProducto] = useState([])

    useEffect(() => {
        getFetch()
        .then(respuesta => setProducto(respuesta))
        .catch((err) => console.log(err))
    }, [])


    
    return(
        <div className="contenedor-itemlist">
          {
            producto.length ? (
        <ItemList producto={producto}/>
        ) : (
            <img className="img-loading" src="https://icon-library.com/images/loading-icon-gif/loading-icon-gif-10.jpg" alt="cargando" />
          )
        }
      </div>
                  
    )
}

export default ItemListContainer