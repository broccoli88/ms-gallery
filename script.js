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
