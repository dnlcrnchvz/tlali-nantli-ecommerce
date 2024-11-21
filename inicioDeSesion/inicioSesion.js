import { redirigirPaginaInicio } from "./redireccionamientoPagInicio.js";
import { validacionInicioSesion } from "./validacionInicioSesion.js"; 
import { postLogin } from "../API/postLogin.js";

const inicioSesion=document.forms["inicioSesion"];

inicioSesion.addEventListener("submit",async(event)=>
{
    event.preventDefault();
    const correoRef = inicioSesion.elements["correo"];
    const contraseniaRef = inicioSesion.elements["contrasenia"];

    const infoForm = 
    {
        correo: correoRef.value,
        contrasenia: contraseniaRef.value,
    };

    const respuestas = validacionInicioSesion(infoForm);

    if (respuestas.isValid)
    {
        try
        {
            const usuario = await postLogin(infoForm);
            const sesionUsuario = 
            {
                usuario,/* 
                isAdmin: usuario.usuarios.some((administracion) => administracion === false), */
                expiration: 0,
            };

            localStorage.setItem("sesionUsuario", JSON.stringify(sesionUsuario));
            localStorage.setItem('isAuthenticated', 'true'); // Establecer la autenticación en localStorage
            inicioSesion.reset();
            redirigirPaginaInicio(); // Redirigir a la página de inicio
        }
        catch (error)
        {
            const errorMessage = document.getElementById("mensaje");
            errorMessage.textContent = "El correo electrónico o la contraseña son incorrectos.";
            errorMessage.style.color = "red";
        }
    } 
});

// Manejo del botón "Cerrar sesión"
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('isAuthenticated') === 'true') {
        // Si está autenticado, cambiar el texto del enlace a "Cerrar sesión"
        const navLink = document.getElementById("iniciarSesion");
        
        if (navLink) { // Verifica que el elemento existe
            navLink.textContent = "Cerrar sesión";

            // Evento para cerrar sesión
            navLink.addEventListener("click", function () {
                localStorage.setItem('isAuthenticated', 'false'); // Eliminar autenticación
                window.location.href = "/inicioDeSesion/inicioDeSesion.html"; // Redirigir al inicio de sesión
            });
        } else {
            console.error("El elemento con ID 'iniciarSesion' no se encontró en el DOM.");
        }
    }
});


/* // Función que se ejecuta cuando el documento está listo
document.addEventListener("DOMContentLoaded", function() {
    // Verificar si el usuario está autenticado
    if (localStorage.getItem('isAuthenticated') === 'true') {
        // Si está autenticado, cambiar el texto del enlace a "Cerrar sesión"
        const navLink = document.getElementById("iniciarSesion");
        
        // Verificar si el elemento 'iniciarSesion' existe antes de agregar el event listener
        if (navLink) {
            // Evento para cerrar sesión
            navLink.addEventListener("click", function() {
                localStorage.setItem('isAuthenticated', 'false'); // Eliminar autenticación
                window.location.href = "/inicioDeSesion/inicioDeSesion.html"; // Redirigir al inicio de sesión
            });
        } else {
            console.warn('El elemento con id "iniciarSesion" no fue encontrado.');
        }
    }

    // Obtener referencia al formulario dentro de DOMContentLoaded
    const registro = document.forms["inicioSesion"];

    // Verificar si el formulario existe antes de agregar el event listener
    if (registro) {
        // Agregar el evento al formulario
        registro.addEventListener("submit", async (event) => {
            event.preventDefault();

            const correoRef = registro.elements["correo"];
            const contraseniaRef = registro.elements["contrasenia"];

            correoRef.value = correoRef.value.trim().toLowerCase(); // Normalizar el correo

            const infoForm = {
                correo: correoRef.value,
                contrasenia: contraseniaRef.value,
            };

            const respuestas = validacionInicioSesion(infoForm); // Corregido el nombre de la función

            if (respuestas.isValid) {
                try {
                    const usuario = await postLogin(infoForm);

                    const usuarioSesion = {
                        usuario,
                        isAdmin: usuario.usuarios.some((administracion) => administracion === true),
                        expiration: 0,
                    };

                    localStorage.setItem("userSesion", JSON.stringify(usuarioSesion));
                    localStorage.setItem('isAuthenticated', 'true'); // Establecer la autenticación en localStorage
                    redirigirPaginaInicio(); // Redirigir a la página de inicio
                } catch (error) {
                    const errorMessage = document.getElementById("mensaje");
                    errorMessage.textContent = "Error: El correo electrónico o la contraseña son incorrectos.";
                    errorMessage.style.color = "red";
                }
            } else {
                // Si la validación no es válida, mostrar mensaje de error
                const errorMessage = document.getElementById("mensaje");
                errorMessage.textContent = "Por favor, completa todos los campos correctamente.";
                errorMessage.style.color = "red";
            }
        });
    } else {
        console.error('El formulario con el nombre "formulario" no fue encontrado.');
    }
});
 */

/* import { redirigirPaginaInicio } from "./redireccionamientoPagInicio.js";
import { validacionIninioSesion } from "./validacionInicioSesion.js";
import { postLogin } from "../API/postLogin.js";

// Función que se ejecuta cuando el documento está listo
document.addEventListener("DOMContentLoaded", function() {
    // Verificar si el usuario está autenticado
    if (localStorage.getItem('isAuthenticated') === 'true') {
        // Si está autenticado, cambiar el texto del enlace a "Cerrar sesión"
        const navLink = document.getElementById("iniciarSesion");
        // Evento para cerrar sesión
        navLink.addEventListener("click", function() {
            localStorage.setItem('isAuthenticated', 'false');// Eliminar autenticación
            window.location.href = "/inicioDeSesion/inicioDeSesion.html"; // Redirigir al inicio de sesión
        });
    }
});


// Obtener referencia al formulario
const registro = document.forms["formulario"];

registro.addEventListener("submit",async(event)=>
{
    event.preventDefault();
    const correoRef=registro.getElementById("correo");
    const contraseniaRef=registro.getElementById("contrasenia");
    correoRef.value=correoRef.value.trim().toLowerCase();

    const infoForm=
    {
        correo:correoRef.value,
        contrasenia:contraseniaRef.value,
    };

    const respuestas=validacionIninioSesion(infoForm);

    if(respuestas.isValid)
    {
        try
        {
            const usuario=await postLogin(infoForm);
            const usuarioSesion=
            {
                usuario,
                isAdmin:usuario.usurios.some((administracion)=>administracion===true),
                expiration:0,
            };
            localStorage.setItem("userSesion",JSON.stringify(usuarioSesion));
            redirigirPaginaInicio();
        }
        catch(error)
        {
            const errorMessage=document.getElementById("mensaje");
            errorMessage.textContent = "Error: El correo electrónico y la contraseña son obligatorios.";
            mensaje.style.color = "red";
        }
    }
}); */

/* document.getElementById("inicioSesion").addEventListener("submit", (event) => {
    event.preventDefault(); // Evita el envío del formulario

    // Leer los valores de los inputs
    const correoInput = document.getElementById("correo").value;
    const contraseniaInput = document.getElementById("contrasenia").value;
    const mensaje = document.getElementById("mensaje");



    // Recuperar datos del localStorage
    const usuariosAlmacenados = JSON.parse(localStorage.getItem('correo')) || [];
    const contrasenasAlmacenadas = JSON.parse(localStorage.getItem('contraseña')) || [];

    // Validar si los campos están vacíos
    if (correoInput === "" || contraseniaInput === "") {
        mensaje.textContent = "Error: El correo electrónico y la contraseña son obligatorios.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = ""; // Limpiar mensaje de error

        // Buscar el índice del usuario en los registros
        const indiceUsuario = usuariosAlmacenados.indexOf(correoInput);

        // Validar que el correo exista y que la contraseña coincida
        if (indiceUsuario !== -1 && contrasenasAlmacenadas[indiceUsuario] === contraseniaInput) {
            // Guardar en localStorage que el usuario está autenticado
            localStorage.setItem('isAuthenticated', 'true');
            
            // Redirigir a la página principal
            redirigirPaginaInicio();
        } else {
            // Si la contraseña o el correo no coinciden
            mensaje.textContent = "Usuario o contraseña incorrectos. Por favor verifique sus datos y vuelva a intentarlo.";
            mensaje.style.color = "red";
        }

        if (localStorage.getItem('isAuthenticated') === 'true') {
            // Si está autenticado, cambiar el texto del enlace a "Cerrar sesión"
            const navLink = document.getElementById("iniciarSesion");
            // Evento para cerrar sesión
            navLink.addEventListener("click", function() {
                localStorage.setItem('isAuthenticated', 'false');// Eliminar autenticación
                window.location.href = "/inicioDeSesion/inicioDeSesion.html"; // Redirigir al inicio de sesión
            });
        }
    } 
});*/