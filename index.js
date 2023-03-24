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

  try {
    sendDataToserver({nombre, cantidadAdultos, cantidadNinos});
  } catch (error) {
    console.log(error)
  }

  alert(
    "¡Gracias por confirmar tu asistencia, " +
      nombre +
      "! Nos vemos el 15 de abril a las 16:00 hrs."
  );
  let message =
    "Hola Elián, me gustaría confirmar mi asistencia a tu fiesta de cumpleaños. Mi nombre es " +
    nombre +  " y voy a asistir con " + cantidadAdultos + " adultos y " + cantidadNinos + " niños. ¡Gracias!";
  let url = "https://api.whatsapp.com/send?phone=+526564046677&text=" + message;
  window.open(url, "_blank");
}


function sendDataToserver(data){
console.log(data)
//  const URL = 'http://localhost:3000/api/save'
 const URL = 'https://elian-party.herokuapp.com/api/save'


  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.log(err))



}
