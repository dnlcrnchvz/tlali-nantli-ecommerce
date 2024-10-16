
document.addEventListener("DOMContentLoaded", function() {
    let agregar = `
    <form id="addForm" class="actualizarForm">
        <h1 class="actualizarFormTitle">Agregar producto</h1>
        <label for="addNombre">Nombre del producto:</label>
        <input type="text" id="addInput" name="addNombre" class="actualizarFormInput">
        <label for="addDescripcion">Descripción del producto:</label>
        <input type="text" id="addInput" name="addDescripcion" class="actualizarFormInput">
        <label for="addPrecio">Precio del producto:</label>
        <input type="text" id="addInput" name="addPrecio" class="actualizarFormInput">
        <button type="submit" class="actualizarFormButton">Agregar</button>
    </form>
    `;
    document.getElementById('crearBtn').onclick = function() {
        document.getElementById('agregarContainer').style.display = "block";
        document.getElementById('agregarContainer').innerHTML = agregar;
    };
    document.getElementById('agregarContainer').innerHTML = agregar; 
});

const datosDelProducto = () =>{
    const url = "./administrador/productos.json";
}
