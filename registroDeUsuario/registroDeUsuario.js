let nombre = [],
apellidoPaterno = [],
apellidoMaterno = [],
telefono = [],
correo = [],
contraseña = [],
confirmacionContraseña = [];

let elementoBotonRegistro = document.querySelector('#botonRegistro');

elementoBotonRegistro.addEventListener('click', registrarUsuario);
function registrarUsuario(){
    let nombreAdd = document.querySelector('#nombre').value,
    apellidoPaternoAdd = document.querySelector('#apellidoP').value,
    apellidoMaternoAdd = document.querySelector('#apellidoM').value,
    telefonoAdd = document.querySelector('#telefono').value,
    correoAdd = document.querySelector('#correo').value,
    contraseñaAdd = document.querySelector('#contrasenia').value,
    confirmacionContraseñaAdd = document.querySelector('#confirContrasenia').value;

    nombre.push(nombreAdd);
    apellidoPaterno.push(apellidoPaternoAdd);
    apellidoMaterno.push(apellidoMaternoAdd);
    telefono.push(telefonoAdd);
    correo.push(correoAdd);
    contraseña.push(contraseñaAdd);
    confirmacionContraseña.push(confirmacionContraseñaAdd);

    localStorage.setItem('nombre', JSON.stringify(nombre));
    localStorage.setItem('apellidoPaterno', JSON.stringify(apellidoPaterno));
    localStorage.setItem('apellidoMaterno', JSON.stringify(apellidoMaterno));
    localStorage.setItem('telefono', JSON.stringify(telefono));
    localStorage.setItem('correo', JSON.stringify(correo));
    localStorage.setItem('contraseña', JSON.stringify(contraseña));
    localStorage.setItem('confirmacionContraseña', JSON.stringify(confirmacionContraseña));

    alert("Su registro se realizo con exito. Inicie sesión con su usuario y contraseña.")
}
console.log(registrarUsuario);