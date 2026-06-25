/* ==========================================================
   NAVBAR.JS
   Portfolio - Rubens dos Santos
   Comportamento avançado da navegação
========================================================== */

const Navbar = {

    init() {

        this.header = document.querySelector("header");
        this.nav = document.querySelector("nav");
        this.hamburger = document.getElementById("hamburger");
        this.links = document.querySelectorAll("nav a");

        this.bindEvents();

    },

    bindEvents() {

        // Scroll behavior
        window.addEventListener("scroll", () => this.onScroll());

        // Toggle menu mobile
        if (this.hamburger) {

            this.hamburger.addEventListener("click", () => {

                this.toggleMenu();

            });

        }

        // Fechar menu ao clicar em link
        this.links.forEach(link => {

            link.addEventListener("click", () => {

                this.closeMenu();

            });

        });

    },

    onScroll() {

        this.handleHeaderStyle();
        this.handleActiveLink();

    },

    handleHeaderStyle() {

        if (window.scrollY > 60) {

            this.header.classList.add("scrolled");

        } else {

            this.header.classList.remove("scrolled");

        }

    },

    handleActiveLink() {

        const sections = document.querySelectorAll("section");

        let scrollPos = window.scrollY + 130;

        sections.forEach(section => {

            const id = section.getAttribute("id");

            if (
                scrollPos >= section.offsetTop &&
                scrollPos < section.offsetTop + section.offsetHeight
            ) {

                this.links.forEach(link => {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === "#" + id) {

                        link.classList.add("active");

                    }

                });

            }

        });

    },

    toggleMenu() {

        this.nav.classList.toggle("active");
        this.hamburger.classList.toggle("active");

    },

    closeMenu() {

        this.nav.classList.remove("active");
        this.hamburger.classList.remove("active");

    }

};

/* ==========================================================
   EXPORT GLOBAL
========================================================== */

window.Navbar = Navbar;