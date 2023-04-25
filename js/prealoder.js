$(document).ready(function() {
    // Seleccionar el elemento que se animará
    var loader = $(".loader");
  
    // Ocultar el elemento al principio
    loader.hide();
  
    // Mostrar el elemento con la animación de fade in
    loader.fadeIn("slow");
  
    // Esperar 1 segundo
    setTimeout(function() {
      // Ocultar el elemento con la animación de fade out
    loader.fadeOut("slow", function() {
        // Ocultar el elemento de forma permanente al finalizar la animación
        preloader.classList.add("hide");
      });
    }, 2000);
  });
  