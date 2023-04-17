/* Función de desplazamiento directo arriba con el botón */
window.addEventListener("scroll", function () {
  const btnToTop = document.getElementById("btn-to-top");
  if (window.pageYOffset > 500) {
    btnToTop.style.display = "block";
  } else {
    btnToTop.style.display = "none";
  }
});

document.getElementById("btn-to-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* Transición al hacer scroll en la pagina */
window.addEventListener("scroll", function () {
  const container = document.querySelector(".servicios");
  const containerPosition = container.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (containerPosition < screenPosition) {
    container.classList.add("appear");
  }
});

window.addEventListener("scroll", function () {
  const container = document.querySelector(".conocenos");
  const containerPosition = container.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (containerPosition < screenPosition) {
    container.classList.add("appear");
  }
});

window.addEventListener("scroll", function () {
  const container = document.querySelector(".contacto");
  const containerPosition = container.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (containerPosition < screenPosition) {
    container.classList.add("appear");
  }
});

/* Carrusel de imagenes */
const carruselContenedor = document.querySelector(".carrusel-contenedor");
const carruselImagenes = document.querySelectorAll(".carrusel img");
const carruselAncho = carruselContenedor.clientWidth;
const carruselLargo = carruselImagenes.length;
let posicionActual = carruselLargo;

// Clona la última imagen y la coloca al inicio
carruselContenedor.insertBefore(
  carruselImagenes[carruselLargo - 1].cloneNode(true),
  carruselImagenes[0]
);

// Función para desplazar las imágenes hacia la izquierda
function desplazarIzquierda() {
  if (posicionActual <= 0) {
    // Cuando se llega al inicio, vuelve a la última imagen
    posicionActual = carruselLargo;
    carruselContenedor.style.transform = `translateX(${
      -carruselAncho * (carruselLargo - 1)
    }px)`;
  } else {
    // Desplaza el contenedor hacia la derecha
    posicionActual--;
    carruselContenedor.style.transform = `translateX(${
      -carruselAncho * (posicionActual - 1)
    }px)`;
  }
}

// Inicia el intervalo para desplazar las imágenes automáticamente
setInterval(desplazarIzquierda, 4000);

$(document).mousemove(function (e) {
  // Calcula la posición del ratón
  const mouseX = e.pageX;
  const mouseY = e.pageY;

  // Obtiene la posición y dimensiones de la página
  const page = $("body");
  const pageX = page.width() / 2;
  const pageY = page.height() / 2;

  // Calcula la distancia entre el ratón y el centro de la página
  const dx = mouseX - pageX;
  const dy = mouseY - pageY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Calcula el factor de escala y ajusta la posición de los elementos en la página
  const scale = 1 - distance / 300;
  if (scale < 0.6) {
    scale = 0.6;
  }
  $("h1, p, img").css({
    transform:
      "scale(" +
      scale +
      ") translateX(" +
      dx / 10 +
      "px) translateY(" +
      dy / 10 +
      "px)",
  });
});
