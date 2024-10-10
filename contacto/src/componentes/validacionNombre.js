function validarNombre(nuevoNombre)
{
    nuevoNombre=document.querySelector("#nombre");
    nuevoNombre.setAttribute("pattern", "[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+");
}

export{validarNombre};