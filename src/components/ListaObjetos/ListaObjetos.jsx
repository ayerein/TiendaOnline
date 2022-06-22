import Objeto from "../Objeto/Objeto";

import './ListaObjetos.css'


const ListaObjetos = ({producto}) => {
  return (
    <div className="contenedor-productos">
      {   
        producto.map((prod) => {
          return (
            <div key={prod.id}>
              <Objeto 
                img={prod.img}
                nombre={prod.nombre}
                descripcion={prod.descripcion}
                id={prod.id}
                />
            </div>
          );
        })
      }
    </div>
  );   
}

export default ListaObjetos