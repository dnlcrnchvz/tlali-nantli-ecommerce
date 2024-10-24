//Función que valida las entradas del formulario para actualzar productos
function validarAct(form) {
    // Expresiones regulares
    const nombreProductoRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const descripcionRegex = /^.+$/; 
    const precioRegex = /^\d+(\.\d{1,2})?$/; // Permitimos precios con hasta 2 decimales

    // Validar nombre
    if (!nombreProductoRegex.test(form.updateNombre.value)) {
        alert("El nombre del producto solo puede contener letras y espacios.");
        return false;
    }

    // Validar descripción
    if (!descripcionRegex.test(form.updateDescripcion.value)) {
        alert("El cuadro de descripción no debe de estar vacío.");
        return false;
    }

    // Validar precio 
    if (!precioRegex.test(form.updatePrecio.value) || form.updatePrecio.value < 0) {
        alert("El precio del producto debe ser un número positivo y puede incluir decimales.");
        return false;
    }

    return true; // Todas las validaciones pasaron
}

const actProd = (index) => {
    const button = document.getElementById(`btn${index}`); // Se obtiene el id del botón
    const prod = document.getElementById(`card${index}`); // Se obtiene el id de la card

    if (button && prod) {
        const container = document.getElementById('actualizarContainer');
        container.style.display = "block";

        const nombreActual = document.getElementById(`nomCard${index}`).textContent;
        const descripcionActual = document.getElementById(`descCard${index}`).textContent;
        const precioActual = document.getElementById(`precCard${index}`).textContent.slice(2, -4); // Se quita el símbolo de $ y " MXN"

        container.innerHTML = `
            <form id="updateForm" class="crudForm">
                <button type="button" class="crudFormClose"><i class="fas fa-times"></i></button>
                <h1 class="crudFormTitle">Actualizar producto</h1>
                <div class="mb-1 divForm">
                    <label for="updateImagen" class="crudFormLabel">Imagen del producto:</label>
                    <input type="file" id="updateImagen" name="updateImagen" class="crudFormInputFile" accept="image/*">
                </div>
                <div class="mb-1 divForm">
                    <label for="updateNombre" class="crudFormLabel">Nombre del producto:</label>
                    <input type="text" id="updateNombre" name="updateNombre" class="crudFormInput" value="${nombreActual}" required>
                </div>
                <div class="mb-1 divForm">
                    <label for="updateDescripcion" class="crudFormLabel">Descripción del producto:</label>
                    <input type="text" id="updateDescripcion" name="updateDescripcion" class="crudFormInput" value="${descripcionActual}" required>
                </div>
                <div class="mb-1 divForm">
                    <label for="updatePrecio" class="crudFormLabel">Precio del producto:</label>
                    <input type="text" id="updatePrecio" name="updatePrecio" class="crudFormInput" value="${precioActual}" required>
                </div>
                <div class="mb-1 divButton">
                    <button type="submit" class="crudFormButton">Actualizar</button>
                </div>
            </form>
        `;

        // Cerrar el formulario
        document.querySelector('.crudFormClose').onclick = function() {
            container.style.display = "none";
        };

        // Manejar el envío del formulario
        document.getElementById('updateForm').onsubmit = function(event) {
            event.preventDefault(); // Evita el envío del formulario

            if (!validarAct(this)) return; // Se validan los campos del formulario

            // Actualizar los datos de la card
            document.getElementById(`nomCard${index}`).textContent = document.getElementById('updateNombre').value;
            document.getElementById(`descCard${index}`).textContent = document.getElementById('updateDescripcion').value;
            document.getElementById(`precCard${index}`).textContent = `$ ${document.getElementById('updatePrecio').value} MXN`;

            container.style.display = "none"; // Cerrar el contenedor después de actualizar
        };
    }
};