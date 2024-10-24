document.addEventListener("DOMContentLoaded", function() {
    let navbar = `
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid navbarAdmin">
            <a class="navbar-brand" href="/index.html">
                <img src="../navbar/imagenes/logoSinFondoTlaliNantli.png" alt="Logo" width="30" height="30" class="logo-navbar d-inline-block align-text-top">
                <h1 class="navbarTitle">Artículos</h1>
            </a>
            <form class="d-flex searchInputAdmin" role="search">
                <input class="formControlAdmin me-2 text-center" type="search" placeholder="Barra de Búsqueda" aria-label="Search">
                <button type="submit" class="searchIcon">
                    <i class="fas fa-search searchI"></i>
                </button>
            </form>
            <div class="buttonAdmin">
                <button id="crearBtn" class="btn adminButton" type="button">
                    <h6 class="buttonTitle">Crear artículo</h6>
                    <i class="fas fa-plus crearIcon"></i>
                </button>
                <button id="salirBtn" class="btn adminButton" type="button">
                    <h6 class="buttonTitle">Cerrar sesión</h6>
                    <i class="fas fa-sign-out-alt crearIcon"></i>
                </button>
            </div>
        </div>
    </nav>
    `;
    document.getElementById('navbarContainer').innerHTML = navbar; 
});