document.addEventListener("DOMContentLoaded", function() {
    const saludoBtn = document.getElementById("saludoBtn");
    if (saludoBtn) {
        saludoBtn.addEventListener("click", function() {
            alert("¡Hola! Bienvenido a la página principal.");
        });
    }
});
