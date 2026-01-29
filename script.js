/* ===== CORAZONES FONDO ===== */
const fondo = document.querySelector(".bg-hearts");

for (let i = 0; i < 20; i++) {
  const heart = document.createElement("span");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";
  heart.style.animationDelay = Math.random() * 3 + "s";

  fondo.appendChild(heart);
}

/* ===== PANTALLAS ===== */
const pantalla1 = document.getElementById("pantalla1");
const pantalla2 = document.getElementById("pantalla2");
const pantalla3 = document.getElementById("pantalla3");

function cambiarPantalla(p) {
  pantalla1.classList.remove("activa");
  pantalla2.classList.remove("activa");
  pantalla3.classList.remove("activa");

  p.classList.add("activa");
}

/* ===== MUSICA ===== */
const music = document.getElementById("music");

/* ===== BOTONES ===== */
const btnStart = document.getElementById("btnStart");
const btnYes = document.getElementById("btnYes");
const btnNo = document.getElementById("btnNo");
/* ===== CARTA ===== */
const textoCarta = document.getElementById("textoCarta");

const cartaFinal = `
Valeria no pensaba en enviarte esto por ya sabes amigos pero se me surgio la idea de porque no intentarlo pienso en una posible respuesta pero espero no sea esa bueno ya que aceptaste jsadjasjd ahora tendras que soportarme a mi y los regalos o bueno 2 regalos que te dare son sorpresa bueno queria decirte aqui que te quiero mucho demasiado excesivamente porque te preguntaras por que tu siempres estas para apoyarme y motivarme eres muy especial en mi vida te quiero mucho enserio mi caracolito con apendicitis y posible peritonitis y eso ya no es chiste cuidate babosa sino quien va estar a mi lado :( 
te quiere mucho y algo mas que querer tu amigo de confianza el josue 
`;

/* Máquina de escribir */
function escribir(texto, elemento) {
  elemento.innerHTML = "";
  let i = 0;

  function animar() {
    if (i < texto.length) {
      elemento.innerHTML += texto.charAt(i);
      i++;
      setTimeout(animar, 40);
    }
  }

  animar();
}

/* Frases del NO */
const frases = [
  "Ño ",
  "Chi? 🥺",
  "Porfa di que sí 💖",
  "Te voy a invitar un bacardi 😭",
  "Chi? 😢",
  "Ya di que sí 💘"
];

let contador = 0;

btnNo.addEventListener("click", () => {

  // Cambiar texto dentro del botón
  btnNo.textContent = frases[contador];
  contador++;

  if (contador >= frases.length) {
    contador = 0;
  }

  // Ahora sí lo hacemos flotante SOLO después del primer toque
  btnNo.style.position = "fixed";

  // Tamaño pantalla
  const ancho = window.innerWidth;
  const alto = window.innerHeight;

  // Tamaño botón
  const botonAncho = btnNo.offsetWidth;
  const botonAlto = btnNo.offsetHeight;

  // Nueva posición aleatoria
  const nuevaX = Math.random() * (ancho - botonAncho);
  const nuevaY = Math.random() * (alto - botonAlto);

  // Aplicar movimiento
  btnNo.style.left = nuevaX + "px";
  btnNo.style.top = nuevaY + "px";
});

/* ===== EVENTOS ===== */

/* Comenzar */
btnStart.addEventListener("click", () => {
  music.play();
  cambiarPantalla(pantalla2);
});

/* NO cambia frases */
/* NO cambia el texto dentro del botón */
btnNo.addEventListener("click", () => {
  btnNo.textContent = frases[contador];
  contador++;

  if (contador >= frases.length) {
    contador = 0;
  }
});

/* SÍ pasa a carta */
btnYes.addEventListener("click", () => {
  cambiarPantalla(pantalla3);
  escribir(cartaFinal, textoCarta);
});
