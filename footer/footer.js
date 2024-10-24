document.addEventListener("DOMContentLoaded", function() {
    let footer = `
    <footer class="footer">
        <div class="footerContainer">
            <div class="administradorSection">
                <h2 class="subtitleFooter"><a href="../administrador/administrador.html">Administrador</a></h2>
            </div>
            <div class="InformacionSection">
                <h2 class="subtitleFooter">Información</h2>
                <ul>
                    <li><a href="#">Cambios y Devoluciones</a></li>
                    <li><a href="#">Métodos de Pago</a></li>
                    <li><a href="#">Envío</a></li>
                    <li><a href="#">Ayuda</a></li>
                </ul>
            </div>
            <div class="redesSocialesSection">
                <h2 class="subtitleFooter">Redes Sociales</h2>
                <div class="socialIcons">
                    <a href="#" aria-label="Síguenos en Instagram">
                        <img src="../footer/imagenes/iconoInstagram.png" alt="Instagram" class="socialI">                    
                    </a>
                    <a href="#" aria-label="Síguenos en Twitter">
                        <img src="../footer/imagenes/iconoTwitter.png" alt="Twitter" class="socialI">                   
                    </a>
                    <a href="#" aria-label="Síguenos en Facebook">
                        <img src="../footer/imagenes/iconoFacebook.png" alt="Facebook" class="socialI">                   
                    </a>
                </div>
            </div>
        </div>
    </footer>
    `;
    document.getElementById('footerContainer').innerHTML = footer; 
});