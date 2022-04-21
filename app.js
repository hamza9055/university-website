
var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add(".open-popup");
}

function openPopup(){
    popup.classList.remove(".open-popup");
}