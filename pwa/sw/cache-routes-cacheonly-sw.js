

// Cache only strategy
workbox.routing.registerRoute(
    PWA_CONFIG.cache.routes.cacheonly.regex,
    workbox.strategies.cacheOnly({
        cacheName:  PWA_CONFIG.app.name + '-pages-cache-' + PWA_CONFIG.app.version,
    })
);
