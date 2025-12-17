document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            nav.classList.toggle('nav-open');
            menuToggle.classList.toggle('active');
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                if (nav.classList.contains('nav-open')) {
                    nav.classList.remove('nav-open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    const countdownEl = document.getElementById('countdown');
    if (countdownEl) {
        const electionDate = new Date('February 12, 2026 00:00:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = electionDate - now;

            if (distance < 0) {
                countdownEl.innerHTML = "ELECTION DAY!";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

            countdownEl.innerHTML = `
                <div class="countdown-item"><span class="number">${days}</span> DAYS</div>
                <div class="countdown-item"><span class="number">${hours}</span> HOURS</div>
            `;
        };

        setInterval(updateCountdown, 1000);
        updateCountdown();
    }
});
