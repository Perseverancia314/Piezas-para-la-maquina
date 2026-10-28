
// =====================================
// PIEZAS PARA LA COMPUTADORA
// CATALOGO DE EQUIPOS COMPLETOS
// =====================================

// Precios ilustrativos.
// Las imagenes son URLs externas de Newegg.
// Algunos enlaces necesitan verificacion.

const productos = [
    {
        id: 1,
        nombre: "ABS Flux II Aqua Gaming Desktop",
        categoria: "Desktop",
        precio: 1149.99,
        descripcion: "Computadora gaming preensamblada con procesador Intel, grafica RTX, memoria RAM y SSD.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/83-360-976-10.jpg",
        enlace: "https://www.newegg.com/p/N82E16883360976"
    },
    {
        id: 2,
        nombre: "MSI Vector 16 HX AI",
        categoria: "Laptop",
        precio: 2299.00,
        descripcion: "Laptop gaming de alto rendimiento para videojuegos y multitarea.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/34-156-737-01.jpg",
        enlace: "https://www.newegg.com/p/N82E16834156737"
    },
    {
        id: 3,
        nombre: "Samsung Galaxy A17 5G",
        categoria: "Móvil",
        precio: 279.99,
        descripcion: "Smartphone con conectividad 5G y pantalla de gran tamaño.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/23B-0002-01YD6-01.jpg",
        enlace: "https://www.newegg.com/p/23B-0002-01YD6"
    },
    {
        id: 4,
        nombre: "Lenovo ThinkStation P3 Tower",
        categoria: "Workstation",
        precio: null,
        descripcion: "Estacion de trabajo para aplicaciones profesionales, ingenieria y diseño.",
        imagen: null,
        enlace: "https://www.newegg.com/p/pl?d=Lenovo+ThinkStation+P3"
    }
];

// =====================================
// VARIABLES GLOBALES
// =====================================

let categoriaActual = "Todos";
let carrito = [];
let renderActual = 0;

const catalogo = document.getElementById("catalogo");
const buscar = document.getElementById("buscar");
const ordenar = document.getElementById("ordenar");
const contador = document.getElementById("resultCount");

// =====================================
// FORMATO DE PRECIO
// =====================================

function dinero(valor) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valor);
}

// =====================================
// VERIFICAR IMAGEN EXTERNA
// =====================================

function verificarImagen(url) {
    return new Promise(resolve => {

        if (!url || !url.startsWith("https://")) {
            resolve(false);
            return;
        }

        const imagen = new Image();

        imagen.onload = () => {
            resolve(
                imagen.naturalWidth > 0 &&
                imagen.naturalHeight > 0
            );
        };

        imagen.onerror = () => {
            resolve(false);
        };

        // La imagen no se descarga al proyecto.
        // El navegador la solicita externamente.
        imagen.src = url;
    });
}

// =====================================
// MOSTRAR CATALOGO
// =====================================

async function mostrarProductos() {

    // Identificador para evitar resultados viejos
    const renderId = ++renderActual;

    const texto = buscar.value.toLowerCase().trim();

    let visibles = productos.filter(producto => {

        const categoriaCorrecta =
            categoriaActual === "Todos" ||
            producto.categoria === categoriaActual;

        const textoCompleto = (
            producto.nombre + " " +
            producto.categoria + " " +
            producto.descripcion
        ).toLowerCase();

        const busquedaCorrecta =
            textoCompleto.includes(texto);

        return categoriaCorrecta && busquedaCorrecta;
    });

    // ORDENAMIENTO
    if (ordenar.value === "asc") {
        visibles.sort((a, b) =>
            (a.precio ?? Infinity) -
            (b.precio ?? Infinity)
        );
    }

    if (ordenar.value === "desc") {
        visibles.sort((a, b) =>
            (b.precio ?? -Infinity) -
            (a.precio ?? -Infinity)
        );
    }

    if (ordenar.value === "name") {
        visibles.sort((a, b) =>
            a.nombre.localeCompare(b.nombre, "es")
        );
    }

    catalogo.innerHTML = "";

    contador.textContent = "Cargando equipos...";

    // Comprobar todas las imagenes en paralelo
    const resultados = await Promise.all(
        visibles.map(async producto => {
            const imagenValida = await verificarImagen(
                producto.imagen
            );

            return {
                producto,
                imagenValida
            };
        })
    );

    // Evitar que una busqueda anterior
    // reemplace los resultados actuales
    if (renderId !== renderActual) {
        return;
    }

    const disponibles = resultados
        .filter(item => item.imagenValida)
        .map(item => item.producto);

    contador.textContent =
        disponibles.length +
        " equipos con imagen disponible";

    if (disponibles.length === 0) {
        catalogo.innerHTML = `
            <div class="empty-results">
                No hay equipos con imagen disponible
                en esta categoría actualmente.
            </div>
        `;
        return;
    }

    disponibles.forEach(producto => {
        crearTarjeta(producto);
    });
}

// =====================================
// CREAR TARJETA DE PRODUCTO
// =====================================

function crearTarjeta(producto) {

    const tarjeta = document.createElement("article");
    tarjeta.className = "producto";

    const precioHTML = producto.precio !== null
        ? `
            <p class="precio">
                ${dinero(producto.precio)}
                <small>Precio ilustrativo</small>
            </p>
          `
        : `
            <p class="precio">
                Consultar
                <small>Precio en Newegg</small>
            </p>
          `;

    tarjeta.innerHTML = `
        <span class="product-category">
            ${producto.categoria}
        </span>

        <div class="product-image">
            <img
                src="${producto.imagen}"
                alt="${producto.nombre}"
                loading="lazy"
            >
        </div>

        <h3>${producto.nombre}</h3>

        <p class="product-description">
            ${producto.descripcion}
        </p>

        <div class="product-bottom">
            ${precioHTML}

            <div class="product-actions">
                <button class="add-btn">
                    + Agregar
                </button>

                <a
                    href="${producto.enlace}"
                    class="external-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ver en Newegg"
                    aria-label="Ver producto en Newegg"
                >
                    ↗
                </a>
            </div>
        </div>
    `;

    // Si falla despues de la comprobacion,
    // se elimina la tarjeta completa.
    const imagen = tarjeta.querySelector("img");

    imagen.addEventListener("error", () => {
        tarjeta.remove();
        actualizarContadorVisible();
    });

    const boton = tarjeta.querySelector(".add-btn");

    boton.addEventListener("click", () => {
        agregarCarrito(producto.id);
    });

    catalogo.appendChild(tarjeta);
}

// =====================================
// CONTADOR DE PRODUCTOS
// =====================================

function actualizarContadorVisible() {
    const cantidad = catalogo.querySelectorAll(
        ".producto"
    ).length;

    contador.textContent =
        cantidad + " equipos con imagen disponible";
}

// =====================================
// FILTRAR CATEGORIAS
// =====================================

function filtrar(categoria) {

    categoriaActual = categoria;

    document.querySelectorAll(".filters button")
        .forEach(boton => {

            const activo =
                boton.dataset.category === categoria;

            boton.classList.toggle("active", activo);
        });

    mostrarProductos();
}

// =====================================
// AGREGAR AL CARRITO
// =====================================

function agregarCarrito(id) {

    const producto = productos.find(
        p => p.id === id
    );

    if (!producto || producto.precio === null) {
        return;
    }

    const existente = carrito.find(
        item => item.id === id
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

// =====================================
// ELIMINAR PRODUCTO
// =====================================

function eliminarProducto(id) {

    carrito = carrito.filter(
        item => item.id !== id
    );

    actualizarCarrito();
}

// =====================================
// VACIAR CARRITO
// =====================================

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// =====================================
// ACTUALIZAR CARRITO
// =====================================

function actualizarCarrito() {

    const lista = document.getElementById(
        "listaCarrito"
    );

    const totalElemento = document.getElementById(
        "total"
    );

    lista.innerHTML = "";

    let total = 0;
    let cantidad = 0;

    if (carrito.length === 0) {
        lista.innerHTML = `
            <div class="cart-empty">
                🛒 Tu carrito está vacío.
                Agrega un equipo para comenzar.
            </div>
        `;
    }

    carrito.forEach(item => {

        const producto = productos.find(
            p => p.id === item.id
        );

        if (!producto || producto.precio === null) {
            return;
        }

        const subtotal =
            producto.precio * item.cantidad;

        total += subtotal;
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
                <span>${dinero(subtotal)}</span>
                <br>
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

// =====================================
// EVENTOS
// =====================================

// BUSCAR
buscar.addEventListener("input", mostrarProductos);

// ORDENAR
ordenar.addEventListener("change", mostrarProductos);

// FILTRAR
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

// =====================================
// PC ANIMADA INTERACTIVA
// =====================================

const pcInteractive = document.getElementById(
    "pcInteractive"
);

function togglePcAnimation() {

    const pausada = pcInteractive.classList.toggle(
        "paused"
    );

    pcInteractive.setAttribute(
        "aria-pressed",
        String(pausada)
    );

    pcInteractive.setAttribute(
        "aria-label",
        pausada
            ? "Reanudar animación"
            : "Pausar animación"
    );

    const estado = pcInteractive.querySelector(
        ".state-text"
    );

    estado.textContent = pausada
        ? "ENSAMBLAJE EN PAUSA"
        : "ENSAMBLANDO COMPONENTES";
}

// CLIC SOBRE LA PC
pcInteractive.addEventListener(
    "click",
    togglePcAnimation
);

// TECLADO
pcInteractive.addEventListener(
    "keydown",
    evento => {

        if (
            evento.key === "Enter" ||
            evento.key === " "
        ) {
            evento.preventDefault();
            togglePcAnimation();
        }
    }
);

// =====================================
// INICIAR PAGINA
// =====================================

mostrarProductos();
actualizarCarrito();
