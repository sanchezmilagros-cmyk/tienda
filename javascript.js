


console.log(productos);




function cargar() {
    for (let producto of productos) {
        let parrafo = document.createElement("div")
        parrafo.className="producto"
        parrafo.innerHTML=`<h2 id="nombre">${producto.nombre}</h2>
                        <img src="${producto.imagen}" alt="" width="200">
                        <p id="detalle">${producto.descripcion}</p>
                        <h3 id="precio"> $ ${producto.precio}</h3>
                        <p id="stock">${producto.stock}</p>
                        <button id="btdetalle" onclick="verdetalle(${producto.id})">Ver detalle</button>`
                       


            document.getElementById("boxproductos").appendChild(parrafo)
    }
}
cargar()

function verdetalle(idproducto){
  const buscarProducto = productos.find(producto => producto.id === parseInt(idproducto));
  let productojson = JSON.stringify(buscarProducto)
  localStorage.setItem("producto", productojson)
  window.location.href = "detalle.html"
 
}
