import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from "react"
import {productos} from '../../data/data'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const getProductsFromDB = async () => {
        try{
            const result = await getFetch;
            setProducts(result);
        } catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        getProductsFromDB()
    }, )

    const getFetch = new Promise((resolve) => {
        setTimeout(() => {
            resolve( productos )
        }, 2000)
    })


    
    return(
        <div className="contenedor-itemlist">
          {
            products.length ? (
        <ItemList products={products}/>
        ) : (
            <img className="img-loading" src="https://icon-library.com/images/loading-icon-gif/loading-icon-gif-10.jpg" alt="cargando" />
          )
        }
      </div>
                  
    )
}

export default ItemListContainer