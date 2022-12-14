// ! NAVBAR

const main = document.querySelector("main");
const footer = document.querySelector("footer");
const navbar = document.querySelector(".navbar");
const openMenuIcon = document.querySelector(".menu");
const closeMenuIcon = document.querySelector(".close-icon");
const hero = document.querySelector(".hero");

function openNav() {
    if (!navbar.classList.contains("navbar-opened")) {
        navbar.classList.add("navbar-opened");
        main.classList.add("display-none");
        hero.classList.add("display-none");
        footer.classList.add("display-none");
    }
}

function closeNav() {
    if (navbar.classList.contains("navbar-opened")) {
        navbar.classList.remove("navbar-opened");
        main.classList.remove("display-none");
        hero.classList.remove("display-none");
        footer.classList.remove("display-none");
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

const grid = document.querySelector(".portfolio-grid");
const header = document.querySelector("header");

const options = {
    // root: ,
    rootMargin: "0px",
    threshold: 0.98,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            hero.style.opacity = "0.3";
            grid.classList.remove("portfolio-grid-fade");
            header.classList.add("header-scroll");
        }

        if (entry.isIntersecting) {
            hero.style.opacity = "1";
            grid.classList.add("portfolio-grid-fade");
            header.classList.remove("header-scroll");
        }
    });
}, options);

observer.observe(hero);
