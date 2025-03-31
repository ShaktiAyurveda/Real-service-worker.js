self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('shakti-ayurveda-cache').then(function(cache) {
      return cache.addAll([
        '/', // Homepage
        '/index.html', // Main page
        '/styles.css', // Your CSS file
        '/manifest.json', // Manifest file
        '/icon-192.png', // App icon
        '/icon-512.png' // App icon
        // Add any other files you want to work offline
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
