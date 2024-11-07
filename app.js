// JavaScript básico para interacción con la página

document.getElementById("actionButton").addEventListener("click", function() {
    const messageElement = document.getElementById("message");
    messageElement.textContent = "¡Gracias por hacer clic!";
    messageElement.style.color = "#2ecc71";
});
