// Menu icon shape shift

const menu = document.querySelector(".menu");
const lineOne = document.querySelector(".b-1");
const lineTwo = document.querySelector(".b-2");
const lineThree = document.querySelector(".b-3");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    lineOne.classList.toggle("line-1-shift");
    lineTwo.classList.toggle("line-2-shift");
    lineThree.classList.toggle("line-3-shift");

    nav.classList.toggle("nav-on");
});
