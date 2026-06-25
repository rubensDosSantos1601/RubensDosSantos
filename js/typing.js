/* ==========================================================
   TYPING.JS
   Portfolio - Rubens dos Santos
   Efeito de digitação dinâmico
========================================================== */

const Typing = {

    init() {

        this.el = document.getElementById("typing");

        if (!this.el) return;

        this.words = [
            "Software Engineer",
            "Delphi Developer",
            "Python Specialist",
            "Firebird Expert",
            "ERP Architect",
            "System Designer"
        ];

        this.indexWord = 0;
        this.indexChar = 0;
        this.isDeleting = false;

        this.speed = 90;
        this.pause = 1400;

        this.type();

    },

    type() {

        const currentWord = this.words[this.indexWord];

        let displayText;

        if (this.isDeleting) {

            this.indexChar--;
            displayText = currentWord.substring(0, this.indexChar);

        } else {

            this.indexChar++;
            displayText = currentWord.substring(0, this.indexChar);

        }

        this.el.textContent = displayText;

        let delay = this.speed;

        if (!this.isDeleting && this.indexChar === currentWord.length) {

            delay = this.pause;
            this.isDeleting = true;

        } else if (this.isDeleting && this.indexChar === 0) {

            this.isDeleting = false;
            this.indexWord = (this.indexWord + 1) % this.words.length;
            delay = 400;

        }

        setTimeout(() => this.type(), delay);

    }

};

/* ==========================================================
   EXPORT GLOBAL
========================================================== */

window.Typing = Typing;