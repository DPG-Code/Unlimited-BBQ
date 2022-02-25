// Reservar
const open = document.getElementById("open");
const close = document.getElementById("close");
const reservar = document.getElementById("reservar");

open.addEventListener("click", function() {
	reservar.style.display = "flex";
	reservar.style.animation = "aparecer 0.5s forwards";
});

close.addEventListener("click", function() {
	reservar.style.display = "none";
});

// NAV
const openNav = document.getElementById("open-nav");
const closeNav = document.getElementById("close-nav");
const navMobile = document.getElementById("nav-mobile");

openNav.addEventListener("click", function() {
	navMobile.style.display = "flex";
	navMobile.style.animation = "nav-mobile 0.6s linear";
});

closeNav.addEventListener("click", function() {
	navMobile.style.display = "none";
	//navMobile.style.animation = "nav-mobile-desaparecer 0.6s linear";
});
