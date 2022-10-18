// ! NAVBAR

const navbar = document.querySelector(".navbar");
const openMenuIcon = document.querySelector(".menu");
const closeMenuIcon = document.querySelector(".close-icon");

function openNav() {
    if (!navbar.classList.contains("navbar-opened")) {
        navbar.classList.add("navbar-opened");
    }
}

function closeNav() {
    if (navbar.classList.contains("navbar-opened")) {
        navbar.classList.remove("navbar-opened");
    }
}

openMenuIcon.addEventListener("click", () => {
    openNav();
});

closeMenuIcon.addEventListener("click", () => {
    closeNav();
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) {
        navbar.classList.remove("navbar-opened");
    }
});

// !HERO

const word = document.querySelector(".text-bold");
const wordArray = [
    "adventure",
    "picture",
    "design",
    "animation",
    "creation",
    "mix",
];

let count = 0;

function swapWords() {
    count++;

    if (count >= wordArray.length) {
        count = 0;
    }

    word.textContent = wordArray[count];
}

setInterval(swapWords, 3000);
