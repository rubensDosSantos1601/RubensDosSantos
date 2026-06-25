/* ==========================================================
   APP.JS
   Portfolio - Rubens dos Santos
   Inicialização geral da SPA
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    App.init();

});

/* ==========================================================
   OBJETO PRINCIPAL DA APLICAÇÃO
========================================================== */

const App = {

    init() {

        this.cacheElements();
        this.initModules();
        this.bindEvents();
        this.startAnimations();

        console.log("Portfolio inicializado com sucesso.");

    },

    cacheElements() {

        this.body = document.body;
        this.header = document.querySelector("header");
        this.nav = document.querySelector("nav");
        this.hamburger = document.getElementById("hamburger");
        this.sections = document.querySelectorAll("section");

    },

    initModules() {

        // Inicializa módulos externos (caso existam)
        if (window.Navbar) Navbar.init();
        if (window.Typing) Typing.init();
        if (window.ScrollEffects) ScrollEffects.init();
        if (window.Particles) Particles.init();

    },

    bindEvents() {

        // Menu mobile
        if (this.hamburger) {

            this.hamburger.addEventListener("click", () => {

                this.toggleMenu();

            });

        }

        // Scroll global
        window.addEventListener("scroll", () => {

            this.handleScroll();

        });

        // Fechar menu ao clicar em link (mobile)
        if (this.nav) {

            this.nav.querySelectorAll("a").forEach(link => {

                link.addEventListener("click", () => {

                    this.closeMenu();

                });

            });

        }

        // Resize
        window.addEventListener("resize", () => {

            this.handleResize();

        });

    },

    startAnimations() {

        // Pequeno delay para garantir renderização
        setTimeout(() => {

            this.revealSections();

        }, 300);

    },

    toggleMenu() {

        this.nav.classList.toggle("active");
        this.hamburger.classList.toggle("active");

    },

    closeMenu() {

        this.nav.classList.remove("active");
        this.hamburger.classList.remove("active");

    },

    handleScroll() {

        this.stickyHeader();
        this.activeSectionHighlight();

    },

    handleResize() {

        if (window.innerWidth > 768) {

            this.closeMenu();

        }

    },

    stickyHeader() {

        if (window.scrollY > 50) {

            this.header.classList.add("scrolled");

        } else {

            this.header.classList.remove("scrolled");

        }

    },

    activeSectionHighlight() {

        let scrollPos = window.scrollY + 120;

        this.sections.forEach(section => {

            if (

                scrollPos >= section.offsetTop &&
                scrollPos < section.offsetTop + section.offsetHeight

            ) {

                this.nav.querySelectorAll("a").forEach(a => {

                    a.classList.remove("active");

                    if (a.getAttribute("href") === "#" + section.id) {

                        a.classList.add("active");

                    }

                });

            }

        });

    },

    revealSections() {

        const elements = document.querySelectorAll("section, .card, .project-card, .article");

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");
                    entry.target.classList.add("reveal");

                }

            });

        }, {

            threshold: 0.15

        });

        elements.forEach(el => observer.observe(el));

    }

};

/* ==========================================================
   EXPORT GLOBAL (caso outros módulos usem)
========================================================== */

window.App = App;