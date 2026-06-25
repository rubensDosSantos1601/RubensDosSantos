/* ==========================================================
   SCROLL.JS
   Portfolio - Rubens dos Santos
   Animações ao rolar (Scroll Reveal + UX refinado)
========================================================== */

const ScrollEffects = {

    init() {

        this.elements = document.querySelectorAll(
            "section, .card, .project-card, .article, .timeline-item"
        );

        this.initObserver();
        this.smoothScrollLinks();

    },

    initObserver() {

        const options = {

            threshold: 0.12

        };

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");
                    entry.target.classList.add("reveal");

                    observer.unobserve(entry.target);

                }

            });

        }, options);

        this.elements.forEach(el => {

            el.classList.add("reveal");
            observer.observe(el);

        });

    },

    smoothScrollLinks() {

        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {

            link.addEventListener("click", (e) => {

                e.preventDefault();

                const targetId = link.getAttribute("href").substring(1);

                const target = document.getElementById(targetId);

                if (target) {

                    window.scrollTo({

                        top: target.offsetTop - 80,
                        behavior: "smooth"

                    });

                }

            });

        });

    }

};

/* ==========================================================
   EXPORT GLOBAL
========================================================== */

window.ScrollEffects = ScrollEffects;