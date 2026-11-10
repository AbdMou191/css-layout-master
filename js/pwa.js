/* ============ نظام PWA المحسّن لـ GitHub Pages ============ */

(function() {
  'use strict';
  
  var deferredPrompt = null;

  function cleanOldServiceWorkers() {
    if (!('serviceWorker' in navigator)) return;
    
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      registrations.forEach(function(registration) {
        console.log('[PWA] العثور على Service Worker:', registration.scope);
        registration.unregister().then(function() {
          console.log('[PWA] تم إلغاء Service Worker القديم بنجاح');
        });
      });
    });
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) {
      console.warn('Service Worker غير مدعوم في هذا المتصفح');
      return;
    }
    
    // ✅ الحل السحري: استخدام ../sw.js بدون تحديد scope
    // هذا يجعل المتصفح يأخذ النطاق الافتراضي للملف (جذر المشروع)
    navigator.serviceWorker.register('/css-layout-master/sw.js')
      .then(function(registration) {
        console.log('✅ تم تسجيل Service Worker بنجاح! النطاق:', registration.scope);
        
        if (registration.installing) {
          console.log('[PWA] حالة Service Worker: جاري التثبيت...');
        } else if (registration.waiting) {
          console.log('[PWA] حالة Service Worker: في الانتظار...');
        } else if (registration.active) {
          console.log('[PWA] حالة Service Worker: نشط ويعمل!');
        }
        
        registration.addEventListener('updatefound', function() {
          var newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', function() {
              console.log('[PWA] تغيرت حالة Service Worker إلى:', newWorker.state);
            });
          }
        });
      })
      .catch(function(error) {
        console.error('❌ فشل تسجيل Service Worker. التفاصيل:', error);
      });
  }

  function createInstallButton() {
    var installButton = document.getElementById('installAppBtn');
    if (!installButton) return;
    
    window.addEventListener('beforeinstallprompt', function(e) {
      e.preventDefault();
      deferredPrompt = e;
      installButton.style.display = 'block';
      console.log('[PWA] زر التثبيت أصبح جاهظاً');
    });
    
    installButton.addEventListener('click', function() {
      if (!deferredPrompt) {
        alert('لتثبيت التطبيق:\n1. اضغط على ⋮ (ثلاث نقاط)\n2. اختر "تثبيت التطبيق" أو "Add to Home Screen"');
        return;
      }
      
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function(choiceResult) {
        if (choiceResult.outcome === 'accepted') {
          console.log('✅ وافق المستخدم على التثبيت');
          installButton.style.display = 'none';
        }
        deferredPrompt = null;
      });
    });
    
    window.addEventListener('appinstalled', function() {
      installButton.style.display = 'none';
      deferredPrompt = null;
      console.log('🎉 تم تثبيت التطبيق بنجاح على الجهاز!');
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