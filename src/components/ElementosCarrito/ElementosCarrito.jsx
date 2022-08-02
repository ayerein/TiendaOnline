import { useState } from "react"


import Formulario from '../../components/Formulario/Formulario'
import Elementos from "../Elementos/Elementos"


const ElementosCarrito = () => {

    const [ formularioActivo, cambiarFormularioActivo ] = useState(false)

    function continuar () {
        cambiarFormularioActivo(!formularioActivo)
    }

    return(
        <div>
            
            {
                formularioActivo ? 
                <Formulario />
                :
                <Elementos continuar = {continuar}/>
            }
            
        </div>
        
        
        
    )

}

export default ElementosCarrito