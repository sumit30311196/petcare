let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
let nav_link = document.querySelector(".nav-link"); 

hamburger.addEventListener("click", () =>{
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
});

nav_link.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    menu.classList.remove("active");
})

