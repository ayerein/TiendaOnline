import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function addToCart(item) {
        const index = cartList.findIndex(producto => producto.id === item.id)
        if (index !== -1) {
            cartList[index].count += 1
            setCartList([ ...cartList])
        } else {
            setCartList([
                ...cartList,
                item    
            ])
        }
    }
    function restarCart(item) {
        const index = cartList.findIndex(producto => producto.id === item.id)
        if (index !== -1) {
            cartList[index].count -= 1
            setCartList([ ...cartList])
        }
    }

    const vaciarCarrito = () => {
        setCartList([])
    }
    const removerItem = (id) => {
        setCartList(cartList.filter(prod => prod.id !== id))
    }
    const sumarCant = (producto) => {
        (producto.count < producto.stock) && addToCart(producto)
    }
    const restarCant = (producto) => {
        (producto.count > 1) && restarCart(producto)
    }
    const cantidadTotal = () => {
        return cartList.reduce((contador, prod) => contador += prod.count ,0)
    }
    const precioTotal = () => {
        return cartList.reduce((contador, prod) => contador + (prod.count * prod.precio) ,0)
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito,
            removerItem,
            cantidadTotal,
            precioTotal,
            sumarCant,
            restarCant,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider