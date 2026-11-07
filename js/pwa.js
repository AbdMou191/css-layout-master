/* ============ نظام PWA المتقدم مع زر تثبيت مخصص ============ */

(function() {
  'use strict';
  
  var deferredPrompt = null;
  var installButton = null;

  // ✅ دالة تنظيف Service Workers القديمة من التطبيقات الأخرى
  function cleanOldServiceWorkers() {
    if (!('serviceWorker' in navigator)) return;
    
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      registrations.forEach(function(registration) {
        // إذا كان Service Worker من تطبيق آخر (MathLinguistic)، ألغه
        if (registration.active && registration.active.scriptURL) {
          var scriptUrl = registration.active.scriptURL;
          // إذا لم يكن من css-layout-master، ألغه
          if (!scriptUrl.includes('css-layout-master')) {
            registration.unregister().then(function() {
              console.log('[PWA] تم إلغاء Service Worker قديم من تطبيق آخر');
            });
          }
        }
      });
    });
  }

  // ✅ دالة تسجيل Service Worker الجديد
  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) {
      console.warn('Service Worker غير مدعوم');
      return;
    }
    
    navigator.serviceWorker.register('./pwa/sw.js')
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

  // ✅ دالة إنشاء زر التثبيت المخصص
  function createInstallButton() {
    // البحث عن زر التثبيت في HTML
    installButton = document.getElementById('installAppBtn');
    if (!installButton) return;
    
    // الاستماع لحدث beforeinstallprompt
    window.addEventListener('beforeinstallprompt', function(e) {
      e.preventDefault();
      deferredPrompt = e;
      
      // إظهار زر التثبيت
      installButton.style.display = 'block';
      console.log('[PWA] زر التثبيت جاهز');
    });
    
    // عند الضغط على زر التثبيت
    installButton.addEventListener('click', function() {
      if (!deferredPrompt) {
        // إذا لم يكن هناك prompt، افتح نافذة التثبيت اليدوية
        alert('لتثبيت التطبيق:\n1. اضغط على ⋮ (ثلاث نقاط) في أعلى المتصفح\n2. اختر "تثبيت التطبيق" أو "Add to Home Screen"');
        return;
      }
      
      deferredPrompt.prompt();
      
      deferredPrompt.userChoice.then(function(choiceResult) {
        if (choiceResult.outcome === 'accepted') {
          console.log('✅ المستخدم قبل التثبيت');
          installButton.style.display = 'none';
        } else {
          console.log('❌ المستخدم رفض التثبيت');
        }
        deferredPrompt = null;
      });
    });
    
    // إخفاء الزر بعد التثبيت
    window.addEventListener('appinstalled', function() {
      installButton.style.display = 'none';
      deferredPrompt = null;
      console.log('🎉 تم تثبيت التطبيق بنجاح!');
    });
  }

  // ✅ التهيئة عند تحميل الصفحة
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
