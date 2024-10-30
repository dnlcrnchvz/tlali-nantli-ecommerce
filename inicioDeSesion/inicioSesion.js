//Obtener referencia del formulario
const registro=document.forms["formulario"];

document.getElementById("inicioSesion").addEventListener("submit", (event)=>
{
    event.preventDefault(); // Evita el envío del formulario
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //Leer inputs
    const correo=document.getElementById("correo");
    const contrasenia=document.getElementById("contrasenia");
    
    let value;
    const mensaje=document.getElementById("mensaje");

    const usuario="tlalinantliecom@gmail.com";
    const password="tlaliNantli";
        
    if (correo.value === "" || contrasenia.value === "")//Valida si un campo está vacio
        {
           
            mensaje.textContent = "Error: El correo electrónico y la contraseña son obligatorios.";
            mensaje.style.color = "red";
        }
            else
            {
                mensaje.textContent="";
                if(correo===usuario && password===contrasenia)//Validar que el correo exista en el localStorage
                {
                    //Se reedirige a pagina de inicio
                    mensaje.textContent = "Inicio de sesión correcto";
                    mensaje.style.color = "green";
                }
                else //Si la contraseña o usuario no coinciden
                {

                    mensaje.textContent = "Usuario o contraseña incorrectos. Por favor verifique sus datos y vuelva a intentarlo.";
                    mensaje.style.color = "red";
                }
            }
});

//