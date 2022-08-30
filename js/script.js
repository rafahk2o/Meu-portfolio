let toggle = document.querySelector(".toggle");
let circle = document.querySelector(".circle");
let toggle2 = document.querySelector(".toggle2");
let circle2 = document.querySelector(".circle2");
let body = document.querySelector("body");
let header = document.querySelector("header");
let menuNav = document.querySelector(".menu-nav2");
let btnMenu = document.querySelector(".bx ");
let btnX = document.querySelector(".bx-x ");
let menuNav2 = document.querySelector(".menu-nav2");

circle.addEventListener("click", () => {
  body.classList.toggle("active");
  header.classList.toggle("active");
  circle.classList.toggle("active");
  toggle.classList.toggle("active");
});
circle2.addEventListener("click", () => {
  body.classList.toggle("active");
  header.classList.toggle("active");
  circle2.classList.toggle("active");
  toggle2.classList.toggle("active");
menuNav2.classList.toggle("ativo");

});

btnMenu.addEventListener("click", () => {
  menuNav.classList.toggle("active");
  btnX.style.display = "block";
  btnMenu.style.display = "none";
});

btnX.addEventListener("click", () => {
  menuNav.classList.toggle("active");
  btnX.style.display = "none";
  btnMenu.style.display = "block";
});
