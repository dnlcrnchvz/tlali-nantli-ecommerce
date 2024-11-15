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

const productosContainer = document.getElementById("productosContainer");

// Generar el HTML de cada producto
productos.forEach(producto => {
  const productoHTML = `
      <div class="card productoCard">
          <img src="${producto.imagen}" class="card-img-top productoImagen" alt="${producto.nombre}">
          <div class="card-body productoBody">
              <h5 class="productoTitle">${producto.nombre}</h5>
              <p class="productoText">${producto.descripcion}</p>
              <p class="productoPrice">Precio: $${producto.precio} MXN</p>
              <button type="submit" class="productoButton">Comprar</button>
          </div>
      </div>
  `;
  productosContainer.innerHTML += productoHTML;
});