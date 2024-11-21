const validarNombre=(nombreCompleto)=>
{
    const respuesta=
    {
        isValid:true,
        error:"",
    }
    
    if(nombreCompleto.length<3)
    {
        respuesta.isValid=false;
        respuesta.error="El nombre debe ser mayor o igual a 3 caracteres";
    }
    else if(nombreCompleto.length>100)
    {
        respuesta.isValid=false;
        respuesta.error="El nombre no debe tener más de 100 caractes";
    }
    return respuesta;
}

export{validarNombre};