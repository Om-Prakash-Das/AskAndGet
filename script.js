(function() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1 && (node.matches(".ad-banner, .ad-container, iframe[src*='ads'], script[src*='ads']"))) {
                    node.remove();
                }
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Remove existing ads immediately
    document.querySelectorAll(".ad-banner, .ad-container, iframe[src*='ads'], script[src*='ads']").forEach(ad => ad.remove());
})();
