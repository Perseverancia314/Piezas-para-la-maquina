
"use strict";

// ======================================
// PIEZASPC - EQUIPOS COMPLETOS
// ======================================
// Precios de demostracion.
// Imagenes externas sujetas a disponibilidad.

const productos = [
  {
    id: 1,
    nombre: "ABS Cyclone Aqua Gaming",
    categoria: "Desktop",
    precio: 1049.99,
    es: "Desktop gaming con Intel Core i5 y RTX 5060.",
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
    es: "Laptop gaming con Intel Core i7 y RTX.",
    en: "Gaming laptop with Intel Core i7 and RTX.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/34-156-427-14.jpg",
    enlace: "https://www.newegg.com/p/N82E16834156427"
  },
  {
    id: 5,
    nombre: "HP ProBook 640 G4",
    categoria: "Laptop",
    precio: 649.99,
    es: "Computadora portátil empresarial reacondicionada.",
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
    es: "Teléfono inteligente con conectividad 5G.",
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

// ======================================
// PIEZAS INDIVIDUALES
// ======================================
// Estos son ejemplos genericos.
// No se afirma compatibilidad entre ellos.

const piezas = [
  {
    id: 101,
    nombre: "Procesador Intel Core i7",
    categoria: "CPU",
    precio: 299.99,
    es: "Procesador de escritorio. Verifica generación y socket.",
    en: "Desktop processor. Check generation and socket."
  },
  {
    id: 102,
    nombre: "Memoria DDR5 32GB",
    categoria: "RAM",
    precio: 119.99,
    es: "Kit de memoria DDR5. Requiere una placa compatible.",
    en: "DDR5 memory kit. Requires a compatible motherboard."
  },
  {
    id: 103,
    nombre: "Tarjeta gráfica GeForce RTX",
    categoria: "GPU",
    precio: 499.99,
    es: "Tarjeta gráfica dedicada para videojuegos y creación.",
    en: "Dedicated graphics card for gaming and creation."
  },
  {
    id: 104,
    nombre: "SSD NVMe 2TB",
    categoria: "SSD",
    precio: 159.99,
    es: "Almacenamiento de estado sólido para ranura M.2 compatible.",
    en: "Solid-state storage for a compatible M.2 slot."
  },
  {
    id: 105,
    nombre: "Motherboard ATX",
    categoria: "Motherboard",
    precio: 189.99,
    es: "Placa base ATX. Verifica socket, chipset y memoria.",
    en: "ATX motherboard. Check socket, chipset and memory."
  },
  {
    id: 106,
    nombre: "Fuente de poder 850W",
    categoria: "PSU",
    precio: 129.99,
    es: "Fuente de alimentación de 850 W para computadoras.",
    en: "850 W power supply for desktop computers."
  },
  {
    id: 107,
    nombre: "Refrigeración de CPU",
    categoria: "Cooling",
    precio: 89.99,
    es: "Sistema de refrigeración para procesadores compatibles.",
    en: "Cooling system for compatible processors."
  },
  {
    id: 108,
    nombre: "Gabinete ATX",
    categoria: "Case",
    precio: 109.99,
    es: "Gabinete de escritorio para placas y componentes compatibles.",
    en: "Desktop case for compatible motherboards and components."
  }
];

// ======================================
// TRADUCCIONES COMPLETAS
// ======================================

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
      "Descubre computadoras completas y los componentes que necesitas para construir tu próximo equipo.",

    explore: "EXPLORAR EQUIPOS",
    exploreParts: "EXPLORAR PIEZAS",
    listed: "EQUIPOS",
    components: "PIEZAS",
    categories: "CATEGORÍAS",

    mobile: "Móvil",

    catalogLabel: "CATÁLOGO DE EQUIPOS",
    our: "NUESTROS",
    equipment: "EQUIPOS",
    catalogDescription:
      "Computadoras completas para cada necesidad.",

    search: "Buscar equipos...",
    searchRule: "Solo letras, números y espacios.",

    sortBy: "Ordenar por:",
    featured: "Destacados",
    low: "Menor precio",
    high: "Mayor precio",
    name: "Nombre A-Z",
    all: "Todos",

    priceNote:
      "Los precios son ilustrativos. Consulta precios y disponibilidad reales en Newegg.",

    partsLabel: "COMPONENTES DE COMPUTADORAS",
    partsTitleOne: "NUESTRAS",
    partsTitleTwo: "PIEZAS",
    partsDescription:
      "Procesadores, memorias, tarjetas gráficas y todo lo necesario para tu computadora.",
    partsPriceNote:
      "Precios de demostración. Comprueba la compatibilidad de los componentes antes de comprar.",
    cooling: "Refrigeración",
    cases: "Gabinetes",
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
    unavailable:
      "No hay equipos con imágenes disponibles para esta selección.",

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
      "Discover complete computers and the components you need to build your next system.",

    explore: "EXPLORE COMPUTERS",
    exploreParts: "EXPLORE COMPONENTS",
    listed: "COMPUTERS",
    components: "COMPONENTS",
    categories: "CATEGORIES",

    mobile: "Mobile",

    catalogLabel: "COMPUTER CATALOG",
    our: "OUR",
    equipment: "COMPUTERS",
    catalogDescription:
      "Complete computers for every need.",

    search: "Search computers...",
    searchRule: "Letters, numbers and spaces only.",

    sortBy: "Sort by:",
    featured: "Featured",
    low: "Lowest price",
    high: "Highest price",
    name: "Name A-Z",
    all: "All",

    priceNote:
      "Prices are illustrative. Check actual prices and availability on Newegg.",

    partsLabel: "COMPUTER COMPONENTS",
    partsTitleOne: "OUR",
    partsTitleTwo: "COMPONENTS",
    partsDescription:
      "Processors, memory, graphics cards and everything needed for your computer.",
    partsPriceNote:
      "Demo prices. Check component compatibility before purchasing.",
    cooling: "Cooling",
    cases: "Cases",
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
    unavailable:
      "No computers with available images for this selection.",

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

// ======================================
// VARIABLES Y UTILIDADES
// ======================================

const $ = id => document.getElementById(id);

let idioma = "es";
let categoriaActual = "Todos";
let ordenActual = "default";
let filtroPiezas = "Todos";
let carrito = [];
let renderActual = 0;

const catalogo = $("catalogo");
const partsCatalog = $("partsCatalog");
const cartLink = $("cartLink");
const raceGroup = $("raceGroup");

const cacheImagenes = new Map();

function t(clave) {
  return traducciones[idioma]?.[clave] ??
         traducciones.es?.[clave] ??
         "";
}

function dinero(valor) {
  return new Intl.NumberFormat(
    idioma === "es" ? "es-PR" : "en-US",
    {
      style: "currency",
      currency: "USD"
    }
  ).format(valor);
}

function movimientoReducido() {
  return window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
}

function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function buscarArticulo(id) {
  return productos.find(p => p.id === id) ??
         piezas.find(p => p.id === id);
}

// ======================================
// CAMBIAR IDIOMA
// ======================================

function cambiarIdioma(nuevoIdioma) {
  if (!traducciones[nuevoIdioma]) return;

  idioma = nuevoIdioma;
  document.documentElement.lang = idioma;

  document.querySelectorAll("[data-i18n]")
    .forEach(elemento => {
      const texto = t(elemento.dataset.i18n);

      if (texto) {
        elemento.textContent = texto;
      }
    });

  $("buscar").placeholder = t("search");
  $("buscar").setAttribute(
    "aria-label", t("search")
  );

  $("langES").classList.toggle(
    "active", idioma === "es"
  );

  $("langEN").classList.toggle(
    "active", idioma === "en"
  );

  $("langES").setAttribute(
    "aria-pressed", String(idioma === "es")
  );

  $("langEN").setAttribute(
    "aria-pressed", String(idioma === "en")
  );

  $("closeImage").setAttribute(
    "aria-label", t("close")
  );

  cartLink.setAttribute(
    "aria-label", t("viewCart")
  );

  const pcPausada = $("pcInteractive")
    .classList.contains("paused");

  $("pcInteractive").setAttribute(
    "aria-label",
    t(pcPausada ? "resume" : "pause")
  );

  // Actualizar AMBOS catalogos.
  mostrarProductos();
  renderizarPiezas();
  actualizarCarrito();
}

$("langES").addEventListener("click", () => {
  cambiarIdioma("es");
});

$("langEN").addEventListener("click", () => {
  cambiarIdioma("en");
});

// ======================================
// BUSCADOR SIN CARACTERES ESPECIALES
// ======================================

function limpiarBusqueda(texto) {
  return texto
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s{2,}/g, " ")
    .trimStart();
}

$("buscar").addEventListener("input", evento => {
  const input = evento.target;
  const limpio = limpiarBusqueda(input.value);

  if (input.value !== limpio) {
    input.value = limpio;
  }

  mostrarProductos();
});

// ======================================
// COMPROBAR IMAGENES EXTERNAS
// ======================================

function verificarImagen(url) {
  if (!url || !url.startsWith("https://")) {
    return Promise.resolve(false);
  }

  if (cacheImagenes.has(url)) {
    return cacheImagenes.get(url);
  }

  const promesa = new Promise(resolve => {
    const imagen = new Image();

    imagen.onload = () => {
      resolve(
        imagen.naturalWidth > 0 &&
        imagen.naturalHeight > 0
      );
    };

    imagen.onerror = () => resolve(false);

    imagen.src = url;
  });

  cacheImagenes.set(url, promesa);
  return promesa;
}

// ======================================
// CATALOGO DE COMPUTADORAS
// ======================================

async function mostrarProductos() {
  const turno = ++renderActual;
  const busqueda = normalizar(
    $("buscar").value.trim()
  );

  let visibles = productos.filter(p => {
    const categoriaCorrecta =
      categoriaActual === "Todos" ||
      p.categoria === categoriaActual;

    const texto = normalizar(
      [p.nombre, p.categoria, p.es, p.en].join(" ")
    );

    return categoriaCorrecta &&
           texto.includes(busqueda);
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
    visibles.map(async producto => ({
      producto,
      valida: await verificarImagen(producto.imagen)
    }))
  );

  // Evita resultados atrasados.
  if (turno !== renderActual) return;

  resultados
    .filter(resultado => resultado.valida)
    .forEach(resultado => {
      crearTarjetaProducto(resultado.producto);
    });

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

    <p class="product-description">
      ${p[idioma]}
    </p>

    <div class="product-bottom">
      <p class="precio">
        ${dinero(p.precio)}
        <small>${t("sample")}</small>
      </p>

      <div class="product-actions">
        <button type="button" class="add-btn">
          ${t("add")}
        </button>

        <a href="${p.enlace}"
           class="external-btn"
           target="_blank"
           rel="noopener noreferrer"
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
    .addEventListener("click", () => {
      abrirImagen(p);
    });

  tarjeta.querySelector(".add-btn")
    .addEventListener("click", evento => {
      agregarCarrito(p.id, evento.currentTarget);
    });

  catalogo.appendChild(tarjeta);
}

function actualizarContador() {
  const cantidad = catalogo.querySelectorAll(
    ".producto"
  ).length;

  $("resultCount").textContent =
    `${cantidad} ${t("available")}`;

  if (!cantidad) {
    const aviso = document.createElement("div");
    aviso.className = "empty-results";
    aviso.textContent = t("unavailable");
    catalogo.replaceChildren(aviso);
  }
}

// ======================================
// ILUSTRACIONES VECTORIALES DE PIEZAS
// ======================================

function iconoPieza(tipo) {
  const baseInicio = `
    <svg viewBox="0 0 160 120"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         stroke="#ff7900"
         stroke-linecap="round"
         stroke-linejoin="round">
  `;

  const baseFin = "</svg>";

  const iconos = {
    CPU: `
      <rect x="48" y="28" width="64" height="64"
            rx="7" fill="#30343d" stroke-width="3"/>
      <rect x="62" y="42" width="36" height="36"
            rx="3" stroke-width="3"/>
      <path d="M60 17V28M80 17V28M100 17V28
               M60 92V103M80 92V103M100 92V103
               M37 40H48M37 60H48M37 80H48
               M112 40H123M112 60H123M112 80H123"
            stroke-width="4"/>
      <text x="80" y="65" text-anchor="middle"
            fill="#ffffff" stroke="none"
            font-size="14" font-weight="bold">CPU</text>
    `,

    RAM: `
      <rect x="12" y="40" width="136" height="40"
            rx="5" fill="#263a30" stroke-width="3"/>
      <rect x="25" y="48" width="17" height="23" rx="2"
            fill="#ff7900" opacity=".6"/>
      <rect x="49" y="48" width="17" height="23" rx="2"
            fill="#ff7900" opacity=".6"/>
      <rect x="73" y="48" width="17" height="23" rx="2"
            fill="#ff7900" opacity=".6"/>
      <rect x="97" y="48" width="17" height="23" rx="2"
            fill="#ff7900" opacity=".6"/>
      <rect x="121" y="48" width="13" height="23" rx="2"
            fill="#ff7900" opacity=".6"/>
      <path d="M27 80V88M45 80V88M63 80V88
               M81 80V88M99 80V88M117 80V88
               M135 80V88" stroke-width="4"/>
    `,

    GPU: `
      <rect x="12" y="31" width="136" height="60"
            rx="7" fill="#30343d" stroke-width="3"/>
      <circle cx="56" cy="61" r="23" stroke-width="3"/>
      <circle cx="56" cy="61" r="9"
              fill="#ff7900" stroke="none"/>
      <circle cx="108" cy="61" r="23" stroke-width="3"/>
      <circle cx="108" cy="61" r="9"
              fill="#ff7900" stroke="none"/>
      <path d="M23 91V100H91" stroke-width="4"/>
    `,

    SSD: `
      <rect x="12" y="43" width="136" height="35"
            rx="5" fill="#30343d" stroke-width="3"/>
      <rect x="25" y="51" width="68" height="19"
            rx="3" fill="#ff7900" opacity=".4"/>
      <path d="M104 53H128M104 62H120M104 70H128"
            stroke-width="3"/>
      <circle cx="139" cy="61" r="3" fill="#ff7900"/>
    `,

    Motherboard: `
      <rect x="44" y="10" width="72" height="100"
            rx="5" fill="#263a30" stroke-width="3"/>
      <rect x="56" y="23" width="34" height="34"
            rx="4" stroke-width="3"/>
      <rect x="97" y="22" width="8" height="47"
            fill="#ff7900" opacity=".65"/>
      <path d="M54 68H88M54 77H88M54 86H88
               M92 80H106M92 90H106"
            stroke-width="3"/>
      <circle cx="58" cy="98" r="3" fill="#ff7900"/>
    `,

    PSU: `
      <rect x="30" y="28" width="100" height="66"
            rx="7" fill="#30343d" stroke-width="3"/>
      <circle cx="78" cy="61" r="25" stroke-width="3"/>
      <circle cx="78" cy="61" r="8" fill="#ff7900"/>
      <path d="M78 36V52M78 70V86
               M53 61H69M87 61H103
               M60 43L71 54M85 68L97 80
               M96 43L85 54M71 68L60 80"
            stroke-width="3"/>
    `,

    Cooling: `
      <rect x="42" y="22" width="76" height="76"
            rx="9" fill="#30343d" stroke-width="3"/>
      <circle cx="80" cy="60" r="29" stroke-width="3"/>
      <path d="M80 60Q64 33 88 39Q108 48 80 60
               M80 60Q107 43 104 68Q96 87 80 60
               M80 60Q101 84 76 83Q58 74 80 60
               M80 60Q55 79 57 54Q66 35 80 60"
            fill="#ff7900" opacity=".65"
            stroke="none"/>
      <circle cx="80" cy="60" r="7"
              fill="#ffffff" stroke="none"/>
    `,

    Case: `
      <rect x="52" y="9" width="59" height="102"
            rx="6" fill="#30343d" stroke-width="3"/>
      <path d="M92 9V111" stroke-width="3"/>
      <rect x="60" y="20" width="25" height="69"
            rx="3" stroke-width="2"/>
      <circle cx="101" cy="29" r="4" fill="#ff7900"/>
      <path d="M65 100H80" stroke-width="3"/>
    `
  };

  return baseInicio +
    (iconos[tipo] || iconos.CPU) +
    baseFin;
}

// ======================================
// MOSTRAR NUESTRAS PIEZAS
// ======================================

function renderizarPiezas() {
  partsCatalog.replaceChildren();

  const visibles = piezas.filter(p =>
    filtroPiezas === "Todos" ||
    p.categoria === filtroPiezas
  );

  visibles.forEach(p => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "part-card";

    let categoriaVisible = p.categoria;

    if (p.categoria === "Cooling") {
      categoriaVisible = t("cooling");
    }

    if (p.categoria === "Case") {
      categoriaVisible = t("cases");
    }

    tarjeta.innerHTML = `
      <div class="part-visual" aria-hidden="true">
        ${iconoPieza(p.categoria)}
      </div>

      <span class="part-type">
        ${categoriaVisible}
      </span>

      <h3>${p.nombre}</h3>

      <p class="part-description">
        ${p[idioma]}
      </p>

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
}

$("partsFilters").addEventListener(
  "click",
  evento => {
    const boton = evento.target.closest(
      "[data-part-filter]"
    );

    if (!boton) return;

    filtroPiezas = boton.dataset.partFilter;

    document.querySelectorAll(
      "#partsFilters button"
    ).forEach(item => {
      const activo = item === boton;

      item.classList.toggle("active", activo);

      item.setAttribute(
        "aria-pressed", String(activo)
      );
    });

    renderizarPiezas();
  }
);

// ======================================
// FILTROS DE COMPUTADORAS
// ======================================

$("filtros").addEventListener("click", evento => {
  const boton = evento.target.closest(
    "[data-category]"
  );

  if (!boton) return;

  categoriaActual = boton.dataset.category;

  document.querySelectorAll("#filtros button")
    .forEach(item => {
      const activo = item === boton;

      item.classList.toggle("active", activo);

      item.setAttribute(
        "aria-pressed", String(activo)
      );
    });

  mostrarProductos();
});

// ======================================
// ORDENAR COMPUTADORAS
// ======================================

$("sortButtons").addEventListener(
  "click",
  evento => {
    const boton = evento.target.closest(
      "[data-sort]"
    );

    if (!boton) return;

    ordenActual = boton.dataset.sort;

    document.querySelectorAll(
      "#sortButtons button"
    ).forEach(item => {
      const activo = item === boton;

      item.classList.toggle("active", activo);

      item.setAttribute(
        "aria-pressed", String(activo)
      );
    });

    mostrarProductos();
  }
);

// ======================================
// VISOR DE IMAGEN COMPLETA
// ======================================

const visor = $("imageViewer");

function abrirImagen(p) {
  $("largeImage").src = p.imagen;
  $("largeImage").alt = p.nombre;
  $("imageCaption").textContent = p.nombre;

  if (!visor.open) {
    visor.showModal();
  }
}

function cerrarImagen() {
  if (visor.open) visor.close();
}

$("closeImage").addEventListener(
  "click", cerrarImagen
);

visor.addEventListener("click", evento => {
  if (evento.target === visor) {
    cerrarImagen();
  }
});

visor.addEventListener("close", () => {
  $("largeImage").removeAttribute("src");
});

// ======================================
// ANIMACION: BOLSA REDONDA EN ARCO
// ======================================

function impactoCarrito() {
  cartLink.classList.remove("cart-impact");

  void cartLink.offsetWidth;

  cartLink.classList.add("cart-impact");
}

cartLink.addEventListener(
  "animationend",
  evento => {
    if (evento.animationName === "cartImpact") {
      cartLink.classList.remove("cart-impact");
    }
  }
);

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

  const x0 =
    origen.left + origen.width / 2 - tamano / 2;

  const y0 =
    origen.top + origen.height / 2 - tamano / 2;

  const x1 =
    destino.left + destino.width / 2 - tamano / 2;

  const y1 =
    destino.top + destino.height * .45 - tamano / 2;

  const altura = Math.min(
    230,
    Math.max(65, Math.abs(x1 - x0) * .32)
  );

  const puntos = [];

  for (let i = 0; i <= 30; i++) {
    const p = i / 30;

    const x = x0 + (x1 - x0) * p;
    const y = y0 + (y1 - y0) * p
      - 4 * altura * p * (1 - p);

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

// ======================================
// UN SOLO CARRITO PARA TODO
// ======================================

function agregarCarrito(id, boton) {
  // Busca tanto computadoras como piezas.
  const articulo = buscarArticulo(id);

  if (!articulo) return;

  const existente = carrito.find(
    item => item.id === id
  );

  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({
      id,
      cantidad: 1
    });
  }

  actualizarCarrito();
  lanzarBolsa(boton);
}

function eliminarProducto(id) {
  carrito = carrito.filter(
    item => item.id !== id
  );

  actualizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}

$("vaciarCarrito").addEventListener(
  "click", vaciarCarrito
);

function actualizarCarrito() {
  const lista = $("listaCarrito");
  lista.replaceChildren();

  let total = 0;
  let cantidad = 0;

  if (!carrito.length) {
    const vacio = document.createElement("div");

    vacio.className = "cart-empty";
    vacio.textContent = t("empty");

    lista.appendChild(vacio);
  }

  carrito.forEach(item => {
    // FUNCIONA CON AMBOS CATALOGOS.
    const articulo = buscarArticulo(item.id);

    if (!articulo) return;

    const subtotal =
      articulo.precio * item.cantidad;

    total += subtotal;
    cantidad += item.cantidad;

    const fila = document.createElement("div");

    fila.className = "cart-row";

    fila.innerHTML = `
      <div>
        <strong>${articulo.nombre}</strong>
        <small>
          ${item.cantidad} ×
          ${dinero(articulo.precio)}
        </small>
      </div>

      <div class="cart-row-right">
        <span>${dinero(subtotal)}</span>
        <br>
        <button type="button" class="remove-btn">
          ${t("remove")}
        </button>
      </div>
    `;

    fila.querySelector(".remove-btn")
      .addEventListener("click", () => {
        eliminarProducto(articulo.id);
      });

    lista.appendChild(fila);
  });

  $("total").textContent = dinero(total);
  $("cartCount").textContent = cantidad;
}

// ======================================
// STICKMAN + CARRITO CORRIENDO
// DURACION: 6 SEGUNDOS
// REPETICION: CADA 25 SEGUNDOS
// ======================================

const INTERVALO_CARRITO = 25000;

let intervaloCarrito = null;
let carritoEnVista = false;

function correrCarritoAnimado() {
  if (document.hidden || movimientoReducido()) {
    return;
  }

  const pista = document.querySelector(
    ".cart-racetrack"
  );

  raceGroup.style.setProperty(
    "--race-distance",
    `${pista.clientWidth + 25}px`
  );

  raceGroup.classList.remove("run");

  void raceGroup.offsetWidth;

  raceGroup.classList.add("run");
}

raceGroup.addEventListener(
  "animationend",
  evento => {
    if (
      evento.target === raceGroup &&
      evento.animationName === "raceTogether"
    ) {
      raceGroup.classList.remove("run");
    }
  }
);

function detenerCarrera() {
  if (intervaloCarrito !== null) {
    clearInterval(intervaloCarrito);
    intervaloCarrito = null;
  }

  raceGroup.classList.remove("run");
}

function iniciarCarrera() {
  if (intervaloCarrito !== null) return;

  if (
    !carritoEnVista ||
    document.hidden ||
    movimientoReducido()
  ) {
    return;
  }

  // Carrera inmediata al entrar.
  correrCarritoAnimado();

  // Repeticion automatica.
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

      if (carritoEnVista) {
        iniciarCarrera();
      } else {
        detenerCarrera();
      }
    });
  },
  {
    threshold: .3
  }
);

observadorCarrito.observe($("carrito"));

document.addEventListener(
  "visibilitychange",
  () => {
    if (document.hidden) {
      detenerCarrera();
    } else if (carritoEnVista) {
      iniciarCarrera();
    }
  }
);

// ======================================
// PC MINIMALISTA: PAUSAR Y REANUDAR
// ======================================

const pc = $("pcInteractive");

function alternarPc() {
  const pausada = pc.classList.toggle("paused");

  pc.setAttribute(
    "aria-pressed", String(pausada)
  );

  pc.setAttribute(
    "aria-label",
    t(pausada ? "resume" : "pause")
  );
}

pc.addEventListener("click", alternarPc);

pc.addEventListener("keydown", evento => {
  if (
    evento.key === "Enter" ||
    evento.key === " "
  ) {
    evento.preventDefault();
    alternarPc();
  }
});

// ======================================
// INICIAR LA PAGINA COMPLETA
// ======================================

$("heroCount").textContent = productos.length;
$("partsCount").textContent = piezas.length;

// Una sola inicializacion.
// Carga ambos catalogos, traducciones
// y carrito desde el principio.
cambiarIdioma("es");
