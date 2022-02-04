// Reservar

const open = document.getElementById("open");
const close = document.getElementById("close");
const reservar = document.getElementById("reservar");

open.addEventListener("click", function() {
	reservar.style.display = "flex";
	reservar.style.animation = "aparecer 0.5s forwards";
	reservar.style.animation = "aparecer 0.5s forwards";
});

close.addEventListener("click", function() {
	reservar.style.display = "none";
});