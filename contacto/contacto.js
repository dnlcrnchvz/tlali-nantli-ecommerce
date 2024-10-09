//Obtener referencia del formulario
const mensaje=document.forms["formulario"];

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

const siguienteMensaje=async (nuevoMensaje)=>
{
    const url="https://formsubmit.co/tlalinantliecom@gmail.com";
    const options=
    {
        method: "POST",
        headers:
            {
                "Content.Type":"application/json",
                'Accept': 'application/json'
            },
        body: JSON.stringify(nuevoMensaje)//Conversión del mobjeto a JSON
    };

    try
    {
        const respuesta=await fetch(url,options);
        const registroMensaje=await respuesta.json();
        console.table(registroMensaje);
    }
    catch(error)
    {
        console.warn(error);
    }
}

siguienteMensaje();


mensaje.addEventListener("submit",(event)=>
{
    event.preventDefault();
    console.log(event);
    console.log("Dentro del formulario");
    //Se leen las entradas del formulario
    const nuevoMensaje=
    {
        nombre: mensaje.elements["nombre"].value,
        apellido: mensaje.elements["apellido"].value,
        telefono: mensaje.elements["telefono"].value,
        email: mensaje.elements["email"].value,
        mensaje: mensaje.elements["mensaje"].value
    }

    console.log(nuevoMensaje);

    if(validador(nuevoMensaje))
    {
        siguienteMensaje(nuevoMensaje);
    }
});

/* const nombre =document.querySelector("#nombre");
nombre.setAttribute("pattern", "[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+"); */

