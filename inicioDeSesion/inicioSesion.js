import { redirigirPaginaInicio } from "./redireccionamientoPagInicio.js";
// Obtener referencia del formulario
const registro = document.forms["formulario"];

document.getElementById("inicioSesion").addEventListener("submit", (event) =>
        {
            event.preventDefault(); //Evita el envío del formulario
            
            //Leer inputs
            const correoInput = document.getElementById("correo").value;
            const contraseniaInput = document.getElementById("password").value;
            const mensaje = document.getElementById("mensaje");

            // Recuperar datos del localStorage
            const usuariosAlmacenados = JSON.parse(localStorage.getItem('correo')) || [];
            const contrasenasAlmacenadas = JSON.parse(localStorage.getItem('contraseña')) || [];

            // Validar si los campos están vacíos
            if (correoInput === "" || contraseniaInput === "")
            {
                mensaje.textContent = "Error: El correo electrónico y la contraseña son obligatorios.";
                mensaje.style.color = "red";
            }
            else
            {
                mensaje.textContent = "";
                
                // Buscar el índice del usuario en los registros
                const indiceUsuario = usuariosAlmacenados.indexOf(correoInput);
                
                //Validar que el correo exista y que la contraseña coincida
                if (indiceUsuario !== -1 && contrasenasAlmacenadas[indiceUsuario] === contraseniaInput)
                {
                    // Se redirige a página de inicio
                    mensaje.textContent = "Inicio de sesión correcto";
                    mensaje.style.color = "green";
                } 
                else
                { // Si la contraseña o usuario no coinciden
                    mensaje.textContent = "Usuario o contraseña incorrectos. Por favor verifique sus datos y vuelva a intentarlo.";
                    mensaje.style.color = "red";
                }
            }
    });