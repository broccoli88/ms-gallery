// ! NAVBAR

const navbar = document.querySelector(".navbar");
const openMenuIcon = document.querySelector(".menu");
const closeMenuIcon = document.querySelector(".close-icon");
const fog = document.querySelector(".fog");

function openNav() {
    if (!navbar.classList.contains("navbar-opened")) {
        navbar.classList.add("navbar-opened");
        fog.classList.add("fog-off");
    }
}

function closeNav() {
    if (navbar.classList.contains("navbar-opened")) {
        navbar.classList.remove("navbar-opened");
        fog.classList.remove("fog-off");
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

// ! HERO - intersection observer

const hero = document.querySelector(".hero");
const grid = document.querySelector(".portfolio-grid");

const options = {
    root: document.querySelector(".body"),
    rootMargin: "-130px 0px 0px 0px",
    threshold: 1.0,
};

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        const fog = document.querySelector(".fog");
        if (!entry.isIntersecting) {
            hero.style.opacity = "0.3";
            grid.classList.remove("portfolio-grid-fade");
        }

        if (entry.isIntersecting) {
            hero.style.opacity = "1";

            grid.classList.add("portfolio-grid-fade");
        }
    });
}, options);

observer.observe(hero);
