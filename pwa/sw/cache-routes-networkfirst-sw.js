

// Network first strategy
workbox.routing.registerRoute(
    PWA_CONFIG.cache.routes.networkfirst.regex,
    ({event}) => {
        return workbox.strategies.networkFirst({
            cacheName: PWA_CONFIG.app.name + '-pages-cache-' + PWA_CONFIG.app.version,
        }).handle({event})
            .then((response) => {
                return response || caches.match(PWA_CONFIG.sw.offline_route);
            })
            .catch(() => caches.match(PWA_CONFIG.sw.offline_route)
        );
    }
);
