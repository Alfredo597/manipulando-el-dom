// Página: Proyectos
// Aquí se muestra: consultar atributos data-* y filtrar proyectos

const botones = document.querySelectorAll(".filtro");
const proyectos = document.querySelectorAll(".proyecto-col");

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    const categoria = boton.getAttribute("data-filtro");

    proyectos.forEach(function (p) {
      const categoriaProyecto = p.getAttribute("data-categoria");

      if (categoria === "todos" || categoria === categoriaProyecto) {
        p.classList.remove("oculto");
      } else {
        p.classList.add("oculto");
      }
    });
  });
});
