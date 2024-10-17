document.addEventListener("DOMContentLoaded", function() {
    let navbar = `
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="/index.html">
                <img src="../navbar/imagenes/logoSinFondoTlaliNantli.png" alt="Logo" width="30" height="30" class="logo-navbar d-inline-block align-text-top">
                <h1 class="navbarTitle">Artículos</h1>
            </a>
            <form class="d-flex ms-auto" role="search">
                <input class="formControl me-2 text-center" type="search" placeholder="Barra de Búsqueda" aria-label="Search">
                <button type="submit" class="searchIcon">
                    <i class="fas fa-search"></i>
                </button>
            </form>
            <button id="crearBtn" class="btn adminButton" type="button">
                Crear artículo
                <i class="fas fa-plus"></i>
            </button>
            <button id="actualizarBtn" class="btn adminButton" type="button">
                Actualizar artículo
            </button>
            <button id="salirBtn" class="btn adminButton" type="button">
                Cerrar sesión
                <i class="fas fa-sign-out-alt"></i>
            </button>
        </div>
    </nav>
    `;
    document.getElementById('navbarContainer').innerHTML = navbar; 
});