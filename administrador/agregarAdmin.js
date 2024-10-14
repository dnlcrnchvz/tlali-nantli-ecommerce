
document.addEventListener("DOMContentLoaded", function() {
    let agregar = `
    <form id="addForm">
        <h1>Agregar producto</h1>
        <label for="addNombre">Nombre del producto:</label>
        <input type="text" id="addInput" name="addNombre">
        <label for="addDescripcion">Descripción del producto:</label>
        <input type="text" id="addInput" name="addDescripcion">
        <label for="addPrecio">Precio del producto:</label>
        <input type="text" id="addInput" name="addPrecio">
        <button type="submit">Agregar</button>
    </form>
    `;
    document.getElementById('crearBtn').onclick = function() {
        document.getElementById('agregarContainer').style.display = "block";
        document.getElementById('agregarContainer').innerHTML = agregar;
    };
    document.getElementById('agregarContainer').innerHTML = agregar; 
});