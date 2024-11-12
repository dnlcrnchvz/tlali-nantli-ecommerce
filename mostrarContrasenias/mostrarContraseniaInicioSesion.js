import { alternarVisibilidadContraseñas } from "./funcionMostrarContrasenia.js";
const toggleContrasenia = document.querySelector("#toggleContrasenia");
const contrasenia = document.querySelector("#contrasenia");

// Agregar eventos a los íconos de mostrar/ocultar contraseñas
toggleContrasenia.addEventListener("click", function () {
    alternarVisibilidadContraseñas(contrasenia, toggleContrasenia);
});

// Prevenir el envío del formulario
const form = document.querySelector("form");
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
    });
}