document.addEventListener("DOMContentLoaded", () => {
    const btnCargarMas = document.querySelector(".cargar-mas button");

    btnCargarMas.addEventListener("click", () => {
        alert("Acceso denegado: no hay productos nuevos disponibles.");
    });

  }); 
document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.getElementById("countdown");

    const endTime = new Date().getTime() + 24 * 60 * 60 * 1000;

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance <= 0) {
            clearInterval(timer);
            countdownElement.textContent = "Oferta finalizada";
            return;
        }

        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        countdownElement.textContent = `Termina en: ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
});
