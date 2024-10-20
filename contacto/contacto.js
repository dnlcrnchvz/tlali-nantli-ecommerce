//Obtener referencia del formulario
const mensaje=document.forms["formulario"];

function validador(nuevoMensaje) {
    // Expresiones regulares
    const nombreApellidoRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const telefonoRegex = /^\d{10}$/; // Exactamente 10 dígitos para teléfono
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validar nombre
    if (!nombreApellidoRegex.test(nuevoMensaje.nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
        return false;
    }

    // Validar apellido
    else if (!nombreApellidoRegex.test(nuevoMensaje.apellido)) {
        alert("El apellido solo puede contener letras y espacios.");
        return false;
    }

    // Validar teléfono
    else if (!telefonoRegex.test(nuevoMensaje.telefono)) {
        alert("El teléfono debe contener exactamente 10 dígitos.");
        return false;
    }

    // Validar email
    else if (!emailRegex.test(nuevoMensaje.email)) {
        alert("El correo electrónico no tiene un formato válido.");
        return false;
    }

    // Validar campo mensaje
    else if (nuevoMensaje.mensaje==="") {
        alert("El cuadro de mensaje no debe de estar vacío.");
        return false;
    }else
    {
        return true;
    }

    // Si todas las validaciones pasan
    
}

const siguienteMensaje=async (nuevoMensaje)=>
{
    const url="https://formsubmit.co/ajax/tlalinantliecom@gmail.com";
    const options=
    {
        method: "POST",
        headers:
            {
                "Content-Type":"application/json",
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
        email: mensaje.elements["correoElectronico"].value,
        mensaje: mensaje.elements["mensaje"].value
    }

    console.log(nuevoMensaje);

    if(validador(nuevoMensaje))
    {
        siguienteMensaje(nuevoMensaje);
    }
}); 