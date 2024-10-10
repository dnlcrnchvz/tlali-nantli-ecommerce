const validador=(nuevoMensaje)=>
    {
        let valido=true;
        const nombre = document.querySelector("#nombre");
        //const email=document.querySelector("#email");
        
        if(nuevoMensaje.tel.length!=10)
        {
            alert("El número teléfonico no es valido");
            valido=false;
        }
        else if(!(nombre.setAttribute("pattern", "[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+")))
        {
            alert("El número teléfonico no es valido");
            valido=false;
        }
    
        return valido;
    }