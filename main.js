let clickCookie = document.querySelector(".btn-click")
let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")

clickCookie.addEventListener('click', toggleScreen)

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}