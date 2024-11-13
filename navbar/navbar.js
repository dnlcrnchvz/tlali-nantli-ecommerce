document.addEventListener("DOMContentLoaded", function() {
    let navbar;
    
    if (localStorage.getItem('isAuthenticated') === 'true')
    {
        // Si está autenticado
        navbar= `
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/index.html">
                    <img src="../navbar/imagenes/logoSinFondoTlaliNantli.png" alt="Logo" width="30" height="30" class="logo-navbar d-inline-block align-text-top">
                    <h1 class="navbarTitle">Tlali Nantli</h1>
                </a>
                <form class="d-flex searchInput" role="search">
                    <input class="formControl me-2 text-center" type="search" placeholder="Barra de Búsqueda" aria-label="Search">
                    <button type="submit" class="searchIcon">
                        <i class="fas fa-search searchI"></i>
                    </button>
                </form>
                <button class="navbar-toggler barsIcon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars barsI"></i>
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
                            <a id="iniciarSesion" class="nav-link" aria-disabled="true" href="../inicioDeSesion/inicioDeSesion.html">Cerrar sesión</a>
                        </li>
                    </ul>
                </div>
                <div class="carritoDiv">
                    <button type="submit" class="carritoIcon">
                        <a class="nav-link-carrito" href="../carritoCompras/carrito.html">
                            <i class="fa-solid fa-cart-shopping carritoI"></i>
                        </a>
                    </button>
                </div>
            </div>
        </nav>`;
    }
    else //Si no está autenticado
    {
        navbar= `
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/index.html">
                    <img src="../navbar/imagenes/logoSinFondoTlaliNantli.png" alt="Logo" width="30" height="30" class="logo-navbar d-inline-block align-text-top">
                    <h1 class="navbarTitle">Tlali Nantli</h1>
                </a>
                <form class="d-flex searchInput" role="search">
                    <input class="formControl me-2 text-center" type="search" placeholder="Barra de Búsqueda" aria-label="Search">
                    <button type="submit" class="searchIcon">
                        <i class="fas fa-search searchI"></i>
                    </button>
                </form>
                <button class="navbar-toggler barsIcon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars barsI"></i>
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
                            <a id="iniciarSesion" class="nav-link" aria-disabled="true" href="../inicioDeSesion/inicioDeSesion.html">Iniciar sesión</a>
                        </li>
                    </ul>
                </div>
                <div class="carritoDiv">
                    <button type="" class="carritoIcon">
                        <a class="nav-link-carrito" href="#">
                            <i class="fa-solid fa-cart-shopping carritoI"></i>
                        </a>
                    </button>
                </div>
            </div>
        </nav>`;
    }
    
    
    document.getElementById('navbarContainer').innerHTML = navbar; 
});