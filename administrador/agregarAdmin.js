document.addEventListener("DOMContentLoaded", function() {
    let agregar = `
    <form id="addForm" class="crudForm">
        <button type="button" class="crudFormClose"><i class="fas fa-times"></i></button>
        <h1 class="crudFormTitle">Agregar producto</h1>
        <div id="alertaUpdate" class="alert alert-danger d-none mt-3"></div> //Contenedor alerta

        <div class="mb-3">
            <label for="updateImagen" class="crudFormLabel">Imagen del producto:</label>
            <input type="file" id="updateImagen" name="updateImagen" class="crudFormInputFile" accept="image/*">
        </div>
        <div class="mb-3">
            <label for="addNombre" class="crudFormLabel">Nombre del producto:</label>
            <input type="text" id="addNombre" name="addNombre" class="crudFormInput" maxlength="50" placeholder="Max 50 caracteres" required>
        </div>
        <div class="mb-3">
            <label for="addDescripcion" class="crudFormLabel">Descripción del producto:</label>
            <input type="text" id="addDescripcion" name="addDescripcion" class="crudFormInput" maxlength="100" placeholder="Max 100 caracteres" required>
        </div>
        <div class="mb-3">
            <label for="addPrecio" class="crudFormLabel">Precio del producto:</label>   
            <input type="text" id="addPrecio" name="addPrecio" class="crudFormInput" min="0" step="0.01" placeholder="Ej: 99.99" required>
        </div>
        <button type="submit" class="crudFormButton">Agregar</button>
    </form>
    `; 
    document.getElementById('crearBtn').onclick = function() {
        document.getElementById('agregarContainer').style.display = "block";
        document.getElementById('agregarContainer').innerHTML = agregar;
        document.querySelector('.crudFormClose').onclick = function() {
            document.getElementById('agregarContainer').style.display = "none";
        };
        document.getElementById('addForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const nombre = document.getElementById('addNombre').value;
            const descripcion = document.getElementById('addDescripcion').value;
            const precio = document.getElementById('addPrecio').value;
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <div class="card" style="width: 15rem; height: 20rem">
                    <img src="" class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="card-text">${descripcion}</p>
                        <p class="card-text">$ ${precio}</p>
                    </div>
                    <div class="card-body">
                        <button class="btn-actualizar" id="actualizarBtn" type="button">Actualizar</button>
                        <button class="btn-eliminar" id="eliminarBtn" type="button">Eliminar</button>
                    </div>
                </div>
            `;
            document.getElementById('agregarCardContainer').appendChild(card);
            document.getElementById('addForm').reset();
            document.getElementById('agregarContainer').style.display = "none";
            /* Eliminar card */
            card.querySelector('#eliminarBtn').onclick = function() {
                card.remove();
            };
            /* Actualizar card */
            card.querySelector('#actualizarBtn').onclick = function() {
                const container = document.getElementById('actualizarContainer');
                container.style.display = "block";
                const nombreActual = card.querySelector('.card-title').textContent;
                const descripcionActual = card.querySelector('.card-text').textContent;
                const precioActual = card.querySelectorAll('.card-text')[1].textContent.slice(2);
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
                document.querySelector('.crudFormClose').onclick = function() {
                    container.style.display = "none";
                };
                document.getElementById('updateForm').onsubmit = function(event) {
                    event.preventDefault();
                    card.querySelector('.card-title').textContent = document.getElementById('updateNombre').value;
                    card.querySelector('.card-text').textContent = document.getElementById('updateDescripcion').value;
                    card.querySelectorAll('.card-text')[1].textContent = `$ ${document.getElementById('updatePrecio').value}`;
                    container.style.display = "none";
                };
            };
        });
    };


    
//obtener referencia del formulario 
const agregarArticulo = document.forms["addForm"];
function validacion(agregarProducto){
 // Expresiones regulares
 const nombreProductoRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
 const descripcionRegex = /""/; 
 const precioRegex = /^\d{3}$/; // 3 dígitos para el precio

 // Validar nombre del producto
 if (!nombreProductoRegex.test(agregarProducto.nombre)) {
    alert("El nombre del producto solo puede contener letras y espacios.");
    return false;
}

 // Validar campo de descripción
 else if (!descripcionRegex==="") {
    alert("El cuadro de descripción no debe de estar vacío.");
    return false;
}else
{
    return true;
}
//validar precio 
if (!precioRegex.test(agregarProducto.precio)){
    alert("El precio del producto solo puede contener 3 dígitos numericos");
    return false;
}

}
});