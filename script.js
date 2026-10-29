
// ==========================================
// PIEZAS PARA LA COMPUTADORA
// CATALOGO Y ANIMACIONES
// ==========================================

// Los precios son ilustrativos.
// Las imagenes se solicitan desde Newegg.

const productos = [

    // DESKTOP

    {
        id: 1,
        nombre: "ABS Cyclone Aqua Gaming",
        categoria: "Desktop",
        precio: 1049.99,
        descripcion: "Desktop gaming Intel Core i5 y RTX 5060.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/83-360-936-17.jpg",
        enlace: "https://www.newegg.com/p/N82E16883360936"
    },
    {
        id: 2,
        nombre: "ABS Cyclone Aqua Ultra",
        categoria: "Desktop",
        precio: 1499.99,
        descripcion: "Desktop Intel Core Ultra y GeForce RTX.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/83-360-968-22.jpg",
        enlace: "https://www.newegg.com/p/N82E16883360968"
    },
    {
        id: 3,
        nombre: "ABS Flux II Aqua",
        categoria: "Desktop",
        precio: 1149.99,
        descripcion: "Computadora preensamblada para gaming.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/83-360-976-10.jpg",
        enlace: "https://www.newegg.com/p/N82E16883360976"
    },

    // LAPTOP

    {
        id: 4,
        nombre: "MSI Gaming Laptop RTX 4060",
        categoria: "Laptop",
        precio: 1499.00,
        descripcion: "Laptop gaming Intel Core i7 y RTX.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/34-156-427-14.jpg",
        enlace: "https://www.newegg.com/p/N82E16834156427"
    },
    {
        id: 5,
        nombre: "HP ProBook 640 G4",
        categoria: "Laptop",
        precio: 649.99,
        descripcion: "Laptop empresarial reacondicionada.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/A6ZP_1_201912041570217384.jpg",
        enlace: "https://www.newegg.com/p/2WC-0001-00YP4"
    },
    {
        id: 6,
        nombre: "MSI Vector 16 HX AI",
        categoria: "Laptop",
        precio: 2299.00,
        descripcion: "Portatil para gaming y creacion de contenido.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/34-156-737-01.jpg",
        enlace: "https://www.newegg.com/p/N82E16834156737"
    },

    // MOVIL

    {
        id: 7,
        nombre: "Samsung Galaxy A17 4G",
        categoria: "Móvil",
        precio: 194.99,
        descripcion: "Smartphone Samsung desbloqueado.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/ABPXS2512020MIWLS9A.jpg",
        enlace: "https://www.newegg.com/p/23B-0002-01ZV3"
    },
    {
        id: 8,
        nombre: "Samsung Galaxy S25 256GB",
        categoria: "Móvil",
        precio: 938.25,
        descripcion: "Smartphone Samsung de gama alta.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/A24GD2502110EEKAR23.jpg",
        enlace: "https://www.newegg.com/p/0V4-000B-01S27"
    },
    {
        id: 9,
        nombre: "Samsung Galaxy A17 5G",
        categoria: "Móvil",
        precio: 279.99,
        descripcion: "Smartphone con conectividad 5G.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/23B-0002-01YD6-01.jpg",
        enlace: "https://www.newegg.com/p/23B-0002-01YD6"
    },

    // WORKSTATION

    {
        id: 10,
        nombre: "Lenovo ThinkStation P3 Tower",
        categoria: "Workstation",
        precio: 839.00,
        descripcion: "Estacion de trabajo profesional.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/B0GJD2603311D1VC058.jpg",
        enlace: "https://www.newegg.com/p/1VK-01WM-00046"
    },
    {
        id: 11,
        nombre: "Lenovo ThinkStation P3",
        categoria: "Workstation",
        precio: 1776.93,
        descripcion: "Workstation para productividad profesional.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/APGHD2407020Q2US525.jpg",
        enlace: "https://www.newegg.com/p/1VK-0003-1RWE6"
    },
    {
        id: 12,
        nombre: "HP Z2 G9 SFF Workstation",
        categoria: "Workstation",
        precio: 1089.00,
        descripcion: "Workstation HP de formato compacto.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/B0GJD2602050NNQ8U85.jpg",
        enlace: "https://www.newegg.com/p/1VK-001E-4UK47"
    }
];

// ==========================================
// VARIABLES
// ==========================================

const $ = id => document.getElementById(id);

let categoriaActual = "Todos";
let carrito = [];
let renderActual = 0;

const catalogo = $("catalogo");
const cartLink = $("cartLink");
const runningCart = $("runningCart");

const imagenes = new Map();

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

function verificarImagen(url) {

    if (!url || !url.startsWith("https://")) {
        return Promise.resolve(false);
    }

    if (imagenes.has(url)) {
        return imagenes.get(url);
    }

    const comprobacion = new Promise(resolve => {

        const img = new Image();

        img.onload = () => {
            resolve(
                img.naturalWidth > 0 &&
                img.naturalHeight > 0
            );
        };

        img.onerror = () => {
            resolve(false);
        };

        img.src = url;
    });

    imagenes.set(url, comprobacion);

    return comprobacion;
}

// ==========================================
// MOSTRAR PRODUCTOS
// ==========================================

async function mostrarProductos() {

    const turno = ++renderActual;

    const texto = $("buscar").value
        .toLowerCase()
        .trim();

    let visibles = productos.filter(p => {

        const categoria =
            categoriaActual === "Todos" ||
            p.categoria === categoriaActual;

        const busqueda = (
            p.nombre + " " +
            p.categoria + " " +
            p.descripcion
        ).toLowerCase().includes(texto);

        return categoria && busqueda;
    });

    const orden = $("ordenar").value;

    if (orden === "asc") {
        visibles.sort((a, b) => a.precio - b.precio);
    }

    if (orden === "desc") {
        visibles.sort((a, b) => b.precio - a.precio);
    }

    if (orden === "name") {
        visibles.sort((a, b) =>
            a.nombre.localeCompare(b.nombre, "es")
        );
    }

    catalogo.replaceChildren();

    $("resultCount").textContent =
        "Cargando equipos...";

    // Comprobar imagenes externas
    const resultados = await Promise.all(
        visibles.map(async p => ({
            producto: p,
            valida: await verificarImagen(p.imagen)
        }))
    );

    if (turno !== renderActual) {
        return;
    }

    const disponibles = resultados
        .filter(item => item.valida)
        .map(item => item.producto);

    disponibles.forEach(crearTarjeta);

    actualizarContador();
}

// ==========================================
// TARJETAS DE PRODUCTOS
// ==========================================

function crearTarjeta(p) {

    const tarjeta = document.createElement("article");

    tarjeta.className = "producto";

    tarjeta.innerHTML = `
        <span class="product-category">
            ${p.categoria}
        </span>

        <div class="product-image">
            <img
                src="${p.imagen}"
                alt="${p.nombre}"
                loading="lazy"
            >
        </div>

        <h3>${p.nombre}</h3>

        <p class="product-description">
            ${p.descripcion}
        </p>

        <div class="product-bottom">

            <p class="precio">
                ${dinero(p.precio)}

                <small>
                    Precio de demostración
                </small>
            </p>

            <div class="product-actions">

                <button class="add-btn" type="button">
                    + Agregar al carrito
                </button>

                <a
                    class="external-btn"
                    href="${p.enlace}"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ver en Newegg"
                    aria-label="Ver en Newegg">
                    ↗
                </a>

            </div>
        </div>
    `;

    // Eliminar productos cuya imagen falle
    tarjeta.querySelector("img")
        .addEventListener("error", () => {
            tarjeta.remove();
            actualizarContador();
        });

    tarjeta.querySelector(".add-btn")
        .addEventListener("click", () => {
            agregarCarrito(p.id);
        });

    catalogo.appendChild(tarjeta);
}

// ==========================================
// CONTADOR DE EQUIPOS
// ==========================================

function actualizarContador() {

    const cantidad = catalogo.querySelectorAll(
        ".producto"
    ).length;

    $("resultCount").textContent =
        cantidad + " equipos con imagen disponible";

    if (cantidad === 0) {
        catalogo.innerHTML = `
            <div class="empty-results">
                No hay equipos con imagen disponible
                para esta selección.
            </div>
        `;
    }
}

// ==========================================
// FILTROS
// ==========================================

function filtrar(categoria) {

    categoriaActual = categoria;

    document.querySelectorAll(
        "#filtros [data-category]"
    ).forEach(boton => {

        const activo =
            boton.dataset.category === categoria;

        boton.classList.toggle("active", activo);

        boton.setAttribute(
            "aria-pressed",
            String(activo)
        );
    });

    mostrarProductos();
}

// ==========================================
// BOLSA PEQUEÑA QUE ENTRA AL CARRITO
// ==========================================

function animarBolsa() {

    // Reiniciar animación al agregar otro producto
    cartLink.classList.remove("bag-animate");

    void cartLink.offsetWidth;

    cartLink.classList.add("bag-animate");
}

// Quitar la clase cuando termine
cartLink.addEventListener("animationend", evento => {

    if (evento.animationName === "bolsaAlCarrito") {
        cartLink.classList.remove("bag-animate");
    }
});

// ==========================================
// AGREGAR AL CARRITO
// ==========================================

function agregarCarrito(id) {

    const producto = productos.find(
        p => p.id === id
    );

    if (!producto) {
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

    // Bolsa que llega desde la izquierda
    animarBolsa();
}

// ==========================================
// ELIMINAR PRODUCTO
// ==========================================

function eliminarProducto(id) {

    carrito = carrito.filter(
        item => item.id !== id
    );

    actualizarCarrito();
}

// ==========================================
// VACIAR CARRITO
// ==========================================

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// ==========================================
// ACTUALIZAR CARRITO
// ==========================================

function actualizarCarrito() {

    const lista = $("listaCarrito");

    lista.replaceChildren();

    let total = 0;
    let cantidad = 0;

    if (carrito.length === 0) {

        lista.innerHTML = `
            <div class="cart-empty">
                Tu carrito está vacío.
                Selecciona un equipo para comenzar.
            </div>
        `;
    }

    carrito.forEach(item => {

        const p = productos.find(
            x => x.id === item.id
        );

        if (!p) {
            return;
        }

        const subtotal =
            p.precio * item.cantidad;

        total += subtotal;
        cantidad += item.cantidad;

        const fila = document.createElement("div");

        fila.className = "cart-row";

        fila.innerHTML = `
            <div>
                <strong>${p.nombre}</strong>

                <small>
                    ${item.cantidad} ×
                    ${dinero(p.precio)}
                </small>
            </div>

            <div class="cart-row-right">

                <span>
                    ${dinero(subtotal)}
                </span>

                <br>

                <button
                    class="remove-btn"
                    type="button">
                    Quitar
                </button>

            </div>
        `;

        fila.querySelector(".remove-btn")
            .addEventListener("click", () => {
                eliminarProducto(p.id);
            });

        lista.appendChild(fila);
    });

    $("total").textContent = dinero(total);

    $("cartCount").textContent = cantidad;
}

// ==========================================
// CARRITO CORRIENDO AL ENTRAR
// ==========================================

let carreraTerminada = false;

function correrCarrito() {

    if (window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches) {
        return;
    }

    runningCart.classList.remove("run");

    void runningCart.offsetWidth;

    runningCart.classList.add("run");
}

// Terminar animación
runningCart.addEventListener(
    "animationend",
    evento => {

        if (evento.animationName === "raceCart") {
            runningCart.classList.remove("run");
        }
    }
);

// Detectar entrada a la sección
const observadorCarrito = new IntersectionObserver(
    entradas => {

        entradas.forEach(entrada => {

            if (
                entrada.isIntersecting &&
                !carreraTerminada
            ) {
                correrCarrito();
                carreraTerminada = true;
            }

            if (!entrada.isIntersecting) {
                carreraTerminada = false;
            }
        });
    },
    {
        threshold: 0.3
    }
);

observadorCarrito.observe($("carrito"));

// También correr al presionar enlace Carrito
document.querySelectorAll('a[href="#carrito"]')
    .forEach(enlace => {

        enlace.addEventListener("click", () => {
            carreraTerminada = true;
            correrCarrito();
        });
    });

// ==========================================
// ANIMACION DE LA COMPUTADORA
// ==========================================

const pc = $("pcInteractive");

function alternarPc() {

    const pausado = pc.classList.toggle("paused");

    pc.setAttribute(
        "aria-pressed",
        String(pausado)
    );

    pc.setAttribute(
        "aria-label",
        pausado
            ? "Reanudar animación"
            : "Pausar animación"
    );
}

// Pausar / reanudar con clic
pc.addEventListener("click", alternarPc);

// Accesibilidad de teclado
pc.addEventListener("keydown", evento => {

    if (
        evento.key === "Enter" ||
        evento.key === " "
    ) {
        evento.preventDefault();
        alternarPc();
    }
});

// ==========================================
// EVENTOS GENERALES
// ==========================================

// Buscador
$("buscar").addEventListener(
    "input",
    mostrarProductos
);

// Ordenamiento
$("ordenar").addEventListener(
    "change",
    mostrarProductos
);

// Filtros
$("filtros").addEventListener("click", evento => {

    const boton = evento.target.closest(
        "[data-category]"
    );

    if (boton) {
        filtrar(boton.dataset.category);
    }
});

// Vaciar carrito
$("vaciarCarrito").addEventListener(
    "click",
    vaciarCarrito
);

// ==========================================
// INICIAR PAGINA
// ==========================================

mostrarProductos();
actualizarCarrito();
