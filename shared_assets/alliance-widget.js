(function () {
    const cfg = {
        text: "Part of the 12-Party Alliance | United for Democracy",
        link: "https://jagpa.org/manifesto",
        color: "#333",
        textColor: "#fff"
    };

    function init() {
        if (document.getElementById('alliance-widget')) return;

        const bar = document.createElement('div');
        bar.id = 'alliance-widget';
        Object.assign(bar.style, {
            backgroundColor: cfg.color,
            color: cfg.textColor,
            padding: '5px 0',
            textAlign: 'center',
            fontSize: '12px',
            fontFamily: 'sans-serif',
            position: 'fixed',
            bottom: '0',
            width: '100%',
            zIndex: '9999'
        });

        const link = document.createElement('a');
        link.href = cfg.link;
        link.innerText = cfg.text;
        Object.assign(link.style, {
            color: cfg.textColor,
            textDecoration: 'none',
            fontWeight: 'bold'
        });

        bar.appendChild(link);
        document.body.appendChild(bar);
        document.body.style.paddingBottom = '30px';
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
