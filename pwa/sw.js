/* ============ Service Worker للعمل دون إنترنت ============ */

// ✅ اسم Cache جديد وفريد
var CACHE_NAME = 'css-layout-cache-abdmou191-v2';

// ✅ المسارات الصحيحة (../ للرجوع إلى جذر المشروع)
var FILES_TO_CACHE = [
  '../index.html',
  '../privacy.html',
  '../terms.html',
  '../css/style.css',
  '../js/theme.js',
  '../js/i18n.js',
  '../js/app.js',
  '../js/pwa.js',
  '../lang/ar.js',
  '../lang/en.js',
  '../lang/fr.js',
  'icons/icon-192.jpg',
  'icons/icon-512.jpg',
  'manifest.json'
];

/* ============ التثبيت (Install) ============ */
self.addEventListener('install', function(event) {
  console.log('[SW CSS-Master] التثبيت...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('[SW CSS-Master] تخزين الملفات:', FILES_TO_CACHE);
        return cache.addAll(FILES_TO_CACHE);
      })
      .then(function() {
        console.log('[SW CSS-Master] تم التثبيت بنجاح');
        return self.skipWaiting();
      })
      .catch(function(error) {
        console.error('[SW CSS-Master] فشل التثبيت:', error);
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
            if (!response || response.status !== 200) {
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
            // ✅ عند فشل الاتصال، إرجاع الصفحة الرئيسية
            if (event.request.mode === 'navigate') {
              return caches.match('../index.html');
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