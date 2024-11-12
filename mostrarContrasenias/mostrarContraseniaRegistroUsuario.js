import { alternarVisibilidadContraseñas } from "./funcionMostrarContrasenia.js";

// Seleccionamos los elementos
const toggleContrasenia = document.querySelector("#toggleContrasenia");
const contrasenia = document.querySelector("#contrasenia");
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

// Agregar eventos a los íconos de mostrar/ocultar contraseñas
toggleContrasenia.addEventListener("click", function () {
    alternarVisibilidadContraseñas(contrasenia, toggleContrasenia);
});

togglePassword.addEventListener("click", function () {
    alternarVisibilidadContraseñas(password, togglePassword);
});

// Prevenir el envío del formulario
const form = document.querySelector("form");
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
    });
}