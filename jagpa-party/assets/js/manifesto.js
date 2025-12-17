document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            const content = header.nextElementSibling;

            header.setAttribute('aria-expanded', !isExpanded);

            if (!isExpanded) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    const searchInput = document.getElementById('manifesto-search');
    const items = document.querySelectorAll('.accordion-item');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();

            items.forEach(item => {
                const title = item.querySelector('.point-title').textContent.toLowerCase();
                const text = item.querySelector('.accordion-content').textContent.toLowerCase();

                if (title.includes(term) || text.includes(term)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});
