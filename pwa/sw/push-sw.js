/**
 /

// Listen push events from the server
self.addEventListener('push', (e) => {
    if (self.Notification && self.Notification.permission === 'granted') {
        if (e.data) {
            let options = PWA_CONFIG.push.notification.options;
            let data = e.data.json();
            options.body = data.text;
            options.data.clickUrl = data.url;

            e.waitUntil(
                self.registration.showNotification(PWA_CONFIG.push.notification.title, options)
            );
        }
    }
});
