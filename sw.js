var CACHE_NAME = 'css-layout-cache-abdmou191-v5';

var FILES_TO_CACHE = [
  './',
  './index.html',
  './privacy.html',
  './terms.html',
  './css/style.css',
  './js/theme.js',
  './js/i18n.js',
  './js/app.js',
  './js/pwa.js',
  './lang/ar.js',
  './lang/en.js',
  './lang/fr.js',
  './manifest.json',
  './icons/icon-192.jpg',
  './icons/icon-512.jpg'
];

self.addEventListener('install', function(event) {
  console.log('[SW] بدء التثبيت...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('[SW] فتح Cache:', CACHE_NAME);
        return cache.addAll(FILES_TO_CACHE);
      })
      .then(function() {
        console.log('[SW] تم تخزين', FILES_TO_CACHE.length, 'ملف بنجاح');
        return self.skipWaiting();
      })
      .catch(function(error) {
        console.error('[SW] فشل التثبيت:', error);
        // محاولة تخزين الملفات واحداً تلو الآخر
        return Promise.all(
          FILES_TO_CACHE.map(function(url) {
            return cache.add(url).catch(function(err) {
              console.warn('[SW] فشل تخزين:', url, err);
            });
          })
        );
      })
  );
});

self.addEventListener('activate', function(event) {
  console.log('[SW] بدء التفعيل...');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] حذف Cache قديم:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      console.log('[SW] تم التفعيل');
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request)
      .then(function(cachedResponse) {
        if (cachedResponse) {
          console.log('[SW] إرجاع من Cache:', event.request.url);
          return cachedResponse;
        }
        
        console.log('[SW] جلب من الشبكة:', event.request.url);
        return fetch(event.request)
          .then(function(response) {
            if (!response || response.status !== 200) return response;
            
            var responseToCache = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, responseToCache);
            });
            
            return response;
          })
          .catch(function(error) {
            console.error('[SW] فشل الجلب:', error);
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
          });
      })
  );
});

self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});