import {nombreDominio} from "./nombreDominio";

const postLogin = async ( formularioRegistro ) => {
  const url = `${nombreDominio()}/api/v1/inicioSesion`;

  const options = {
    method: "POST", 
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formularioRegistro),
  };

  const response = await fetch(url, options);

  if( response.status !== 200){
    const serverError = await response.json();
    throw serverError.message;
  }

  const resultadoInicioSesion = await response.json();
  console.log(resultadoInicioSesion);

  return loginResult;
};

export { postLogin };