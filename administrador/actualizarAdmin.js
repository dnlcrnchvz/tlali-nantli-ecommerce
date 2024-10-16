document.addEventListener("DOMContentLoaded", function() {
    let actualizar = `
    <form id="updateForm" class="actualizarForm">
        <h1 class="actualizarFormTitle">Actualizar producto</h1>
        <label for="updateImagen">Imagen del producto:</label>
        <input type="file" id="updateImagen" name="updateImagen" class="actualizarFormFile" accept="image/*>
        <label for="updateNombre">Nombre del producto:</label>
        <input type="text" id="updateNombre" name="updateNombre" class="actualizarFormInput">
        <label for="updateDescripcion">Descripción del producto:</label>
        <input type="text" id="updateDescripcion" name="updateDescripcion" class="actualizarFormInput">
        <label for="updatePrecio">Precio del producto:</label>
        <input type="text" id="updatePrecio" name="updatePrecio" class="actualizarFormInput">
        <button type="submit" class="actualizarFormButton">Actualizar</button>
    </form>
    `;
    document.getElementById('actualizarBtn').onclick = function() {
        document.getElementById('actualizarContainer').style.display = "block";
        document.getElementById('actualizarContainer').innerHTML = actualizar;
    };
    document.getElementById('actualizarContainer').innerHTML = actualizar; 
});

