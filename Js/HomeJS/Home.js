const navbar = document.querySelector(".nav-list");
const menu = document.querySelector(".menu");
const x = document.querySelector(".x");

menu.addEventListener("click", () => {
    navbar.classList.add("nav-o")
})
x.addEventListener("click", () => {
    navbar.classList.remove("nav-o")
})