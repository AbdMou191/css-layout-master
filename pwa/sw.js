/* ============ Service Worker للعمل دون إنترنت ============ */

// ✅ اسم Cache جديد وفريد
var CACHE_NAME = 'css-layout-cache-abdmou191-v1';

var FILES_TO_CACHE = [
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
  './pwa/icons/icon-192.jpg',
  './pwa/icons/icon-512.jpg',
  './pwa/manifest.json'
];

/* ============ التثبيت (Install) ============ */
self.addEventListener('install', function(event) {
  console.log('[SW CSS-Master] التثبيت...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('[SW CSS-Master] تخزين الملفات في Cache');
        return cache.addAll(FILES_TO_CACHE);
      })
      .then(function() {
        console.log('[SW CSS-Master] تم التثبيت بنجاح');
        return self.skipWaiting();
      })
  );
});

/* ============ التفعيل (Activate) ============ */
self.addEventListener('activate', function(event) {
  console.log('[SW CSS-Master] التفعيل...');
  
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          // ✅ حذف جميع الـ caches القديمة (من MathLinguistic أو إصدارات سابقة)
          if (cacheName !== CACHE_NAME) {
            console.log('[SW CSS-Master] حذف Cache قديم:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      console.log('[SW CSS-Master] تم التفعيل بنجاح');
      return self.clients.claim();
    })
  );
});

/* ============ اعتراض الطلبات (Fetch) ============ */
self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request)
      .then(function(cachedResponse) {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        return fetch(event.request)
          .then(function(response) {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            var responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(function(error) {
            console.error('[SW CSS-Master] فشل الجلب:', error);
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
