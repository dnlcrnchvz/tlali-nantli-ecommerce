const redirigirPaginaInicio = (event)=> 
    {
        event.preventDefault();
        window.location.href = '../index.html';
    }

export{redirigirPaginaInicio};