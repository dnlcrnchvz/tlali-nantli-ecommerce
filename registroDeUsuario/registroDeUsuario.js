import { validarEntradasForm } from "./validarEntradasForm.js";
import { postRegistroUsuario } from "../API/postUsuario.js";

// Asegurarnos de que el código solo se ejecute en el navegador
if (typeof document !== 'undefined') {
    let botonRegistro = document.getElementById("botonRegistro");

    // Verificar que el botón de registro existe
    if (botonRegistro) {
        botonRegistro.addEventListener('click', registrarUsuario); 
    }

    async function registrarUsuario(event) {
        event.preventDefault(); // Evitar el envío del formulario si es necesario

        let usuario = {
            nombre: document.querySelector('#nombre').value.trim(),
            apellidoP: document.querySelector('#apellidoP').value.trim(),
            apellidoM: document.querySelector('#apellidoM').value.trim(),
            telefono: document.querySelector('#telefono').value.trim(),
            correo: document.querySelector('#correo').value.trim(),
            contrasenia: document.getElementById('contrasenia').value.trim(),
        };

        // Verificar si los campos están vacíos antes de continuar
        if (Object.values(usuario).some(val => val === "")) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        // Aquí, si existe confirmación de contraseña, verificar que coincida
        const confirmacionContrasenia = document.getElementById("password").value.trim();
        if (usuario.contrasenia !== confirmacionContrasenia) {
            alert("Las contraseñas no coinciden. Por favor, verifique.");
            return;
        }

        // Validación de entradas
        const respuesta = validarEntradasForm(usuario);
        if (respuesta.isValid) {
            try {
                // Realizar el registro del usuario
                await postRegistroUsuario(usuario);
                alert("Su registro se realizó con éxito. Inicie sesión con su usuario y contraseña.");
                // Limpiar el formulario después de un registro exitoso
                document.forms["form"].reset();
            } catch (error) {
                alert("Verifique que los campos estén llenos correctamente.");
            }
        } else {
            alert("Verifique que los campos estén llenos correctamente.");
        }
    }
}




/* import { validarEntradasForm } from "./validarEntradasForm.js";
import { postRegistroUsuario } from "../API/postUsuario.js";

let botonRegistro = document.getElementById("botonRegistro");
// Objetos para almacenar los valores
botonRegistro.addEventListener('click', registrarUsuario); 

function registrarUsuario() {
    let usuario = {
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        telefono: '',
        correo: '',
        contrasenia: ''
    };
     
    // Obtener los valores de los campos
    usuario.nombre = document.querySelector('#nombre').value;
    usuario.apellidoPaterno = document.querySelector('#apellidoP').value;
    usuario.apellidoMaterno = document.querySelector('#apellidoM').value;
    usuario.telefono = document.querySelector('#telefono').value;
    usuario.correo = document.querySelector('#correo').value;
    usuario.contrasenia = document.getElementById('contrasenia').value;
    //let confirmacionContrasenia = document.getElementById("password").value;

    /* // Validación de campos vacíos
    if (Object.values(usuario).some(val => val === "") || confirmacionContrasenia === "") {
        alert("Todos los campos son obligatorios.");
        return;
    }
    
    // Verificar si las contraseñas coinciden
    if (usuario.contrasenia !== confirmacionContrasenia) {
        alert("Las contraseñas no coinciden. Por favor, verifique.");
        return;
    } */

    /* // Guardar en el localStorage
    for (let key in usuario) {
        let storedData = JSON.parse(localStorage.getItem(key)) || [];
        storedData.push(usuario[key]);
        localStorage.setItem(key, JSON.stringify(storedData));
    } */

    /* // Mostrar el localStorage en consola
    console.log("Datos almacenados en localStorage:");
    for (let key in usuario) {
        console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}:`, JSON.parse(localStorage.getItem(key)));
    }
 
    const form=document.forms["form"];
    form.addEventListener("submit",async(event)=>
    {
        event.preventDefault();
        const nombreRef = document.querySelector('#nombre').value.trim();
        const apellidoPaternoRef = document.querySelector('#apellidoP').value.trim();
        const apellidoMaternoRef = document.querySelector('#apellidoM').value.trim();
        const telefonoRef = document.querySelector('#telefono').value.trim();
        const correoRef = document.querySelector('#correo').value.trim();
        const contraseniaRef = document.getElementById('contrasenia').value.trim();
        const infoForm=
        {
            nombre:nombreRef.value,
            apellidop:apellidoPaternoRef.value,
            apellidom:apellidoMaternoRef.value,
            telefono:telefonoRef.value,
            correo:correoRef.value,
            contrasenia:contraseniaRef.value,
        };

        console.table(infoForm);

        const respuesta= validarEntradasForm(usuario);   

        if(respuesta.isValid)
        {
            try
            {
                await postRegistroUsuario(usuario);
                // Mensaje de éxito
        alert("Su registro se realizó con éxito. Inicie sesión con su usuario y contraseña.");
                form.reset();
            }
            catch(error)
            {
                alert("Verifique que los campor esten llenos correctamente");
            }
        }
        else
        {
            alert("Verifique que los campor esten llenos correctamente");
        }
    });
    /* // Mensaje de éxito
    alert("Su registro se realizó con éxito. Inicie sesión con su usuario y contraseña."); 
} */