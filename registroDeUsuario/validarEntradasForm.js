import { validarNombre } from "./validarNombre.js";

const validarEntradasForm=(informacionForm)=>
{
    const respuesta=
    {
        isValid:true,
        error:"",
    };

    const verificarNombre=validarNombre(informacionForm.nombre);
    if(verificarNombre.isValid===false)
    {
        respuesta.isValid=false;
        respuesta.error=verificarNombre.error;
    }

    return respuesta;
};

export{validarEntradasForm};