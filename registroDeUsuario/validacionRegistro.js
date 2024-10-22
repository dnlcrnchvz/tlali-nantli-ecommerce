//Obtener referencia del formulario
const registro=document.forms["formulario"];

document.addEventListener('DOMContentLoaded', () =>
{
    // Expresiones regulares
    const nombreApellidoRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const telefonoRegex = /^\d{10}$/; // Exactamente 10 dígitos para 
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //Leer inputs
    const nombre=document.getElementById('nombre');
    const apellidoP=document.getElementById("apellidoP");
    const apellidoM=document.getElementById("apellidoM");
    const telefono=document.getElementById("telefono");
    const correo=document.getElementById("correo");
    const contrasenia=document.getElementById("contrasenia");
    const confirContrasenia=document.getElementById("confirContrasenia");
    let value;

    nombre.addEventListener('input', () => 
    {
        value=nombre.value;

        //Validar entrada en el campo nombre
        if (!nombreApellidoRegex.test(value))//si el nombre contiene carácteres especiales o números
        {
            nombre.classList.add('is-invalid');//Se inserta la clase is-invalit a la etiqueta input 
            mensaje.textContent = "Por favor, ingresa solo letras (sin números ni caracteres especiales).";
        }
        else
        {
            nombre.classList.remove('is-invalid');//Borrar la clase in-invalid al input nombre
            nombre.classList.add('is-valid');//Agregar clase is-valid al input del nombre
        }
    });

        
        // Si todas las validaciones pasan, Se leen las entradas del formulario
        const nuevoRegistro=
        {
            nombre: registro.elements["nombre"].value/* ,
            apellidoP: registro.elements["apellido"].value,
            apellidoM: registro.elements["apellido"].value,
            telefono: registro.elements["telefono"].value,
            email: registro.elements["email"].value */
        }

        JSON.stringify(nuevoRegistro)//Conversión del mobjeto a JSON
});


//Prueba marcar rojo
/* 

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validación de Input</title>
    <script src="script.js" defer></script>
</head>
<body>
    <h1>Validación de Input</h1>
    <input type="text" id="inputText" placeholder="Ingresa texto aquí">
    <p id="message" style="color: red;"></p>
</body>
</html>


document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const message = document.getElementById('message');

    inputText.addEventListener('input', () => {
        const value = inputText.value;

        // Expresión regular para validar que solo sean letras
        const regex = /^[a-zA-Z]*$/;

        if (!regex.test(value)) {
            message.textContent = 'Por favor, ingresa solo letras (sin números ni caracteres especiales).';
            // Remover el último carácter no válido
            inputText.value = value.slice(0, -1);
        } else {
            message.textContent = ''; // Limpiar mensaje si es válido
        }
    });
}); */









/* const siguienteMensaje=async (nuevoRegistro)=>
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
        body: JSON.stringify(nuevoRegistro)//Conversión del mobjeto a JSON
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

registro.addEventListener("submit",(event)=>
{
    event.preventDefault();
    console.log(event);
    console.log("Dentro del formulario");
    //Se leen las entradas del formulario
    const nuevoRegistro=
    {
        nombre: registro.elements["nombre"].value/* ,
        apellidoP: registro.elements["apellido"].value,
        apellidoM: registro.elements["apellido"].value,
        telefono: registro.elements["telefono"].value,
        email: registro.elements["email"].value
    }

    console.log(nuevoRegistro);

    if(validador(nuevoRegistro))
    {
        siguienteMensaje(nuevoRegistro);
    }
}  */