document.addEventListener("DOMContentLoaded", function() {
    let agregar = `
    <form id="addForm" class="crudForm">
        <button class="crudFormClose"><i class="fas fa-times"></i></button>
        <h1 class="crudFormTitle">Agregar producto</h1>
        <label for="updateImagen" class="crudFormLabel">Imagen del producto:</label>
        <input type="file" id="updateImagen" name="updateImagen" class="crudFormInputFile" accept="image/*">
        <label for="addNombre" class="crudFormLabel">Nombre del producto:</label>
        <input type="text" id="addInput" name="addNombre" class="crudFormInput">
        <label for="addDescripcion" class="crudFormLabel">Descripción del producto:</label>
        <input type="text" id="addInput" name="addDescripcion" class="crudFormInput">
        <label for="addPrecio" class="crudFormLabel">Precio del producto:</label>
        <input type="text" id="addInput" name="addPrecio" class="crudFormInput">
        <button type="submit" class="crudFormButton">Agregar</button>
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
