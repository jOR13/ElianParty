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
  let cantidadAdultos = document.getElementById("cantidad").value;
  let cantidadNinos = document.getElementById("cantidadNinos").value;

  if (nombre == "" || cantidadAdultos == "" || cantidadNinos == "") {
    alert("Por favor, complete todos los campos");
    return false;
  }

  if (parseInt(cantidadAdultos) + parseInt(cantidadNinos) > 4) {
    alert("Lo sentimos, solo puedes asistir con un máximo de 4 personas");
    return false;
  }

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
  let url = "https://api.whatsapp.com/send?phone=+526566763854&text=" + message;
  window.open(url, "_blank");
}
