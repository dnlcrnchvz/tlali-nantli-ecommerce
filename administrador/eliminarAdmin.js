const borrarProducto = (index) => {
    const button = document.getElementById(`btn${index}`);//Se obtiene el id del botón eliminar
    const card = document.getElementById(`card${index}`);//Se obtiene el id de la card
        
    if (button && card) {//Se verifica que el id del botón y card coincidan para eliminar la card correcta
        card.remove();
    }
};