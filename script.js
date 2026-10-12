/* Integrante C: funcionalidades */
/* ============================================================
   SISTEMA DE ESTUDIANTES - script.js
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

  /* 1) MOSTRAR / OCULTAR INFORMACIÓN */
  const btnInfo = document.getElementById("btnInfo");
  const infoExtra = document.getElementById("infoExtra");

  if (btnInfo) {
    btnInfo.addEventListener("click", function () {
      infoExtra.classList.toggle("oculto");
      btnInfo.textContent = infoExtra.classList.contains("oculto")
        ? "Ver más información"
        : "Ver menos";
    });
  }

  /* 2) VALIDACIÓN Y REGISTRO DEL FORMULARIO */
  const formulario = document.getElementById("formEstudiante");

  if (formulario) {

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const correo = document.getElementById("correo");
    const carrera = document.getElementById("carrera");

    const errorNombre = document.getElementById("errorNombre");
    const errorApellido = document.getElementById("errorApellido");
    const errorCorreo = document.getElementById("errorCorreo");
    const errorCarrera = document.getElementById("errorCarrera");

    const respuesta = document.getElementById("respuesta");
    const cuerpoTabla = document.getElementById("cuerpoTabla");
    const sinEstudiantes = document.getElementById("sinEstudiantes");

    const REGEX_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function limpiarErrores() {
      errorNombre.textContent = "";
      errorApellido.textContent = "";
      errorCorreo.textContent = "";
      errorCarrera.textContent = "";
      respuesta.textContent = "";
      respuesta.classList.remove("exito");
    }

    formulario.addEventListener("submit", function (event) {

      event.preventDefault();
      limpiarErrores();

      let esValido = true;

      if (nombre.value.trim().length < 2) {
        errorNombre.textContent = "Ingresa un nombre válido (mínimo 2 caracteres).";
        esValido = false;
      }

      if (apellido.value.trim().length < 2) {
        errorApellido.textContent = "Ingresa un apellido válido (mínimo 2 caracteres).";
        esValido = false;
      }

      if (!REGEX_CORREO.test(correo.value.trim())) {
        errorCorreo.textContent = "Ingresa un correo electrónico válido.";
        esValido = false;
      }

      if (carrera.value === "") {
        errorCarrera.textContent = "Selecciona una carrera.";
        esValido = false;
      }

      if (esValido) {

        sinEstudiantes.classList.add("oculto");

        const fila = document.createElement("tr");
        fila.innerHTML =
          "<td>" + nombre.value.trim() + "</td>" +
          "<td>" + apellido.value.trim() + "</td>" +
          "<td>" + correo.value.trim() + "</td>" +
          "<td>" + carrera.value + "</td>";

        cuerpoTabla.appendChild(fila);

        respuesta.textContent =
          "¡Estudiante registrado correctamente, " +
          nombre.value.trim() + " " + apellido.value.trim() + "!";
        respuesta.classList.add("exito");

        formulario.reset();

      } else {
        respuesta.textContent = "Revisa los campos marcados en rojo.";
      }

    });

  }

  console.log("✅ Sistema de Estudiantes - script.js cargado correctamente");
});