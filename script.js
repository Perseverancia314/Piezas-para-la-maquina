
/* PIEZAS PARA LA COMPUTADORA
   Catalogo con productos de Newegg
*/

// PRODUCTOS DE NEWEGG

const productos = [
    {
        nombre: "Intel Core Ultra 7 265K",
        categoria: "Procesadores",
        precio: 359.99,
        imagen: "https://c1.neweggimages.com/productimage/nb640/19-118-506-06.jpg",
        enlace: "https://www.newegg.com/p/N82E16819118506"
    },
    {
        nombre: "Corsair Vengeance DDR5 32GB 6000MHz",
        categoria: "Memoria RAM",
        precio: 519.99,
        imagen: "https://c1.neweggimages.com/productimage/nb640/20-236-828-V01.jpg",
        enlace: "https://www.newegg.com/p/N82E16820982007"
    },
    {
        nombre: "Samsung 990 PRO SSD 2TB",
        categoria: "Almacenamiento",
        precio: 409.99,
        imagen: "https://c1.neweggimages.com/productimage/nb640/20-147-861-01.jpg",
        enlace: "https://www.newegg.com/p/N82E16820147861"
    },
    {
        nombre: "Corsair Vengeance DDR5 32GB 7000MHz",
        categoria: "Memoria RAM",
        precio: 635.99,
        imagen: "https://c1.neweggimages.com/productimage/nb640/20-236-931-05.jpg",
        enlace: "https://www.newegg.com/p/N82E16820236931"
    }
];

// VARIABLES

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

        const categoriaCorrecta =
            categoriaActual === "Todos" ||
            producto.categoria === categoriaActual;

        const nombreCorrecto =
            producto.nombre.toLowerCase()
                .includes(busqueda);

        if (categoriaCorrecta && nombreCorrecto) {

            const tarjeta = document.createElement("div");
            tarjeta.className = "producto";

            tarjeta.innerHTML = `
                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                    loading="lazy"
                >

                <h3>${producto.nombre}</h3>

                <p>${producto.categoria}</p>

                <p class="precio">
                    $${producto.precio.toFixed(2)}
                </p>

                <p>Precio de referencia</p>

                <button onclick="agregarCarrito(${indice})">
                    Agregar al carrito
                </button>

                <a
                    href="${producto.enlace}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="enlace-newegg"
                >
                    Ver en Newegg
                </a>
            `;

            catalogo.appendChild(tarjeta);
        }
    });
}

// FILTRAR POR CATEGORIA

function filtrar(categoria) {
    categoriaActual = categoria;
    mostrarProductos();
}

// AGREGAR AL CARRITO

function agregarCarrito(indice) {
    carrito.push(productos[indice]);
    actualizarCarrito();
}

// ACTUALIZAR CARRITO

function actualizarCarrito() {

    const lista = document.getElementById("listaCarrito");
    const totalElemento = document.getElementById("total");

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

// ELIMINAR PRODUCTO

function eliminarProducto(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
}

// VACIAR CARRITO

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// CARGAR CATALOGO

mostrarProductos();
