import { createContext, useContext, useState } from "react";

const Contexto = createContext([])

export const UsarContexto = () => useContext(Contexto)

const ProveedorContexto = ({children}) => {

    const [listaCarrito, cambioListaCarrito] = useState([])

    function añadirAlCarrito(item) {
        const index = listaCarrito.findIndex(producto => producto.id === item.id)
        if (index !== -1) {
            listaCarrito[index].contador += 1
            cambioListaCarrito([ ...listaCarrito])
        } else {
            cambioListaCarrito([
                ...listaCarrito,
                item    
            ])
        }
    }
    function restarCart(item) {
        const index = listaCarrito.findIndex(producto => producto.id === item.id)
        if (index !== -1) {
            listaCarrito[index].contador -= 1
            cambioListaCarrito([ ...listaCarrito])
        }
    }
    


    const vaciarCarrito = () => {
        cambioListaCarrito([])
    }
    const removerItem = (id) => {
        cambioListaCarrito(listaCarrito.filter(prod => prod.id !== id))
    }
    const sumarCant = (producto) => {
        (producto.contador < producto.stock) && añadirAlCarrito(producto)
    }
    const restarCant = (producto) => {
        (producto.contador > 1) && restarCart(producto)
    }
    const cantidadTotal = () => {
        return listaCarrito.reduce((contador, prod) => contador += prod.contador ,0)
    }
    const precioTotal = () => {
        return listaCarrito.reduce((contador, prod) => contador + (prod.contador * prod.precio) ,0)
    }

    return (
        <Contexto.Provider value={{
            listaCarrito,
            añadirAlCarrito,
            vaciarCarrito,
            removerItem,
            cantidadTotal,
            precioTotal,
            sumarCant,
            restarCant,
        }}>
            {children}
        </Contexto.Provider>
    )
}

export default ProveedorContexto