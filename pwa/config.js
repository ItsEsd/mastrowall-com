const PWA_CONFIG = {

    // App config
    app: {
        // App name
        name: 'MASTROWALL',
        // App version
        version: 'v1',
    },

    // Service Worker config
    sw: {
        // Main service worker filepath (always root of project)
        filepath: '/sw.js',
        // Route of offline page
        // offline_route: '/offline.html',
    },

    // Push manager config
    push: {
        // Enable/disable push notifications
        active: false,
        // Server config
        server: {
            // API public key
            public_key: 'YOURAPIPUBLICKEY',
            // Subscription API endpoint
            endpoint: '/api/push/subscription/',
        },
        // Notification config
        notification: {
            // Title of notifications from the server
            title: 'MASTROWALL',
            // Options object same that showNotification() options
            // (https://developer.mozilla.org/es/docs/Web/API/ServiceWorkerRegistration/showNotification)
            options: {
                // A string representing an extra content to display within the notification
                body: '',
                // he URL of an image to be used as an icon by the notification
                icon: '/images/manifest.png',
                // A vibration pattern to run with the display of the notification.
                // A vibration pattern can be an array with as few as one member.
                // The values are times in milliseconds where the even indices (0, 2, 4, etc.)
                // indicate how long to vibrate and the odd indices indicate how long to pause.
                // For example [300, 100, 400] would vibrate 300ms, pause 100ms, then vibrate 400ms.
                vibrate: [100, 50, 100],
                // Arbitrary data that you want associated with the notification. This can be of any data type
                data: {
                    dateOfArrival: Date.now(),
                    primaryKey: '1',
                    clickUrl: '',
                },
            },
            // notification click event
            notificationclick: {
                // Enable/disable notification click event
                active: true,
            }
        }
    },

    // Cache config
    cache: {
        // Images cache config (png|jpg|jpeg|svg|gif)
        images: {
            // Enable/disable images caching
            active: true,
            // The maximum number of entries to cache.
            // Entries used the least will be removed as the maximum is reached.
            maxentries: 50,
            // The maximum age of an entry before it's treated as stale and removed.
            maxageseconds: 365 * 24 * 60 * 60,
        },
        // Static files cache config (js|json|css)
        statics: {
            // Enable/disable static files caching
            active: true,
            // The maximum number of entries to cache.
            // Entries used the least will be removed as the maximum is reached.
            maxentries: 50,
            // The maximum age of an entry before it's treated as stale and removed.
            maxageseconds: 365 * 24 * 60 * 60,
        },
        // Fonts cache config (eot|ttf|woff|woff2|otf)
        // with cross-origin requests example google fonts
        fonts: {
            // Enable/disable fonts caching
            active: true,
            // The maximum number of entries to cache.
            // Entries used the least will be removed as the maximum is reached.
            maxentries: 50,
            // The maximum age of an entry before it's treated as stale and removed.
            maxageseconds: 365 * 24 * 60 * 60,
        },
        routes: {
            // Force the response to come from the network
            networkonly: {
                // Enable/disable network only routes caching
                active: false,
                // Matching routes with a Regular Expression
                // regex: /\/(?:login|logout)\//,
            },
            // Resources are requested from both the cache and the network in parallel.
            // The strategy will respond with the cached version if available,
            // otherwise wait for the network response.
            // The cache is updated with the network response with each successful request.
            stalewhilerevalidate: {
                active: false,
                // regex: /\/news\/.*/,
            },
            // Network first request strategy.
            networkfirst: {
                active: true,
                regex: /.*/,
            },
            // Cache first request strategy.
            cachefirst: {
                active: false,
                // regex: /.*/,
                // maxentries: 500,
                // maxageseconds: 365 * 24 * 60 * 60,
            },
            // Force the response to come from the browser.
            cacheonly: {
                active: false,
                // regex: /.*/,
            },
        },
        // Add your custom service worker for load it.
        custom: {
            active: false,
            // service worker script route
            // script: '/pwa/sw/my-custom-sw.js',
        },
    },

    // Precache config
    precache: {
        // Enable/disable precaching
        active: false,
        // Routes to
        routes: [
            '/main.html',
            '/index.html',
            '/pwa/pwa.js',
            '/images/thumbnail.png',
            '/images/logoRecBWsvg.svg',
            '/assets/app.css',
            '/assets/app.js',
            '/css/bootstrap.min.css',
            '/css/fontAwesome.css',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js',
            '/css/assets/bootstrap-icons.1.5.0.font.css',
            '/css/main-ii.css',
            '/css/main.css',
            '/js/main-ii.js',
            '/js/main.js',
            '/js/assets/jQuery v3.5.1.min.js',
            '/images/dashicon/dash-search.gif',
            '/images/dashicon/dash-linkins.gif',
            '/images/dashicon/dash-telem.gif',
            '/images/dashicon/dash-tt.gif',
            '/images/hexback-white-1200x900.gif',
            '/images/hexback-blue-1200x900.gif',
            '/js/assets/jQuery-1.11.1.min.js',
            '/images/gmtime.jpg'
        ],
    }
}
