const datosProductos=(url)=>{
    fetch(url)
        .then((response)=>{
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((datos)=>{
            //Asegúrate de que los datos existen antes de acceder a ellos
            console.table(datos.productos);
            document.getElementById("cards").innerHTML=`
               <link rel="stylesheet" href="productos.css"><!--Estilos de cards de productos-->
                <div id="card0" class="card product-card" style="width: 15rem;">
                    <img id="imgCard0" src=" " class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title" id="nomCard0"></h5>
                        <p class="card-text" id="descCard0"></p>
                        <p class="card-text" id="precCard0"></p>
                    </div>
                    <div class="product-actions">
                        <button class="btn-actualizar" id="actualizarBtn" onclick="actProd(0) type="button">Actualizar</button>
                        <button id="btn0" class="btn-eliminar" onclick="borrarProducto(0)">Eliminar</button>
                    </div>
                </div>

                <div id="card1" class="card product-card" style="width:  15rem;">
                    <img id="imgCard1" src="" class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title" id="nomCard1"></h5>
                        <p class="card-text" id="descCard1"></p>
                        <p class="card-text" id="precCard1"></p>
                    </div>
                    <div class="product-actions">
                        <button class="btn-actualizar" id="actualizarBtn" onclick="actProd(1) type="button">Actualizar</button>
                        <button id="btn1" class="btn-eliminar" onclick="borrarProducto(1)">Eliminar</button>
                    </div>
                </div>

                <div id="card2" class="card product-card" style="width:  15rem;">
                    <img id="imgCard2" src="" class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title" id="nomCard2"></h5>
                        <p class="card-text" id="descCard2"></p>
                        <p class="card-text" id="precCard2"></p>
                    </div>
                    <div class="product-actions">
                        <button class="btn-actualizar" id="actualizarBtn" onclick="actProd(2) type="button">Actualizar</button>
                        <button id="btn2"  class="btn-eliminar" onclick="borrarProducto(2)">Eliminar</button>
                    </div>
                </div>

                <div id="card3" class="card product-card" style="width:  15rem;">
                    <img id="imgCard3" src="" class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title" id="nomCard3"></h5>
                        <p class="card-text" id="descCard3"></p>
                        <p class="card-text" id="precCard3"></p>
                    </div>
                    <div class="product-actions">
                        <button class="btn-actualizar" id="actualizarBtn" onclick="actProd(3) type="button">Actualizar</button>
                        <button id="btn3"  class="btn-eliminar" onclick="borrarProducto(3)">Eliminar</button>
                    </div>
                </div>

                <div id="card4" class="card product-card" style="width:  15rem;">
                    <img id="imgCard4" src="" class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title" id="nomCard4"></h5>
                        <p class="card-text" id="descCard4"></p>
                        <p class="card-text" id="precCard4"></p>
                    </div>
                    <div class="product-actions">
                        <button class="btn-actualizar" id="actualizarBtn" onclick="actProd(4) type="button">Actualizar</button>
                        <button id="btn4" class="btn-eliminar" onclick="borrarProducto(4)">Eliminar</button>
                    </div>
                </div>

                <div id="card5" class="card product-card" style="width:  15rem;">
                    <img id="imgCard5" src="" class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title" id="nomCard5"></h5>
                        <p class="card-text" id="descCard5"></p>
                        <p class="card-text" id="precCard5"></p>
                    </div>
                    <div class="product-actions">
                        <button class="btn-actualizar" id="actualizarBtn" onclick="actProd(5) type="button">Actualizar</button>
                        <button id="btn5" class="btn-eliminar" onclick="borrarProducto(5)">Eliminar</button>
                    </div>
                </div>

                <div id="card6" class="card product-card" style="width:  15rem;">
                    <img id="imgCard6" src="" class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title" id="nomCard6"></h5>
                        <p class="card-text" id="descCard6"></p>
                        <p class="card-text" id="precCard6"></p>
                    </div>
                    <div class="product-actions">
                        <button class="btn-actualizar" id="actualizarBtn" onclick="actProd(6) type="button"">Actualizar</button>
                        <button id="btn6" class="btn-eliminar" onclick="borrarProducto(6)">Eliminar</button>
                    </div>
                </div>

                <div id="card7" class="card product-card" style="width:  15rem;">
                    <img id="imgCard7" src="" class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title" id="nomCard7"></h5>
                        <p class="card-text" id="descCard7"></p>
                        <p class="card-text" id="precCard7"></p>
                    </div>
                    <div class="product-actions">
                        <button class="btn-actualizar" id="actualizarBtn" onclick="actProd(7) type="button"">Actualizar</button>
                        <button id="btn7" class="btn-eliminar" onclick="borrarProducto(7)">Eliminar</button>
                    </div>
                </div>

                <div id="card8" class="card product-card" style="width:  15rem;">
                    <img id="imgCard8" src="" class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title" id="nomCard8"></h5>
                        <p class="card-text" id="descCard8"></p>
                        <p class="card-text" id="precCard8"></p>
                    </div>
                    <div class="product-actions">
                        <button class="btn-actualizar" id="actualizarBtn" onclick="actProd(8)" type="button">Actualizar</button>
                        <button id="btn8" class="btn-eliminar" onclick="borrarProducto(8)">Eliminar</button>
                    </div>
                </div>

                <div id="card9" class="card product-card" style="width:  15rem;">
                    <img id="imgCard9" src="" class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title" id="nomCard9"></h5>
                        <p class="card-text" id="descCard9"></p>
                        <p class="card-text" id="precCard9"></p>
                    </div>
                    <div class="product-actions">
                        <button class="btn-actualizar" id="actualizarBtn" onclick="actProd(9)" type="button">Actualizar</button>
                        <button id="btn9" class="btn-eliminar" onclick="borrarProducto(9)">Eliminar</button>
                    </div>
                </div>`

                //Muestra los productos de la categoría maquillaje
                for (let i = 0; i < datos.productos.maquillaje.length; i++)
                {
                    document.getElementById(`imgCard${i}`).src=`${datos.productos.maquillaje[i].imagen}`
                    document.getElementById(`nomCard${i}`).textContent=datos.productos.maquillaje[i].nombreProducto;
                    document.getElementById(`descCard${i}`).textContent=datos.productos.maquillaje[i].descripcionProducto.substr(0,50)+"...";
                    document.getElementById(`precCard${i}`).textContent=datos.productos.maquillaje[i].precioProducto+" pesos mexicanos";
                }

                //Muestra los prouctos de la categoría cuidadoPersonal
                let j=5;//Se crea está variable para poder poner la información correcta en los cards idicados
                for (let i = 0; i < datos.productos.cuidadoPersonal.length; i++)
                    {
                        document.getElementById(`imgCard${j}`).src=`${datos.productos.cuidadoPersonal[i].imagen}`
                        document.getElementById(`nomCard${j}`).textContent=datos.productos.cuidadoPersonal[i].nombreProducto;
                        document.getElementById(`descCard${j}`).textContent=datos.productos.cuidadoPersonal[i].descripcionProducto.substr(0,50)+"...";
                        document.getElementById(`precCard${j}`).textContent=`$${datos.productos.cuidadoPersonal[i].precioProducto}`+" pesos mexicanos";
                        j++;
                    }
        })
        .catch((error) => console.error('Error fetching data:', error))
        .finally(() => console.log("He terminado"));
};

datosProductos("json/productos.json");