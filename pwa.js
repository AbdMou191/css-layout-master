/* ============ نظام PWA المحسّن مع زر تحديث ذكي ============ */

(function() {
  'use strict';
  
  var deferredPrompt = null;

  // ========== دالة كشف وضع التطبيق المثبت ==========
  function isStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches || 
           window.navigator.standalone === true; // لدعم iOS
  }

  // ========== دالة إظهار رسالة تنبيه ==========
  function showToast(message, duration) {
    duration = duration || 3000;
    var container = document.getElementById('toastContainer');
    if (!container) return;
    
    var toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    container.appendChild(toast);
    
    // إظهار الرسالة
    setTimeout(function() {
      toast.classList.add('show');
    }, 10);
    
    // إخفاء الرسالة بعد المدة المحددة
    setTimeout(function() {
      toast.classList.remove('show');
      setTimeout(function() {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, duration);
  }

  // ========== تنظيف Service Workers القديمة ==========
  function cleanOldServiceWorkers() {
    if (!('serviceWorker' in navigator)) return;
    
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      registrations.forEach(function(registration) {
        console.log('[PWA] العثور على Service Worker:', registration.scope);
        registration.unregister().then(function() {
          console.log('[PWA] تم إلغاء Service Worker القديم');
        });
      });
    });
  }

  // ========== تسجيل Service Worker ==========
  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) {
      console.warn('Service Worker غير مدعوم');
      return;
    }
    
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
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                showToast('🔄 يتوفر تحديث جديد! أعد تحميل الصفحة.');
              }
            });
          }
        });
      })
      .catch(function(error) {
        console.error('❌ فشل تسجيل Service Worker:', error);
      });
  }

  // ========== زر التحديث اليدوي ==========
  function setupManualRefresh() {
    var refreshBtn = document.getElementById('manualRefreshBtn');
    if (!refreshBtn) return;
    
    // إظهار الزر فقط إذا كان التطبيق مثبتاً
    if (isStandalone()) {
      refreshBtn.style.display = 'flex';
      console.log('[PWA] التطبيق مثبت - إظهار زر التحديث');
    } else {
      refreshBtn.style.display = 'none';
      console.log('[PWA] التطبيق في المتصفح - إخفاء زر التحديث');
    }
    
    // حدث الضغط على الزر
    refreshBtn.addEventListener('click', function() {
      // إضافة تأثير الدوران
      refreshBtn.classList.add('refreshing');
      
      // التحقق من حالة الاتصال
      if (navigator.onLine) {
        console.log('[PWA] متصل بالإنترنت - جاري التحديث...');
        showToast('⏳ جاري التحديث...');
        
        // إعادة تحميل الصفحة (Service Worker سيتحقق من التحديثات)
        setTimeout(function() {
          window.location.reload();
        }, 800);
      } else {
        console.log('[PWA] غير متصل - استخدام النسخة المحفوظة');
        showToast('📴 أنت غير متصل. يتم عرض النسخة المحفوظة.');
        
        // إعادة التحميل - Service Worker سيعيد الصفحة من Cache
        setTimeout(function() {
          refreshBtn.classList.remove('refreshing');
          window.location.reload();
        }, 1500);
      }
    });
  }

  // ========== زر التثبيت ==========
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
      showToast('🎉 تم تثبيت التطبيق بنجاح!');
      console.log('🎉 تم تثبيت التطبيق!');
    });
  }

  // ========== التهيئة ==========
  function initPWA() {
    cleanOldServiceWorkers();
    registerServiceWorker();
    setupManualRefresh();
    createInstallButton();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPWA);
  } else {
    initPWA();
  }
})();