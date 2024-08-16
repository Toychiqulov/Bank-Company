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

const Fb = document.querySelector(".frequenty-btn");
const Frqu = document.querySelector("#frequ");

Frqu.style.display = "none"
Fb.addEventListener("click", () => {
    if (Frqu.style.display == "none") {
        Frqu.style.display = "flex";
    } else {
        Frqu.style.display = "none";
    }
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
})
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