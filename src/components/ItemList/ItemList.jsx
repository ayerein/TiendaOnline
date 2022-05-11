import { useEffect, useState } from "react"
import {productos} from '../../data/data'
import Item from "../Item/Item"
import './ItemList.css'


const ItemList = () => {
    const [products, setProducts] = useState([])

    const getFetch = new Promise((resolve) => {
        setTimeout(() => {
            resolve( productos )
        }, 2000)
    })

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

    return (
        <div className="contenedor-itemlist">
          {
            products.length ? (
              <div className="contenedor-productos">
                {   
                    products.map((product) => {
                        
                        return (
                            <div key={product.id}>
                        <Item
                          img={product.img}
                          nombre={product.nombre}
                          precio={product.precio}
                          id={product.id}
                          />
                      </div>
                    );
                })
                }
              </div>
            ) : (
              <img className="img-loading" src="https://icon-library.com/images/loading-icon-gif/loading-icon-gif-10.jpg" alt="cargando" />
            )
          }
        </div>
      );
        
}

export default ItemList