let clickCookie = document.querySelector(".btn-click")
let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")
let btnReturn = document.querySelector(".btn01")
let h2Text = document.querySelector(".h222");


let randomText = [
  "You have to love your husband",
  "Your husband is the best - just accept it",
  "You will smell your husband's farts",
  "You need to love him forever"
];

clickCookie.addEventListener('click', function() {
  toggleScreen();
  updateRandomText();
});

btnReturn.addEventListener('click', toggleScreen)

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function randomIndex() {
  return Math.floor(Math.random() * randomText.length);
}

function updateRandomText() {
  let index = randomIndex();
  h2Text.innerText = randomText[index];
}