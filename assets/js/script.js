


function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  answer.classList.toggle("show");
}

// Configuración del carrusel
const carousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'), {
  interval: false
});

// Elementos del menú
const tabs = document.querySelectorAll('.carrusel-tab');

// Evento para cambiar diapositiva al hacer clic en el menú
tabs.forEach(tab => {
  tab.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Remover clase active de todas las pestañas
    tabs.forEach(t => t.classList.remove('active'));
    
    // Añadir clase active a la pestaña actual
    this.classList.add('active');
    
    // Cambiar a la diapositiva correspondiente
    const slideTo = this.getAttribute('data-bs-slide-to');
    carousel.to(slideTo);
  });
});

// Sincronizar menú cuando cambia la diapositiva (para controles de flecha si los hay)
document.getElementById('carouselExampleIndicators').addEventListener('slid.bs.carousel', function(event) {
  const activeIndex = event.to;
  
  // Actualizar menú
  tabs.forEach((tab, index) => {
    if (index === activeIndex) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
});
