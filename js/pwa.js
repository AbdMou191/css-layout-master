/* ============ تسجيل Service Worker للتطبيق ============ */

function registerServiceWorker() {
  // التحقق من دعم المتصفح لـ Service Worker
  if (!('serviceWorker' in navigator)) {
    console.warn('Service Worker غير مدعوم في هذا المتصفح');
    return;
  }
  
  // تسجيل Service Worker
  navigator.serviceWorker.register('pwa/sw.js')
    .then(function(registration) {
      console.log('✅ Service Worker تم تسجيله بنجاح:', registration.scope);
      
      // التحقق من وجود تحديثات
      registration.addEventListener('updatefound', function() {
        var newWorker = registration.installing;
        
        newWorker.addEventListener('statechange', function() {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // يوجد تحديث جديد متاح
            console.log('🔄 تحديث جديد متاح!');
            
            // يمكن إضافة إشعار للمستخدم هنا
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
  
  // التعامل مع التحديثات
  var refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', function() {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });
}

// بدء تسجيل Service Worker عند تحميل الصفحة
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', registerServiceWorker);
} else {
  registerServiceWorker();
}