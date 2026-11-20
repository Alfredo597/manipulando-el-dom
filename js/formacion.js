// Página: Formación académica
// Aquí se muestran las 3 formas de escuchar eventos

const mensaje = document.getElementById("mensajeEventos");

// FORMA 1: atributo HTML (el botón tiene onclick="eventoAtributo()")
function eventoAtributo() {
  mensaje.textContent = "Forma 1: evento escrito en el atributo onclick del HTML";
}

// FORMA 2: propiedad onclick del elemento
const boton2 = document.getElementById("boton2");
boton2.onclick = function () {
  mensaje.textContent = "Forma 2: evento asignado con la propiedad onclick";
};

// FORMA 3: addEventListener
const boton3 = document.getElementById("boton3");
boton3.addEventListener("click", function () {
  mensaje.textContent = "Forma 3: evento agregado con addEventListener";
});

// Otros tipos de eventos con addEventListener
const cuadro = document.getElementById("cuadroHover");
cuadro.addEventListener("mouseover", function () {
  cuadro.textContent = "El mouse está encima";
});
cuadro.addEventListener("mouseout", function () {
  cuadro.textContent = "Pasa el mouse por aquí";
});

const entrada = document.getElementById("entradaTexto");
entrada.addEventListener("keyup", function () {
  document.getElementById("textoEscrito").textContent = entrada.value;
});
