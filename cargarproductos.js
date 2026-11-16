const productos = [
  {
    id: 1,
    nombre: "Remera Oversize ",
    imagen: "img/remera2.jpg",
    descripcion: "Remera de algodón premium corte oversize unisex.",
    precio: 18999,
    stock: 25
  },
  {
    id: 2,
    nombre: "Jean Straight Azul Mujer",
    imagen: "img/jean.jpg",
    descripcion: "Jean de corte recto clásico con calce cómodo y estilo versátil.",
    precio: 45999,
    stock: 14
  },
  {
    id: 3,
    nombre: "Buzo Hoodie Rojo",
    imagen: "img/buzo rojo.jpg",
    descripcion: "Buzo canguro con capucha y frisa interna.",
    precio: 38999,
    stock: 18
  },
  {
    id: 4,
    nombre: "Jean Baggy",
    imagen: "img/baggy.jpg",
    descripcion: "Jean holgado estilo baggy con calce amplio y look urbano relajado.",
    precio: 64999,
    stock: 9
  },
  {
    id: 5,
    nombre: "Campera Cuero Urban Style",
    imagen: "img/campera de cuero us.jpg",
    descripcion: "Campera de cuero estilo urban con diseño moderno, calce cómodo y look callejero.",
    precio: 52999,
    stock: 11
  },
  {
    id: 6,
    nombre: "Jogger Gris Deportivo",
    imagen: "img/jogger.jpg",
    descripcion: "Pantalón jogger cómodo ideal para uso diario.",
    precio: 29999,
    stock: 20
  },
  {
    id: 7,
    nombre: "Remera Urban Style",
    imagen: "img/remera Urban Style.jpg",
    descripcion: "Remera estilo urban con diseño moderno, calce cómodo y look callejero.",
    precio: 41999,
    stock: 13
  },
  {
    id: 8,
    nombre: "Campera Cuero Cropped",
    imagen: "img/campera cropped.jpg",
    descripcion: "Campera de cuero estilo cropped con diseño moderno, calce cómodo y look callejero.",
    precio: 24999,
    stock: 30
  },
  
  {
    id: 10,
    nombre: "Hoodie Cuello Alto",
    imagen: "img/hoodie cuello alto.jpg",
    descripcion: "Buzo con cuello alto.",
    precio: 75999,
    stock: 7
  }
];

function cargar() {
    for (let producto of productos) {
        let parrafo = document.createElement("div")
        parrafo.id= "boxproducto"
        parrafo.innerHTML=`<h2 id="nombre">${producto.nombre}</h2>
                        <img src="${producto.imagen}" alt="" id="" width="200">
                        <p id="detalle">${producto.descripcion}</p>
                        <h3 id="precio">$ ${producto.precio}</h3>
                        <p id="stock">${producto.stock}</p>
                        <button id="btndetalle" onclick="verdetalle(${producto.id})">Ver detalle</button>`
        document.getElementById("boxproductos").appendChild(parrafo)
    }
}

cargar()

function verdetalle(idproducto) {
  const buscarProducto = productos.find(producto => producto.id === parseInt(idproducto));
  let productojson = JSON.stringify(buscarProducto)
  localStorage.setItem("producto", productojson)
  window.location.href ="detalle.html"
}

function vercarrito(){
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    if (carrito!= null){
        document.getElementById("contadorcarrito").style.display="block"
        document.getElementById("contadorcarrito").innerHTML = localStorage.getItem("contadorcarrito")
    }
}
vercarrito()