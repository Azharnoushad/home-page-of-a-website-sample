import './style.scss'


let openNav = document.querySelector(".open-nav");
let closeNav = document.querySelector(".close-nav");


function openNavHandler () {
    document.body.classList.add("active")

}

function closeNavHandler () {
    document.body.classList.remove("active")
    


}


closeNav.addEventListener("click", closeNavHandler)
openNav.addEventListener("click",openNavHandler)