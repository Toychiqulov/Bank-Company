const nav = document.getElementById("nav")
const bars = document.getElementById("bars");

nav.style.maxHeight = '0px';

bars.addEventListener('click', () => {
    if (nav.style.maxHeight == '0px') {
        nav.style.maxHeight = '550px'
    }else{
        nav.style.maxHeight = '0px'
    }
});


window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar"); 
    navbar.classList.toggle("sticky", this.window.scrollY > 0)
});