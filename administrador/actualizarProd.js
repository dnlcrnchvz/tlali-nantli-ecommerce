const actProd = (index) => {
    const button = document.getElementById(`btn${index}`); // Se obtiene el id del botón
    const prod = document.getElementById(`card${index}`); // Se obtiene el id de la card

    if (button && prod) {
        const container = document.getElementById('actualizarContainer');
        container.style.display = "block";

        const nombreActual = document.getElementById(`nomCard${index}`).textContent;
        const descripcionActual = document.getElementById(`descCard${index}`).textContent;
        const precioActual = document.getElementById(`precCard${index}`).textContent.slice(2,5); // Se quita el símbolo de $

        container.innerHTML = `
            <form id="updateForm" class="crudForm">
                <button type="button" class="crudFormClose"><i class="fas fa-times"></i></button>
                <h1 class="crudFormTitle">Actualizar producto</h1>
                <label for="updateImagen" class="crudFormLabel">Imagen del producto:</label>
                <input type="file" id="updateImagen" name="updateImagen" class="crudFormInputFile" accept="image/*">
                <label for="updateNombre" class="crudFormLabel">Nombre del producto:</label>
                <input type="text" id="updateNombre" name="updateNombre" class="crudFormInput" value="${nombreActual}">
                <label for="updateDescripcion" class="crudFormLabel">Descripción del producto:</label>
                <input type="text" id="updateDescripcion" name="updateDescripcion" class="crudFormInput" value="${descripcionActual}">
                <label for="updatePrecio" class="crudFormLabel">Precio del producto:</label>
                <input type="text" id="updatePrecio" name="updatePrecio" class="crudFormInput" value="${precioActual}">
                <button type="submit" class="crudFormButton">Actualizar</button>
            </form>
        `;

        // Cerrar el formulario
        document.querySelector('.crudFormClose').onclick = function() {
            container.style.display = "none";
        };

        // Manejar el envío del formulario
        document.getElementById('updateForm').onsubmit = function(event) {
            event.preventDefault(); // Evita el envío del formulario

            // Actualizar los datos de la card
            document.getElementById(`nomCard${index}`).textContent = document.getElementById('updateNombre').value;
            document.getElementById(`descCard${index}`).textContent = document.getElementById('updateDescripcion').value;
            document.getElementById(`precCard${index}`).textContent = `$ ${document.getElementById('updatePrecio').value} MXN`;

            container.style.display = "none"; // Cerrar el contenedor después de actualizar
        };
    }
};