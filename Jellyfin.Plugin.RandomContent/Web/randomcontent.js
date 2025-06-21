(function () {
    const insertButton = () => {
        const searchButton = document.querySelector('[aria-label="Search"]');
        if (!searchButton) return;
        if (document.getElementById('randomContentButton')) return;

        const btn = searchButton.cloneNode(true);
        btn.id = 'randomContentButton';
        btn.setAttribute('aria-label', 'Random');
        btn.addEventListener('click', async (e) => {
            e.preventDefault();
            try {
                const userId = ApiClient.getCurrentUserId();
                const result = await ApiClient.getItems(userId, {
                    IncludeItemTypes: 'Movie,Series',
                    Recursive: true,
                    Limit: 1,
                    SortBy: 'Random'
                });
                if (result.Items && result.Items.length) {
                    const id = result.Items[0].Id;
                    window.location.href = ApiClient.getUrl('web/index.html#!/details?id=' + id);
                }
            } catch (err) {
                console.error('RandomContent error', err);
            }
        });
        searchButton.parentNode.insertBefore(btn, searchButton.nextSibling);
    };

    const observer = new MutationObserver(insertButton);
    observer.observe(document.documentElement, { childList: true, subtree: true });
    document.addEventListener('DOMContentLoaded', insertButton);
})();
