// Página: Referencias laborales
// Aquí se muestra: crear, insertar y eliminar elementos

const lista = document.getElementById("listaReferencias");
const formulario = document.getElementById("formReferencia");
const sinRef = document.getElementById("sinReferencias");

// ----- CREAR e INSERTAR -----
document.getElementById("btnAgregar").addEventListener("click", function () {
  const nombre = document.getElementById("nombreRef").value;
  const relacion = document.getElementById("relacionRef").value;
  const motivo = document.getElementById("motivoRef").value;

  if (nombre === "" || relacion === "" || motivo === "") {
    alert("Completa todos los campos");
    return;
  }

  // crear los elementos
  const columna = document.createElement("div");
  columna.className = "col-md-4 mb-3";

  const tarjeta = document.createElement("div");
  tarjeta.className = "card p-3";

  const titulo = document.createElement("h5");
  titulo.textContent = nombre;

  const datos = document.createElement("p");
  datos.textContent = relacion + ": " + motivo;

  const botonEliminar = document.createElement("button");
  botonEliminar.className = "btn btn-danger btn-sm btn-eliminar";
  botonEliminar.textContent = "Eliminar";

  // insertar unos dentro de otros
  tarjeta.appendChild(titulo);
  tarjeta.appendChild(datos);
  tarjeta.appendChild(botonEliminar);
  columna.appendChild(tarjeta);

  // insertar al final de la lista
  lista.appendChild(columna);
  sinRef.classList.add("oculto");

  // limpiar el formulario
  formulario.reset();
});

// ----- ELIMINAR -----
// Usamos el contenedor padre para que también funcione con las tarjetas nuevas
lista.addEventListener("click", function (evento) {
  if (evento.target.classList.contains("btn-eliminar")) {
    const columna = evento.target.closest(".col-md-4");
    columna.remove();

    // si ya no quedan tarjetas, se muestra otra vez el mensaje
    if (lista.children.length === 0) {
      sinRef.classList.remove("oculto");
    }
  }
});

// insertar un aviso justo antes de la lista con before
document.getElementById("btnDestacada").addEventListener("click", function () {
  const aviso = document.createElement("div");
  aviso.className = "alert alert-info";
  aviso.textContent = "Los datos de contacto de mis referencias están disponibles a solicitud.";
  lista.before(aviso);
  this.disabled = true;
});
