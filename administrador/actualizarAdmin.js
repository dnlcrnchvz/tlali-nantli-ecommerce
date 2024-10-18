document.addEventListener("DOMContentLoaded", function() {
    let actualizar = `
    <form id="updateForm" class="crudForm">
        <button class="crudFormClose"><i class="fas fa-times"></i></button>
        <h1 class="crudFormTitle">Actualizar producto</h1>
        <label for="updateImagen" class="crudFormLabel">Imagen del producto:</label>
        <input type="file" id="updateImagen" name="updateImagen" class="crudFormInputFile" accept="image/*">
        <label for="updateNombre" class="crudFormLabel">Nombre del producto:</label>
        <input type="text" id="updateNombre" name="updateNombre" class="crudFormInput">
        <label for="updateDescripcion" class="crudFormLabel">Descripción del producto:</label>
        <input type="text" id="updateDescripcion" name="updateDescripcion" class="crudFormInput">
        <label for="updatePrecio" class="crudFormLabel">Precio del producto:</label>
        <input type="text" id="updatePrecio" name="updatePrecio" class="crudFormInput">
        <button type="submit" class="crudFormButton">Actualizar</button>
    </form>
    `;
    document.getElementById('actualizarBtn').onlick = function() {
        document.getElementById('actualizarContainer').style.display = "block";
        document.getElementById('actualizarContainer').innerHTML = actualizar;
        document.querySelector('.crudFormClose').onclick = function() {
            document.getElementById('agregarContainer').style.display = "none";
        };
    };
    document.getElementById('actualizarContainer').innerHTML = actualizar; 
});