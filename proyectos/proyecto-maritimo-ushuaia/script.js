alert("¡JavaScript funciona correctamente!");const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    alert("¡Gracias! Tu consulta fue registrada correctamente.");

    formulario.reset();
});