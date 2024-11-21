import { nombreDominio } from "./nombreDominio";

const url=`${nombreDominio()}/api/v1/usuarios`;

const getUsuarios=async(url)=>
{
    const response=await fetch(url);
    const usuarios=await response.json();
    const listaUsuarios=usuarios.map(({nombre,apellidoP,apellidoM,correo})=>
    {
        return `<div class="col-lg-3 col-md-4 col-sm-5">
            <div class="card m-2 rounded sadow-sm">
                <div clas="card-body">
                    <strong>${nombre} ${apellidoP} ${apellidoM}</strong>
                </div>
                <div class="car-body">
                    ${correo}
                </div>
            </div>`
    });

    return listaUsuarios.join("");
};

export{getUsuarios};