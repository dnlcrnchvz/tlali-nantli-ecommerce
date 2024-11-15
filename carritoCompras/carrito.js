//calcular el precio total 
function updateTotal() {
    let total = 0;
    document.querySelectorAll('.producto').forEach(producto => {
        // Obtener el precio del producto 
        let precio = parseFloat(producto.querySelector('.precioProducto').innerText.replace('$','','MXN', '').trim());
        let cantidad = producto.querySelector('input[type="number"]').value;
        // hacer las operaciones correspondientes
        total += precio * cantidad;
    });
    
    // Mostrar el total 
    document.querySelector('#total').innerText = `Total: $${total.toFixed(2)} MXN`;
}

// Actualizar el precio cuando cambia la cantidad 
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('change', updateTotal);
});

// botones de + y - a los inputs de tipo numero
document.querySelectorAll('input[type="number"]').forEach(input => {
    // boton de menos
    const minusButton = document.createElement('button');
    minusButton.type = 'button';
    minusButton.classList.add('minus-button');
    minusButton.innerText = '-';
    input.parentElement.insertBefore(minusButton, input);

    // boton de más
    const plusButton = document.createElement('button');
    plusButton.type = 'button';
    plusButton.classList.add('plus-button');
    plusButton.innerText = '+';
    input.parentElement.appendChild(plusButton);

    // funcionalidad al boton de menos
    minusButton.addEventListener('click', function () {
        if (input.value > 1) {
            input.value = parseInt(input.value) - 1;
            updateTotal(); // Actualizar el total después de cambiar la cantidad
        }
    });

    // funcionalidad al boton de más
    plusButton.addEventListener('click', function () {
        input.value = parseInt(input.value) + 1;
        updateTotal(); // Actualizar el total después de cambiar la cantidad
    });
});

// validacion para el cp, que sea de 5 digitos
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); 
    let postalCode = document.getElementById('codigoPostal').value;
    if (postalCode.length !== 5 || isNaN(postalCode)) {
        alert('El código postal debe tener 5 dígitos numéricos.');
    } else {
        alert("¡El formulario ha sido enviado con éxito!");
        this.submit();
    }
});


updateTotal();
