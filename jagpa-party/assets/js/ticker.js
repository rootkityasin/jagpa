document.addEventListener('DOMContentLoaded', () => {
    const tickerContainer = document.getElementById('news-ticker-container');

    if (tickerContainer) {
        const newsItems = [
            "Join the Grand Rally at Shapla Chattar on Friday!",
            "12-Party Alliance announces 31-point demand for National Reformation.",
            "Rashed Prodhan calls for unity among nationalist forces.",
            "Registration open for new volunteers - Join JAGPA today!"
        ];

        let content = newsItems.map(item => `<span class="ticker-item">${item}</span>`).join('');

        tickerContainer.innerHTML = `
            <div class="ticker-wrap">
                <div class="ticker-move">${content}</div>
            </div>
        `;
    }
});
