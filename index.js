window.addEventListener("load", () => {
    const icons = document.querySelectorAll(".batman-icon");
    const iconCount = icons.length;
    const docHeight = document.documentElement.clientHeight;

    for (let i = 0; i < iconCount; i++) {
        let icon = icons[i];
        let delay = Math.random() * 5;
        let xPos = Math.random() * 100;
        let yPos = Math.random() * docHeight + 50;

        icon.style.left = xPos + "%";
        icon.style.top = yPos + "px";
        icon.style.animationDelay = delay + "s";
    }
});

function confirmarAsistencia() {
    let nombre = document.getElementById("name").value;
    let cantidad = document.getElementById("cantidad").value;
    if (isNaN(cantidad)) {
        alert(
            "Por favor, ingresa un número válido para la cantidad de personas que asistirán a la fiesta."
        );
    } else if (cantidad > 3) {
        alert(
            "Por favor, ingresa un número menor o igual a 3 para la cantidad de personas que asistirán a la fiesta."
        );
    } else {
        if (nombre == "" || cantidad == "") {
            alert(
                "Por favor, ingresa tu nombre y la cantidad de personas que asistirán a la fiesta."
            );
        } else {
            alert(
                "¡Gracias por confirmar tu asistencia, " +
                nombre +
                "! Nos vemos el 15 de abril a las 16:00 hrs."
            );
            let message =
                "Hola Elián, me gustaría confirmar mi asistencia a tu fiesta de cumpleaños. Mi nombre es " +
                nombre +
                " y asistiré con " +
                cantidad +
                " persona(s).";
            let url =
                "https://api.whatsapp.com/send?phone=+526566763854&text=" + message;
            window.open(url, "_blank");
        }
    }
}
