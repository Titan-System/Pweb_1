document.addEventListener("DOMContentLoaded", () => {
    const btnCargarMas = document.querySelector(".cargar-mas button");

    btnCargarMas.addEventListener("click", () => {
        alert("Acceso denegado: no hay productos nuevos disponibles.");
    });
});

