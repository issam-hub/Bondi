let navLinks = document.querySelectorAll(".navbar .nav-link");
let activeLink = document.querySelector(".navbar .nav-link.active");

navLinks.forEach((link) => {
    link.onmouseenter = function (e) {
        activeLink.classList.remove("active");
        e.currentTarget.classList.add("link-coloring");
    };
    link.onmouseleave = function (e) {
        activeLink.classList.add("active");
        e.currentTarget.classList.remove("link-coloring");
    };
});

let menu = document.querySelector(".navbar-toggler");

menu.onclick = function (e) {
    // menu.firstElementChild.classList.remove("fa-bars menu");
    if (menu.firstElementChild.classList.contains("fa-xmark")) {
        menu.firstElementChild.classList.remove("fa-xmark");
        menu.firstElementChild.classList.add("fa-bars");
        menu.firstElementChild.style.color = "white";
    } else {
        menu.firstElementChild.style.color = "#33d1cc";
        menu.firstElementChild.classList.add("fa-xmark");
    }
};

let navItems = document.querySelectorAll(".nav .nav-item");

navItems.forEach((item) => {
    item.onclick = function (e) {
        navItems.forEach((navI) => {
            navI.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    };
});

let scrollBtn = document.querySelector(".scroll");

window.onscroll = function () {
    if (window.scrollY >= 900) {
        scrollBtn.style.cssText = "opacity: 1; cursor: pointer";
        scrollBtn.addEventListener("click", function () {
            window.scroll({
                top: 0,
                behavior: "smooth",
            });
        });
    } else {
        scrollBtn.style.cssText = "opacity: 0; cursor: auto";
    }
};
