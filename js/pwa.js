/* ============ نظام PWA المحسّن ============ */

(function() {
  'use strict';
  
  var deferredPrompt = null;

  function cleanOldServiceWorkers() {
    if (!('serviceWorker' in navigator)) return;
    
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      registrations.forEach(function(registration) {
        console.log('[PWA] Service Worker موجود:', registration.scope);
        registration.unregister().then(function() {
          console.log('[PWA] تم إلغاء Service Worker قديم');
        });
      });
    });
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) {
      console.warn('Service Worker غير مدعوم');
      return;
    }
    
    navigator.serviceWorker.register('./sw.js')
      .then(function(registration) {
        console.log('✅ Service Worker تم تسجيله:', registration.scope);
        
        // ✅ التحقق من حالة Service Worker
        if (registration.installing) {
          console.log('[PWA] Service Worker في حالة التثبيت...');
        } else if (registration.waiting) {
          console.log('[PWA] Service Worker في حالة الانتظار...');
        } else if (registration.active) {
          console.log('[PWA] Service Worker نشط ويعمل!');
        }
        
        registration.addEventListener('updatefound', function() {
          var newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', function() {
              console.log('[PWA] حالة Service Worker:', newWorker.state);
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