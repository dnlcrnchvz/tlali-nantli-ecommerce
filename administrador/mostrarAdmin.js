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
                <div id="card0" class="card" style="width: 18rem;">
                    <img id="imgCard0" src="" class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title" id="nomCard0"></h5>
                        <p class="card-text" id="descCard0"></p>
                    </div>
                    <div class="card-body">
                        <button type="submit">Actualizar</button>
                        <button type="submit">Eliminar</button>
                    </div>
                </div>
                
                <div id="card1" class="card" style="width: 18rem;">
                    <img id="imgCard1" src="" class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title" id="nomCard1"></h5>
                        <p class="card-text" id="descCard1"></p>
                    </div>
                    <div class="card-body">
                        <button type="submit">Actualizar</button>
                        <button type="submit">Eliminar</button>
                    </div>
                </div>
                
                <div id="card2" class="card" style="width: 18rem;">
                    <img id="imgCard2" src="" class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title" id="nomCard2"></h5>
                        <p class="card-text" id="descCard2"></p>
                    </div>
                    <div class="card-body">
                        <button type="submit">Actualizar</button>
                        <button type="submit">Eliminar</button>
                    </div>
                </div>
                
                <div id="card3" class="card" style="width: 18rem;">
                    <img id="imgCard3" src="" class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title" id="nomCard3"></h5>
                        <p class="card-text" id="descCard3"></p>
                    </div>
                    <div class="card-body">
                        <button type="submit">Actualizar</button>
                        <button type="submit">Eliminar</button>
                    </div>
                </div>
                
                <div id="card4" class="card" style="width: 18rem;">
                    <img id="imgCard4" src="" class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title" id="nomCard4"></h5>
                        <p class="card-text" id="descCard4"></p>
                    </div>
                    <div class="card-body">
                        <button type="submit">Actualizar</button>
                        <button type="submit">Eliminar</button>
                    </div>
                </div>
                
                <div id="card5" class="card" style="width: 18rem;">
                    <img id="imgCard5" src="" class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title" id="nomCard5"></h5>
                        <p class="card-text" id="descCard5"></p>
                    </div>
                    <div class="card-body">
                        <button type="submit">Actualizar</button>
                        <button type="submit">Eliminar</button>
                    </div>
                </div>
                
                <div id="card6" class="card" style="width: 18rem;">
                    <img id="imgCard6" src="" class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title" id="nomCard6"></h5>
                        <p class="card-text" id="descCard6"></p>
                    </div>
                    <div class="card-body">
                        <button type="submit">Actualizar</button>
                        <button type="submit">Eliminar</button>
                    </div>
                </div>
                
                <div id="card7" class="card" style="width: 18rem;">
                    <img id="imgCard7" src="" class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title" id="nomCard7"></h5>
                        <p class="card-text" id="descCard7"></p>
                    </div>
                    <div class="card-body">
                        <button type="submit">Actualizar</button>
                        <button type="submit">Eliminar</button>
                    </div>
                </div>
                
                <div id="card8" class="card" style="width: 18rem;">
                    <img id="imgCard8" src="" class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title" id="nomCard8"></h5>
                        <p class="card-text" id="descCard8"></p>
                    </div>
                    <div class="card-body">
                        <button type="submit">Actualizar</button>
                        <button type="submit">Eliminar</button>
                    </div>
                </div>
                
                <div id="card9" class="card" style="width: 18rem;">
                    <img id="imgCard9" src="" class="card-img-top" alt=" ">
                    <div class="card-body">
                        <h5 class="card-title" id="nomCard9"></h5>
                        <p class="card-text" id="descCard9"></p>
                    </div>
                    <div class="card-body">
                        <button type="submit">Actualizar</button>
                        <button type="submit">Eliminar</button>
                    </div>
                </div>`

                //Muestra los productos de la categoría maquillaje
                for (let i = 0; i < datos.productos.maquillaje.length; i++)
                {
                    document.getElementById(`imgCard${i}`).innerHTML=`<img id="imgCard${i}" src="${datos.productos.maquillaje[i].imagen}" class="card-img-top" alt="...">`
                    document.getElementById(`nomCard${i}`).textContent=datos.productos.maquillaje[i].nombreProducto;
                    document.getElementById(`descCard${i}`).textContent=datos.productos.maquillaje[i].descripcionProducto;
                }

                //Muestra los prouctos de la categoría cuidadoPersonal
                let j=5;//Se crea está variable para poder poner la información correcta en los cards idicados
                for (let i = 0; i < datos.productos.cuidadoPersonal.length; i++)
                    {
                        document.getElementById(`imgCard${j}`).innerHTML=`<img id="imgCard${j}" src="${datos.productos.cuidadoPersonal[i].imagen}" class="card-img-top" alt="...">`
                        document.getElementById(`nomCard${j}`).textContent=datos.productos.cuidadoPersonal[i].nombreProducto;
                        document.getElementById(`descCard${j}`).textContent=datos.productos.cuidadoPersonal[i].descripcionProducto;
                        j++;
                    }
        })
        .catch((error) => console.error('Error fetching data:', error))
        .finally(() => console.log("He terminado"));
};

datosProductos("json/productos.json");