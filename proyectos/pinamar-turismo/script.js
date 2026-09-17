document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".formulario-viaje");

    const mensaje = document.createElement("div");
    mensaje.classList.add("mensaje-exito");
    formulario.appendChild(mensaje);

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nombre = document.querySelector("#nombre").value.trim();

        mensaje.textContent =
            "¡Gracias, " + nombre + "! Tu experiencia fue creada correctamente.";

        mensaje.classList.add("visible");

        formulario.reset();

        setTimeout(function () {
            mensaje.classList.remove("visible");
        }, 5000);
    });
});