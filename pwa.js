
(function () {
  'use strict';

  var deferredPrompt = null;

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) {
      console.warn('[PWA] Service Worker غير مدعوم');
      return;
    }

    navigator.serviceWorker.register('./sw.js')
      .then(function (registration) {
        console.log(
          '[PWA] تم التسجيل بنجاح:',
          registration.scope
        );

        if (registration.active) {
          console.log('[PWA] Service Worker نشط');
        }

        registration.addEventListener('updatefound', function () {
          var worker = registration.installing;

          if (worker) {
            worker.addEventListener('statechange', function () {
              console.log(
                '[PWA] حالة Service Worker:',
                worker.state
              );
            });
          }
        });
      })
      .catch(function (error) {
        console.error(
          '[PWA] فشل التسجيل:',
          error
        );
      });
  }

  function createInstallButton() {
    var button = document.getElementById('installAppBtn');

    if (!button) return;

    window.addEventListener('beforeinstallprompt', function (event) {
      event.preventDefault();

      deferredPrompt = event;
      button.style.display = 'block';
    });

    button.addEventListener('click', function () {
      if (!deferredPrompt) {
        alert(
          'لتثبيت التطبيق:\n' +
          '1. افتح قائمة المتصفح\n' +
          '2. اختر تثبيت التطبيق'
        );
        return;
      }

      deferredPrompt.prompt();

      deferredPrompt.userChoice.then(function (result) {
        if (result.outcome === 'accepted') {
          button.style.display = 'none';
        }

        deferredPrompt = null;
      });
    });

    window.addEventListener('appinstalled', function () {
      button.style.display = 'none';
      deferredPrompt = null;
    });
  }

  function initPWA() {
    registerServiceWorker();
    createInstallButton();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPWA);
  } else {
    initPWA();
  }

})();
