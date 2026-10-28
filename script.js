
// PRODUCTOS DEL CATALOGO

// Los precios son ejemplos.
// No se actualizan automaticamente desde Newegg.

const productos = [
    {
        id: 1,
        nombre: "Intel Core Ultra 7 265K",
        categoria: "Procesadores",
        precio: 359.99,
        descripcion: "Procesador Intel para escritorio.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/19-118-506-06.jpg",
        enlace: "https://www.newegg.com/p/N82E16819118506"
    },
    {
        id: 2,
        nombre: "AMD Ryzen 7",
        categoria: "Procesadores",
        precio: 279.99,
        descripcion: "Procesador para gaming y multitarea.",
        imagen: null,
        enlace: "https://www.newegg.com/p/pl?d=AMD+Ryzen+7"
    },
    {
        id: 3,
        nombre: "NVIDIA GeForce RTX 5070",
        categoria: "Tarjetas gráficas",
        precio: 549.99,
        descripcion: "Tarjeta gráfica para videojuegos.",
        imagen: null,
        enlace: "https://www.newegg.com/p/pl?d=RTX+5070"
    },
    {
        id: 4,
        nombre: "AMD Radeon RX",
        categoria: "Tarjetas gráficas",
        precio: 399.99,
        descripcion: "Gráficos dedicados para PC.",
        imagen: null,
        enlace: "https://www.newegg.com/p/pl?d=AMD+Radeon+RX"
    },
    {
        id: 5,
        nombre: "Corsair Vengeance DDR5 32GB",
        categoria: "Memoria RAM",
        precio: 519.99,
        descripcion: "Memoria DDR5 para computadoras.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/20-236-828-V01.jpg",
        enlace: "https://www.newegg.com/p/N82E16820982007"
    },
    {
        id: 6,
        nombre: "Kingston RAM 16GB",
        categoria: "Memoria RAM",
        precio: 59.99,
        descripcion: "Memoria para actualizar tu PC.",
        imagen: null,
        enlace: "https://www.newegg.com/p/pl?d=Kingston+16GB+RAM"
    },
    {
        id: 7,
        nombre: "Samsung 990 PRO SSD 2TB",
        categoria: "Almacenamiento",
        precio: 409.99,
        descripcion: "Unidad SSD M.2 NVMe.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/20-147-861-01.jpg",
        enlace: "https://www.newegg.com/p/N82E16820147861"
    },
    {
        id: 8,
        nombre: "WD Black SSD 1TB",
        categoria: "Almacenamiento",
        precio: 79.99,
        descripcion: "Almacenamiento SSD para juegos.",
        imagen: null,
        enlace: "https://www.newegg.com/p/pl?d=WD+Black+SSD+1TB"
    },
    {
        id: 9,
        nombre: "MSI MAG Motherboard",
        categoria: "Tarjetas madre",
        precio: 189.99,
        descripcion: "Placa base para ensamblar tu PC.",
        imagen: null,
        enlace: "https://www.newegg.com/p/pl?d=MSI+MAG+motherboard"
    },
    {
        id: 10,
        nombre: "ASUS TUF Motherboard",
        categoria: "Tarjetas madre",
        precio: 199.99,
        descripcion: "Tarjeta madre con expansión.",
        imagen: null,
        enlace: "https://www.newegg.com/p/pl?d=ASUS+TUF+motherboard"
    },
    {
        id: 11,
        nombre: "Fuente de poder 750W",
        categoria: "Otros",
        precio: 99.99,
        descripcion: "Fuente de alimentación para PC.",
        imagen: null,
        enlace: "https://www.newegg.com/p/pl?d=750W+power+supply"
    },
    {
        id: 12,
        nombre: "Gabinete Gaming",
        categoria: "Otros",
        precio: 119.99,
        descripcion: "Gabinete para computadora gaming.",
        imagen: null,
        enlace: "https://www.newegg.com/p/pl?d=gaming+pc+case"
    }
];

// VARIABLES

let categoriaActual = "Todos";
let carrito = [];

const catalogo = document.getElementById("catalogo");
const buscar = document.getElementById("buscar");
const ordenar = document.getElementById("ordenar");

// FORMATO DE DINERO

function dinero(valor) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valor);
}

// MOSTRAR PRODUCTOS

function mostrarProductos() {

    const texto = buscar.value.toLowerCase().trim();

    let visibles = productos.filter(producto => {

        const categoriaCorrecta =
            categoriaActual === "Todos" ||
            producto.categoria === categoriaActual;

        const nombreCorrecto =
            producto.nombre.toLowerCase().includes(texto);

        return categoriaCorrecta && nombreCorrecto;
    });

    // ORDENAR PRODUCTOS

    if (ordenar.value === "asc") {
        visibles.sort((a, b) => a.precio - b.precio);
    }

    if (ordenar.value === "desc") {
        visibles.sort((a, b) => b.precio - a.precio);
    }

    if (ordenar.value === "name") {
        visibles.sort((a, b) =>
            a.nombre.localeCompare(b.nombre)
        );
    }

    document.getElementById("resultCount").textContent =
        visibles.length + " componentes encontrados";

    catalogo.innerHTML = "";

    if (visibles.length === 0) {
        catalogo.innerHTML = `
            <div class="empty-results">
                No encontramos productos.
            </div>
        `;
        return;
    }

    visibles.forEach(producto => {

        const tarjeta = document.createElement("article");
        tarjeta.className = "producto";

        const imagenHTML = producto.imagen
            ? `<img src="${producto.imagen}"
                    alt="${producto.nombre}"
                    loading="lazy">`
            : "";

        tarjeta.innerHTML = `
            <span class="product-category">
                ${producto.categoria}
            </span>

            <div class="product-image">
                ${imagenHTML}

                <div class="product-placeholder"
                     ${producto.imagen ? "hidden" : ""}>
                    <span>▣</span>
                    Imagen no disponible
                </div>
            </div>

            <h3>${producto.nombre}</h3>

            <p class="product-description">
                ${producto.descripcion}
            </p>

            <div class="product-bottom">
                <p class="precio">
                    ${dinero(producto.precio)}
                    <small>Precio ilustrativo</small>
                </p>

                <div class="product-actions">
                    <button class="add-btn">
                        ＋ Agregar
                    </button>

                    <a class="external-btn"
                       href="${producto.enlace}"
                       target="_blank"
                       rel="noopener noreferrer"
                       title="Ver en Newegg">
                        ↗
                    </a>
                </div>
            </div>
        `;

        // SI FALLA LA IMAGEN, MOSTRAR AVISO

        const imagen = tarjeta.querySelector("img");

        if (imagen) {
            imagen.addEventListener("error", () => {
                imagen.remove();

                tarjeta.querySelector(
                    ".product-placeholder"
                ).hidden = false;
            });
        }

        tarjeta.querySelector(".add-btn")
            .addEventListener("click", () => {
                agregarCarrito(producto.id);
            });

        catalogo.appendChild(tarjeta);
    });
}

// FILTRAR POR CATEGORIA

function filtrar(categoria) {
    categoriaActual = categoria;

    document.querySelectorAll(".filtros button")
        .forEach(boton => {

            boton.classList.toggle(
                "active",
                boton.dataset.category === categoria
            );
        });

    mostrarProductos();
}

// AGREGAR AL CARRITO

function agregarCarrito(id) {

    const existente = carrito.find(
        producto => producto.id === id
    );

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({
            id: id,
            cantidad: 1
        });
    }

    actualizarCarrito();
}

// ELIMINAR PRODUCTO

function eliminarProducto(id) {
    carrito = carrito.filter(
        producto => producto.id !== id
    );

    actualizarCarrito();
}

// VACIAR CARRITO

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// ACTUALIZAR CARRITO

function actualizarCarrito() {

    const lista = document.getElementById("listaCarrito");
    const totalElemento = document.getElementById("total");

    lista.innerHTML = "";

    let total = 0;
    let cantidad = 0;

    if (carrito.length === 0) {
        lista.innerHTML = `
            <div class="cart-empty">
                🛒 Tu carrito está vacío.
            </div>
        `;
    }

    carrito.forEach(item => {

        const producto = productos.find(
            p => p.id === item.id
        );

        if (!producto) return;

        total += producto.precio * item.cantidad;
        cantidad += item.cantidad;

        const fila = document.createElement("div");
        fila.className = "cart-row";

        fila.innerHTML = `
            <div>
                <strong>${producto.nombre}</strong>
                <small>
                    ${item.cantidad} ×
                    ${dinero(producto.precio)}
                </small>
            </div>

            <div class="cart-row-right">
                <span>
                    ${dinero(producto.precio * item.cantidad)}
                </span>

                <button class="remove-btn">
                    Quitar
                </button>
            </div>
        `;

        fila.querySelector(".remove-btn")
            .addEventListener("click", () => {
                eliminarProducto(producto.id);
            });

        lista.appendChild(fila);
    });

    totalElemento.textContent = dinero(total);

    document.getElementById("cartCount").textContent =
        cantidad;
}

// EVENTOS DEL BUSCADOR

buscar.addEventListener("input", mostrarProductos);

// EVENTOS DEL ORDENAMIENTO

ordenar.addEventListener("change", mostrarProductos);

// BOTONES DE CATEGORIAS

document.getElementById("filtros")
    .addEventListener("click", evento => {

        const boton = evento.target.closest(
            "[data-category]"
        );

        if (boton) {
            filtrar(boton.dataset.category);
        }
    });

// VACIAR CARRITO

document.getElementById("vaciarCarrito")
    .addEventListener("click", vaciarCarrito);

// PAUSAR LA ANIMACION DE LA PC

const botonAnimacion =
    document.getElementById("animationToggle");

botonAnimacion.addEventListener("click", () => {

    const area = document.querySelector(".pc-area");

    const pausada = area.classList.toggle("paused");

    botonAnimacion.textContent = pausada
        ? "▶ Reanudar animación"
        : "⏸ Pausar animación";
});

// INICIAR PAGINA

mostrarProductos();
actualizarCarrito();
