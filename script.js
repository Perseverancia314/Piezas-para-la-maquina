
/* ===================================
   PIEZAS PARA LA COMPUTADORA
   Archivo: script.js
=================================== */

// LISTA DE PRODUCTOS

const productos = [
    {
        nombre: "Intel Core i7",
        categoria: "Procesadores",
        precio: 299.99,
        imagen: "https://placehold.co/300x200?text=Intel+Core+i7"
    },
    {
        nombre: "AMD Ryzen 7",
        categoria: "Procesadores",
        precio: 279.99,
        imagen: "https://placehold.co/300x200?text=AMD+Ryzen+7"
    },
    {
        nombre: "NVIDIA RTX 5070",
        categoria: "Tarjetas gráficas",
        precio: 549.99,
        imagen: "https://placehold.co/300x200?text=RTX+5070"
    },
    {
        nombre: "AMD Radeon RX",
        categoria: "Tarjetas gráficas",
        precio: 399.99,
        imagen: "https://placehold.co/300x200?text=AMD+Radeon"
    },
    {
        nombre: "Corsair RAM 32GB",
        categoria: "Memoria RAM",
        precio: 109.99,
        imagen: "https://placehold.co/300x200?text=RAM+32GB"
    },
    {
        nombre: "Kingston RAM 16GB",
        categoria: "Memoria RAM",
        precio: 59.99,
        imagen: "https://placehold.co/300x200?text=RAM+16GB"
    },
    {
        nombre: "Samsung SSD 2TB",
        categoria: "Almacenamiento",
        precio: 149.99,
        imagen: "https://placehold.co/300x200?text=SSD+2TB"
    },
    {
        nombre: "WD SSD 1TB",
        categoria: "Almacenamiento",
        precio: 79.99,
        imagen: "https://placehold.co/300x200?text=SSD+1TB"
    },
    {
        nombre: "MSI Motherboard",
        categoria: "Otros",
        precio: 189.99,
        imagen: "https://placehold.co/300x200?text=Motherboard"
    },
    {
        nombre: "Fuente de poder 750W",
        categoria: "Otros",
        precio: 99.99,
        imagen: "https://placehold.co/300x200?text=PSU+750W"
    },
    {
        nombre: "Disipador CPU",
        categoria: "Otros",
        precio: 69.99,
        imagen: "https://placehold.co/300x200?text=CPU+Cooler"
    },
    {
        nombre: "Gabinete Gaming",
        categoria: "Otros",
        precio: 119.99,
        imagen: "https://placehold.co/300x200?text=PC+Case"
    }
];

// VARIABLES GENERALES

let categoriaActual = "Todos";
let carrito = [];

// MOSTRAR PRODUCTOS

function mostrarProductos() {

    const busqueda = document
        .getElementById("buscar")
        .value.toLowerCase();

    const catalogo = document
        .getElementById("catalogo");

    catalogo.innerHTML = "";

    productos.forEach((producto, indice) => {

        const coincideCategoria =
            categoriaActual === "Todos" ||
            producto.categoria === categoriaActual;

        const coincideBusqueda =
            producto.nombre.toLowerCase()
                .includes(busqueda);

        if (coincideCategoria && coincideBusqueda) {

            const tarjeta = document.createElement("div");

            tarjeta.className = "producto";

            tarjeta.innerHTML = `
                <img src="${producto.imagen}"
                     alt="${producto.nombre}">

                <h3>${producto.nombre}</h3>

                <p>${producto.categoria}</p>

                <p class="precio">
                    $${producto.precio.toFixed(2)}
                </p>

                <button onclick="agregarCarrito(${indice})">
                    Agregar al carrito
                </button>
            `;

            catalogo.appendChild(tarjeta);
        }
    });
}

// FILTRAR PRODUCTOS

function filtrar(categoria) {
    categoriaActual = categoria;
    mostrarProductos();
}

// AGREGAR PRODUCTOS AL CARRITO

function agregarCarrito(indice) {
    carrito.push(productos[indice]);
    actualizarCarrito();
}

// ACTUALIZAR EL CARRITO

function actualizarCarrito() {

    const lista = document
        .getElementById("listaCarrito");

    const totalElemento = document
        .getElementById("total");

    lista.innerHTML = "";

    let total = 0;

    carrito.forEach((producto, indice) => {

        total += producto.precio;

        const elemento = document.createElement("li");

        elemento.textContent =
            producto.nombre +
            " - $" +
            producto.precio.toFixed(2) +
            " ";

        const eliminar = document.createElement("button");

        eliminar.textContent = "Eliminar";

        eliminar.onclick = function() {
            eliminarProducto(indice);
        };

        elemento.appendChild(eliminar);
        lista.appendChild(elemento);
    });

    totalElemento.textContent = total.toFixed(2);
}

// ELIMINAR UN PRODUCTO

function eliminarProducto(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
}

// VACIAR EL CARRITO

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// INICIAR EL CATALOGO

mostrarProductos();

