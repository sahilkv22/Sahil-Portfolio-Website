/* =========================================================
   01 — MOBILE NAVIGATION
   ========================================================= */

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}

/* =========================================================
   02 — CLOSE MOBILE NAV AFTER CLICK
   ========================================================= */

if (navMenu) {
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
        });
    });
}

/* =========================================================
   03 — CURRENT YEAR
   ========================================================= */

const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}