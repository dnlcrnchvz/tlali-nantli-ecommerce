
document.addEventListener("DOMContentLoaded", function() {
    let actualizar = `
    <form id="updateForm">
        <h1>Actualizar</h1>
        <label for="updateNombre">Nombre del producto:</label>
        <input type="text" id="updateInput" name="updateNombre">
        <label for="updateDescripcion">Descripción del producto:</label>
        <input type="text" id="updateInput" name="updateDescripcion">
        label for="updatePrecio">Precio del producto:</label>
        <input type="text" id="updateInput" name="updatePrecio">
        <button type="submit">Actualizar</button>
    </form>
    `;
    document.getElementById('actualizarBtn').onclick = function() {
        document.getElementById('actualizarContainer').style.display = "block";
        document.getElementById('actualizarContainer').innerHTML = actualizar;
    };
    document.getElementById('actualizarContainer').innerHTML = actualizar; 
});