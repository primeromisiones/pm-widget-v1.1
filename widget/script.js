document.getElementById("current-time").textContent = "FUNCIONA";
document.getElementById("current-date").textContent = "MARTES";
document.getElementById("weather-temp").textCon// ===============================
// RELOJ
// ===============================

function actualizarReloj() {

    const ahora = new Date();

    document.getElementById("current-time").textContent =
        ahora.toLocaleTimeString("es-AR");

}

actualizarReloj();

setInterval(actualizarReloj, 1000);ent = "22°";
document.getElementById("weather-description").textContent = "Prueba";