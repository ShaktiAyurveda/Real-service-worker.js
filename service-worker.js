self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('shaktiayurveda-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/manifest.json',
        'https://raw.githubusercontent.com/ShaktiAyurveda/manifest.json/main/manifest.json'
        // Add other assets like images or scripts here
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
