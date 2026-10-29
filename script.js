
"use strict";

// ==========================================
// PIEZASPC - PRODUCTOS
// ==========================================
// Precios ilustrativos; no son precios en vivo.

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
    es: "Teléfono inteligente Samsung desbloqueado.",
    en: "Unlocked Samsung smartphone.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/ABPXS2512020MIWLS9A.jpg",
    enlace: "https://www.newegg.com/p/23B-0002-01ZV3"
  },
  {
    id: 8,
    nombre: "Samsung Galaxy S25 256GB",
    categoria: "Movil",
    precio: 938.25,
    es: "Teléfono inteligente Samsung de gama alta.",
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

// ==========================================
// TEXTOS EN ESPAÑOL E INGLES
// ==========================================

const traducciones = {
  es: {
    home: "Inicio",
    products: "Equipos",
    cart: "Carrito",
    power: "POTENCIA.",
    precision: "PRECISIÓN.",
    speed: "VELOCIDAD.",
    heroText:
      "Encuentra tu próxima computadora. Explora computadoras de escritorio, laptops, dispositivos móviles y estaciones de trabajo.",
    explore: "EXPLORAR EQUIPOS",
    viewCart: "VER CARRITO",
    listed: "EQUIPOS REGISTRADOS",
    categories: "CATEGORÍAS",
    mobile: "Móvil",
    catalogLabel: "CATÁLOGO DE EQUIPOS",
    our: "NUESTROS",
    equipment: "EQUIPOS",
    catalogDescription: "Equipos completos para cada necesidad.",
    searchRule: "Solo letras, números y espacios.",
    sortBy: "Ordenar por:",
    featured: "Destacados",
    low: "Menor precio",
    high: "Mayor precio",
    name: "Nombre A-Z",
    all: "Todos",
    priceNote:
      "Precios ilustrativos. Consulta precios reales y disponibilidad en Newegg.",
    selection: "TU SELECCIÓN",
    cartTitleOne: "CARRITO DE",
    cartTitleTwo: "COMPRAS",
    clear: "Vaciar carrito",
    estimated: "TOTAL ESTIMADO",
    demo: "Carrito de demostración. No procesa pagos.",
    visit: "VISITAR NEWEGG",
    search: "Buscar equipos...",
    loading: "Cargando equipos...",
    available: "equipos con imagen disponible",
    unavailable: "No hay equipos con imágenes disponibles.",
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
    cart: "Cart",
    power: "POWER.",
    precision: "PRECISION.",
    speed: "SPEED.",
    heroText:
      "Find your next computer. Explore desktops, laptops, mobile devices and professional workstations.",
    explore: "EXPLORE COMPUTERS",
    viewCart: "VIEW CART",
    listed: "LISTED DEVICES",
    categories: "CATEGORIES",
    mobile: "Mobile",
    catalogLabel: "COMPUTER CATALOG",
    our: "OUR",
    equipment: "EQUIPMENT",
    catalogDescription: "Complete systems for every need.",
    searchRule: "Letters, numbers and spaces only.",
    sortBy: "Sort by:",
    featured: "Featured",
    low: "Lowest price",
    high: "Highest price",
    name: "Name A-Z",
    all: "All",
    priceNote:
      "Illustrative prices. Check current prices and availability on Newegg.",
    selection: "YOUR SELECTION",
    cartTitleOne: "SHOPPING",
    cartTitleTwo: "CART",
    clear: "Clear cart",
    estimated: "ESTIMATED TOTAL",
    demo: "Demo shopping cart. No payments are processed.",
    visit: "VISIT NEWEGG",
    search: "Search computers...",
    loading: "Loading computers...",
    available: "computers with available images",
    unavailable: "No computers with available images.",
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
// ESTADO Y UTILIDADES
// ==========================================

const $ = id => document.getElementById(id);

let idioma = "es";
let categoriaActual = "Todos";
let ordenActual = "default";
let carrito = [];
let renderActual = 0;

const catalogo = $("catalogo");
const cartLink = $("cartLink");
const raceGroup = $("raceGroup");

const cacheImagenes = new Map();

function t(clave) {
  return traducciones[idioma]?.[clave] ?? "";
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

// ==========================================
// CAMBIAR IDIOMA
// ==========================================

function cambiarIdioma(nuevoIdioma) {
  if (!traducciones[nuevoIdioma]) return;

  idioma = nuevoIdioma;
  document.documentElement.lang = idioma;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const texto = t(elemento.dataset.i18n);
    if (texto) elemento.textContent = texto;
  });

  $("buscar").placeholder = t("search");
  $("buscar").setAttribute("aria-label", t("search"));

  $("langES").classList.toggle("active", idioma === "es");
  $("langEN").classList.toggle("active", idioma === "en");

  $("langES").setAttribute(
    "aria-pressed", String(idioma === "es")
  );
  $("langEN").setAttribute(
    "aria-pressed", String(idioma === "en")
  );

  $("closeImage").setAttribute("aria-label", t("close"));
  cartLink.setAttribute("aria-label", t("viewCart"));

  const pausada = $("pcInteractive").classList.contains("paused");
  $("pcInteractive").setAttribute(
    "aria-label", t(pausada ? "resume" : "pause")
  );

  mostrarProductos();
  actualizarCarrito();
}

$("langES").addEventListener("click", () => cambiarIdioma("es"));
$("langEN").addEventListener("click", () => cambiarIdioma("en"));

// ==========================================
// BUSCADOR SIN SIMBOLOS ESPECIALES
// ==========================================

function limpiarBusqueda(texto) {
  return texto
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s{2,}/g, " ")
    .trimStart();
}

function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

$("buscar").addEventListener("input", evento => {
  const input = evento.target;
  const limpio = limpiarBusqueda(input.value);

  if (input.value !== limpio) {
    input.value = limpio;
  }

  mostrarProductos();
});

// ==========================================
// IMAGENES
// ==========================================

function verificarImagen(url) {
  if (!url || !url.startsWith("https://")) {
    return Promise.resolve(false);
  }

  if (cacheImagenes.has(url)) {
    return cacheImagenes.get(url);
  }

  const promesa = new Promise(resolve => {
    const img = new Image();

    img.onload = () =>
      resolve(img.naturalWidth > 0 && img.naturalHeight > 0);

    img.onerror = () => resolve(false);

    img.src = url;
  });

  cacheImagenes.set(url, promesa);
  return promesa;
}

// ==========================================
// CATALOGO
// ==========================================

async function mostrarProductos() {
  const turno = ++renderActual;
  const busqueda = normalizar($("buscar").value.trim());

  let visibles = productos.filter(p => {
    const categoriaCorrecta =
      categoriaActual === "Todos" ||
      p.categoria === categoriaActual;

    const texto = normalizar(
      [p.nombre, p.categoria, p.es, p.en].join(" ")
    );

    return categoriaCorrecta && texto.includes(busqueda);
  });

  if (ordenActual === "asc") {
    visibles.sort((a, b) => a.precio - b.precio);
  } else if (ordenActual === "desc") {
    visibles.sort((a, b) => b.precio - a.precio);
  } else if (ordenActual === "name") {
    visibles.sort((a, b) =>
      a.nombre.localeCompare(b.nombre, idioma)
    );
  }

  catalogo.replaceChildren();
  $("resultCount").textContent = t("loading");

  const resultados = await Promise.all(
    visibles.map(async p => ({
      producto: p,
      disponible: await verificarImagen(p.imagen)
    }))
  );

  if (turno !== renderActual) return;

  resultados
    .filter(item => item.disponible)
    .forEach(item => crearTarjeta(item.producto));

  actualizarContador();
}

function crearTarjeta(p) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "producto";

  tarjeta.innerHTML = `
    <span class="product-category">
      ${p.categoria === "Movil" ? t("mobile") : p.categoria}
    </span>

    <button class="product-image" type="button"
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
        <button class="add-btn" type="button">
          ${t("add")}
        </button>

        <a href="${p.enlace}" class="external-btn"
           target="_blank" rel="noopener noreferrer"
           aria-label="${t("viewNewegg")}"
           title="${t("viewNewegg")}">↗</a>
      </div>
    </div>
  `;

  tarjeta.querySelector("img").addEventListener("error", () => {
    tarjeta.remove();
    cacheImagenes.delete(p.imagen);
    actualizarContador();
  });

  tarjeta.querySelector(".product-image")
    .addEventListener("click", () => abrirImagen(p));

  tarjeta.querySelector(".add-btn")
    .addEventListener("click", evento => {
      agregarCarrito(p.id, evento.currentTarget);
    });

  catalogo.appendChild(tarjeta);
}

function actualizarContador() {
  const cantidad = catalogo.querySelectorAll(".producto").length;

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
// FILTROS Y ORDENAMIENTO
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
// ANIMACION: BOLSA REDONDA EN ARCO
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
    .querySelector(".cart-svg").getBoundingClientRect();

  const tamaño = 31;

  const x0 = origen.left + origen.width / 2 - tamaño / 2;
  const y0 = origen.top + origen.height / 2 - tamaño / 2;

  const x1 = destino.left + destino.width / 2 - tamaño / 2;
  const y1 = destino.top + destino.height * .45 - tamaño / 2;

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
  }).finished.then(() => {
    bolsa.remove();
    impactoCarrito();
  }).catch(() => {
    bolsa.remove();
  });
}

// ==========================================
// CARRITO DE COMPRAS
// ==========================================

function agregarCarrito(id, boton) {
  const p = productos.find(item => item.id === id);
  if (!p) return;

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
    const p = productos.find(producto => producto.id === item.id);
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

$("vaciarCarrito").addEventListener("click", () => {
  carrito = [];
  actualizarCarrito();
});

// ==========================================
// CARRITO + MUÑECO: 6 SEGUNDOS
// REPETICION CADA 25 SEGUNDOS
// ==========================================

const INTERVALO_CARRITO = 25000;

let intervaloCarrito = null;
let carritoEnVista = false;

function correrCarritoAnimado() {
  if (document.hidden || movimientoReducido()) return;

  // Ajustar el recorrido al ancho real del carril.
  const pista = document.querySelector(".cart-racetrack");
  raceGroup.style.setProperty(
    "--race-distance",
    `${pista.clientWidth + 25}px`
  );

  // Reiniciar ambos simultaneamente,
  // pues comparten el mismo contenedor.
  raceGroup.classList.remove("run");
  void raceGroup.offsetWidth;
  raceGroup.classList.add("run");
}

raceGroup.addEventListener("animationend", evento => {
  if (evento.animationName === "raceTogether") {
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

  if (!carritoEnVista || document.hidden ||
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

      if (carritoEnVista) {
        iniciarCarrera();
      } else {
        detenerCarrera();
      }
    });
  },
  { threshold: .3 }
);

observadorCarrito.observe($("carrito"));

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    detenerCarrera();
  } else if (carritoEnVista) {
    iniciarCarrera();
  }
});

// ==========================================
// PC MINIMALISTA INTERACTIVA
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
cambiarIdioma("es");
