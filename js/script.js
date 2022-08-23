let toggle = document.querySelector(".toggle");
let circle = document.querySelector(".circle");
let toggle2 = document.querySelector(".toggle2");
let circle2 = document.querySelector(".circle2");
let body = document.querySelector("body");
let header = document.querySelector("header");
let menuNav = document.querySelector(".menu-nav2");
let btnMenu = document.querySelector(".bx ");

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
});

btnMenu.addEventListener("click", () => {
menuNav.classList.toggle("active");
});
