/**
 /

// Listen notificationclick events
self.addEventListener('notificationclick', (e) => {
    let notification = e.notification;
    let primaryKey = notification.data.primaryKey;
    let action = e.action;
    if (action === 'close') {
        notification.close();
    } else {
        clients.openWindow(notification.data.clickUrl);
        notification.close();
    }
});
