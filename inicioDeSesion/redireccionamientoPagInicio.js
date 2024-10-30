// Obtener referencia del formulario
const registro = document.forms["formulario"];

document.getElementById("inicioSesion").addEventListener("submit", (event) => {
    event.preventDefault(); // 
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const correo = document.getElementById("correo");
    const contrasenia = document.getElementById("contrasenia");
    const mensaje = document.getElementById("mensaje");

    
    const usuario = localStorage.getItem("usuario");
    const password = localStorage.getItem("password");

    // Validar campos vacíos
    if (correo.value === "" || contrasenia.value === "") {
        mensaje.textContent = "Error: El correo electrónico y la contraseña son obligatorios.";
        mensaje.style.color = "red";
    } else if (!emailRegex.test(correo.value)) { // Validar formato del correo
        mensaje.textContent = "Error: El formato del correo electrónico es inválido.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "";
        // Validar que el correo y la contraseña coincidan con los del localStorage
        if (correo.value === usuario && contrasenia.value === password) {
            // Se redirige a página de inicio
            redirigirPaginaInicio();
        } else { // Si la contraseña o usuario no coinciden
            mensaje.textContent = "Usuario o contraseña incorrectos. Por favor verifique sus datos y vuelva a intentarlo.";
            mensaje.style.color = "red";
        }
    }
});

// Función para redirigir a la página de inicio
const redirigirPaginaInicio = () => {
    window.location.href = '../index.html'; // Redirige a la página de inicio
};

export { redirigirPaginaInicio };