//Obtener referencia del formulario
const registro=document.forms["formulario"];

document.addEventListener('DOMContentLoaded', () =>
{
    // Expresiones regulares
    const nombreApellidoRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const telefonoRegex = /^\d{10}$/; // Exactamente 10 dígitos para 
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const contraseniaRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    //Leer inputs
    const nombre=document.getElementById('nombre');
    const apellidoP=document.getElementById("apellidoP");
    const apellidoM=document.getElementById("apellidoM");
    const telefono=document.getElementById("telefono");
    const correo=document.getElementById("correo");
    const contrasenia=document.getElementById("contrasenia");
    const confirContrasenia=document.getElementById("confirContrasenia");
    
    let value;
    let mensaje;

    nombre.addEventListener('input', () => 
        {
            value=nombre.value;
            mensaje=document.getElementById("mensajeNom");

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
                mensaje.textContent="";
            }
        });

    apellidoP.addEventListener('input', () => 
        {
            value=apellidoP.value;
            mensaje=document.getElementById("mensajeApP");
        
            //Validar entrada en el campo apellido paterno
            if (!nombreApellidoRegex.test(value))//si el apellido paterno contiene carácteres especiales o números
            {
                apellidoP.classList.add('is-invalid');//Se inserta la clase is-invalit a la etiqueta input 
                mensaje.textContent="Por favor, ingresa solo letras (sin números ni caracteres especiales).";
            }
            else
            {
                apellidoP.classList.remove('is-invalid');//Borrar la clase in-invalid al input nombre
                apellidoP.classList.add('is-valid');//Agregar clase is-valid al input del nombre
                mensaje.textContent="";
            }
        });

    apellidoM.addEventListener('input', () => 
        {
            value=apellidoM.value;
            mensaje=document.getElementById("mensajeApM");
            
            //Validar entrada en el campo apellido materno
            if (!nombreApellidoRegex.test(value))//si el apellido materno contiene carácteres especiales o números
            {
                apellidoM.classList.add('is-invalid');//Se inserta la clase is-invalit a la etiqueta input
                mensaje.textContent="Por favor, ingresa solo letras (sin números ni caracteres especiales).";
            }
            else
            {
                apellidoM.classList.remove('is-invalid');//Borrar la clase in-invalid al input nombre
                apellidoM.classList.add('is-valid');//Agregar clase is-valid al input del nombre
                mensaje.textContent="";
            }
        });
    
    telefono.addEventListener('input', () => 
        {
            value=telefono.value;
            mensaje=document.getElementById("mensajeTel");
        
            //Validar entrada en el campo télefono
            if (!telefonoRegex.test(value))//si el telefono contiene carecteres diferentes a numero o maś de 10 dígitos
            {
                telefono.classList.add('is-invalid');//Se inserta la clase is-invalit a la etiqueta input 
                mensaje.textContent="Por favor, ingresa el número a 10 dígitos.";
            }
            else
            {
                telefono.classList.remove('is-invalid');//Borrar la clase in-invalid al input nombre
                telefono.classList.add('is-valid');//Agregar clase is-valid al input del nombre
                mensaje.textContent="";
            }
        });
        
    correo.addEventListener('input', () => 
        {
            value=correo.value;
            mensaje=document.getElementById("mensajeCorreo");
        
            //Validar entrada en el campo correo
            if (!emailRegex.test(value))//si el correo no es valido
            {
                correo.classList.add('is-invalid');//Se inserta la clase is-invalit a la etiqueta input 
                mensaje.textContent="Por favor, ingresa un correo eléctronico valído.";
            }
            else
            {
                correo.classList.remove('is-invalid');//Borrar la clase in-invalid al input nombre
                correo.classList.add('is-valid');//Agregar clase is-valid al input del nombre
                mensaje.textContent="";
            }
        });

    contrasenia.addEventListener('input', () => 
        {
            value=contrasenia.value;
            mensaje=document.getElementById("mensajeContrasenia");
            if (!contraseniaRegex.test(value))//si el campo contraseña no cumple los requisitos
            {
                contrasenia.classList.add('is-invalid');//Se inserta la clase is-invalit a la etiqueta input
                mensaje.textContent="La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, una minúscula, una mayúscula y un cáractere especial."
            }
            else
            {
                contrasenia.classList.remove('is-invalid');//Borrar la clase in-invalid al input nombre
                contrasenia.classList.add('is-valid');//Agregar clase is-valid al input del nombre
                mensaje.textContent="";
            }
        });
    
    confirContrasenia.addEventListener('input', () =>
    {
        value=confirContrasenia.value;
        mensaje=document.getElementById("mensajeConfContra");
        if(!(value===document.getElementById("contrasenia").value))
        {
            confirContrasenia.classList.add('is-invalid');//Se inserta la clase is-invalit a la etiqueta input
                mensaje.textContent="Las contraseñas no coniciden"
        }
        else
        {
            confirContrasenia.classList.remove('is-invalid');//Borrar la clase in-invalid al input nombre
            confirContrasenia.classList.add('is-valid');//Agregar clase is-valid al input del nombre
            mensaje.textContent="";
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