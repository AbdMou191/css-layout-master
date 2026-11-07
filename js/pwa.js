/* ============ نظام PWA المتقدم ============ */

(function() {
  'use strict';
  
  var deferredPrompt = null;

  // ✅ دالة تنظيف Service Workers القديمة
  function cleanOldServiceWorkers() {
    if (!('serviceWorker' in navigator)) return;
    
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      registrations.forEach(function(registration) {
        if (registration.active && registration.active.scriptURL) {
          var scriptUrl = registration.active.scriptURL;
          // إلغاء Service Workers التي ليست من css-layout-master
          if (!scriptUrl.includes('css-layout-master/pwa/sw.js')) {
            registration.unregister().then(function() {
              console.log('[PWA] تم إلغاء Service Worker قديم:', scriptUrl);
            });
          }
        }
      });
    });
  }

  // ✅ دالة تسجيل Service Worker
  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) {
      console.warn('Service Worker غير مدعوم');
      return;
    }
    
    // ✅ المسار الصحيح لـ sw.js من موقع js/pwa.js
    navigator.serviceWorker.register('../pwa/sw.js', { scope: '../' })
      .then(function(registration) {
        console.log('✅ Service Worker CSS-Master تم تسجيله:', registration.scope);
        
        registration.addEventListener('updatefound', function() {
          var newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', function() {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('🔄 تحديث جديد متاح!');
              }
            });
          }
        });
      })
      .catch(function(error) {
        console.error('❌ فشل تسجيل Service Worker:', error);
      });
  }

  // ✅ دالة زر التثبيت المخصص
  function createInstallButton() {
    var installButton = document.getElementById('installAppBtn');
    if (!installButton) return;
    
    window.addEventListener('beforeinstallprompt', function(e) {
      e.preventDefault();
      deferredPrompt = e;
      installButton.style.display = 'block';
      console.log('[PWA] زر التثبيت جاهز');
    });
    
    installButton.addEventListener('click', function() {
      if (!deferredPrompt) {
        alert('لتثبيت التطبيق:\n1. اضغط على ⋮ (ثلاث نقاط)\n2. اختر "تثبيت التطبيق"');
        return;
      }
      
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function(choiceResult) {
        if (choiceResult.outcome === 'accepted') {
          console.log('✅ تم قبول التثبيت');
          installButton.style.display = 'none';
        }
        deferredPrompt = null;
      });
    });
    
    window.addEventListener('appinstalled', function() {
      installButton.style.display = 'none';
      deferredPrompt = null;
      console.log('🎉 تم تثبيت التطبيق!');
    });
  }

  // ✅ التهيئة
  function initPWA() {
    cleanOldServiceWorkers();
    registerServiceWorker();
    createInstallButton();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPWA);
  } else {
    initPWA();
  }
})();