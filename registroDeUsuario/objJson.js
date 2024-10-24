function registroUser(event)
{
    event.preventDefault(); // Evita el envío del formulario
    const registro = document.getElementById('formulario'); // Obtiene el formulario
    const nuevoRegistro=
    {
        nombre: registro.elements["nombre"].value,
        apellidoP: registro.elements["apellidoP"].value,
        apellidoM: registro.elements["apellidoM"].value,
        telefono: registro.elements["telefono"].value,
        correo: registro.elements["correo"].value,
        contrasenia: registro.elements["contrasenia"].value
    }

    const registroUsuario=JSON.stringify(nuevoRegistro)//Conversión del mobjeto a JSON
    console.table(registroUsuario);
}