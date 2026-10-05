document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("miFormulario");
    if (formulario) {
        formulario.addEventListener("submit", function(event) {
            event.preventDefault();
            const nombre = document.getElementById("nombre").value;
            if (nombre.trim() === "") {
                alert("Por favor, ingresa tu nombre.");
            } else {
                alert("¡Gracias " + nombre + "! Formulario enviado correctamente.");
                formulario.reset();
            }
        });
    }
});