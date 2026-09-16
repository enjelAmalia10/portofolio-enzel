// MENU MOBILE

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// TUTUP MENU SETELAH MEMILIH MENU

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// ANIMASI SAAT SCROLL

const revealElements = document.querySelectorAll(
    ".section-title, .about-card, .skills, .project-card, .contact-box"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});


// EFEK NAVBAR SAAT SCROLL

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(15, 7, 24, 0.95)";
    } else {
        header.style.background = "rgba(15, 7, 24, 0.85)";
    }

});