import {nombreDominio} from "./nombreDominio.js";

const postRegistroUsuario = async ( datosRegistro ) => {
  const url = `${nombreDominio()}/api/v1/usuarios`;

  const options = {
    method: "POST", // DELETE, PUT, POST, GET
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datosRegistro),
  };

  const response = await fetch(url, options);

  if( response.status !== 201){
    const serverError = await response.json();
    throw serverError.message;
  }

  const resultadoRegistro = await response.json();
  console.log(resultadoRegistro);

  return resultadoRegistro;
};

export {postRegistroUsuario};