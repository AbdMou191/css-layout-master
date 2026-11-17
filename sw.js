/* PWA Service Worker — offline-first with network refresh */
var CACHE_NAME = 'css-layout-cache-v7';

var FILES_TO_CACHE = [
  './index.html',
  './privacy.html',
  './terms.html',
  './share.html',
  './manifest.json',
  './pwa.js',
  './css/style.css',
  './js/app.js',
  './js/i18n.js',
  './js/theme.js',
  './lang/ar.js',
  './lang/en.js',
  './lang/fr.js',
  './lang/es.js',
  './lang/tr.js',
  './icons/icon-192.jpg',
  './icons/icon-512.jpg'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(FILES_TO_CACHE);
      })
      .then(function () {
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(names.map(function (name) {
        if (name.indexOf('css-layout-cache-') === 0 && name !== CACHE_NAME) {
          return caches.delete(name);
        }
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (event) {
  var request = event.request;
  if (request.method !== 'GET') return;

  var url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(request).then(function (response) {
      if (response && response.status === 200 && response.type === 'basic') {
        var copy = response.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(request, copy);
        });
      }
      return response;
    }).catch(function () {
      return caches.match(request).then(function (cached) {
        if (cached) return cached;

        if (request.mode === 'navigate') {
          return caches.match('./index.html');
        }

        return new Response(
          'هذا المورد غير متاح دون اتصال بالإنترنت.',
          {
            status: 503,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' }
          }
        );
      });
    })
  );
});

self.addEventListener('message', function (event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
