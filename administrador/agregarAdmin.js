document.addEventListener("DOMContentLoaded", function() {
    let agregar = `
    <form id="addForm" class="crudForm">
        <button type="button" class="crudFormClose"><i class="fas fa-times"></i></button>
        <h1 class="crudFormTitle">Agregar producto</h1>
        <label for="updateImagen" class="crudFormLabel">Imagen del producto:</label>
        <input type="file" id="updateImagen" name="updateImagen" class="crudFormInputFile" accept="image/*">
        <label for="addNombre" class="crudFormLabel">Nombre del producto:</label>
        <input type="text" id="addNombre" name="addNombre" class="crudFormInput">
        <label for="addDescripcion" class="crudFormLabel">Descripción del producto:</label>
        <input type="text" id="addDescripcion" name="addDescripcion" class="crudFormInput">
        <label for="addPrecio" class="crudFormLabel">Precio del producto:</label>
        <input type="text" id="addPrecio" name="addPrecio" class="crudFormInput">
        <button type="submit" class="crudFormButton">Agregar</button>
    </form>
    `; 
    document.getElementById('crearBtn').onclick = function() {
        document.getElementById('agregarContainer').style.display = "block";
        document.getElementById('agregarContainer').innerHTML = agregar;
        document.getElementById('addForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const nombre = document.getElementById('addNombre').value;
            const descripcion = document.getElementById('addDescripcion').value;
            const precio = document.getElementById('addPrecio').value;
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="" class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="card-text">${descripcion}</p>
                        <p class="card-text">$ ${precio}</p>
                    </div>
                    <div class="card-body">
                        <button type="button">Actualizar</button>
                        <button type="button">Eliminar</button>
                    </div>
                </div>
            `;
            document.getElementById('agregarCardContainer').appendChild(card);
            document.getElementById('addForm').reset();
            document.getElementById('agregarContainer').style.display = "none";
        });
    };
});