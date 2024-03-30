let numero = 0;
let numeros = document.getElementById("numeros");
let tiempoRestante = 15; // Tiempo inicial del temporizador en segundos

function ContadordeClic() {
    // Iniciar el temporizador solo cuando el número de clics sea 0 (inicio del juego)
    if (numero === 0) {
        iniciarTemporizador();
    }
    numero++;
    numeros.textContent = numero;
}

function iniciarTemporizador() {
    // Actualizar el contador cada segundo
    let intervalo = setInterval(function() {
        tiempoRestante--;
        // Mostrar el tiempo restante en la página
        document.getElementById("tiempo").textContent = tiempoRestante;
        // Verificar si el tiempo ha llegado a cero
        if (tiempoRestante <= 0) {
            clearInterval(intervalo); // Detener el intervalo
            // Mostrar el mensaje de tiempo finalizado con la cantidad de clics
            document.getElementById("mensajeFinal").textContent = "Tiempo finalizado. Clics realizados: " + numero;
            // Desactivar el botón de clic
            document.getElementById("clickButton").disabled = true;
        }
    }, 1000); // Ejecutar cada segundo (1000 milisegundos)
}


