
// PIEZAS PARA LA COMPUTADORA
// Los precios son ejemplos, no precios en vivo.

const productos = [
    {
        id: 1,
        nombre: "Intel Core Ultra 7 265K",
        categoria: "Procesadores",
        precio: 359.99,
        descripcion: "Procesador Intel de alto rendimiento.",
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
        descripcion: "Tarjeta gráfica dedicada para gaming.",
        imagen: null,
        enlace: "https://www.newegg.com/p/pl?d=RTX+5070"
    },
    {
        id: 4,
        nombre: "AMD Radeon RX",
        categoria: "Tarjetas gráficas",
        precio: 399.99,
        descripcion: "Gráficos para computadoras de escritorio.",
        imagen: null,
        enlace: "https://www.newegg.com/p/pl?d=AMD+Radeon+RX"
    },
    {
        id: 5,
        nombre: "Corsair Vengeance DDR5 32GB",
        categoria: "Memoria RAM",
        precio: 519.99,
        descripcion: "Memoria DDR5 de alto rendimiento.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/20-236-828-V01.jpg",
        enlace: "https://www.newegg.com/p/N82E16820982007"
    },
    {
        id: 6,
        nombre: "Kingston RAM 16GB",
        categoria: "Memoria RAM",
        precio: 59.99,
        descripcion: "Memoria para actualizar tu equipo.",
        imagen: null,
        enlace: "https://www.newegg.com/p/pl?d=Kingston+16GB+RAM"
    },
    {
        id: 7,
        nombre: "Samsung 990 PRO SSD 2TB",
        categoria: "Almacenamiento",
        precio: 409.99,
        descripcion: "Unidad SSD NVMe para alto rendimiento.",
        imagen: "https://c1.neweggimages.com/productimage/nb640/20-147-861-01.jpg",
        enlace: "https://www.newegg.com/p/N82E16820147861"
    },
    {
        id: 8,
        nombre: "WD Black SSD 1TB",
        categoria: "Almacenamiento",
        precio: 79.99,
        descripcion: "Almacenamiento SSD para videojuegos.",
        imagen: null,
        enlace: "https://www.newegg.com/p/pl?d=WD+Black+SSD+1TB"
    },
    {
        id: 9,
        nombre: "MSI MAG Motherboard",
        categoria: "Tarjetas madre",
        precio: 189.99,
        descripcion: "Tarjeta madre para construir tu PC.",
        imagen: null,
        enlace: "https://www.newegg.com/p/pl?d=MSI+MAG+motherboard"
    },
    {
        id: 10,
        nombre: "ASUS TUF Motherboard",
        categoria: "Tarjetas madre",
        precio: 199.99,
        descripcion: "Placa base con opciones de expansión.",
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

// FORMATO DE PRECIOS
function dinero(valor) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valor);
}

// MOSTRAR PRODUCTOS
function mostrarProductos() {
    const texto = buscar.value.toLowerCase().trim();

    const visibles = productos.filter(p => {
        const coincideCategoria =
            categoriaActual === "Todos" ||
            p.categoria === categoriaActual;

        const coincideBusqueda =
            (p.nombre + " " + p.categoria)
                .toLowerCase()
                .includes(texto);

        return coincideCategoria && coincideBusqueda;
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

    document.getElementById("resultCount").textContent =
        `${visibles.length} componentes encontrados`;

    catalogo.innerHTML = "";

    if (visibles.length === 0) {
        catalogo.innerHTML = `
            <div class="empty-results">
                No encontramos componentes.
                Intenta otra búsqueda.
            </div>
        `;
        return;
    }

    visibles.forEach(p => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "producto";

        const imagenHTML = p.imagen
            ? `<img src="${p.imagen}"
                    alt="${p.nombre}"
                    loading="lazy">`
            : "";

        tarjeta.innerHTML = `
            <span class="product-category">
                ${p.categoria}
            </span>

            <div class="product-image">
                ${imagenHTML}
                <div class="product-placeholder"
                     ${p.imagen ? "hidden" : ""}>
                    <span>◈</span>
                    Imagen no disponible
                </div>
            </div>

            <h3>${p.nombre}</h3>

            <p class="product-description">
                ${p.descripcion}
            </p>

            <div class="product-bottom">
                <p class="precio">
                    ${dinero(p.precio)}
                    <small>Precio ilustrativo</small>
                </p>

                <div class="product-actions">
                    <button class="add-btn">
                        ＋ Agregar
                    </button>

                    <a href="${p.enlace}"
                       class="external-btn"
                       target="_blank"
                       rel="noopener noreferrer"
                       title="Ver en Newegg">
                        ↗
                    </a>
                </div>
            </div>
        `;

        const img = tarjeta.querySelector("img");

        if (img) {
            img.addEventListener("error", () => {
                img.remove();
                tarjeta.querySelector(
                    ".product-placeholder"
                ).hidden = false;
            });
        }

        tarjeta.querySelector(".add-btn")
            .addEventListener("click", () => {
                agregarCarrito(p.id);
            });

        catalogo.appendChild(tarjeta);
    });
}

// FILTROS
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

// CARRITO
function agregarCarrito(id) {
    const item = carrito.find(p => p.id === id);

    if (item) {
        item.cantidad++;
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
    lista.innerHTML = "";

    let total = 0;
    let cantidad = 0;

    if (carrito.length === 0) {
        lista.innerHTML = `
            <div class="cart-empty">
                🛒 Tu carrito está vacío.
                Agrega componentes para comenzar.
            </div>
        `;
    }

    carrito.forEach(item => {
        const p = productos.find(p => p.id === item.id);
        if (!p) return;

        total += p.precio * item.cantidad;
        cantidad += item.cantidad;

        const fila = document.createElement("div");
        fila.className = "cart-row";

        fila.innerHTML = `
            <div>
                <strong>${p.nombre}</strong>
                <small>
                    ${item.cantidad} × ${dinero(p.precio)}
                </small>
            </div>

            <div class="cart-row-right">
                <span>
                    ${dinero(p.precio * item.cantidad)}
                </span>
                <br>
                <button class="remove-btn">
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

    document.getElementById("total").textContent =
        dinero(total);

    document.getElementById("cartCount").textContent =
        cantidad;
}

// BUSCADOR
buscar.addEventListener("input", mostrarProductos);

// ORDENAR
ordenar.addEventListener("change", mostrarProductos);

// BOTONES DE FILTROS
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

// ANIMACION INTERACTIVA DE LA COMPUTADORA
const pcInteractive = document.getElementById("pcInteractive");

function togglePcAnimation() {
    const pausada = pcInteractive.classList.toggle("paused");

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

    const estado = pcInteractive.querySelector(".state-text");

    estado.textContent = pausada
        ? "ENSAMBLAJE EN PAUSA"
        : "ENSAMBLANDO COMPONENTES";
}

// CLIC DIRECTAMENTE SOBRE LA PC
pcInteractive.addEventListener("click", togglePcAnimation);

// ENTER O ESPACIO PARA ACCESIBILIDAD
pcInteractive.addEventListener("keydown", evento => {
    if (evento.key === "Enter" || evento.key === " ") {
        evento.preventDefault();
        togglePcAnimation();
    }
});

// INICIAR
mostrarProductos();
actualizarCarrito();
