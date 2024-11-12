let elementoBotonRegistro = document.querySelector('#botonRegistro');

// Objetos para almacenar los valores
let usuario = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    telefono: '',
    correo: '',
    contraseña: ''
};

elementoBotonRegistro.addEventListener('click', registrarUsuario);

function registrarUsuario() {
    // Obtener los valores de los campos
    usuario.nombre = document.querySelector('#nombre').value;
    usuario.apellidoPaterno = document.querySelector('#apellidoP').value;
    usuario.apellidoMaterno = document.querySelector('#apellidoM').value;
    usuario.telefono = document.querySelector('#telefono').value;
    usuario.correo = document.querySelector('#correo').value;
    usuario.contraseña = document.getElementById('contrasenia').value;
    let confirmacionContraseña = document.getElementById("password").value;

    // Validación de campos vacíos
    if (Object.values(usuario).some(val => val === "") || confirmacionContraseña === "") {
        alert("Todos los campos son obligatorios.");
        return;
    }

    // Verificar si las contraseñas coinciden
    if (usuario.contraseña !== confirmacionContraseña) {
        alert("Las contraseñas no coinciden. Por favor, verifique.");
        return;
    }

    // Guardar en el localStorage
    for (let key in usuario) {
        let storedData = JSON.parse(localStorage.getItem(key)) || [];
        storedData.push(usuario[key]);
        localStorage.setItem(key, JSON.stringify(storedData));
    }

    // Mostrar el localStorage en consola
    console.log("Datos almacenados en localStorage:");
    for (let key in usuario) {
        console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}:`, JSON.parse(localStorage.getItem(key)));
    }

    // Mensaje de éxito
    alert("Su registro se realizó con éxito. Inicie sesión con su usuario y contraseña.");
}
//tlaliNantli1.