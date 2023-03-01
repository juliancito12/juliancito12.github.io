// Añadir evento de click a cada botón de "Mostrar descripción"
var toggleButtons = document.querySelectorAll(".toggle-description");
toggleButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Cambiar el texto del botón y mostrar/ocultar la descripción correspondiente
    var description = button.nextElementSibling;
    if (description.classList.contains("hidden")) {
      description.classList.remove("hidden");
      button.textContent = "Ocultar descripción";
    } else {
      description.classList.add("hidden");
      button.textContent = "Mostrar descripción";
    }
  });
});