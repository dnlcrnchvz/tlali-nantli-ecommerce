// Seleccionamos los elementos
const toggleContrasenia = document.querySelector("#toggleContrasenia");
const contrasenia = document.querySelector("#contrasenia");
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

// Función para alternar visibilidad de las contraseñas
function alternarVisibilidadContraseñas(inputField, icon) {
    const type = inputField.getAttribute("type") === "password" ? "text" : "password";
    inputField.setAttribute("type", type);
    icon.classList.toggle("bi-eye"); // Alternar icono
    icon.classList.toggle("bi-eye-slash");
}

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