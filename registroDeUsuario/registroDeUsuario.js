let nombre = [],
    apellidoPaterno = [],
    apellidoMaterno = [],
    telefono = [],
    correo = [],
    contraseña = [];

let elementoBotonRegistro = document.querySelector('#botonRegistro');

elementoBotonRegistro.addEventListener('click', registrarUsuario);

function registrarUsuario() {
    // Obtener los valores de los campos del formulario
    let nombreAdd = document.querySelector('#nombre').value,
        apellidoPaternoAdd = document.querySelector('#apellidoP').value,
        apellidoMaternoAdd = document.querySelector('#apellidoM').value,
        telefonoAdd = document.querySelector('#telefono').value,
        correoAdd = document.querySelector('#correo').value,
        contraseñaAdd = document.getElementById('contrasenia').value,
        confirmacionContraseñaAdd = document.getElementById("password").value;

    // Validación de los campos
    if (nombreAdd === "" || apellidoPaternoAdd === "" || apellidoMaternoAdd === "" || telefonoAdd === "" || correoAdd === "" || contraseñaAdd === "" || confirmacionContraseñaAdd === "") {
        alert("Todos los campos son obligatorios.");
        return;
    }

    // Verificar si la contraseña y la confirmación coinciden
    if (contraseñaAdd !== confirmacionContraseñaAdd) {
        alert("Las contraseñas no coinciden. Por favor, verifique.");
        return;
    }

    // Almacenar los valores en los arrays
    nombre.push(nombreAdd);
    apellidoPaterno.push(apellidoPaternoAdd);
    apellidoMaterno.push(apellidoMaternoAdd);
    telefono.push(telefonoAdd);
    correo.push(correoAdd);
    contraseña.push(contraseñaAdd);

    // Guardar en el localStorage
    localStorage.setItem('nombre', JSON.stringify(nombre));
    localStorage.setItem('apellidoPaterno', JSON.stringify(apellidoPaterno));
    localStorage.setItem('apellidoMaterno', JSON.stringify(apellidoMaterno));
    localStorage.setItem('telefono', JSON.stringify(telefono));
    localStorage.setItem('correo', JSON.stringify(correo));
    localStorage.setItem('contraseña', JSON.stringify(contraseña));

    // Mostrar el localStorage en consola
    console.log("Datos almacenados en localStorage:");
    console.log("Nombre: ", JSON.parse(localStorage.getItem('nombre')));
    console.log("Apellido Paterno: ", JSON.parse(localStorage.getItem('apellidoPaterno')));
    console.log("Apellido Materno: ", JSON.parse(localStorage.getItem('apellidoMaterno')));
    console.log("Teléfono: ", JSON.parse(localStorage.getItem('telefono')));
    console.log("Correo: ", JSON.parse(localStorage.getItem('correo')));
    console.log("Contraseña: ", JSON.parse(localStorage.getItem('contraseña')));

    // Mensaje de éxito
    alert("Su registro se realizó con éxito. Inicie sesión con su usuario y contraseña.");
}
//alert("Su registro se realizo con exito. Inicie sesión con su usuario y contraseña.");

//tlaliNantli1.