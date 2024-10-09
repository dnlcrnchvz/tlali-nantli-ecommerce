document.addEventListener("DOMContentLoaded", function() {
    let navbar = `
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="../paginaPrincipal/index.html">
                <img src="../navbar/imagenes/logo-sin-fondo-tlali-nantli.png" alt="Logo" width="30" height="30" class="logo-navbar d-inline-block align-text-top">
                Tlali Nantli
            </a>
            <!-- Mueve el formulario de búsqueda aquí -->
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Barra de Búsqueda" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="../paginaPrincipal/index.html">Inicio</a>
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
                        <a class="nav-link" aria-disabled="true" href="../inicioDeSesion/inicioDeSesion.html">Inicio de sesión</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <img src="../navbar/imagenes/carrito_compras.png" alt="Carrito de compras" width="30" height="30">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;
    document.getElementById('navbar-container').innerHTML = navbar; 
});