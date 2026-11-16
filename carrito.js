// CARRITO DE COMPRAS

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));

    const cantidadTotal = carrito.reduce((total, producto) => total + Number(producto.cantidad), 0);
    localStorage.setItem("contadorcarrito", cantidadTotal);
}

function formatoPrecio(valor) {
    return Number(valor).toLocaleString("es-AR");
}

function actualizarCarrito() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    let cantidadTotal = 0;
    let total = 0;

    if (carrito.length === 0) {
        lista.innerHTML = `
            <tr>
                <td colspan="5" class="carrito-vacio">
                    Tu carrito está vacío. ¡Agregá algún producto!
                </td>
            </tr>`;
    }

    carrito.forEach((producto, indice) => {
        cantidadTotal += Number(producto.cantidad);
        total += Number(producto.precio);

        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td><img src="${producto.imagen}" alt="${producto.nombre}"></td>
            <td>
                <div class="controles-cantidad">
                    <button class="btn-cantidad" type="button" onclick="cambiarCantidad(${indice}, -1)" aria-label="Quitar una unidad">−</button>
                    <span class="cantidad-producto">${producto.cantidad}</span>
                    <button class="btn-cantidad" type="button" onclick="cambiarCantidad(${indice}, 1)" aria-label="Agregar una unidad">+</button>
                </div>
            </td>
            <td>${producto.nombre}</td>
            <td>$ ${formatoPrecio(producto.precio)}</td>
            <td><button class="btn-eliminar" type="button" onclick="eliminarProducto(${indice})">Eliminar</button></td>
        `;
        lista.appendChild(fila);
    });

    document.getElementById("contadorcarrito").textContent = cantidadTotal;
    document.getElementById("totalapagar").textContent = "Precio Total = $ " + formatoPrecio(total);

    guardarCarrito();
}

function cambiarCantidad(indice, cambio) {
    if (!carrito[indice]) return;

    const producto = carrito[indice];
    const precioUnitario = Number(producto.precio) / Number(producto.cantidad);

    if (cambio < 0 && Number(producto.cantidad) <= 1) {
        eliminarProducto(indice);
        return;
    }

    producto.cantidad = Number(producto.cantidad) + cambio;
    producto.precio = Math.round(precioUnitario * producto.cantidad);

    actualizarCarrito();
}

function eliminarProducto(indice) {
    if (!carrito[indice]) return;

    const confirmar = confirm("¿Querés eliminar este producto del carrito?");
    if (!confirmar) return;

    carrito.splice(indice, 1);
    actualizarCarrito();
}

function finalizarCompra() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío. Agregá productos antes de finalizar la compra.");
        return;
    }

    const confirmar = confirm("¿Confirmás tu compra por " +
        document.getElementById("totalapagar").textContent.replace("Precio Total = ", "") + "?");

    if (!confirmar) return;

    // Esta tienda no tiene una pasarela de pago conectada: se confirma el pedido de manera simulada.
    alert("¡Muchas gracias por tu compra! Tu pedido fue registrado correctamente.");

    carrito = [];
    localStorage.removeItem("carrito");
    localStorage.setItem("contadorcarrito", "0");
    actualizarCarrito();
}

actualizarCarrito();
