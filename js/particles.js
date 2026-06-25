/* ==========================================================
   PARTICLES.JS
   Portfolio - Rubens dos Santos
   Fundo animado com canvas (leve e performático)
========================================================== */

const Particles = {

    init() {

        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.id = "particles-canvas";

        document.getElementById("particles").appendChild(this.canvas);

        this.particles = [];
        this.count = 70;

        this.mouse = {
            x: null,
            y: null,
            radius: 120
        };

        this.resize();
        this.createParticles();
        this.animate();
        this.bindEvents();

    },

    bindEvents() {

        window.addEventListener("resize", () => this.resize());

        window.addEventListener("mousemove", (e) => {

            this.mouse.x = e.x;
            this.mouse.y = e.y;

        });

        window.addEventListener("mouseout", () => {

            this.mouse.x = null;
            this.mouse.y = null;

        });

    },

    resize() {

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

    },

    createParticles() {

        this.particles = [];

        for (let i = 0; i < this.count; i++) {

            this.particles.push({

                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6,
                radius: Math.random() * 2 + 1

            });

        }

    },

    drawParticles() {

        for (let i = 0; i < this.particles.length; i++) {

            const p = this.particles[i];

            this.ctx.beginPath();

            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

            this.ctx.fillStyle = "rgba(59,130,246,0.6)";

            this.ctx.fill();

            this.updateParticle(p);

        }

    },

    updateParticle(p) {

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

        // interação com mouse
        if (this.mouse.x && this.mouse.y) {

            let dx = this.mouse.x - p.x;
            let dy = this.mouse.y - p.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.mouse.radius) {

                p.x += dx * 0.01;
                p.y += dy * 0.01;

            }

        }

    },

    drawLines() {

        for (let i = 0; i < this.particles.length; i++) {

            for (let j = i; j < this.particles.length; j++) {

                let p1 = this.particles[i];
                let p2 = this.particles[j];

                let dx = p1.x - p2.x;
                let dy = p1.y - p2.y;

                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {

                    this.ctx.beginPath();

                    this.ctx.strokeStyle = "rgba(59,130,246,0.15)";

                    this.ctx.lineWidth = 1;

                    this.ctx.moveTo(p1.x, p1.y);

                    this.ctx.lineTo(p2.x, p2.y);

                    this.ctx.stroke();

                }

            }

        }

    },

    animate() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.drawParticles();
        this.drawLines();

        requestAnimationFrame(() => this.animate());

    }

};

/* ==========================================================
   EXPORT GLOBAL
========================================================== */

window.Particles = Particles;