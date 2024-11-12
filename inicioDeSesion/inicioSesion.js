import { redirigirPaginaInicio } from "./redireccionamientoPagInicio.js";

// Función que se ejecuta cuando el documento está listo
document.addEventListener("DOMContentLoaded", function() {
    // Verificar si el usuario está autenticado
    if (localStorage.getItem('isAuthenticated') === 'true') {
        // Si está autenticado, cambiar el texto del enlace a "Cerrar sesión"
        const navLink = document.getElementById("iniciarSesion");
        if (navLink) {
            navLink.textContent = "Cerrar sesión";
            navLink.href = "/inicioDeSesion/inicioDeSesion.html";
            // Evento para cerrar sesión
            navLink.addEventListener("click", function() {
                localStorage.removeItem('isAuthenticated'); // Eliminar autenticación
                window.location.href = "/inicioDeSesion/inicioDeSesion.html"; // Redirigir al inicio de sesión
            });
        }
    }
});

// Obtener referencia al formulario
const registro = document.forms["formulario"];

document.getElementById("inicioSesion").addEventListener("submit", (event) => {
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

            // Cambiar el enlace "Iniciar sesión" por "Cerrar sesión"
            const navLink = document.getElementById("iniciarSesion");
            if (navLink) {
                navLink.textContent = "Cerrar sesión";
                navLink.href = "/inicioDeSesion/inicioDeSesion.html"; 
                // Agregar un evento para cerrar sesión
                navLink.addEventListener("click", function() {
                    // Al hacer clic en "Cerrar sesión", eliminamos la autenticación
                    localStorage.removeItem('isAuthenticated');
                    // Redirigir al inicio de sesión
                    window.location.href = "/inicioDeSesion/inicioDeSesion.html";
                });
            }            
        } else {
            // Si la contraseña o el correo no coinciden
            mensaje.textContent = "Usuario o contraseña incorrectos. Por favor verifique sus datos y vuelva a intentarlo.";
            mensaje.style.color = "red";
        }
    }
});

