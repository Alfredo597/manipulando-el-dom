// Página: Experiencia laboral
// Aquí se muestra: agregar y quitar clases con classList

const filas = document.querySelectorAll("#tablaEmpleos tbody tr");

document.getElementById("btnResaltar").addEventListener("click", function () {
  for (let i = 0; i < filas.length; i++) {
    // buscamos la fila que dice "Actual" en la última columna
    const celdas = filas[i].querySelectorAll("td");
    if (celdas[3].textContent.trim() === "Actual") {
      filas[i].classList.add("resaltado");
    }
  }
});

document.getElementById("btnQuitar").addEventListener("click", function () {
  for (let i = 0; i < filas.length; i++) {
    filas[i].classList.remove("resaltado");
  }
});

// toggle: si tiene la clase la quita y si no la tiene la agrega
filas.forEach(function (fila) {
  fila.addEventListener("click", function () {
    fila.classList.toggle("resaltado");
  });
});

// mostrar u ocultar los logros con la clase "oculto"
document.getElementById("btnLogros").addEventListener("click", function () {
  document.getElementById("logros").classList.toggle("oculto");
});
