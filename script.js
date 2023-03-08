var toggleButtons = document.querySelectorAll(".toggle-description");
toggleButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var description = button.nextElementSibling;
    if (description.classList.contains("hidden")) {
      description.classList.remove("hidden");
      button.textContent = "Leer menos";
    } else {
      description.classList.add("hidden");
      button.textContent = "Leer más";
    }
  });
});
