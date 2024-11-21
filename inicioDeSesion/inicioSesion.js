import { redirigirPaginaInicio } from "./redireccionamientoPagInicio.js";
import { validacionIninioSesion } from "./validacionIninioSesion.js";
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
});

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

