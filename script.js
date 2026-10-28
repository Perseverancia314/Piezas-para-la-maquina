
// ==========================================
// PIEZAS PARA LA COMPUTADORA
// CATALOGO DE EQUIPOS COMPLETOS - NEWEGG
// ==========================================

// Precios ilustrativos, no actualizados en vivo.
// Las imagenes se cargan directamente desde Newegg.

const productos = [
    // ===== DESKTOP =====
    {
        id: 1,
        nombre: "ABS Cyclone Aqua Gaming PC",
        categoria: "Desktop",
        precio: 1049.99,
        descripcion: "Intel Core i5-14400F, RTX 5060, 32GB RAM, SSD 1TB, Windows 11.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/83-360-936-17.jpg",
        enlace: "https://www.newegg.com/p/N82E16883360936"
    },
    {
        id: 2,
        nombre: "ABS Cyclone Aqua Ultra Gaming",
        categoria: "Desktop",
        precio: 1499.99,
        descripcion: "Intel Core Ultra 5 250KF Plus, RTX 5060, 32GB DDR5, SSD 1TB.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/83-360-968-22.jpg",
        enlace: "https://www.newegg.com/p/N82E16883360968"
    },

    // ===== LAPTOP =====
    {
        id: 3,
        nombre: "MSI Gaming Laptop RTX 4060",
        categoria: "Laptop",
        precio: 1499.00,
        descripcion: "Intel Core i7-13620H, RTX 4060, 16GB DDR5, SSD 1TB, pantalla 15.6 pulgadas.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/34-156-427-14.jpg",
        enlace: "https://www.newegg.com/p/N82E16834156427"
    },
    {
        id: 4,
        nombre: "HP ProBook 640 G4",
        categoria: "Laptop",
        precio: 649.99,
        descripcion: "Laptop reacondicionada de 14 pulgadas, Intel Core i5, 8GB RAM y SSD 256GB.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/A6ZP_1_201912041570217384.jpg",
        enlace: "https://www.newegg.com/p/2WC-0001-00YP4"
    },

    // ===== MOVIL =====
    {
        id: 5,
        nombre: "Samsung Galaxy A17 4G",
        categoria: "Móvil",
        precio: 194.99,
        descripcion: "Smartphone desbloqueado, pantalla 6.7 pulgadas, 4GB RAM y 128GB.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/ABPXS2512020MIWLS9A.jpg",
        enlace: "https://www.newegg.com/p/23B-0002-01ZV3"
    },
    {
        id: 6,
        nombre: "Samsung Galaxy S25 256GB",
        categoria: "Móvil",
        precio: 938.25,
        descripcion: "Samsung Galaxy S25, pantalla AMOLED 6.2 pulgadas, 12GB RAM y 256GB.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/A24GD2502110EEKAR23.jpg",
        enlace: "https://www.newegg.com/p/0V4-000B-01S27"
    },

    // ===== WORKSTATION =====
    {
        id: 7,
        nombre: "Lenovo ThinkStation P3 Tower",
        categoria: "Workstation",
        precio: 839.00,
        descripcion: "Workstation profesional con Intel Core Ultra 5, 16GB DDR5, SSD 512GB y Windows 11 Pro.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/B0GJD2603311D1VC058.jpg",
        enlace: "https://www.newegg.com/p/1VK-01WM-00046"
    },
    {
        id: 8,
        nombre: "Lenovo ThinkStation P3 i3",
        categoria: "Workstation",
        precio: 1776.93,
        descripcion: "Estacion de trabajo reacondicionada con Intel Core i3-13100, 16GB RAM y SSD 512GB.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/APGHD2407020Q2US525.jpg",
        enlace: "https://www.newegg.com/p/1VK-0003-1RWE6"
    }
];

// ==========================================
// VARIABLES
// ==========================================

let categoriaActual = "Todos";
let carrito = [];
let renderActual = 0;

const catalogo = document.getElementById("catalogo");
const buscar = document.getElementById("buscar");
const ordenar = document.getElementById("ordenar");
const contador = document.getElementById("resultCount");

// ==========================================
// FORMATO DE DINERO
// ==========================================

function dinero(valor) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valor);
}

// ==========================================
// VERIFICAR IMAGEN
// ==========================================

const imagenesValidas = new Map();

function verificarImagen(url) {
    if (!url || !url.startsWith("https://")) {
        return Promise.resolve(false);
    }

    if (imagenesValidas.has(url)) {
        return imagenesValidas.get(url);
    }

    const comprobacion = new Promise(resolve => {
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

        imagen.src = url;
    });

    imagenesValidas.set(url, comprobacion);
    return comprobacion;
}

// ==========================================
// MOSTRAR PRODUCTOS
// ==========================================

async function mostrarProductos() {
    const solicitud = ++renderActual;
    const texto = buscar.value.toLowerCase().trim();

    let visibles = productos.filter(producto => {
        const categoriaCorrecta =
            categoriaActual === "Todos" ||
            producto.categoria === categoriaActual;

        const coincideBusqueda = (
            producto.nombre + " " +
            producto.descripcion + " " +
            producto.categoria
        ).toLowerCase().includes(texto);

        return categoriaCorrecta && coincideBusqueda;
    });

    if (ordenar.value === "asc") {
        visibles.sort((a, b) => a.precio - b.precio);
    }

    if (ordenar.value === "desc") {
        visibles.sort((a, b) => b.precio - a.precio);
    }

    if (ordenar.value === "name") {
        visibles.sort((a, b) =>
            a.nombre.localeCompare(b.nombre, "es")
        );
    }

    catalogo.innerHTML = "";
    contador.textContent = "Cargando equipos...";

    // Esperar a que las imagenes esten disponibles.
    const resultados = await Promise.all(
        visibles.map(async producto => ({
            producto,
            valida: await verificarImagen(producto.imagen)
        }))
    );

    // Evitar resultados de busquedas anteriores.
    if (solicitud !== renderActual) return;

    const disponibles = resultados
        .filter(resultado => resultado.valida)
        .map(resultado => resultado.producto);

    if (disponibles.length === 0) {
        catalogo.innerHTML = `
            <div class="empty-results">
                No hay equipos con imagen disponible
                para esta seleccion.
            </div>
        `;
    } else {
        disponibles.forEach(crearTarjeta);
    }

    actualizarContador();
}

// ==========================================
// CREAR TARJETA
// ==========================================

function crearTarjeta(producto) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "producto";

    tarjeta.innerHTML = `
        <span class="product-category">
            ${producto.categoria}
        </span>

        <div class="product-image">
            <img
                src="${producto.imagen}"
                alt="${producto.nombre}"
            >
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
                    + Agregar al carrito
                </button>

                <a
                    href="${producto.enlace}"
                    class="external-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver en Newegg"
                    title="Ver en Newegg">
                    ↗
                </a>
            </div>
        </div>
    `;

    const imagen = tarjeta.querySelector("img");

    // Si falla la imagen, eliminar toda la tarjeta.
    imagen.addEventListener("error", () => {
        tarjeta.remove();
        actualizarContador();
    });

    tarjeta.querySelector(".add-btn")
        .addEventListener("click", () => {
            agregarCarrito(producto.id);
        });

    catalogo.appendChild(tarjeta);
}

// ==========================================
// CONTADOR
// ==========================================

function actualizarContador() {
    const cantidad = catalogo.querySelectorAll(
        ".producto"
    ).length;

    contador.textContent =
        cantidad + " equipos disponibles en el catálogo";
}

// ==========================================
// FILTROS
// ==========================================

function filtrar(categoria) {
    categoriaActual = categoria;

    document.querySelectorAll(".filters button")
        .forEach(boton => {
            boton.classList.toggle(
                "active",
                boton.dataset.category === categoria
            );
        });

    mostrarProductos();
}

// ==========================================
// CARRITO
// ==========================================

function agregarCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;

    const existente = carrito.find(p => p.id === id);

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({ id, cantidad: 1 });
    }

    actualizarCarrito();
}

function eliminarProducto(id) {
    carrito = carrito.filter(p => p.id !== id);
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

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
                Selecciona un equipo para comenzar.
            </div>
        `;
    }

    carrito.forEach(item => {
        const producto = productos.find(
            p => p.id === item.id
        );

        if (!producto) return;

        const subtotal = producto.precio * item.cantidad;
        total += subtotal;
        cantidad += item.cantidad;

        const fila = document.createElement("div");
        fila.className = "cart-row";

        fila.innerHTML = `
            <div>
                <strong>${producto.nombre}</strong>
                <small>
                    ${item.cantidad} x
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

// ==========================================
// EVENTOS DEL CATALOGO
// ==========================================

buscar.addEventListener("input", mostrarProductos);
ordenar.addEventListener("change", mostrarProductos);

document.getElementById("filtros")
    .addEventListener("click", evento => {
        const boton = evento.target.closest(
            "[data-category]"
        );

        if (boton) {
            filtrar(boton.dataset.category);
        }
    });

document.getElementById("vaciarCarrito")
    .addEventListener("click", vaciarCarrito);

// ==========================================
// ANIMACION DE LA PC
// ==========================================

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

    pcInteractive.querySelector(".state-text")
        .textContent = pausada
            ? "ENSAMBLAJE EN PAUSA"
            : "ENSAMBLANDO COMPONENTES";
}

pcInteractive.addEventListener(
    "click",
    togglePcAnimation
);

pcInteractive.addEventListener("keydown", evento => {
    if (evento.key === "Enter" || evento.key === " ") {
        evento.preventDefault();
        togglePcAnimation();
    }
});

// ==========================================
// INICIAR
// ==========================================

mostrarProductos();
actualizarCarrito();
