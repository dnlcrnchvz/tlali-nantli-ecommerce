//Obtener referencia del formulario
const mensaje=document.forms["formulario"];

function validador(nuevoMensaje) {
    // Expresiones regulares
    const nombreApellidoRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const telefonoRegex = /^\d{10}$/; // Exactamente 10 dígitos para teléfono
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validar nombre
    if (!nombreApellidoRegex.test(nuevoMensaje.nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
        return false;
    }

    // Validar apellido
    else if (!nombreApellidoRegex.test(nuevoMensaje.apellido)) {
        alert("El apellido solo puede contener letras y espacios.");
        return false;
    }

    // Validar teléfono
    else if (!telefonoRegex.test(nuevoMensaje.telefono)) {
        alert("El teléfono debe contener exactamente 10 dígitos.");
        return false;
    }

    // Validar email
    else if (!emailRegex.test(nuevoMensaje.email)) {
        alert("El correo electrónico no tiene un formato válido.");
        return false;
    }

    // Validar campo mensaje
    else if (nuevoMensaje.mensaje==="") {
        alert("El cuadro de mensaje no debe de estar vacío.");
        return false;
    }else
    {
        return true;
    }

    // Si todas las validaciones pasan
    
}

const siguienteMensaje=async (nuevoMensaje)=>
{
    const url="https://formsubmit.co/ajax/tlalinantliecom@gmail.com";
    const options=
    {
        method: "POST",
        headers:
            {
                "Content-Type":"application/json",
                'Accept': 'application/json'
            },
        body: JSON.stringify(nuevoMensaje)//Conversión del mobjeto a JSON
    };

    try
    {
        const respuesta=await fetch(url,options);
        const registroMensaje=await respuesta.json();
        console.table(registroMensaje);

        alert("Tu mensaje ha sido enviado. Pronto nos pondremos en contacto.");

        document.getElementById("contacto").innerHTML=`<h1 class="contactanosTitle">¡Contáctanos!</h1>
        <p class="contactanosParagraph text-center">En Tlali Nantli, estamos aquí para ayudarte. Si tienes alguna pregunta sobre nuestros productos, tu pedido o simplemente quieres saber más sobre nuestro compromiso con el cuidado orgánico, no dudes en ponerte en contacto con nosotros. Puedes enviarnos un mensaje a través del formulario de contacto o escribirnos directamente a nuestro correo electrónico. ¡Estaremos encantadas de atenderte y resolver cualquier duda que tengas!</p>
  
        <!-- Sección formulario -->
        <section class="contactoFormularioSection">
          <form id="formulario" class="contactoFormulario col-lg-4 col-md-7">
            <!-- Apartado nombre -->
            <div class="form-group mt-2 col-md-12">
              <label for="nombre" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="nombre" placeholder="Escribe tu nombre"/>
            </div>
            <!-- Apartado apellido -->
            <div class="form-group mt-2 col-md-12">
              <label for="apellido" class="form-label">Apellido</label>
              <input type="text" class="form-control" id="apellido" placeholder="Escribe tu apellido"/>
            </div>
            <!-- Apartado teléfono -->
            <div class="form-group mt-2 col-md-12">
              <label for="telefono" class="form-label">Teléfono</label>
              <input type="tel" class="form-control" id="telefono" placeholder="Escribe tu número telefonico a 10 dígitos"/>
            </div>
            <!-- Apartado email -->
            <div class="form-group mt-2 col-md-12">
              <label for="correoElectronico" class="form-label">Correo Electrónico</label>
              <input type="email" class="form-control" id="correoElectronico" placeholder="ejemplo@correo.com"/>
            </div>
            <!-- Apartado mensaje -->
            <div class="form-group mt-2 col-md-12">
              <label for="mensaje" class="form-label">Mensaje</label>
              <textarea class="form-control" id="mensaje" rows="6" placeholder="¿Cómo podemos ayudarte?"></textarea>
            </div>
            <!-- Botón -->
            <button type="submit" class="contactoFormularioButton" id="boton" >Enviar</button>
          </form>
        </section>`
    }
    catch(error)
    {
        console.warn(error);
    }
}

const cargandoEnviarMensaje=()=>//Se crea la función para mostrar el spinner de cargando en lo que se muestra la información al dar click en el boton 2
{
    document.getElementById("contacto").innerHTML=`<div class="cargando-container col-12">
            <img src="../navbar/imagenes/logoSinFondoTlaliNantli.png" class="imagen-fondo" alt="Imagen de fondo" />
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>`
};

mensaje.addEventListener("submit",(event)=>
{
    
    event.preventDefault();
    console.log(event);
    console.log("Dentro del formulario");
    //Se leen las entradas del formulario
    const nuevoMensaje=
    {
        nombre: mensaje.elements["nombre"].value,
        apellido: mensaje.elements["apellido"].value,
        telefono: mensaje.elements["telefono"].value,
        email: mensaje.elements["correoElectronico"].value,
        mensaje: mensaje.elements["mensaje"].value
    }

    console.log(nuevoMensaje);

    cargandoEnviarMensaje();

    if(validador(nuevoMensaje))
    {
        siguienteMensaje(nuevoMensaje);
    }
}); 