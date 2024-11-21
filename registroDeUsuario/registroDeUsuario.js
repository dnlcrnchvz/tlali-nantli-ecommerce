import { validarEntradasForm } from "./validarEntradasForm.js";
import { postRegistroUsuario } from "../API/postUsuario.js";
// Objetos para almacenar los valores
botonRegistro.addEventListener('click', registrarUsuario);

function registrarUsuario() {
    let usuario = {
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        telefono: '',
        correo: '',
        contrasenia: ''
    };
    
    // Obtener los valores de los campos
    usuario.nombre = document.querySelector('#nombre').value;
    usuario.apellidoPaterno = document.querySelector('#apellidoP').value;
    usuario.apellidoMaterno = document.querySelector('#apellidoM').value;
    usuario.telefono = document.querySelector('#telefono').value;
    usuario.correo = document.querySelector('#correo').value;
    usuario.contrasenia = document.getElementById('contrasenia').value;
    let confirmacionContrasenia = document.getElementById("password").value;

    // Validación de campos vacíos
    if (Object.values(usuario).some(val => val === "") || confirmacionContrasenia === "") {
        alert("Todos los campos son obligatorios.");
        return;
    }
    
    // Verificar si las contraseñas coinciden
    if (usuario.contrasenia !== confirmacionContrasenia) {
        alert("Las contraseñas no coinciden. Por favor, verifique.");
        return;
    }

    /* // Guardar en el localStorage
    for (let key in usuario) {
        let storedData = JSON.parse(localStorage.getItem(key)) || [];
        storedData.push(usuario[key]);
        localStorage.setItem(key, JSON.stringify(storedData));
    } */

    /* // Mostrar el localStorage en consola
    console.log("Datos almacenados en localStorage:");
    for (let key in usuario) {
        console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}:`, JSON.parse(localStorage.getItem(key)));
    }
 */
    const form=document.forms["form"];
    form.addEventListener("submit",async(event)=>
    {
        const nombreRef = document.querySelector('#nombre').value.trim();
        const apellidoPaternoRef = document.querySelector('#apellidoP').value.trim();
        const apellidoMaternoRef = document.querySelector('#apellidoM').value.trim();
        const telefonoRef = document.querySelector('#telefono').value.trim();
        const correoRef = document.querySelector('#correo').value.trim();
        const contraseniaRef = document.getElementById('contrasenia').value.trim();
        const infoForm=
        {
            nombre:nombreRef.value,
            apellidop:apellidoPaternoRef.value,
            apellidom:apellidoMaternoRef.value,
            telefono:telefonoRef.value,
            correo:correoRef.value,
            contrasenia:contraseniaRef.value,
        };

        console.table(infoForm);

        const respuesta= validarEntradasForm(usuario);   

        if(respuesta.isValid)
        {
            try
            {
                await postRegistroUsuario(usuario);
                // Mensaje de éxito
        alert("Su registro se realizó con éxito. Inicie sesión con su usuario y contraseña.");
                form.reset();
            }
            catch(error)
            {
                alert("Verifique que los campor esten llenos correctamente");
            }
        }
        else
        {
            alert("Verifique que los campor esten llenos correctamente");
        }
    });
    /* // Mensaje de éxito
    alert("Su registro se realizó con éxito. Inicie sesión con su usuario y contraseña."); */
}
//tlaliNantli1.