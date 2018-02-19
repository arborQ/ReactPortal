'use strict';

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');

  var title = 'Push Codelab';
  var options = {
    body: event.data.text(),
    icon: 'content/binary-code.png',
    badge: 'content/binary-code.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});


self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  event.waitUntil(
    clients.openWindow('http://localhost:8080/?serviceWorker=work')
  );
});