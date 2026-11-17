
var CACHE_NAME = 'css-layout-cache-v6';

var FILES_TO_CACHE = [
  './',
  './index.html',
  './privacy.html',
  './terms.html',

  './css/style.css',

  './js/app.js',
  './js/i18n.js',
  './js/theme.js',

  './lang/ar.js',
  './lang/en.js',
  './lang/es.js',
  './lang/fr.js',

  './manifest.json',

  './icons/icon-192.jpg',
  './icons/icon-512.jpg'
];

// تثبيت التطبيق وتخزين الملفات الأساسية
self.addEventListener('install', function (event) {

  console.log('[SW] بدء التثبيت');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(FILES_TO_CACHE);
      })
      .then(function () {
        console.log('[SW] تم تخزين الملفات الأساسية');
        return self.skipWaiting();
      })
      .catch(function (error) {
        console.error('[SW] فشل تخزين الملفات:', error);
        throw error;
      })
  );

});

// تفعيل النسخة الجديدة
self.addEventListener('activate', function (event) {

  event.waitUntil(
    caches.keys()
      .then(function (cacheNames) {

        return Promise.all(
          cacheNames.map(function (name) {

            if (
              name.indexOf('css-layout-cache-') === 0 &&
              name !== CACHE_NAME
            ) {
              return caches.delete(name);
            }

          })
        );

      })
      .then(function () {
        return self.clients.claim();
      })
  );

});

// التعامل مع طلبات الملفات
self.addEventListener('fetch', function (event) {

  var request = event.request;

  if (request.method !== 'GET') return;

  var url = new URL(request.url);

  // عدم التدخل في الطلبات الخارجية
  if (url.origin !== self.location.origin) return;

  event.respondWith(

    caches.open(CACHE_NAME)
      .then(function (cache) {

        return cache.match(request)
          .then(function (cachedResponse) {

            if (cachedResponse) {
              console.log('[SW] من Cache:', request.url);
              return cachedResponse;
            }

            return fetch(request)
              .then(function (response) {

                if (
                  response &&
                  response.status === 200 &&
                  response.type === 'basic'
                ) {

                  cache.put(
                    request,
                    response.clone()
                  );

                }

                return response;

              });

          });

      })
      .catch(function (error) {

        console.warn('[SW] تعذر جلب الملف:', request.url);

        if (request.mode === 'navigate') {

          return caches.match('./index.html');

        }

        return new Response(
          'أنت غير متصل بالإنترنت وهذا الملف غير مخزن.',
          {
            status: 503,
            headers: {
              'Content-Type': 'text/plain; charset=utf-8'
            }
          }
        );

      })

  );

});

// استقبال الرسائل
self.addEventListener('message', function (event) {

  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

});
