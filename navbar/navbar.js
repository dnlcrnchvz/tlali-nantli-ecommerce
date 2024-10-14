document.addEventListener("DOMContentLoaded", function() {
    let navbar = `
    <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="../paginaPrincipal/index.html">
            <img src="../navbar/imagenes/logo-sin-fondo-tlali-nantli.png" alt="Logo" width="30" height="30" class="logo-navbar d-inline-block align-text-top">
            <h1 class="navbarTitle">Tlali Nantli</h1>
        </a>
        <form class="d-flex ms-auto" role="search">
            <input class="formControl me-2 text-center" type="search" placeholder="  Buscar" aria-label="Search">
            <button type="submit" class="searchIcon">
                <i id="botonBusqueda" class="fas fa-search"></i>
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
            <a class="nav-link-carrito" href="#">
                <img src="../navbar/imagenes/carritoCompras.png" alt="Carrito de compras" width="30" height="30">
            </a>
        </div>
    </nav>
    `;
    document.getElementById('navbarContainer').innerHTML = navbar; 
});