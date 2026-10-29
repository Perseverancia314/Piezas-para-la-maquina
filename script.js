
// =====================================
// PIEZAS PC - CATALOGO BILINGUE
// =====================================

// Precios ilustrativos.
// Imagenes externas de Newegg.

const productos = [
  // DESKTOP
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
    es: "Desktop Intel Core Ultra y GeForce RTX.",
    en: "Desktop with Intel Core Ultra and GeForce RTX.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/83-360-968-22.jpg",
    enlace: "https://www.newegg.com/p/N82E16883360968"
  },
  {
    id: 3,
    nombre: "ABS Flux II Aqua",
    categoria: "Desktop",
    precio: 1149.99,
    es: "Computadora preensamblada para gaming.",
    en: "Prebuilt gaming desktop computer.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/83-360-976-10.jpg",
    enlace: "https://www.newegg.com/p/N82E16883360976"
  },

  // LAPTOP
  {
    id: 4,
    nombre: "MSI Gaming Laptop RTX 4060",
    categoria: "Laptop",
    precio: 1499,
    es: "Laptop gaming Intel Core i7 y RTX.",
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
    es: "Portátil para gaming y creación de contenido.",
    en: "Laptop for gaming and content creation.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/34-156-737-01.jpg",
    enlace: "https://www.newegg.com/p/N82E16834156737"
  },

  // MOVIL
  {
    id: 7,
    nombre: "Samsung Galaxy A17 4G",
    categoria: "Móvil",
    precio: 194.99,
    es: "Smartphone Samsung desbloqueado.",
    en: "Unlocked Samsung smartphone.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/ABPXS2512020MIWLS9A.jpg",
    enlace: "https://www.newegg.com/p/23B-0002-01ZV3"
  },
  {
    id: 8,
    nombre: "Samsung Galaxy S25 256GB",
    categoria: "Móvil",
    precio: 938.25,
    es: "Smartphone Samsung de gama alta.",
    en: "High-end Samsung smartphone.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/A24GD2502110EEKAR23.jpg",
    enlace: "https://www.newegg.com/p/0V4-000B-01S27"
  },
  {
    id: 9,
    nombre: "Samsung Galaxy A17 5G",
    categoria: "Móvil",
    precio: 279.99,
    es: "Smartphone con conectividad 5G.",
    en: "Smartphone with 5G connectivity.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/23B-0002-01YD6-01.jpg",
    enlace: "https://www.newegg.com/p/23B-0002-01YD6"
  },

  // WORKSTATION
  {
    id: 10,
    nombre: "Lenovo ThinkStation P3 Tower",
    categoria: "Workstation",
    precio: 839,
    es: "Estación de trabajo profesional.",
    en: "Professional desktop workstation.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/B0GJD2603311D1VC058.jpg",
    enlace: "https://www.newegg.com/p/1VK-01WM-00046"
  },
  {
    id: 11,
    nombre: "Lenovo ThinkStation P3",
    categoria: "Workstation",
    precio: 1776.93,
    es: "Workstation para productividad profesional.",
    en: "Workstation for professional productivity.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/APGHD2407020Q2US525.jpg",
    enlace: "https://www.newegg.com/p/1VK-0003-1RWE6"
  },
  {
    id: 12,
    nombre: "HP Z2 G9 SFF Workstation",
    categoria: "Workstation",
    precio: 1089,
    es: "Workstation HP de formato compacto.",
    en: "Compact HP professional workstation.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/B0GJD2602050NNQ8U85.jpg",
    enlace: "https://www.newegg.com/p/1VK-001E-4UK47"
  }
];

// =====================================
// TRADUCCIONES
// =====================================

const traducciones = {
  es: {
    navHome: "Inicio",
    navProducts: "Equipos",
    navCart: "Carrito",
    heroOne: "POTENCIA.",
    heroTwo: "PRECISIÓN.",
    heroThree: "VELOCIDAD.",
    heroDescription:
      "Encuentra tu próxima computadora. Explora desktops, laptops, dispositivos móviles y estaciones de trabajo.",
    explore: "EXPLORAR EQUIPOS",
    viewCart: "VER CARRITO",
    registered: "EQUIPOS REGISTRADOS",
    categories: "CATEGORÍAS",
    mobile: "Móvil",
    catalogLabel: "CATÁLOGO DE EQUIPOS",
    catalogTitle: "NUESTROS",
    catalogTitle2: "EQUIPOS",
    catalogDescription: "Equipos completos para cada necesidad.",
    sortBy: "Ordenar por:",
    featured: "Destacados",
    lowPrice: "Menor precio",
    highPrice: "Mayor precio",
    alphabetical: "Nombre A-Z",
    all: "Todos",
    priceNotice:
      "Los precios son ilustrativos. Consulta los precios reales directamente en Newegg.",
    yourSelection: "TU SELECCIÓN",
    cartTitle: "CARRITO DE",
    cartTitle2: "COMPRAS",
    clearCart: "Vaciar carrito",
    estimatedTotal: "TOTAL ESTIMADO",
    demoWarning:
      "Carrito de demostración. No procesa pagos.",
    visitNewegg: "VISITAR NEWEGG",
    searchPlaceholder: "Buscar equipos...",
    loading: "Cargando equipos...",
    available: "equipos con imagen disponible",
    unavailable: "No hay equipos con imágenes disponibles.",
    samplePrice: "Precio ilustrativo",
    add: "+ Agregar al carrito",
    remove: "Quitar",
    empty: "Tu carrito está vacío.",
    viewOnNewegg: "Ver en Newegg",
    zoomImage: "Ampliar imagen",
    close: "Cerrar",
    pause: "Pausar animación",
    resume: "Reanudar animación"
  },
  en: {
    navHome: "Home",
    navProducts: "Computers",
    navCart: "Cart",
    heroOne: "POWER.",
    heroTwo: "PRECISION.",
    heroThree: "SPEED.",
    heroDescription:
      "Find your next computer. Explore desktops, laptops, mobile devices and professional workstations.",
    explore: "EXPLORE COMPUTERS",
    viewCart: "VIEW CART",
    registered: "LISTED DEVICES",
    categories: "CATEGORIES",
    mobile: "Mobile",
    catalogLabel: "COMPUTER CATALOG",
    catalogTitle: "OUR",
    catalogTitle2: "COMPUTERS",
    catalogDescription: "Complete systems for every need.",
    sortBy: "Sort by:",
    featured: "Featured",
    lowPrice: "Lowest price",
    highPrice: "Highest price",
    alphabetical: "Name A-Z",
    all: "All",
    priceNotice:
      "Prices are illustrative. Check current prices directly on Newegg.",
    yourSelection: "YOUR SELECTION",
    cartTitle: "SHOPPING",
    cartTitle2: "CART",
    clearCart: "Clear cart",
    estimatedTotal: "ESTIMATED TOTAL",
    demoWarning:
      "Demo shopping cart. No payments are processed.",
    visitNewegg: "VISIT NEWEGG",
    searchPlaceholder: "Search computers...",
    loading: "Loading computers...",
    available: "computers with available images",
    unavailable: "No computers with available images.",
    samplePrice: "Illustrative price",
    add: "+ Add to cart",
    remove: "Remove",
    empty: "Your cart is empty.",
    viewOnNewegg: "View on Newegg",
    zoomImage: "Enlarge image",
    close: "Close",
    pause: "Pause animation",
    resume: "Resume animation"
  }
};

// =====================================
// ESTADO Y UTILIDADES
// =====================================

const $ = id => document.getElementById(id);

let idioma = "es";
let categoriaActual = "Todos";
let ordenActual = "default";
let carrito = [];
let renderActual = 0;

const catalogo = $("catalogo");
const cartLink = $("cartLink");
const runningCart = $("runningCart");

const imagenes = new Map();

function t(clave) {
  return traducciones[idioma][clave] || clave;
}

function dinero(valor) {
  return new Intl.NumberFormat(
    idioma === "es" ? "es-PR" : "en-US",
    { style: "currency", currency: "USD" }
  ).format(valor);
}

function movimientoReducido() {
  return window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
}

// =====================================
// CAMBIAR IDIOMA
// =====================================

function cambiarIdioma(nuevoIdioma) {
  idioma = nuevoIdioma;
  document.documentElement.lang = idioma;

  document.querySelectorAll("[data-i18n]")
    .forEach(elemento => {
      elemento.textContent = t(elemento.dataset.i18n);
    });

  $("buscar").placeholder = t("searchPlaceholder");
  $("buscar").setAttribute(
    "aria-label", t("searchPlaceholder")
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

  const pausada = $("pcInteractive")
    .classList.contains("paused");

  $("pcInteractive").setAttribute(
    "aria-label", t(pausada ? "resume" : "pause")
  );

  mostrarProductos();
  actualizarCarrito();
}

$("langES").addEventListener("click", () => {
  cambiarIdioma("es");
});

$("langEN").addEventListener("click", () => {
  cambiarIdioma("en");
});

// =====================================
// VERIFICAR IMAGENES DE NEWEGG
// =====================================

function verificarImagen(url) {
  if (!url || !url.startsWith("https://")) {
    return Promise.resolve(false);
  }

  if (imagenes.has(url)) {
    return imagenes.get(url);
  }

  const comprobacion = new Promise(resolve => {
    const imagen = new Image();

    imagen.onload = () => resolve(
      imagen.naturalWidth > 0 &&
      imagen.naturalHeight > 0
    );

    imagen.onerror = () => resolve(false);
    imagen.src = url;
  });

  imagenes.set(url, comprobacion);
  return comprobacion;
}

// =====================================
// MOSTRAR EQUIPOS
// =====================================

async function mostrarProductos() {
  const turno = ++renderActual;
  const busqueda = $("buscar").value
    .toLowerCase().trim();

  let visibles = productos.filter(p => {
    const coincideCategoria =
      categoriaActual === "Todos" ||
      p.categoria === categoriaActual;

    const texto =
      `${p.nombre} ${p.categoria} ${p.es} ${p.en}`
        .toLowerCase();

    return coincideCategoria && texto.includes(busqueda);
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
    .filter(item => item.valida)
    .forEach(item => crearTarjeta(item.producto));

  actualizarContador();
}

function crearTarjeta(p) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "producto";

  tarjeta.innerHTML = `
    <span class="product-category">
      ${p.categoria === "Móvil" ? t("mobile") : p.categoria}
    </span>

    <button class="product-image" type="button"
            aria-label="${t("zoomImage")}: ${p.nombre}">
      <img src="${p.imagen}"
           alt="${p.nombre}" loading="lazy">
    </button>

    <h3>${p.nombre}</h3>
    <p class="product-description">${p[idioma]}</p>

    <div class="product-bottom">
      <p class="precio">
        ${dinero(p.precio)}
        <small>${t("samplePrice")}</small>
      </p>

      <div class="product-actions">
        <button class="add-btn" type="button">
          ${t("add")}
        </button>

        <a href="${p.enlace}" class="external-btn"
           target="_blank" rel="noopener noreferrer"
           title="${t("viewOnNewegg")}"
           aria-label="${t("viewOnNewegg")}">
          ↗
        </a>
      </div>
    </div>
  `;

  const imagen = tarjeta.querySelector("img");

  imagen.addEventListener("error", () => {
    tarjeta.remove();
    imagenes.delete(p.imagen);
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
  const cantidad =
    catalogo.querySelectorAll(".producto").length;

  $("resultCount").textContent =
    `${cantidad} ${t("available")}`;

  if (cantidad === 0) {
    catalogo.innerHTML = `
      <div class="empty-results">${t("unavailable")}</div>
    `;
  }
}

// =====================================
// VISOR DE IMAGEN COMPLETA
// =====================================

const visor = $("imageViewer");

function abrirImagen(p) {
  $("largeImage").src = p.imagen;
  $("largeImage").alt = p.nombre;
  $("imageCaption").textContent = p.nombre;

  if (!visor.open) visor.showModal();
}

function cerrarImagen() {
  visor.close();
  $("largeImage").removeAttribute("src");
}

$("closeImage").addEventListener("click", cerrarImagen);

visor.addEventListener("click", evento => {
  if (evento.target === visor) cerrarImagen();
});

visor.addEventListener("close", () => {
  $("largeImage").removeAttribute("src");
});

// =====================================
// FILTROS Y ORDENAMIENTO
// =====================================

function filtrar(categoria) {
  categoriaActual = categoria;

  document.querySelectorAll("#filtros button")
    .forEach(boton => {
      const activo =
        boton.dataset.category === categoria;

      boton.classList.toggle("active", activo);
      boton.setAttribute("aria-pressed", String(activo));
    });

  mostrarProductos();
}

$("filtros").addEventListener("click", evento => {
  const boton = evento.target.closest("[data-category]");
  if (boton) filtrar(boton.dataset.category);
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

$("buscar").addEventListener("input", mostrarProductos);

// =====================================
// BOLSA REDONDA LANZADA EN ARCO
// =====================================

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
  if (movimientoReducido()) {
    impactoCarrito();
    return;
  }

  const plantilla = $("shoppingBagTemplate");
  const bolsa = document.createElement("div");

  bolsa.className = "flying-bag";
  bolsa.appendChild(
    plantilla.content.firstElementChild.cloneNode(true)
  );

  document.body.appendChild(bolsa);

  const origen = boton.getBoundingClientRect();
  const destino = cartLink
    .querySelector(".cart-svg")
    .getBoundingClientRect();

  const size = 31;

  const x0 = origen.left + origen.width / 2 - size / 2;
  const y0 = origen.top + origen.height / 2 - size / 2;

  const x1 = destino.left + destino.width / 2 - size / 2;
  const y1 = destino.top + destino.height * .45 - size / 2;

  const altura = Math.min(
    230,
    Math.max(65, Math.abs(x1 - x0) * .32)
  );

  const puntos = [];

  for (let i = 0; i <= 30; i++) {
    const t = i / 30;

    const x = x0 + (x1 - x0) * t;
    const y = y0 + (y1 - y0) * t
      - 4 * altura * t * (1 - t);

    const escala = 1 - .5 * t;
    const rotacion = -22 + 45 * t;

    puntos.push({
      offset: t,
      transform:
        `translate(${x}px,${y}px) ` +
        `rotate(${rotacion}deg) scale(${escala})`,
      opacity: t < .06 ? t / .06 :
        t > .93 ? (1 - t) / .07 : 1
    });
  }

  const animacion = bolsa.animate(puntos, {
    duration: 1100,
    easing: "linear",
    fill: "forwards"
  });

  animacion.finished
    .then(() => {
      bolsa.remove();
      impactoCarrito();
    })
    .catch(() => bolsa.remove());
}

// =====================================
// CARRITO DE COMPRAS
// =====================================

function agregarCarrito(id, boton) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

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

  if (carrito.length === 0) {
    const vacio = document.createElement("div");
    vacio.className = "cart-empty";
    vacio.textContent = t("empty");
    lista.appendChild(vacio);
  }

  carrito.forEach(item => {
    const p = productos.find(x => x.id === item.id);
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
        <button class="remove-btn" type="button">
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

// =====================================
// CARRITO CORRIENDO EN SU SECCION
// =====================================

function correrCarrito() {
  if (movimientoReducido()) return;

  runningCart.classList.remove("run");
  void runningCart.offsetWidth;
  runningCart.classList.add("run");
}

runningCart.addEventListener("animationend", evento => {
  if (evento.animationName === "raceCart") {
    runningCart.classList.remove("run");
  }
});

let carritoEnVista = false;

const observador = new IntersectionObserver(
  entradas => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting && !carritoEnVista) {
        correrCarrito();
      }
      carritoEnVista = entrada.isIntersecting;
    });
  },
  { threshold: .3 }
);

observador.observe($("carrito"));

// =====================================
// PC ANIMADA
// =====================================

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

// =====================================
// INICIAR
// =====================================

$("heroCount").textContent = productos.length;
cambiarIdioma("es");
