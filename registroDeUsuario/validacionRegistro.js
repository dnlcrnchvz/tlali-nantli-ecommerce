// Obtener referencia del formulario
const registro = document.forms["formulario"];

document.addEventListener('DOMContentLoaded', () => {
    // Expresiones regulares
    const nombreApellidoRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/;
    const telefonoRegex = /^\d{10}$/; // Exactamente 10 dígitos para 
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const contraseniaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    
    // Leer inputs
    const nombre = document.getElementById('nombre');
    const apellidoP = document.getElementById("apellidoP");
    const apellidoM = document.getElementById("apellidoM");
    const telefono = document.getElementById("telefono");
    const correo = document.getElementById("correo");
    const contrasenia = document.getElementById("contrasenia");
    const confirContrasenia = document.getElementById("password");
    
    let value;
    let mensaje;

    // Función para verificar la validez del formulario al enviar
    const validarFormulario = (event) => {
        // Si algún campo tiene la clase "is-invalid", prevenimos el envío del formulario
        if (nombre.classList.contains('is-invalid') ||
            apellidoP.classList.contains('is-invalid') ||
            apellidoM.classList.contains('is-invalid') ||
            telefono.classList.contains('is-invalid') ||
            correo.classList.contains('is-invalid') ||
            contrasenia.classList.contains('is-invalid') ||
            confirContrasenia.classList.contains('is-invalid')) {
            
            // Mostrar una alerta de error
            alert("Por favor, completa correctamente todos los campos.");
            
            // Prevenir el envío del formulario
            event.preventDefault();
        }
    };

    // Agregar el evento submit al formulario para validar antes de enviarlo
    registro.addEventListener('submit', validarFormulario);

    // Validaciones en los campos de input

    nombre.addEventListener('input', () => {
        value = nombre.value;
        mensaje = document.getElementById("mensajeNom");

        // Validar entrada en el campo nombre
        if (!nombreApellidoRegex.test(value)) { // Si el nombre contiene caracteres especiales o números
            nombre.classList.add('is-invalid');
            mensaje.textContent = "Por favor, ingresa solo letras (sin números ni caracteres especiales).";
        } else {
            nombre.classList.remove('is-invalid');
            nombre.classList.add('is-valid');
            mensaje.textContent = "";
        }
    });

    apellidoP.addEventListener('input', () => {
        value = apellidoP.value;
        mensaje = document.getElementById("mensajeApP");

        // Validar entrada en el campo apellido paterno
        if (!nombreApellidoRegex.test(value)) { // Si el apellido paterno contiene caracteres especiales o números
            apellidoP.classList.add('is-invalid');
            mensaje.textContent = "Por favor, ingresa solo letras (sin números ni caracteres especiales).";
        } else {
            apellidoP.classList.remove('is-invalid');
            apellidoP.classList.add('is-valid');
            mensaje.textContent = "";
        }
    });

    apellidoM.addEventListener('input', () => {
        value = apellidoM.value;
        mensaje = document.getElementById("mensajeApM");

        // Validar entrada en el campo apellido materno
        if (!nombreApellidoRegex.test(value)) { // Si el apellido materno contiene caracteres especiales o números
            apellidoM.classList.add('is-invalid');
            mensaje.textContent = "Por favor, ingresa solo letras (sin números ni caracteres especiales).";
        } else {
            apellidoM.classList.remove('is-invalid');
            apellidoM.classList.add('is-valid');
            mensaje.textContent = "";
        }
    });

    telefono.addEventListener('input', () => {
        value = telefono.value;
        mensaje = document.getElementById("mensajeTel");

        // Validar entrada en el campo teléfono
        if (!telefonoRegex.test(value)) { // Si el teléfono contiene caracteres diferentes a número o más de 10 dígitos
            telefono.classList.add('is-invalid');
            mensaje.textContent = "Por favor, ingresa el número a 10 dígitos.";
        } else {
            telefono.classList.remove('is-invalid');
            telefono.classList.add('is-valid');
            mensaje.textContent = "";
        }
    });

    correo.addEventListener('input', () => {
        value = correo.value;
        mensaje = document.getElementById("mensajeCorreo");

        // Validar entrada en el campo correo
        if (!emailRegex.test(value)) { // Si el correo no es válido
            correo.classList.add('is-invalid');
            mensaje.textContent = "Por favor, ingresa un correo electrónico válido.";
        } else {
            correo.classList.remove('is-invalid');
            correo.classList.add('is-valid');
            mensaje.textContent = "";
        }
    });

    contrasenia.addEventListener('input', () => {
        value = contrasenia.value;
        mensaje = document.getElementById("mensajeContrasenia");

        // Validar entrada en el campo contraseña
        if (!contraseniaRegex.test(value)) { // Si el campo contraseña no cumple los requisitos
            contrasenia.classList.add('is-invalid');
            mensaje.textContent = "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, una minúscula, una mayúscula y un carácter especial.";
        } else {
            contrasenia.classList.remove('is-invalid');
            contrasenia.classList.add('is-valid');
            mensaje.textContent = "";
        }
    });

    confirContrasenia.addEventListener('input', () => {
        value = confirContrasenia.value;
        mensaje = document.getElementById("mensajeConfContra");

        // Verificar si las contraseñas coinciden
        if (!(value === document.getElementById("contrasenia").value)) {
            confirContrasenia.classList.add('is-invalid');
            mensaje.textContent = "Las contraseñas no coinciden.";
        } else {
            confirContrasenia.classList.remove('is-invalid');
            confirContrasenia.classList.add('is-valid');
            mensaje.textContent = "";
        }
    });
});
