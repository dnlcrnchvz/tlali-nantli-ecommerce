document.addEventListener("DOMContentLoaded", function() {
    let footer = `
    <footer class="footer">
        <div class="footer-section">
            <h2>Administrador</h2>
        </div>
        <div class="footer-section">
            <h2>Información</h2>
            <ul>
                <li>Cambios y Devoluciones</li>
                <li>Métodos de Pago</li>
                <li>Envío</li>
                <li>Ayuda</li>
            </ul>
        </div>
        <div class="footer-section">
            <h2>Redes Sociales</h2>
            <div class="social-icons">
                <a href="#" aria-label="Síguenos en Instagram">
                    <img src="../footer/imagenes/iconoInstagram.png" alt="Instagram">
                </a>
                <a href="#" aria-label="Síguenos en Twitter">
                    <img src="../footer/imagenes/iconoTwitter.png" alt="Twitter">
                </a>
                <a href="#" aria-label="Síguenos en Facebook">
                    <img src="../footer/imagenes/iconoFacebook.png" alt="Facebook">
                </a>
            </div>
        </div>
    </footer>
    `;
    document.getElementById('footerContainer').innerHTML = footer; 
});