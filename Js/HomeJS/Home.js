const navbar = document.querySelector(".nav-list");
const menu = document.querySelector(".menu");
const x = document.querySelector(".x");

menu.addEventListener("click", () => {
    navbar.classList.add("nav-o")
})
x.addEventListener("click", () => {
    navbar.classList.remove("nav-o")
});
const our1 = document.getElementById("o1")
const our2 = document.getElementById("o2")
const our3 = document.getElementById("o3")

const card1 = document.getElementById("c-1")
const card2 = document.getElementById("c-2")
const card3 = document.getElementById("c-3")

our1.style.color = "#CAFF33";
card3.style.display = "none"
card2.style.display = "none"

our1.addEventListener("click", () =>  {
    card2.style.display = "none"
    card3.style.display = "none"
    card1.style.display = "flex"
    our1.style.color = "#CAFF33";
    our2.style.color = "#fff";
    our3.style.color = "#fff";
});
our2.addEventListener("click", () => {
    card2.style.display = "flex"
    card1.style.display = "none"
    card3.style.display = "none"
    our2.style.color = "#CAFF33";
    our1.style.color = "#fff";
    our3.style.color = "#fff";
});
our3.addEventListener("click", () => {
    card1.style.display = "none"
    card2.style.display = "none"
    card3.style.display = "flex"
    our3.style.color = "#CAFF33";
    our2.style.color = "#fff";
    our1.style.color = "#fff";
})