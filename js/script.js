let toggle = document.querySelector(".toggle");
let circle = document.querySelector(".circle");
let body = document.querySelector("body");
let header = document.querySelector("header");

circle.addEventListener("click", () => {
body.classList.toggle('active');
header.classList.toggle('active');
circle.classList.toggle('active');
toggle.classList.toggle('active');
});
