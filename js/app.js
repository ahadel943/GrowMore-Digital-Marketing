let menuIcon = document.querySelector(".menu-icon");
let links = document.querySelector(".links");
let hero = document.querySelector(".hero");
let state = 1;

menuIcon.addEventListener("click", (e) => {
    if(state){
        links.style.transform = "scale(1)";
        state = 0;
    } else {
        links.style.transform = "scale(0)";
        state = 1;
    }
})
hero.addEventListener("click", (e) => {
    if(links.style.transform == "scale(1)") {
        links.style.transform = "scale(0)";
    }
})