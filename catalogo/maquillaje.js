const productos = [ 
    {
        nombre: "Base de Maquillaje",
        descripcion: "Base de maquillaje ligera y de larga duración que proporciona una cobertura natural para un acabado impecable.",
        precio: 360,
        imagen: "imagenes/baseMaquillaje.png"
    },
    {
        nombre: "Delineador Liquido",
        descripcion: "Delineador líquido, de color intenso disponible en varios colores de alta precisión que define tus ojos con un trazo intenso y duradero.",
        precio: 359,
        imagen: "imagenes/delineadorLiquido.png"
    },
    {
        nombre: "Fijador de Maquillaje",
        descripcion: "Fijador de maquillaje en spray que prolonga la duración de tu look, manteniéndolo intacto por horas, aprueba de agua larga duración.",
        precio: 300,
        imagen: "imagenes/fijadorMaquillaje.png"
    },
    {
        nombre: "Lapiz Labial",
        descripcion: "Lápiz labial cremoso efecto mate de larga duración con colores vibrantes que hidrata tus labios y les da un toque de elegancia.",
        precio: 319,
        imagen: "imagenes/lapizLabial.png"
    },
    {
        nombre: "Máscara de Pestañas",
        descripcion: "Máscara de pestañas que aporta volumen y alarga cada pestaña de larga duración, dándote una mirada impactante.",
        precio: 250,
        imagen: "imagenes/mascaraPestañas.png"
    }
  ];
  
  // Array para almacenar los productos del carrito
  let carrito = [];
  
  // Obtener el contenedor de productos
  const productosContainer = document.getElementById("productosContainer");
  
  // Generar el HTML de cada producto
  productos.forEach((producto, index) => {
    const productoHTML = `
        <div class="card productoCard">
            <img src="${producto.imagen}" class="card-img-top productoImagen" alt="${producto.nombre}">
            <div class="card-body productoBody">
                <h5 class="productoTitle">${producto.nombre}</h5>
                <p class="productoText">${producto.descripcion}</p>
                <p class="productoPrice">Precio: $${producto.precio} MXN</p>
                <button type="button" class="productoButton" data-index="${index}">Comprar</button>
            </div>
        </div>
    `;
    productosContainer.innerHTML += productoHTML;
  });
  
  // Agregar evento a todos los botones de "Comprar"
  productosContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("productoButton")) {
      const index = e.target.getAttribute("data-index");
      const productoSeleccionado = productos[index];
      agregarAlCarrito(productoSeleccionado);
    }
  });
  
  // Función para agregar productos al carrito
  function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
  }
  
  // Función para actualizar el carrito 
  function actualizarCarrito() {
    console.log("Carrito actualizado:", carrito);
    alert(`Has agregado '${carrito[carrito.length - 1].nombre}' al carrito. Total de productos: ${carrito.length}`);

  }