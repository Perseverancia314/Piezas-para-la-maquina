
"use strict";

// ==========================================
// 12 COMPUTADORAS COMPLETAS
// ==========================================
// Precios ilustrativos; imagenes externas.

const productos = [
  {
    id: 1,
    nombre: "ABS Cyclone Aqua Gaming",
    categoria: "Desktop",
    precio: 1049.99,
    es: "Desktop gaming Intel Core i5 y RTX 5060.",
    en: "Gaming desktop with Intel Core i5 and RTX 5060.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/83-360-936-17.jpg",
    enlace: "https://www.newegg.com/p/N82E16883360936"
  },
  {
    id: 2,
    nombre: "ABS Cyclone Aqua Ultra",
    categoria: "Desktop",
    precio: 1499.99,
    es: "Computadora con Intel Core Ultra y GeForce RTX.",
    en: "Desktop with Intel Core Ultra and GeForce RTX.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/83-360-968-22.jpg",
    enlace: "https://www.newegg.com/p/N82E16883360968"
  },
  {
    id: 3,
    nombre: "ABS Flux II Aqua",
    categoria: "Desktop",
    precio: 1149.99,
    es: "Computadora preensamblada para videojuegos.",
    en: "Prebuilt gaming desktop computer.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/83-360-976-10.jpg",
    enlace: "https://www.newegg.com/p/N82E16883360976"
  },
  {
    id: 4,
    nombre: "MSI Gaming Laptop RTX 4060",
    categoria: "Laptop",
    precio: 1499,
    es: "Laptop para videojuegos con Intel Core i7 y RTX.",
    en: "Gaming laptop with Intel Core i7 and RTX.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/34-156-427-14.jpg",
    enlace: "https://www.newegg.com/p/N82E16834156427"
  },
  {
    id: 5,
    nombre: "HP ProBook 640 G4",
    categoria: "Laptop",
    precio: 649.99,
    es: "Laptop empresarial reacondicionada.",
    en: "Refurbished business laptop.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/A6ZP_1_201912041570217384.jpg",
    enlace: "https://www.newegg.com/p/2WC-0001-00YP4"
  },
  {
    id: 6,
    nombre: "MSI Vector 16 HX AI",
    categoria: "Laptop",
    precio: 2299,
    es: "Laptop para videojuegos y creación de contenido.",
    en: "Laptop for gaming and content creation.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/34-156-737-01.jpg",
    enlace: "https://www.newegg.com/p/N82E16834156737"
  },
  {
    id: 7,
    nombre: "Samsung Galaxy A17 4G",
    categoria: "Movil",
    precio: 194.99,
    es: "Teléfono Samsung desbloqueado.",
    en: "Unlocked Samsung smartphone.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/ABPXS2512020MIWLS9A.jpg",
    enlace: "https://www.newegg.com/p/23B-0002-01ZV3"
  },
  {
    id: 8,
    nombre: "Samsung Galaxy S25 256GB",
    categoria: "Movil",
    precio: 938.25,
    es: "Teléfono Samsung de gama alta.",
    en: "High-end Samsung smartphone.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/A24GD2502110EEKAR23.jpg",
    enlace: "https://www.newegg.com/p/0V4-000B-01S27"
  },
  {
    id: 9,
    nombre: "Samsung Galaxy A17 5G",
    categoria: "Movil",
    precio: 279.99,
    es: "Teléfono con conectividad 5G.",
    en: "Smartphone with 5G connectivity.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/23B-0002-01YD6-01.jpg",
    enlace: "https://www.newegg.com/p/23B-0002-01YD6"
  },
  {
    id: 10,
    nombre: "Lenovo ThinkStation P3 Tower",
    categoria: "Workstation",
    precio: 839,
    es: "Estación de trabajo profesional tipo torre.",
    en: "Professional tower workstation.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/B0GJD2603311D1VC058.jpg",
    enlace: "https://www.newegg.com/p/1VK-01WM-00046"
  },
  {
    id: 11,
    nombre: "Lenovo ThinkStation P3",
    categoria: "Workstation",
    precio: 1776.93,
    es: "Estación de trabajo para productividad profesional.",
    en: "Workstation for professional productivity.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/APGHD2407020Q2US525.jpg",
    enlace: "https://www.newegg.com/p/1VK-0003-1RWE6"
  },
  {
    id: 12,
    nombre: "HP Z2 G9 SFF Workstation",
    categoria: "Workstation",
    precio: 1089,
    es: "Estación de trabajo HP de formato compacto.",
    en: "Compact HP professional workstation.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/B0GJD2602050NNQ8U85.jpg",
    enlace: "https://www.newegg.com/p/1VK-001E-4UK47"
  }
];

// ==========================================
// 24 PIEZAS - 3 EN CADA CATEGORIA
// ==========================================
// Modelos ilustrativos y no necesariamente
// compatibles entre si.

const piezas = [
  // CPU - 3
  {
    id: 101, categoria: "CPU",
    nombre: "Procesador Intel Core i5",
    precio: 199.99,
    es: "Procesador de gama media para escritorio.",
    en: "Midrange desktop processor."
  },
  {
    id: 102, categoria: "CPU",
    nombre: "Procesador AMD Ryzen 7",
    precio: 329.99,
    es: "Procesador de alto rendimiento para escritorio.",
    en: "High-performance desktop processor."
  },
  {
    id: 103, categoria: "CPU",
    nombre: "Procesador Intel Core i9",
    precio: 499.99,
    es: "Procesador avanzado para trabajos exigentes.",
    en: "Advanced processor for demanding workloads."
  },

  // RAM - 3
  {
    id: 104, categoria: "RAM",
    nombre: "Memoria DDR4 16GB",
    precio: 49.99,
    es: "Kit de memoria DDR4 para placas compatibles.",
    en: "DDR4 memory kit for compatible motherboards."
  },
  {
    id: 105, categoria: "RAM",
    nombre: "Memoria DDR5 32GB",
    precio: 119.99,
    es: "Kit DDR5 de 32 GB para sistemas compatibles.",
    en: "32GB DDR5 kit for compatible systems."
  },
  {
    id: 106, categoria: "RAM",
    nombre: "Memoria DDR5 64GB",
    precio: 229.99,
    es: "Kit de 64 GB para productividad y multitarea.",
    en: "64GB kit for productivity and multitasking."
  },

  // GPU - 3
  {
    id: 107, categoria: "GPU",
    nombre: "GeForce RTX Serie 5060",
    precio: 349.99,
    es: "Tarjeta gráfica para videojuegos.",
    en: "Graphics card for gaming."
  },
  {
    id: 108, categoria: "GPU",
    nombre: "Radeon RX Serie 9000",
    precio: 499.99,
    es: "Tarjeta gráfica dedicada AMD Radeon.",
    en: "Dedicated AMD Radeon graphics card."
  },
  {
    id: 109, categoria: "GPU",
    nombre: "GeForce RTX Serie 5080",
    precio: 1099.99,
    es: "Tarjeta gráfica de gama alta.",
    en: "High-end graphics card."
  },

  // SSD - 3
  {
    id: 110, categoria: "SSD",
    nombre: "SSD SATA 1TB",
    precio: 69.99,
    es: "Unidad de estado sólido con interfaz SATA.",
    en: "Solid-state drive with SATA interface."
  },
  {
    id: 111, categoria: "SSD",
    nombre: "SSD NVMe PCIe 4.0 2TB",
    precio: 139.99,
    es: "Almacenamiento NVMe PCIe 4.0.",
    en: "PCIe 4.0 NVMe storage."
  },
  {
    id: 112, categoria: "SSD",
    nombre: "SSD NVMe PCIe 5.0 4TB",
    precio: 399.99,
    es: "Almacenamiento NVMe de alta capacidad.",
    en: "High-capacity NVMe storage."
  },

  // MOTHERBOARD - 3
  {
    id: 113, categoria: "Motherboard",
    nombre: "Motherboard Micro-ATX",
    precio: 119.99,
    es: "Placa base compacta. Verifica el socket.",
    en: "Compact motherboard. Check CPU socket."
  },
  {
    id: 114, categoria: "Motherboard",
    nombre: "Motherboard ATX Gaming",
    precio: 219.99,
    es: "Placa ATX con características para gaming.",
    en: "ATX board with gaming-oriented features."
  },
  {
    id: 115, categoria: "Motherboard",
    nombre: "Motherboard ATX Premium",
    precio: 349.99,
    es: "Placa base avanzada con conectividad adicional.",
    en: "Advanced motherboard with extra connectivity."
  },

  // FUENTE DE PODER - 3
  {
    id: 116, categoria: "PSU",
    nombre: "Fuente de poder 650W",
    precio: 79.99,
    es: "Fuente de alimentación de 650 vatios.",
    en: "650-watt power supply."
  },
  {
    id: 117, categoria: "PSU",
    nombre: "Fuente de poder 850W",
    precio: 129.99,
    es: "Fuente de 850 vatios para equipos compatibles.",
    en: "850-watt supply for compatible systems."
  },
  {
    id: 118, categoria: "PSU",
    nombre: "Fuente de poder 1200W",
    precio: 229.99,
    es: "Fuente de alta capacidad para sistemas exigentes.",
    en: "High-capacity supply for demanding systems."
  },

  // REFRIGERACION - 3
  {
    id: 119, categoria: "Cooling",
    nombre: "Disipador de CPU por aire",
    precio: 39.99,
    es: "Refrigeración por aire para procesadores.",
    en: "Air cooling for processors."
  },
  {
    id: 120, categoria: "Cooling",
    nombre: "Refrigeración líquida AIO 240mm",
    precio: 99.99,
    es: "Sistema líquido todo en uno de 240 mm.",
    en: "240mm all-in-one liquid cooler."
  },
  {
    id: 121, categoria: "Cooling",
    nombre: "Refrigeración líquida AIO 360mm",
    precio: 159.99,
    es: "Sistema líquido todo en uno de 360 mm.",
    en: "360mm all-in-one liquid cooler."
  },

  // GABINETES - 3
  {
    id: 122, categoria: "Case",
    nombre: "Gabinete Mini Tower",
    precio: 59.99,
    es: "Gabinete compacto para componentes compatibles.",
    en: "Compact case for compatible components."
  },
  {
    id: 123, categoria: "Case",
    nombre: "Gabinete Mid Tower ATX",
    precio: 109.99,
    es: "Gabinete de tamaño medio para computadoras.",
    en: "Mid-tower case for desktop computers."
  },
  {
    id: 124, categoria: "Case",
    nombre: "Gabinete Full Tower",
    precio: 199.99,
    es: "Gabinete grande con mayor espacio interior.",
    en: "Large case with additional internal space."
  }
];

// ==========================================
// TRADUCCIONES
// ==========================================

const traducciones = {
  es: {
    home: "Inicio",
    products: "Equipos",
    partsNav: "Piezas",
    cart: "Carrito",
    power: "POTENCIA.",
    precision: "PRECISIÓN.",
    speed: "VELOCIDAD.",
    heroText:
      "Encuentra computadoras completas y componentes individuales para tu próximo equipo.",
    explore: "EXPLORAR EQUIPOS",
    exploreParts: "EXPLORAR PIEZAS",
    listed: "EQUIPOS",
    components: "PIEZAS",
    partCategories: "TIPOS DE PIEZAS",
    mobile: "Móvil",
    catalogLabel: "CATÁLOGO DE EQUIPOS",
    our: "NUESTROS",
    equipment: "EQUIPOS",
    catalogDescription:
      "Computadoras completas para cada necesidad.",
    search: "Buscar equipos...",
    searchParts: "Buscar piezas...",
    searchRule: "Solo letras, números y espacios.",
    sortBy: "Ordenar por:",
    featured: "Destacados",
    low: "Menor precio",
    high: "Mayor precio",
    name: "Nombre A-Z",
    all: "Todos",
    priceNote:
      "Precios ilustrativos. Comprueba los precios reales y la disponibilidad en Newegg.",
    partsLabel: "COMPONENTES PARA TU PC",
    partsTitleOne: "NUESTRAS",
    partsTitleTwo: "PIEZAS",
    partsDescription:
      "Tres opciones por categoría para explorar diferentes componentes.",
    cooling: "Refrigeración",
    cases: "Gabinetes",
    partsPriceNote:
      "Precios de demostración. Comprueba compatibilidad y especificaciones antes de comprar.",
    partsAvailable: "piezas disponibles",
    selection: "TU SELECCIÓN",
    cartTitleOne: "CARRITO DE",
    cartTitleTwo: "COMPRAS",
    clear: "Vaciar carrito",
    estimated: "TOTAL ESTIMADO",
    demo: "Carrito de demostración. No procesa pagos.",
    visit: "VISITAR NEWEGG",
    loading: "Cargando equipos...",
    available: "equipos con imagen disponible",
    unavailable: "No hay equipos con imagen disponible.",
    noParts: "No se encontraron piezas.",
    sample: "Precio ilustrativo",
    add: "+ Agregar al carrito",
    remove: "Quitar",
    empty: "Tu carrito está vacío.",
    viewNewegg: "Ver en Newegg",
    zoom: "Ver imagen completa",
    close: "Cerrar",
    pause: "Pausar animación",
    resume: "Reanudar animación"
  },
  en: {
    home: "Home",
    products: "Computers",
    partsNav: "Components",
    cart: "Cart",
    power: "POWER.",
    precision: "PRECISION.",
    speed: "SPEED.",
    heroText:
      "Find complete computers and individual components for your next build.",
    explore: "EXPLORE COMPUTERS",
    exploreParts: "EXPLORE COMPONENTS",
    listed: "COMPUTERS",
    components: "COMPONENTS",
    partCategories: "COMPONENT TYPES",
    mobile: "Mobile",
    catalogLabel: "COMPUTER CATALOG",
    our: "OUR",
    equipment: "COMPUTERS",
    catalogDescription: "Complete computers for every need.",
    search: "Search computers...",
    searchParts: "Search components...",
    searchRule: "Letters, numbers and spaces only.",
    sortBy: "Sort by:",
    featured: "Featured",
    low: "Lowest price",
    high: "Highest price",
    name: "Name A-Z",
    all: "All",
    priceNote:
      "Illustrative prices. Check actual prices and availability on Newegg.",
    partsLabel: "COMPONENTS FOR YOUR PC",
    partsTitleOne: "OUR",
    partsTitleTwo: "COMPONENTS",
    partsDescription:
      "Three options in each category for exploring different parts.",
    cooling: "Cooling",
    cases: "Cases",
    partsPriceNote:
      "Demo prices. Check compatibility and specifications before purchasing.",
    partsAvailable: "available components",
    selection: "YOUR SELECTION",
    cartTitleOne: "SHOPPING",
    cartTitleTwo: "CART",
    clear: "Clear cart",
    estimated: "ESTIMATED TOTAL",
    demo: "Demo shopping cart. No payments are processed.",
    visit: "VISIT NEWEGG",
    loading: "Loading computers...",
    available: "computers with available images",
    unavailable: "No computers with available images.",
    noParts: "No matching components found.",
    sample: "Illustrative price",
    add: "+ Add to cart",
    remove: "Remove",
    empty: "Your cart is empty.",
    viewNewegg: "View on Newegg",
    zoom: "View full image",
    close: "Close",
    pause: "Pause animation",
    resume: "Resume animation"
  }
};

// ==========================================
// VARIABLES
// ==========================================

const $ = id => document.getElementById(id);

let idioma = "es";
let categoriaActual = "Todos";
let filtroPiezas = "Todos";
let ordenActual = "default";
let carrito = [];
let renderActual = 0;

const catalogo = $("catalogo");
const partsCatalog = $("partsCatalog");
const cartLink = $("cartLink");
const raceGroup = $("raceGroup");
const cacheImagenes = new Map();

function t(clave) {
  return traducciones[idioma]?.[clave] ??
         traducciones.es?.[clave] ?? "";
}

function dinero(valor) {
  return new Intl.NumberFormat(
    idioma === "es" ? "es-PR" : "en-US",
    { style: "currency", currency: "USD" }
  ).format(valor);
}

function normalizar(texto) {
  return texto.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function movimientoReducido() {
  return window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
}

function buscarArticulo(id) {
  return productos.find(p => p.id === id) ||
         piezas.find(p => p.id === id);
}

// ==========================================
// IDIOMAS
// ==========================================

function cambiarIdioma(nuevo) {
  if (!traducciones[nuevo]) return;

  idioma = nuevo;
  document.documentElement.lang = idioma;

  document.querySelectorAll("[data-i18n]")
    .forEach(elemento => {
      const valor = t(elemento.dataset.i18n);
      if (valor) elemento.textContent = valor;
    });

  $("buscar").placeholder = t("search");
  $("buscarPiezas").placeholder = t("searchParts");

  $("buscar").setAttribute("aria-label", t("search"));
  $("buscarPiezas").setAttribute(
    "aria-label", t("searchParts")
  );

  $("langES").classList.toggle("active", idioma === "es");
  $("langEN").classList.toggle("active", idioma === "en");

  $("langES").setAttribute(
    "aria-pressed", String(idioma === "es")
  );

  $("langEN").setAttribute(
    "aria-pressed", String(idioma === "en")
  );

  $("closeImage").setAttribute("aria-label", t("close"));
  cartLink.setAttribute("aria-label", t("cart"));

  const pausada = $("pcInteractive")
    .classList.contains("paused");

  $("pcInteractive").setAttribute(
    "aria-label", t(pausada ? "resume" : "pause")
  );

  mostrarProductos();
  renderizarPiezas();
  actualizarCarrito();
}

$("langES").addEventListener(
  "click", () => cambiarIdioma("es")
);

$("langEN").addEventListener(
  "click", () => cambiarIdioma("en")
);

// ==========================================
// BUSCADORES SIN CARACTERES ESPECIALES
// ==========================================

function limpiarBusqueda(valor) {
  return valor
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s{2,}/g, " ")
    .trimStart();
}

function prepararBuscador(id, actualizar) {
  $(id).addEventListener("input", evento => {
    const input = evento.target;
    const limpio = limpiarBusqueda(input.value);

    if (input.value !== limpio) {
      input.value = limpio;
    }

    actualizar();
  });
}

prepararBuscador("buscar", mostrarProductos);
prepararBuscador("buscarPiezas", renderizarPiezas);

// ==========================================
// IMAGENES DE COMPUTADORAS
// ==========================================

function verificarImagen(url) {
  if (!url || !url.startsWith("https://")) {
    return Promise.resolve(false);
  }

  if (cacheImagenes.has(url)) {
    return cacheImagenes.get(url);
  }

  const promesa = new Promise(resolve => {
    const imagen = new Image();

    imagen.onload = () =>
      resolve(imagen.naturalWidth > 0 &&
              imagen.naturalHeight > 0);

    imagen.onerror = () => resolve(false);

    imagen.src = url;
  });

  cacheImagenes.set(url, promesa);
  return promesa;
}

// ==========================================
// COMPUTADORAS COMPLETAS
// ==========================================

async function mostrarProductos() {
  const turno = ++renderActual;
  const busqueda = normalizar($("buscar").value.trim());

  let visibles = productos.filter(p => {
    const categoriaValida =
      categoriaActual === "Todos" ||
      categoriaActual === p.categoria;

    const texto = normalizar(
      `${p.nombre} ${p.categoria} ${p.es} ${p.en}`
    );

    return categoriaValida && texto.includes(busqueda);
  });

  if (ordenActual === "asc") {
    visibles.sort((a,b) => a.precio - b.precio);
  } else if (ordenActual === "desc") {
    visibles.sort((a,b) => b.precio - a.precio);
  } else if (ordenActual === "name") {
    visibles.sort((a,b) =>
      a.nombre.localeCompare(b.nombre, idioma)
    );
  }

  catalogo.replaceChildren();
  $("resultCount").textContent = t("loading");

  const resultados = await Promise.all(
    visibles.map(async p => ({
      producto: p,
      valida: await verificarImagen(p.imagen)
    }))
  );

  if (turno !== renderActual) return;

  resultados
    .filter(x => x.valida)
    .forEach(x => crearTarjetaProducto(x.producto));

  actualizarContador();
}

function crearTarjetaProducto(p) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "producto";

  tarjeta.innerHTML = `
    <span class="product-category">
      ${p.categoria === "Movil" ? t("mobile") : p.categoria}
    </span>

    <button type="button" class="product-image"
            aria-label="${t("zoom")}: ${p.nombre}">
      <img src="${p.imagen}" alt="${p.nombre}">
    </button>

    <h3>${p.nombre}</h3>
    <p class="product-description">${p[idioma]}</p>

    <div class="product-bottom">
      <p class="precio">
        ${dinero(p.precio)}
        <small>${t("sample")}</small>
      </p>

      <div class="product-actions">
        <button type="button" class="add-btn">
          ${t("add")}
        </button>
        <a href="${p.enlace}" class="external-btn"
           target="_blank" rel="noopener noreferrer"
           title="${t("viewNewegg")}"
           aria-label="${t("viewNewegg")}">↗</a>
      </div>
    </div>
  `;

  const imagen = tarjeta.querySelector("img");

  imagen.addEventListener("error", () => {
    tarjeta.remove();
    cacheImagenes.delete(p.imagen);
    actualizarContador();
  });

  tarjeta.querySelector(".product-image")
    .addEventListener("click", () => abrirImagen(p));

  tarjeta.querySelector(".add-btn")
    .addEventListener("click", evento =>
      agregarCarrito(p.id, evento.currentTarget)
    );

  catalogo.appendChild(tarjeta);
}

function actualizarContador() {
  const cantidad =
    catalogo.querySelectorAll(".producto").length;

  $("resultCount").textContent =
    `${cantidad} ${t("available")}`;

  if (!cantidad) {
    const aviso = document.createElement("div");
    aviso.className = "empty-results";
    aviso.textContent = t("unavailable");
    catalogo.replaceChildren(aviso);
  }
}

// ==========================================
// SVG DE COMPONENTES
// ==========================================
// Representaciones genericas, no fotografias.

function iconoPieza(tipo) {
  const formas = {
    CPU: `
      <rect x="42" y="22" width="76" height="76"
            rx="8" fill="#30343d" stroke="#ff7900"
            stroke-width="3"/>
      <rect x="60" y="40" width="40" height="40"
            rx="4" stroke="#ff7900" stroke-width="3"
            fill="none"/>
      <path d="M60 10V22M80 10V22M100 10V22
               M60 98V110M80 98V110M100 98V110
               M30 40H42M30 60H42M30 80H42
               M118 40H130M118 60H130M118 80H130"
            stroke="#ff7900" stroke-width="4"/>
      <text x="80" y="66" fill="white" stroke="none"
            text-anchor="middle" font-size="14"
            font-weight="bold">CPU</text>
    `,

    RAM: `
      <rect x="10" y="39" width="140" height="42"
            rx="5" fill="#263a30" stroke="#ff7900"
            stroke-width="3"/>
      <path d="M23 81V91M43 81V91M63 81V91
               M83 81V91M103 81V91M123 81V91
               M143 81V91"
            stroke="#ff7900" stroke-width="4"/>
      <rect x="22" y="49" width="19" height="22"
            fill="#ff7900" opacity=".55"/>
      <rect x="47" y="49" width="19" height="22"
            fill="#ff7900" opacity=".55"/>
      <rect x="72" y="49" width="19" height="22"
            fill="#ff7900" opacity=".55"/>
      <rect x="97" y="49" width="19" height="22"
            fill="#ff7900" opacity=".55"/>
      <rect x="122" y="49" width="15" height="22"
            fill="#ff7900" opacity=".55"/>
    `,

    GPU: `
      <rect x="8" y="28" width="144" height="65"
            rx="7" fill="#30343d" stroke="#ff7900"
            stroke-width="3"/>
      <circle cx="56" cy="60" r="24"
              fill="none" stroke="#ff7900"
              stroke-width="4"/>
      <circle cx="108" cy="60" r="24"
              fill="none" stroke="#ff7900"
              stroke-width="4"/>
      <circle cx="56" cy="60" r="9" fill="#ff7900"/>
      <circle cx="108" cy="60" r="9" fill="#ff7900"/>
      <path d="M25 93V102H95" stroke="#ff7900"
            stroke-width="4" fill="none"/>
    `,

    SSD: `
      <rect x="9" y="42" width="142" height="38"
            rx="6" fill="#30343d" stroke="#ff7900"
            stroke-width="3"/>
      <rect x="25" y="51" width="72" height="20"
            rx="3" fill="#ff7900" opacity=".4"/>
      <path d="M105 52H132M105 61H124M105 70H132"
            stroke="#ff7900" stroke-width="3"/>
      <circle cx="141" cy="61" r="3" fill="#ff7900"/>
    `,

    Motherboard: `
      <rect x="42" y="9" width="76" height="102"
            rx="5" fill="#263a30" stroke="#ff7900"
            stroke-width="3"/>
      <rect x="55" y="23" width="36" height="35"
            rx="4" stroke="#ff7900" stroke-width="3"
            fill="none"/>
      <rect x="99" y="22" width="8" height="48"
            fill="#ff7900"/>
      <path d="M53 72H90M53 82H90M53 92H90
               M97 81H108M97 92H108"
            stroke="#ff7900" stroke-width="3"/>
    `,

    PSU: `
      <rect x="26" y="25" width="108" height="70"
            rx="7" fill="#30343d" stroke="#ff7900"
            stroke-width="3"/>
      <circle cx="78" cy="60" r="27"
              fill="none" stroke="#ff7900"
              stroke-width="3"/>
      <path d="M78 34V86M52 60H104M59 41L97 79
               M97 41L59 79"
            stroke="#ff7900" stroke-width="3"/>
      <circle cx="78" cy="60" r="8" fill="#ff7900"/>
    `,

    Cooling: `
      <rect x="40" y="20" width="80" height="80"
            rx="9" fill="#30343d" stroke="#ff7900"
            stroke-width="3"/>
      <circle cx="80" cy="60" r="31"
              fill="none" stroke="#ff7900"
              stroke-width="3"/>
      <path d="M80 60Q60 28 91 37Q110 47 80 60
               M80 60Q115 46 103 77Q92 93 80 60
               M80 60Q99 90 66 83Q50 71 80 60
               M80 60Q48 74 57 43Q69 28 80 60"
            fill="#ff7900" opacity=".7"/>
      <circle cx="80" cy="60" r="7" fill="#fff"/>
    `,

    Case: `
      <rect x="52" y="8" width="60" height="104"
            rx="7" fill="#30343d" stroke="#ff7900"
            stroke-width="3"/>
      <path d="M92 8V112" stroke="#ff7900"
            stroke-width="3"/>
      <rect x="60" y="19" width="26" height="72"
            rx="4" fill="none" stroke="#ff7900"
            stroke-width="2"/>
      <circle cx="102" cy="29" r="4" fill="#ff7900"/>
      <path d="M64 100H80" stroke="#ff7900"
            stroke-width="3"/>
    `
  };

  return `
    <svg viewBox="0 0 160 120"
         xmlns="http://www.w3.org/2000/svg"
         aria-hidden="true">
      ${formas[tipo] || formas.CPU}
    </svg>
  `;
}

// ==========================================
// MOSTRAR LAS 24 PIEZAS
// ==========================================

function renderizarPiezas() {
  const busqueda = normalizar(
    $("buscarPiezas").value.trim()
  );

  const visibles = piezas.filter(p => {
    const categoriaValida =
      filtroPiezas === "Todos" ||
      p.categoria === filtroPiezas;

    const texto = normalizar(
      `${p.nombre} ${p.categoria} ${p.es} ${p.en}`
    );

    return categoriaValida &&
           texto.includes(busqueda);
  });

  partsCatalog.replaceChildren();

  visibles.forEach(p => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "part-card";

    const categoriaNombre =
      p.categoria === "Cooling" ? t("cooling") :
      p.categoria === "Case" ? t("cases") :
      p.categoria;

    tarjeta.innerHTML = `
      <span class="part-type">${categoriaNombre}</span>

      <div class="part-visual">
        ${iconoPieza(p.categoria)}
      </div>

      <h3>${p.nombre}</h3>
      <p class="part-description">${p[idioma]}</p>

      <div class="part-bottom">
        <strong class="part-price">
          ${dinero(p.precio)}
          <small>${t("sample")}</small>
        </strong>

        <button type="button" class="part-add">
          ${t("add")}
        </button>
      </div>
    `;

    tarjeta.querySelector(".part-add")
      .addEventListener("click", evento => {
        agregarCarrito(p.id, evento.currentTarget);
      });

    partsCatalog.appendChild(tarjeta);
  });

  $("partsResultCount").textContent =
    `${visibles.length} ${t("partsAvailable")}`;

  if (!visibles.length) {
    const aviso = document.createElement("div");
    aviso.className = "empty-results";
    aviso.textContent = t("noParts");
    partsCatalog.appendChild(aviso);
  }
}

$("partsFilters").addEventListener("click", evento => {
  const boton = evento.target.closest("[data-part-filter]");
  if (!boton) return;

  filtroPiezas = boton.dataset.partFilter;

  document.querySelectorAll("#partsFilters button")
    .forEach(item => {
      const activo = item === boton;
      item.classList.toggle("active", activo);
      item.setAttribute("aria-pressed", String(activo));
    });

  renderizarPiezas();
});

// ==========================================
// FILTRAR Y ORDENAR COMPUTADORAS
// ==========================================

$("filtros").addEventListener("click", evento => {
  const boton = evento.target.closest("[data-category]");
  if (!boton) return;

  categoriaActual = boton.dataset.category;

  document.querySelectorAll("#filtros button")
    .forEach(item => {
      const activo = item === boton;
      item.classList.toggle("active", activo);
      item.setAttribute("aria-pressed", String(activo));
    });

  mostrarProductos();
});

$("sortButtons").addEventListener("click", evento => {
  const boton = evento.target.closest("[data-sort]");
  if (!boton) return;

  ordenActual = boton.dataset.sort;

  document.querySelectorAll("#sortButtons button")
    .forEach(item => {
      const activo = item === boton;
      item.classList.toggle("active", activo);
      item.setAttribute("aria-pressed", String(activo));
    });

  mostrarProductos();
});

// ==========================================
// VISOR DE IMAGEN
// ==========================================

const visor = $("imageViewer");

function abrirImagen(p) {
  $("largeImage").src = p.imagen;
  $("largeImage").alt = p.nombre;
  $("imageCaption").textContent = p.nombre;

  if (!visor.open) visor.showModal();
}

function cerrarImagen() {
  if (visor.open) visor.close();
}

$("closeImage").addEventListener("click", cerrarImagen);

visor.addEventListener("click", evento => {
  if (evento.target === visor) cerrarImagen();
});

visor.addEventListener("close", () => {
  $("largeImage").removeAttribute("src");
});

// ==========================================
// BOLSA REDONDA VOLANDO EN ARCO
// ==========================================

function impactoCarrito() {
  cartLink.classList.remove("cart-impact");
  void cartLink.offsetWidth;
  cartLink.classList.add("cart-impact");
}

cartLink.addEventListener("animationend", evento => {
  if (evento.animationName === "cartImpact") {
    cartLink.classList.remove("cart-impact");
  }
});

function lanzarBolsa(boton) {
  if (!boton || movimientoReducido()) {
    impactoCarrito();
    return;
  }

  const bolsa = document.createElement("div");
  bolsa.className = "flying-bag";

  bolsa.appendChild(
    $("shoppingBagTemplate").content
      .firstElementChild.cloneNode(true)
  );

  document.body.appendChild(bolsa);

  const origen = boton.getBoundingClientRect();
  const destino = cartLink
    .querySelector(".cart-svg")
    .getBoundingClientRect();

  const tamano = 31;

  const x0 = origen.left + origen.width / 2 - tamano / 2;
  const y0 = origen.top + origen.height / 2 - tamano / 2;
  const x1 = destino.left + destino.width / 2 - tamano / 2;
  const y1 = destino.top + destino.height * .45 - tamano / 2;

  const altura = Math.min(
    230, Math.max(65, Math.abs(x1 - x0) * .32)
  );

  const puntos = [];

  for (let i = 0; i <= 30; i++) {
    const p = i / 30;

    const x = x0 + (x1 - x0) * p;
    const y = y0 + (y1 - y0) * p -
      4 * altura * p * (1 - p);

    const escala = 1 - .5 * p;
    const giro = -22 + 45 * p;

    const opacidad =
      p < .06 ? p / .06 :
      p > .93 ? (1 - p) / .07 : 1;

    puntos.push({
      offset: p,
      transform:
        `translate(${x}px,${y}px) ` +
        `rotate(${giro}deg) scale(${escala})`,
      opacity: opacidad
    });
  }

  bolsa.animate(puntos, {
    duration: 1100,
    easing: "linear",
    fill: "forwards"
  }).finished
    .then(() => {
      bolsa.remove();
      impactoCarrito();
    })
    .catch(() => bolsa.remove());
}

// ==========================================
// UN SOLO CARRITO PARA TODO
// ==========================================

function agregarCarrito(id, boton) {
  const articulo = buscarArticulo(id);
  if (!articulo) return;

  const existente = carrito.find(item => item.id === id);

  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({ id, cantidad: 1 });
  }

  actualizarCarrito();
  lanzarBolsa(boton);
}

function eliminarProducto(id) {
  carrito = carrito.filter(item => item.id !== id);
  actualizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = $("listaCarrito");
  lista.replaceChildren();

  let total = 0;
  let cantidad = 0;

  if (!carrito.length) {
    const aviso = document.createElement("div");
    aviso.className = "cart-empty";
    aviso.textContent = t("empty");
    lista.appendChild(aviso);
  }

  carrito.forEach(item => {
    const p = buscarArticulo(item.id);
    if (!p) return;

    const subtotal = p.precio * item.cantidad;
    total += subtotal;
    cantidad += item.cantidad;

    const fila = document.createElement("div");
    fila.className = "cart-row";

    fila.innerHTML = `
      <div>
        <strong>${p.nombre}</strong>
        <small>${item.cantidad} × ${dinero(p.precio)}</small>
      </div>

      <div class="cart-row-right">
        <span>${dinero(subtotal)}</span><br>
        <button type="button" class="remove-btn">
          ${t("remove")}
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

$("vaciarCarrito").addEventListener(
  "click", vaciarCarrito
);

// ==========================================
// STICKMAN + CARRITO
// 6 SEGUNDOS / CADA 25 SEGUNDOS
// ==========================================

const INTERVALO_CARRITO = 25000;
let intervaloCarrito = null;
let carritoEnVista = false;

function correrCarritoAnimado() {
  if (document.hidden || movimientoReducido()) return;

  const pista = document.querySelector(".cart-racetrack");

  raceGroup.style.setProperty(
    "--race-distance",
    `${pista.clientWidth + 25}px`
  );

  raceGroup.classList.remove("run");
  void raceGroup.offsetWidth;
  raceGroup.classList.add("run");
}

raceGroup.addEventListener("animationend", evento => {
  if (evento.target === raceGroup &&
      evento.animationName === "raceTogether") {
    raceGroup.classList.remove("run");
  }
});

function detenerCarrera() {
  if (intervaloCarrito !== null) {
    clearInterval(intervaloCarrito);
    intervaloCarrito = null;
  }

  raceGroup.classList.remove("run");
}

function iniciarCarrera() {
  if (intervaloCarrito !== null) return;

  if (!carritoEnVista ||
      document.hidden ||
      movimientoReducido()) return;

  correrCarritoAnimado();

  intervaloCarrito = setInterval(() => {
    if (carritoEnVista && !document.hidden) {
      correrCarritoAnimado();
    }
  }, INTERVALO_CARRITO);
}

const observadorCarrito = new IntersectionObserver(
  entradas => {
    entradas.forEach(entrada => {
      carritoEnVista = entrada.isIntersecting;

      if (carritoEnVista) iniciarCarrera();
      else detenerCarrera();
    });
  },
  { threshold: .3 }
);

observadorCarrito.observe($("carrito"));

document.addEventListener("visibilitychange", () => {
  if (document.hidden) detenerCarrera();
  else if (carritoEnVista) iniciarCarrera();
});

// ==========================================
// PC INTERACTIVA
// ==========================================

const pc = $("pcInteractive");

function alternarPc() {
  const pausada = pc.classList.toggle("paused");

  pc.setAttribute("aria-pressed", String(pausada));
  pc.setAttribute(
    "aria-label", t(pausada ? "resume" : "pause")
  );
}

pc.addEventListener("click", alternarPc);

pc.addEventListener("keydown", evento => {
  if (evento.key === "Enter" || evento.key === " ") {
    evento.preventDefault();
    alternarPc();
  }
});

// ==========================================
// INICIAR
// ==========================================

$("heroCount").textContent = productos.length;
$("partsCount").textContent = piezas.length;

cambiarIdioma("es");
