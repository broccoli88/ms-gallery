function toggleMenu() {
    const navbar = document.querySelector(".navbar");
    const openMenuIcon = document.querySelector(".menu");
    const closeMenuIcon = document.querySelector(".close-icon");

    let isMenuOpen = false;

    function openMenu() {
        if (isMenuOpen === false) {
            isMenuOpen = true;
            navbar.style.display = "flex";
        }
        return;
    }

    function closeMenu() {
        if (isMenuOpen === true) {
            isMenuOpen = false;
            navbar.style.display = "none";
        }
        return;
    }

    if (window.innerWidth > 900) return;

    openMenuIcon.addEventListener("click", () => {
        openMenu();
    });
    closeMenuIcon.addEventListener("click", () => {
        closeMenu();
    });
}

toggleMenu();
