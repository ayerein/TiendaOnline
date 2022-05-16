import Item from "../Item/Item"
import './ItemList.css'


const ItemList = ({producto}) => {
    return (
              <div className="contenedor-productos">
                {   
                    producto.map((prod) => {
                        
                        return (
                            <div key={prod.id}>
                        <Item 
                          img={prod.img}
                          nombre={prod.nombre}
                          descripcion={prod.descripcion}
                          precio={prod.precio}
                          id={prod.id}
                          stock={prod.stock}
                          />
                            </div>
                        );
                    })
                }
              </div>
      );
        
}

export default ItemList