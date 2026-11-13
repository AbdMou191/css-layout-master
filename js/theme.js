/* ============ نظام الوضع الليلي - يعمل في جميع الصفحات والتطبيق المثبت ============ */

(function() {
  'use strict';

  // دالة تطبيق الوضع الليلي (تستخدم documentElement ليتطابق مع الكود السحري)
  function applyDarkMode(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // حفظ التفضيل
    try {
      localStorage.setItem('darkMode', isDark);
    } catch (e) {
      console.warn('لا يمكن حفظ الوضع الليلي');
    }
  }

  // دالة تهيئة الوضع الليلي
  function initTheme() {
    var darkToggle = document.getElementById('darkModeToggle');
    
    // التحقق من التفضيل المحفوظ
    var savedDarkMode = null;
    try {
      savedDarkMode = localStorage.getItem('darkMode');
    } catch (e) {
      console.warn('لا يمكن الوصول إلى localStorage');
    }
    
    // ✅ تحديد الوضع الابتدائي (تم تصحيح المنطق المقلوب)
    var isDark = false;
    if (savedDarkMode === 'true') {
      isDark = true;
    } else if (savedDarkMode === 'false') {
      isDark = false;
    } else {
      // استخدام تفضيل النظام إذا لم يكن هناك تفضيل محفوظ
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        isDark = true;
      }
    }
    
    // تطبيق الوضع الابتدائي فوراً
    applyDarkMode(isDark);
    
    // إضافة مستمع الحدث للزر (إن وجد)
    if (darkToggle) {
      darkToggle.addEventListener('click', function(e) {
        e.preventDefault(); // منع أي سلوك افتراضي قد يتداخل
        var currentIsDark = document.documentElement.classList.contains('dark');
        applyDarkMode(!currentIsDark);
      });
    }
    
    // الاستماع لتغييرات تفضيل النظام (لو غير المستخدم إعدادات هاتفه)
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        var saved = null;
        try {
          saved = localStorage.getItem('darkMode');
        } catch (e) {}
        
        // نغير الوضع تلقائياً فقط إذا لم يقم المستخدم بتحديد تفضيل يدوي سابقاً
        if (saved === null) {
          applyDarkMode(e.matches);
        }
      });
    }
  }

  // بدء التهيئة عند تحميل DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();