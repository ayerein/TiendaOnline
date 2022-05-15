import Item from "../Item/Item"
import './ItemList.css'


const ItemList = ({products}) => {
    return (
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
                          stock={product.stock}
                          />
                            </div>
                        );
                    })
                }
              </div>
      );
        
}

export default ItemList