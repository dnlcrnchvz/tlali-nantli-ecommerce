document.addEventListener("DOMContentLoaded", function() {
    let navbar = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="imagenes/madre_tierra.jpg" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
                Tlali Nantli
            </a>
            <!-- Mueve el formulario de búsqueda aquí -->
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Catálogo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Acerca de nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true" href="#">Inicio de sesión</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <img src="imagenes/carrito_compras.png" alt="Carrito de compras" width="30" height="30">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;
    document.getElementById('navbar-container').innerHTML = navbar; 
});