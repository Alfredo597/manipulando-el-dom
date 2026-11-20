// Página: Perfil profesional
// Aquí se muestra: modificar estilos CSS con element.style

const texto = document.getElementById("textoPerfil");
let tamano = 16;

document.getElementById("btnMas").addEventListener("click", function () {
  tamano = tamano + 2;
  texto.style.fontSize = tamano + "px";
});

document.getElementById("btnMenos").addEventListener("click", function () {
  if (tamano > 12) {
    tamano = tamano - 2;
    texto.style.fontSize = tamano + "px";
  }
});

document.getElementById("btnColor").addEventListener("click", function () {
  texto.style.color = "#1e4078";
  texto.style.backgroundColor = "#e8f1fb";
  texto.style.padding = "15px";
  texto.style.borderRadius = "10px";
});

document.getElementById("btnRestaurar").addEventListener("click", function () {
  tamano = 16;
  texto.style.fontSize = "16px";
  texto.style.color = "";
  texto.style.backgroundColor = "";
  texto.style.padding = "0";
});

// Cambiar el color de las barras de habilidades
const barras = document.querySelectorAll(".progress-bar");
document.getElementById("btnBarras").addEventListener("click", function () {
  for (let i = 0; i < barras.length; i++) {
    barras[i].style.backgroundColor = "#6f42c1";
    barras[i].style.fontWeight = "bold";
  }
});
