let clickCookie = document.querySelector(".btn-click")
let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")
let btnReturn = document.querySelector(".btn01")
let h2Text = document.querySelector(".h222");

//texto aleatorios

let randomText = [
  "You have to love your husband",
  "Your husband is the best - just accept it",
  "You will smell your husband's farts",
  "You need to love him forever"
];

//evento sobre a imagem do cookie 

clickCookie.addEventListener('click', function() {
  toggleScreen();
  updateRandomText();
});

//evento de retorno para inicio

btnReturn.addEventListener('click', toggleScreen)

//funcao de esconder as telas

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

//funcao de criar uma selecao aleatorio dos textos na variavel

function randomIndex() {
  return Math.floor(Math.random() * randomText.length);
}

//inserir textos aleatorios na variavel H2

function updateRandomText() {
  let index = randomIndex();
  h2Text.innerText = randomText[index];
}