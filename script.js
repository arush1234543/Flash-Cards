const day = document.querySelector(".day");
const night = document.querySelector(".night");
const Mode = document.querySelector(".colormode");
const createTrigger = document.querySelector(".dropdown-trigger");
const createSvg = document.querySelector(".createsvg");
const dropdownMenu = document.querySelector(".dropdown-menu");

Mode.addEventListener("click", () => {
    day.classList.toggle("none");
    night.classList.toggle("none");
    document.body.classList.toggle("dark-theme");
});

createTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    createSvg.classList.toggle("active");
    dropdownMenu.classList.toggle("show");
});

document.addEventListener("click", () => {
    createSvg.classList.remove("active");
    dropdownMenu.classList.remove("show");
});