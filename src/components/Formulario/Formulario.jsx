import { useState } from 'react'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

import { UsarContexto } from "../../contexto/Contexto"

const Formulario = () => {
    const { listaCarrito, precioTotal, vaciarCarrito } = UsarContexto()

    const [ nombreInput, cambioNombreInput ] = useState()
    const [ telefonoInput, cambioTelefonoInput ] = useState()
    const [ emailRep, cambioEmailRep ] = useState()
    const [ emailInput, cambioEmailInput ] = useState()

    const [ errorEmail, cambioErrorEmail ] = useState('')

    function comprobarEmail () {
        {emailRep === emailInput ? (generarOrden()) : (cambioErrorEmail('Los email deben coincidir')) } 
        
    }

    function generarOrden () {
        let orden = {}

        orden.cliente = { nombre: nombreInput, email: emailRep, telefono: telefonoInput}
        orden.total = precioTotal()

        orden.objetos = listaCarrito.map(obj => {
            const id = obj.id
            const nombre = obj.nombre
            const precio = obj.precio * obj.contador
            const cantidad = obj.contador

            return {id, precio, nombre, cantidad}
        })
        const datos = getFirestore()
        const consultaDatos = collection(datos, 'ordenes')
        addDoc(consultaDatos, orden)
        .then(resp => alert(`El id de tu orden es: ${orden.objetos[0].id}`))
        .catch(err => console.log(err))
        .finally(() => vaciarCarrito())
    }

    return(
        <div className='contenedor-carrito-finalizar'>
            <form className='formulario' onSubmit={e => {e.preventDefault()}}>
            <h3>Para continuar tu compra completa tus datos:</h3>
            <input type="text" name="nombreInput" placeholder='Ingresa tu nombre' autoComplete='off' onChange={(e) => {cambioNombreInput(e.target.value)}}/>
            <input type="text" name="telefonoInput" placeholder='Ingresa tu numero de telefono' autoComplete='off' onChange={(e) => {cambioTelefonoInput(e.target.value)}}/>
            <input type="email" name="emailInput" placeholder='Ingresa tu email' autoComplete='off' onChange={(e) => {cambioEmailInput(e.target.value)}} />
            <input type="email" name="emailRep" placeholder='Vuelve a introducir tu email' autoComplete='off' onChange={(e) => {cambioEmailRep(e.target.value)} } />
            <p>{errorEmail}</p>
            <button type="submit" className='btn-input' onClick={ comprobarEmail }>Finalizar Compra</button> 
        </form>
        </div>   
    )

}

export default Formulario