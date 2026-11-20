// Código común a todas las páginas: modo oscuro con classList

const btnModo = document.getElementById("btnModo");

btnModo.addEventListener("click", function () {
  // toggle agrega la clase si no existe y la quita si ya existe
  document.body.classList.toggle("modo-oscuro");

  if (document.body.classList.contains("modo-oscuro")) {
    btnModo.textContent = "Modo claro";
  } else {
    btnModo.textContent = "Modo oscuro";
  }
});
