var slideIndex = 1;
var slides = document.getElementsByClassName("slide");
var timer;

// Iniciar o slideshow
mostrarSlide(slideIndex);

// Função para mudar o slide
function mudarSlide(n) {
  clearTimeout(timer);
  mostrarSlide(slideIndex += n);
}

// Função para mostrar o slide atual
function mostrarSlide(n) {
  // Reiniciar o índice se for maior que o número de slides
  if (n > slides.length) {
    slideIndex = 1;
  }
  // Voltar ao último slide se for menor que 1
  if (n < 1) {
    slideIndex = slides.length;
  }
  // Esconder todos os slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("fade");
  }
  // Mostrar o slide atual
  slides[slideIndex-1].classList.add("fade");
  // Definir um timer para mudar o slide automaticamente depois de 5 segundos
  timer = setTimeout(function() {
    mudarSlide(1);
  }, 7000);
}

//Script navbar

