document.addEventListener("DOMContentLoaded", function() {
    let navbar = `
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="/index.html">
                <img src="../navbar/imagenes/logoSinFondoTlaliNantli.png" alt="Logo" width="30" height="30" class="logo-navbar d-inline-block align-text-top">
                <h1 class="navbarTitle">Tlali Nantli</h1>
            </a>
            <form class="d-flex ms-auto" role="search">
                <input class="formControl me-2 text-center" type="search" placeholder="Barra de Búsqueda" aria-label="Search">
                <button type="submit" class="searchIcon">
                    <i class="fas fa-search"></i>
                </button>
            </form>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../catalogo/catalogo.html">Catálogo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../acercaDeNosotras/acercaDeNosotras.html">Acerca de nosotras</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../contacto/contacto.html">Contacto</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-disabled="true" href="../inicioDeSesion/inicioDeSesion.html">Iniciar sesión</a>
                    </li> 
                </ul>
            </div>
        //Nota: No sé cómo ajustar el contenido que se despliega a la ventana de uso

        <div class="dropdown">
            <div class="dropdown">
                <button class="btn mi-boton-personalizado dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <a class="nav-link-carrito" href="#">
                    <img src="../navbar/imagenes/carritoCompras.png" alt="Carrito de compras" width="30" height="30"></a>
                </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Saludo</a></li>
                            <li><a class="dropdown-item" href="#">Producto</a></li>
                            <li><a class="dropdown-item" href="#">Total</a></li>
                    </ul>
        </div>
        </div>
    </nav>
    `;
    document.getElementById('navbarContainer').innerHTML = navbar; 
});