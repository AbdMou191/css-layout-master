/* ============ Service Worker للعمل دون إنترنت ============ */

var CACHE_NAME = 'css-layout-cache-v1';
var FILES_TO_CACHE = [
  '../index.html',
  '../css/style.css',
  '../js/theme.js', 
  '../js/i18n.js',
  '../js/app.js',
  '../js/pwa.js',
  '../lang/ar.js',
  '../lang/en.js',
  '../lang/fr.js',
  '../privacy.html',
  '../terms.html',
  '../pwa/icons/icon-192.png',
  '../pwa/icons/icon-512.png'
];

/* ============ التثبيت (Install) ============ */
self.addEventListener('install', function(event) {
  console.log('[Service Worker] التثبيت...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('[Service Worker] تخزين الملفات في Cache');
        return cache.addAll(FILES_TO_CACHE);
      })
      .then(function() {
        console.log('[Service Worker] تم التثبيت بنجاح');
        return self.skipWaiting(); // تفعيل Service Worker فوراً
      })
  );
});

/* ============ التفعيل (Activate) ============ */
self.addEventListener('activate', function(event) {
  console.log('[Service Worker] التفعيل...');
  
  // حذف الـ caches القديمة
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] حذف Cache قديم:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      console.log('[Service Worker] تم التفعيل بنجاح');
      return self.clients.claim(); // السيطرة على جميع الصفحات فوراً
    })
  );
});

/* ============ اعتراض الطلبات (Fetch) ============ */
self.addEventListener('fetch', function(event) {
  // تجاهل طلبات غير GET
  if (event.request.method !== 'GET') return;
  
  // تجاهل الطلبات الخارجية (مثل Google Fonts)
  if (!event.request.url.startsWith(self.location.origin)) return;
  
  event.respondWith(
    caches.match(event.request)
      .then(function(cachedResponse) {
        if (cachedResponse) {
          // إرجاع النسخة من Cache
          console.log('[Service Worker] إرجاع من Cache:', event.request.url);
          return cachedResponse;
        }
        
        // إذا لم يكن في Cache، جلبه من الشبكة
        return fetch(event.request)
          .then(function(response) {
            // التحقق من صحة الاستجابة
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // نسخ الاستجابة لأنها Stream يمكن استهلاكها مرة واحدة فقط
            var responseToCache = response.clone();
            
            // تخزين الاستجابة في Cache
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(function(error) {
            console.error('[Service Worker] فشل الجلب:', error);
            
            // إرجاع صفحة خطأ مخصصة إذا كانت الصفحة الرئيسية
            if (event.request.mode === 'navigate') {
              return caches.match('../index.html');
            }
          });
      })
  );
});

/* ============ التعامل مع الرسائل ============ */
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});