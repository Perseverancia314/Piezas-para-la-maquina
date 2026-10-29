
// ==========================================
// PIEZAS PC - CATALOGO Y ANIMACIONES
// ==========================================

// Precios ilustrativos.
// Imagenes externas, sujetas a disponibilidad.

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
    precio: 1499,
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
    precio: 2299,
    descripcion: "Portátil para gaming y creación de contenido.",
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
    precio: 839,
    descripcion: "Estación de trabajo profesional.",
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
    precio: 1089,
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

const cacheImagenes = new Map();

const movimientoReducido = () =>
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

function dinero(valor) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(valor);
}

// ==========================================
// COMPROBAR IMAGENES
// ==========================================

function verificarImagen(url) {
  if (!url || !url.startsWith("https://")) {
    return Promise.resolve(false);
  }

  if (cacheImagenes.has(url)) {
    return cacheImagenes.get(url);
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

  cacheImagenes.set(url, comprobacion);
  return comprobacion;
}

// ==========================================
// MOSTRAR PRODUCTOS
// ==========================================

async function mostrarProductos() {
  const turno = ++renderActual;

  const texto = $("buscar").value
    .toLowerCase().trim();

  let visibles = productos.filter(p => {
    const coincideCategoria =
      categoriaActual === "Todos" ||
      p.categoria === categoriaActual;

    const coincideTexto =
      `${p.nombre} ${p.categoria} ${p.descripcion}`
        .toLowerCase().includes(texto);

    return coincideCategoria && coincideTexto;
  });

  const orden = $("ordenar").value;

  if (orden === "asc") {
    visibles.sort((a, b) => a.precio - b.precio);
  } else if (orden === "desc") {
    visibles.sort((a, b) => b.precio - a.precio);
  } else if (orden === "name") {
    visibles.sort((a, b) =>
      a.nombre.localeCompare(b.nombre, "es")
    );
  }

  catalogo.replaceChildren();
  $("resultCount").textContent = "Cargando equipos...";

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
    <span class="product-category">${p.categoria}</span>

    <div class="product-image">
      <img src="${p.imagen}" alt="${p.nombre}"
           loading="lazy">
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
        <button class="add-btn" type="button">
          + Agregar al carrito
        </button>

        <a href="${p.enlace}"
           class="external-btn"
           target="_blank"
           rel="noopener noreferrer"
           title="Ver en Newegg"
           aria-label="Ver en Newegg">
          ↗
        </a>
      </div>
    </div>
  `;

  tarjeta.querySelector("img")
    .addEventListener("error", () => {
      tarjeta.remove();
      cacheImagenes.delete(p.imagen);
      actualizarContador();
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
    `${cantidad} equipos con imagen disponible`;

  if (cantidad === 0) {
    catalogo.innerHTML = `
      <div class="empty-results">
        No hay equipos con imagen disponible
        en esta selección.
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
// BOLSA REDONDA LANZADA EN ARCO
// ==========================================

// El SVG se mueve sobre la pantalla completa.
// La trayectoria se calcula entre el botón
// "Agregar" y el carrito superior.

function lanzarBolsa(botonOrigen) {
  if (movimientoReducido()) {
    impactoCarrito();
    return;
  }

  const template = $("shoppingBagTemplate");

  if (!template || !botonOrigen) return;

  const bolsa = document.createElement("div");
  bolsa.className = "flying-bag";
  bolsa.appendChild(
    template.content.firstElementChild.cloneNode(true)
  );

  document.body.appendChild(bolsa);

  const inicio = botonOrigen.getBoundingClientRect();

  const destino = cartLink
    .querySelector(".cart-svg")
    .getBoundingClientRect();

  const tamano = 31;

  const x0 = inicio.left + inicio.width / 2 - tamano / 2;
  const y0 = inicio.top + inicio.height / 2 - tamano / 2;

  const x1 = destino.left + destino.width / 2 - tamano / 2;
  const y1 = destino.top + destino.height * .43
    - tamano / 2;

  const distancia = Math.abs(x1 - x0);

  // Altura del arco, proporcional a la distancia.
  const altura = Math.min(
    230,
    Math.max(75, distancia * .32)
  );

  const puntos = [];

  // Parábola: empieza en el botón,
  // sube y cae dentro del carrito.
  for (let i = 0; i <= 20; i++) {
    const t = i / 20;
    const x = x0 + (x1 - x0) * t;

    const y = y0 + (y1 - y0) * t
      - 4 * altura * t * (1 - t);

    const rotacion = -25 + t * 45;
    const escala = 1 - t * .45;

    puntos.push({
      transform:
        `translate(${x}px, ${y}px) ` +
        `rotate(${rotacion}deg) scale(${escala})`,
      opacity: t < .08 ? t / .08 :
        t > .90 ? (1 - t) / .10 : 1,
      offset: t
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

// El carrito rebota al recibir la bolsa.

function impactoCarrito() {
  cartLink.classList.remove("cart-impact");

  void cartLink.offsetWidth;

  cartLink.classList.add("cart-impact");
}

cartLink.addEventListener("animationend", e => {
  if (e.animationName === "cartImpact") {
    cartLink.classList.remove("cart-impact");
  }
});

// ==========================================
// AGREGAR AL CARRITO
// ==========================================

function agregarCarrito(id, botonOrigen) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

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
  lanzarBolsa(botonOrigen);
}

// ==========================================
// ELIMINAR Y VACIAR
// ==========================================

function eliminarProducto(id) {
  carrito = carrito.filter(item => item.id !== id);
  actualizarCarrito();
}

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
        Agrega un equipo para comenzar.
      </div>
    `;
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
        <small>
          ${item.cantidad} × ${dinero(p.precio)}
        </small>
      </div>

      <div class="cart-row-right">
        <span>${dinero(subtotal)}</span><br>
        <button class="remove-btn" type="button">
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

function correrCarrito() {
  if (movimientoReducido()) return;

  runningCart.classList.remove("run");
  void runningCart.offsetWidth;
  runningCart.classList.add("run");
}

runningCart.addEventListener("animationend", e => {
  if (e.animationName === "raceCart") {
    runningCart.classList.remove("run");
  }
});

// Repetir cuando entras nuevamente.
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

// ==========================================
// PC ANIMADA: CLIC PARA PAUSAR
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
      ? "Reanudar animación de PC"
      : "Pausar animación de PC"
  );
}

pc.addEventListener("click", alternarPc);

pc.addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    alternarPc();
  }
});

// ==========================================
// EVENTOS
// ==========================================

$("buscar").addEventListener(
  "input", mostrarProductos
);

$("ordenar").addEventListener(
  "change", mostrarProductos
);

$("filtros").addEventListener("click", e => {
  const boton = e.target.closest("[data-category]");

  if (boton) {
    filtrar(boton.dataset.category);
  }
});

$("vaciarCarrito").addEventListener(
  "click", vaciarCarrito
);

// INICIAR
mostrarProductos();
actualizarCarrito();
