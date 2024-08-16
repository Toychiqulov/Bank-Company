const navbar = document.querySelector(".nav-list");
const menu = document.querySelector(".menu");
const x = document.querySelector(".x");

menu.addEventListener("click", () => {
    navbar.classList.add("nav-o")
})
x.addEventListener("click", () => {
    navbar.classList.remove("nav-o")
});
const slider = document.querySelector(".slider-cards");
const SlidIcon = document.querySelectorAll(".slider-all .slider-b");
const FirstCard = slider.querySelectorAll(".slider-card")[0];

let First = FirstCard.clientWidth + 0;

SlidIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        slider.scrollLeft += icon.id == "left" ? -First : First
        console.log(slider);
        
    })
});
let Start = false, prevX, prevScrollLeft;
const dStart = (e) => {
    Start = true;
    prevX = e.pageX;
    prevScrollLeft = slider.scrollLeft;
}
const Slid = (e) => {
    if(!Start) return;
    e.preventDefault();
    let positon = e.pageX - prevX;
    slider.scrollLeft = prevScrollLeft - positon;
}
const dStop = () => {
    Start = false;
}

slider.addEventListener("mousedown", dStart);
slider.addEventListener("mousemove", Slid);
slider.addEventListener("mouseup", dStop);