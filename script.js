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
  {
    id: 4,
    nombre: "MSI Gaming Laptop RTX 4060",
    categoria: "Laptop",
    precio: 1499.00,
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
    precio: 2299.00,
    es: "Portatil para gaming y creacion de contenido.",
    en: "Laptop for gaming and content creation.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/34-156-737-01.jpg",
    enlace: "https://www.newegg.com/p/N82E16834156737"
  },
  {
    id: 7,
    nombre: "Samsung Galaxy A17 4G",
    categoria: "Movil",
    precio: 194.99,
    es: "Smartphone Samsung desbloqueado.",
    en: "Unlocked Samsung smartphone.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/ABPXS2512020MIWLS9A.jpg",
    enlace: "https://www.newegg.com/p/23B-0002-01ZV3"
  },
  {
    id: 8,
    nombre: "Samsung Galaxy S25 256GB",
    categoria: "Movil",
    precio: 938.25,
    es: "Smartphone Samsung de gama alta.",
    en: "High-end Samsung smartphone.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/A24GD2502110EEKAR23.jpg",
    enlace: "https://www.newegg.com/p/0V4-000B-01S27"
  },
  {
    id: 9,
    nombre: "Samsung Galaxy A17 5G",
    categoria: "Movil",
    precio: 279.99,
    es: "Smartphone con conectividad 5G.",
    en: "Smartphone with 5G connectivity.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/23B-0002-01YD6-01.jpg",
    enlace: "https://www.newegg.com/p/23B-0002-01YD6"
  },
  {
    id: 10,
    nombre: "Lenovo ThinkStation P3 Tower",
    categoria: "Workstation",
    precio: 839.00,
    es: "Estacion de trabajo profesional.",
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
    precio: 1089.00,
    es: "Workstation HP de formato compacto.",
    en: "Compact HP professional workstation.",
    imagen: "https://c1.neweggimages.com/productimage/nb640/B0GJD2602050NNQ8U85.jpg",
    enlace: "https://www.newegg.com/p/1VK-001E-4UK47"
  }
];

const traducciones = {
  es: {
    home: "Inicio",
    products: "Equipos",
    cart: "Carrito",
    power: "POTENCIA.",
    precision: "PRECISION.",
    speed: "VELOCIDAD.",
    heroText: "Encuentra tu proxima computadora. Explora desktops, laptops, moviles y estaciones de trabajo.",
    explore: "EXPLORAR EQUIPOS",
    viewCart: "VER CARRITO",
    listed: "EQUIPOS REGISTRADOS",
    categories: "CATEGORIAS",
    mobile: "Movil",
    catalogLabel: "CATALOGO DE EQUIPOS",
    our: "NUESTROS",
    equipment: "EQUIPOS",
    catalogDescription: "Equipos completos para cada necesidad.",
    sortBy: "Ordenar por:",
    featured: "Destacados",
    low: "Menor precio",
    high: "Mayor precio",
    name: "Nombre A-Z",
    all: "Todos",
    priceNote: "Los precios son ilustrativos. Consulta precios reales y disponibilidad en Newegg.",
    selection: "TU SELECCION",
    cartTitleOne: "CARRITO DE",
    cartTitleTwo: "COMPRAS",
    clear: "Vaciar carrito",
    estimated: "TOTAL ESTIMADO",
    demo: "Carrito de demostracion. No procesa pagos.",
    visit: "VISITAR NEWEGG",
    search: "Buscar equipos...",
    searchRule: "Solo letras, numeros y espacios.",
    loading: "Cargando equipos...",
    available: "equipos con imagen disponible",
    unavailable: "No hay equipos con imagen disponible.",
    sample: "Precio ilustrativo",
    add: "+ Agregar al carrito",
    remove: "Quitar",
    empty: "Tu carrito esta vacio.",
    viewNewegg: "Ver en Newegg",
    zoom: "Ver imagen completa",
    close: "Cerrar",
    pause: "Pausar animacion",
    resume: "Reanudar animacion"
  },
  en: {
    home: "Home",
    products: "Computers",
    cart: "Cart",
    power: "POWER.",
    precision: "PRECISION.",
    speed: "SPEED.",
    heroText: "Find your next computer. Explore desktops, laptops, mobile devices and professional workstations.",
    explore: "EXPLORE COMPUTERS",
    viewCart: "VIEW CART",
    listed: "LISTED DEVICES",
    categories: "CATEGORIES",
    mobile: "Mobile",
    catalogLabel: "COMPUTER CATALOG",
    our: "OUR",
    equipment: "COMPUTERS",
    catalogDescription: "Complete systems for every need.",
    sortBy: "Sort by:",
    featured: "Featured",
    low: "Lowest price",
    high: "Highest price",
    name: "Name A-Z",
    all: "All",
    priceNote: "Prices are illustrative. Check real prices and availability on Newegg.",
    selection: "YOUR SELECTION",
    cartTitleOne: "SHOPPING",
    cartTitleTwo: "CART",
    clear: "Clear cart",
    estimated: "ESTIMATED TOTAL",
    demo: "Demo shopping cart. No payments are processed.",
    visit: "VISIT NEWEGG",
    search: "Search computers...",
    searchRule: "Letters, numbers and spaces only.",
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

const $ = (id) => document.getElementById(id);

let idioma = "es";
let categoriaActual = "Todos";
let ordenActual = "default";
let carrito = [];
let renderActual = 0;

const catalogo = $("catalogo");
const cartLink = $("cartLink");
const runningCart = $("runningCart");
const runningCharacter = $("runningCharacter");
const cacheImagenes = new Map();

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
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* IDIOMA */

function cambiarIdioma(nuevoIdioma) {
  idioma = nuevoIdioma;
  document.documentElement.lang = idioma;

  document.querySelectorAll("[data-i18n]").forEach((elemento) => {
    elemento.textContent = t(elemento.dataset.i18n);
  });

  $("buscar").placeholder = t("search");
  $("buscar").setAttribute("aria-label", t("search"));

  $("langES").classList.toggle("active", idioma === "es");
  $("langEN").classList.toggle("active", idioma === "en");

  $("langES").setAttribute("aria-pressed", String(idioma === "es"));
  $("langEN").setAttribute("aria-pressed", String(idioma === "en"));

  $("closeImage").setAttribute("aria-label", t("close"));
  cartLink.setAttribute("aria-label", t("viewCart"));

  const pausada = $("pcInteractive").classList.contains("paused");
  $("pcInteractive").setAttribute("aria-label", t(pausada ? "resume" : "pause"));

  mostrarProductos();
  actualizarCarrito();
}

$("langES").addEventListener("click", () => cambiarIdioma("es"));
$("langEN").addEventListener("click", () => cambiarIdioma("en"));

/* BLOQUEAR CARACTERES ESPECIALES EN EL BUSCADOR */

function limpiarTextoBusqueda(texto) {
  return texto
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .replace(/\s{2,}/g, " ")
    .trimStart();
}

$("buscar").addEventListener("input", (evento) => {
  const limpio = limpiarTextoBusqueda(evento.target.value);
  if (evento.target.value !== limpio) {
    evento.target.value = limpio;
  }
  mostrarProductos();
});

$("buscar").addEventListener("paste", (evento) => {
  evento.preventDefault();
  const texto = (evento.clipboardData || window.clipboardData).getData("text");
  const limpio = limpiarTextoBusqueda(texto);
  const input = evento.target;
  const inicio = input.selectionStart ?? input.value.length;
  const fin = input.selectionEnd ?? input.value.length;
  input.setRangeText(limpio, inicio, fin, "end");
  input.value = limpiarTextoBusqueda(input.value);
  mostrarProductos();
});

/* IMAGENES */

function verificarImagen(url) {
  if (!url || !url.startsWith("https://")) {
    return Promise.resolve(false);
  }

  if (cacheImagenes.has(url)) {
    return cacheImagenes.get(url);
  }

  const comprobacion = new Promise((resolve) => {
    const imagen = new Image();

    imagen.onload = () => {
      resolve(imagen.naturalWidth > 0 && imagen.naturalHeight > 0);
    };

    imagen.onerror = () => {
      resolve(false);
    };

    imagen.src = url;
  });

  cacheImagenes.set(url, comprobacion);
  return comprobacion;
}

/* CATALOGO */

async function mostrarProductos() {
  const turno = ++renderActual;
  const busqueda = limpiarTextoBusqueda($("buscar").value).toLowerCase().trim();

  let visibles = productos.filter((p) => {
    const categoriaValida =
      categoriaActual === "Todos" || p.categoria === categoriaActual;

    const texto = (
      p.nombre + " " +
      p.categoria + " " +
      p.es + " " +
      p.en
    ).toLowerCase();

    return categoriaValida && texto.includes(busqueda);
  });

  if (ordenActual === "asc") {
    visibles.sort((a, b) => a.precio - b.precio);
  } else if (ordenActual === "desc") {
    visibles.sort((a, b) => b.precio - a.precio);
  } else if (ordenActual === "name") {
    visibles.sort((a, b) => a.nombre.localeCompare(b.nombre, idioma));
  }

  catalogo.replaceChildren();
  $("resultCount").textContent = t("loading");

  const resultados = await Promise.all(
    visibles.map(async (p) => ({
      producto: p,
      valida: await verificarImagen(p.imagen)
    }))
  );

  if (turno !== renderActual) return;

  resultados
    .filter((resultado) => resultado.valida)
    .forEach((resultado) => crearTarjeta(resultado.producto));

  actualizarContador();
}

function crearTarjeta(p) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "producto";

  tarjeta.innerHTML = `
    <span class="product-category">
      ${p.categoria === "Movil" ? t("mobile") : p.categoria}
    </span>

    <button class="product-image" type="button" aria-label="${t("zoom")}: ${p.nombre}">
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
        <button class="add-btn" type="button">${t("add")}</button>

        <a
          href="${p.enlace}"
          class="external-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="${t("viewNewegg")}"
          title="${t("viewNewegg")}"
        >↗</a>
      </div>
    </div>
  `;

  const imagen = tarjeta.querySelector("img");

  imagen.addEventListener("error", () => {
    tarjeta.remove();
    cacheImagenes.delete(p.imagen);
    actualizarContador();
  });

  tarjeta.querySelector(".product-image").addEventListener("click", () => {
    abrirImagen(p);
  });

  tarjeta.querySelector(".add-btn").addEventListener("click", (evento) => {
    agregarCarrito(p.id, evento.currentTarget);
  });

  catalogo.appendChild(tarjeta);
}

function actualizarContador() {
  const cantidad = catalogo.querySelectorAll(".producto").length;
  $("resultCount").textContent = `${cantidad} ${t("available")}`;

  if (cantidad === 0) {
    const aviso = document.createElement("div");
    aviso.className = "empty-results";
    aviso.textContent = t("unavailable");
    catalogo.replaceChildren(aviso);
  }
}

/* VISOR */

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
  if (visor.open) {
    visor.close();
  }
}

$("closeImage").addEventListener("click", cerrarImagen);

visor.addEventListener("click", (evento) => {
  if (evento.target === visor) {
    cerrarImagen();
  }
});

visor.addEventListener("close", () => {
  $("largeImage").removeAttribute("src");
});

/* FILTROS */

function filtrar(categoria) {
  categoriaActual = categoria;

  document.querySelectorAll("#filtros button").forEach((boton) => {
    const activo = boton.dataset.category === categoria;
    boton.classList.toggle("active", activo);
    boton.setAttribute("aria-pressed", String(activo));
  });

  mostrarProductos();
}

$("filtros").addEventListener("click", (evento) => {
  const boton = evento.target.closest("[data-category]");
  if (boton) {
    filtrar(boton.dataset.category);
  }
});

/* ORDENAR */

$("sortButtons").addEventListener("click", (evento) => {
  const boton = evento.target.closest("[data-sort]");
  if (!boton) return;

  ordenActual = boton.dataset.sort;

  document.querySelectorAll("#sortButtons button").forEach((item) => {
    const activo = item === boton;
    item.classList.toggle("active", activo);
    item.setAttribute("aria-pressed", String(activo));
  });

  mostrarProductos();
});

/* IMPACTO CARRITO */

function impactoCarrito() {
  cartLink.classList.remove("cart-impact");
  void cartLink.offsetWidth;
  cartLink.classList.add("cart-impact");
}

cartLink.addEventListener("animationend", (evento) => {
  if (evento.animationName === "cartImpact") {
    cartLink.classList.remove("cart-impact");
  }
});

/* BOLSA EN ARCO */

function lanzarBolsa(botonOrigen) {
  if (movimientoReducido() || !botonOrigen) {
    impactoCarrito();
    return;
  }

  const plantilla = $("shoppingBagTemplate");
  const bolsa = document.createElement("div");
  bolsa.className = "flying-bag";
  bolsa.appendChild(plantilla.content.firstElementChild.cloneNode(true));
  document.body.appendChild(bolsa);

  const origen = botonOrigen.getBoundingClientRect();
  const destino = cartLink.querySelector(".cart-svg").getBoundingClientRect();
  const tamano = 31;

  const x0 = origen.left + origen.width / 2 - tamano / 2;
  const y0 = origen.top + origen.height / 2 - tamano / 2;
  const x1 = destino.left + destino.width / 2 - tamano / 2;
  const y1 = destino.top + destino.height * .45 - tamano / 2;

  const altura = Math.min(230, Math.max(65, Math.abs(x1 - x0) * .32));
  const puntos = [];

  for (let i = 0; i <= 30; i++) {
    const progreso = i / 30;
    const x = x0 + (x1 - x0) * progreso;
    const y = y0 + (y1 - y0) * progreso - 4 * altura * progreso * (1 - progreso);
    const escala = 1 - .5 * progreso;
    const rotacion = -22 + 45 * progreso;

    let opacidad = 1;
    if (progreso < .06) opacidad = progreso / .06;
    if (progreso > .93) opacidad = (1 - progreso) / .07;

    puntos.push({
      offset: progreso,
      transform: `translate(${x}px, ${y}px) rotate(${rotacion}deg) scale(${escala})`,
      opacity: opacidad
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
    .catch(() => {
      bolsa.remove();
    });
}

/* CARRITO DE COMPRAS */

function agregarCarrito(id, boton) {
  const producto = productos.find((p) => p.id === id);
  if (!producto) return;

  const existente = carrito.find((item) => item.id === id);

  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({ id, cantidad: 1 });
  }

  actualizarCarrito();
  lanzarBolsa(boton);
}

function eliminarProducto(id) {
  carrito = carrito.filter((item) => item.id !== id);
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

  carrito.forEach((item) => {
    const p = productos.find((producto) => producto.id === item.id);
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
        <button class="remove-btn" type="button">${t("remove")}</button>
      </div>
    `;

    fila.querySelector(".remove-btn").addEventListener("click", () => {
      eliminarProducto(p.id);
    });

    lista.appendChild(fila);
  });

  $("total").textContent = dinero(total);
  $("cartCount").textContent = cantidad;
}

$("vaciarCarrito").addEventListener("click", vaciarCarrito);

/* CARRITO CORRIENDO + MUÑEQUITO */

const INTERVALO_CARRITO = 25000;
let intervaloCarrito = null;
let carritoEnVista = false;

function correrCarritoAnimado() {
  if (movimientoReducido() || document.hidden) return;

  runningCart.classList.remove("run");
  runningCharacter.classList.remove("run");

  void runningCart.offsetWidth;
  void runningCharacter.offsetWidth;

  runningCharacter.classList.add("run");
  runningCart.classList.add("run");
}

function detenerCarrera() {
  if (intervaloCarrito !== null) {
    clearInterval(intervaloCarrito);
    intervaloCarrito = null;
  }

  runningCart.classList.remove("run");
  runningCharacter.classList.remove("run");
}

function iniciarCarrera() {
  if (intervaloCarrito !== null) return;
  if (!carritoEnVista || document.hidden || movimientoReducido()) return;

  correrCarritoAnimado();

  intervaloCarrito = setInterval(() => {
    if (carritoEnVista && !document.hidden) {
      correrCarritoAnimado();
    }
  }, INTERVALO_CARRITO);
}

runningCart.addEventListener("animationend", (evento) => {
  if (evento.animationName === "raceCart") {
    runningCart.classList.remove("run");
  }
});

runningCharacter.addEventListener("animationend", (evento) => {
  if (evento.animationName === "raceRunner") {
    runningCharacter.classList.remove("run");
  }
});

const observadorCarrito = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
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

/* PC */

const pc = $("pcInteractive");

function alternarPc() {
  const pausada = pc.classList.toggle("paused");
  pc.setAttribute("aria-pressed", String(pausada));
  pc.setAttribute("aria-label", t(pausada ? "resume" : "pause"));
}

pc.addEventListener("click", alternarPc);

pc.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter" || evento.key === " ") {
    evento.preventDefault();
    alternarPc();
  }
});

/* INICIO */

$("heroCount").textContent = productos.length;
cambiarIdioma("es");
mostrarProductos();
actualizarCarrito();
