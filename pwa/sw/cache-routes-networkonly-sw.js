/**
 /

// Network only strategy
workbox.routing.registerRoute(
    PWA_CONFIG.cache.routes.networkonly.regex,
    ({event}) => {
        return workbox.strategies.networkOnly().handle({event})
            .then((response) => {
                return response || caches.match(PWA_CONFIG.sw.offline_route);
            })
            .catch(() => caches.match(PWA_CONFIG.sw.offline_route)
        );
    }
);
