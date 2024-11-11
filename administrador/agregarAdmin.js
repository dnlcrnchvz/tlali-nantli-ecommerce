document.addEventListener("DOMContentLoaded", function() {
    let agregar = `
    <form id="addForm" class="crudForm">
        <button class="crudFormClose"><i class="fas fa-times"></i></button>
        <h1 class="crudFormTitle">Agregar producto</h1>
        <div id="alertaUpdate" class="alert alert-danger d-none mt-3"></div>
        <div class="mb-1 divForm">
            <label for="updateImagen" class="crudFormLabel">Imagen del producto:</label>
            <input type="file" id="updateImagen" name="updateImagen" class="crudFormInputFile" accept="image/*" required>
        </div>
        <div class="mb-1 divForm">
            <label for="addNombre" class="crudFormLabel">Nombre del producto:</label>
            <input type="text" id="addNombre" name="addNombre" class="crudFormInput" maxlength="50" placeholder="Max 50 caracteres" required>
        </div>
        <div class="mb-1 divForm">
            <label for="addDescripcion" class="crudFormLabel">Descripción del producto:</label>
            <input type="text" id="addDescripcion" name="addDescripcion" class="crudFormInput" maxlength="100" placeholder="Max 100 caracteres" required>
        </div>
        <div class="mb-1 divForm">
            <label for="addPrecio" class="crudFormLabel">Precio del producto:</label>   
            <input type="text" id="addPrecio" name="addPrecio" class="crudFormInput" min="0" step="0.01" placeholder="Ej: 99.99" required>
        </div>
        <div class="mb-1 divButton">
            <button type="submit" class="crudFormButton">Agregar</button>
        </div>
    </form>
    `; 
    document.getElementById('crearBtn').onclick = function() {
        document.getElementById('agregarContainer').style.display = "block";
        document.getElementById('agregarContainer').innerHTML = agregar;

        // Cerrar el formulario
        document.querySelector('.crudFormClose').onclick = function() {
            document.getElementById('agregarContainer').style.display = "none";
        };

        // Manejo del formulario de agregar
        document.getElementById('addForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // Validamos los datos del formulario
            if (!validacion(this)) return;

            // Capturamos los datos del formulario
            const nombre = document.getElementById('addNombre').value;
            const descripcion = document.getElementById('addDescripcion').value;
            const precio = document.getElementById('addPrecio').value;
            const imagen = document.getElementById('updateImagen').files[0]; // Imagen del producto

            // Crear el objeto del producto
            const nuevoProducto = {
                nombre: nombre,
                descripcion: descripcion,
                precio: parseFloat(precio), // Convertimos a número
                imagen: imagen ? imagen.name : '' // Guardamos solo el nombre de la imagen
            };

            // Convertimos el objeto a formato JSON
            const nuevoProductoJSON = JSON.stringify(nuevoProducto);
            console.log("Producto agregado en JSON:", nuevoProductoJSON);

            // Creamos la tarjeta del producto
            const card = document.createElement('div');
            card.classList.add('card');
            const imagenUrl = imagen ? URL.createObjectURL(imagen) : ''; // Crear URL temporal para la imagen

            card.innerHTML = `
                <div class="card" style="width: 15rem; height: 20rem">
                    <img src="${imagenUrl}" class="card-img-top" alt="${nombre}">
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

            // Eliminar card
            card.querySelector('#eliminarBtn').onclick = function() {
                card.remove();
            };

            // Actualizar card
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
                        <div class="mb-1 divForm">
                            <label for="updateImagen" class="crudFormLabel">Imagen del producto:</label>
                            <input type="file" id="updateImagen" name="updateImagen" class="crudFormInputFile" accept="image/*">
                        </div>
                        <div class="mb-1 divForm">
                            <label for="updateNombre" class="crudFormLabel">Nombre del producto:</label>
                            <input type="text" id="updateNombre" name="updateNombre" class="crudFormInput" value="${nombreActual}">
                        </div>
                        <div class="mb-1 divForm">
                            <label for="updateDescripcion" class="crudFormLabel">Descripción del producto:</label>
                            <input type="text" id="updateDescripcion" name="updateDescripcion" class="crudFormInput" value="${descripcionActual}">
                        </div>
                        <div class="mb-1 divForm">
                            <label for="updatePrecio" class="crudFormLabel">Precio del producto:</label>
                            <input type="text" id="updatePrecio" name="updatePrecio" class="crudFormInput" value="${precioActual}">
                        </div>
                        <div class="mb-1 divButton">
                            <button type="submit" class="crudFormButton">Actualizar</button>
                        </div>
                    </form>
                `;

                // Cerrar el formulario de actualización
                document.querySelector('.crudFormClose').onclick = function() {
                    container.style.display = "none";
                };

                // Manejo del formulario de actualización
                document.getElementById('updateForm').onsubmit = function(event) {
                    event.preventDefault();

                    // Capturamos los datos del formulario de actualización
                    const nuevoNombre = document.getElementById('updateNombre').value;
                    const nuevaDescripcion = document.getElementById('updateDescripcion').value;
                    const nuevoPrecio = document.getElementById('updatePrecio').value;
                    const nuevaImagen = document.getElementById('updateImagen').files[0]; // Imagen actualizada

                    // Crear objeto con los datos actualizados
                    const productoActualizado = {
                        nombre: nuevoNombre,
                        descripcion: nuevaDescripcion,
                        precio: parseFloat(nuevoPrecio), // Convertimos a número
                        imagen: nuevaImagen ? nuevaImagen.name : '' // Guardamos solo el nombre de la imagen
                    };

                    // Convertir el objeto a formato JSON
                    const productoActualizadoJSON = JSON.stringify(productoActualizado);
                    console.log("Producto actualizado en JSON:", productoActualizadoJSON);

                    // Actualizamos los valores en la tarjeta
                    card.querySelector('.card-title').textContent = nuevoNombre;
                    card.querySelector('.card-text').textContent = nuevaDescripcion;
                    card.querySelectorAll('.card-text')[1].textContent = `$ ${nuevoPrecio}`;

                    if (nuevaImagen) {
                        const nuevaImagenUrl = URL.createObjectURL(nuevaImagen);
                        card.querySelector('img').src = nuevaImagenUrl; // Actualizamos la imagen
                    }

                    container.style.display = "none";
                };
            };
        });
    };

    // Función de validación
    function validacion(agregarProducto) {
        const nombreProductoRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
        const descripcionRegex = /^.+$/; 
        const precioRegex = /^\d+(\.\d{1,2})?$/; // permite números enteros o con decimales

        // Validar imagen
        if (!agregarProducto.updateImagen.files.length) {
            alert("Por favor, selecciona una imagen.");
            return false;
        }

        // Validar nombre
        const nombre = agregarProducto.addNombre.value;
        if (!nombreProductoRegex.test(nombre)) {
            alert("El nombre solo puede contener letras y espacios.");
            return false;
        }

        // Validar descripción
        const descripcion = agregarProducto.addDescripcion.value;
        if (!descripcionRegex.test(descripcion)) {
            alert("La descripción no puede estar vacía.");
            return false;
        }

        // Validar precio
        const precio = agregarProducto.addPrecio.value;
        if (!precioRegex.test(precio) || precio <= 0) {
            alert("El precio debe ser un número mayor que cero.");
            return false;
        }

        return true; // Todas las validaciones pasaron
    }
});