// Función para alternar visibilidad de las contraseñas
function alternarVisibilidadContraseñas(inputField, icon) {
    const type = inputField.getAttribute("type") === "password" ? "text" : "password";
    inputField.setAttribute("type", type);
    icon.classList.toggle("bi-eye"); // Alternar icono
    icon.classList.toggle("bi-eye-slash");
}

export{alternarVisibilidadContraseñas};