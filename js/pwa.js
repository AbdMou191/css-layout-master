/* ============ تسجيل Service Worker للتطبيق ============ */

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    console.warn('Service Worker غير مدعوم في هذا المتصفح');
    return;
  }
  
  // ✅ تنظيف Service Workers القديمة من التطبيقات السابقة
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    registrations.forEach(function(registration) {
      // إذا كان Service Worker قديم (من تطبيق آخر)، ألغه
      if (!registration.active || !registration.active.scriptURL.includes('pwa/sw.js')) {
        registration.unregister();
        console.log('[PWA] تم إلغاء Service Worker قديم');
      }
    });
  });
  
  // تسجيل Service Worker الجديد
  navigator.serviceWorker.register('pwa/sw.js')
    .then(function(registration) {
      console.log('✅ Service Worker v2 تم تسجيله بنجاح:', registration.scope);
      
      registration.addEventListener('updatefound', function() {
        var newWorker = registration.installing;
        
        newWorker.addEventListener('statechange', function() {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            console.log('🔄 تحديث جديد متاح!');
            if (confirm('يتوفر تحديث جديد للتطبيق. هل تريد تحديثه الآن؟')) {
              window.location.reload();
            }
          }
        });
      });
    })
    .catch(function(error) {
      console.error('❌ فشل تسجيل Service Worker:', error);
    });
  
  var refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', function() {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', registerServiceWorker);
} else {
  registerServiceWorker();
}
