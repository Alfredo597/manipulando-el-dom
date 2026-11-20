// Página: Datos personales
// Aquí se muestra: cambiar contenido y consultar/modificar atributos

// ---------- 1. CAMBIAR CONTENIDO ----------
const estado = document.getElementById("estado");
const btnEstado = document.getElementById("btnEstado");
let disponible = true;

btnEstado.addEventListener("click", function () {
  disponible = !disponible;

  if (disponible) {
    estado.textContent = "Disponible para nuevos proyectos";
    estado.classList.remove("bg-secondary");
    estado.classList.add("bg-success");
  } else {
    estado.textContent = "Ocupado con la universidad";
    estado.classList.remove("bg-success");
    estado.classList.add("bg-secondary");
  }
});

// innerHTML permite cambiar el contenido con etiquetas HTML
const btnLema = document.getElementById("btnLema");
btnLema.addEventListener("click", function () {
  document.getElementById("lema").innerHTML =
    "Me gusta <strong>aprender</strong> cosas nuevas y <em>cumplir mis metas</em>.";
});

// ---------- 2. CONSULTAR Y MODIFICAR ATRIBUTOS ----------
const foto = document.getElementById("fotoPerfil");
const infoFoto = document.getElementById("infoFoto");
const btnFoto = document.getElementById("btnFoto");

btnFoto.addEventListener("click", function () {
  // consultar el atributo actual
  const rutaActual = foto.getAttribute("src");

  // modificar los atributos src y alt
  if (rutaActual === "img/foto1.jpg") {
    foto.setAttribute("src", "img/foto2.jpg");
    foto.setAttribute("alt", "Fotografía de Deivy Perez en blanco y negro");
  } else {
    foto.setAttribute("src", "img/foto1.jpg");
    foto.setAttribute("alt", "Fotografía de Deivy Perez");
  }

  infoFoto.textContent = "src actual: " + foto.getAttribute("src");
});

// hasAttribute y removeAttribute
const correo = document.getElementById("enlaceCorreo");
document.getElementById("btnCorreo").addEventListener("click", function () {
  if (correo.hasAttribute("href")) {
    correo.removeAttribute("href");
    correo.textContent = "Enlace desactivado";
  }
});
