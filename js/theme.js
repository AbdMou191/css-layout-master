/* ============ نظام الوضع الليلي - يعمل في جميع الصفحات ============ */

(function() {
  'use strict';

  // دالة تطبيق الوضع الليلي
  function applyDarkMode(isDark) {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
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
    
    // تحديد الوضع الابتدائي
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
    
    // تطبيق الوضع الابتدائي
    applyDarkMode(isDark);
    
    // إضافة مستمع الحدث للزر (إن وجد)
    if (darkToggle) {
      darkToggle.addEventListener('click', function() {
        var currentIsDark = document.body.classList.contains('dark');
        applyDarkMode(!currentIsDark);
      });
    }
    
    // الاستماع لتغييرات تفضيل النظام
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        var saved = null;
        try {
          saved = localStorage.getItem('darkMode');
        } catch (e) {}
        
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

})(); // <--- إغلاق الدالة الرئيسية الخارجية بشكل صحيح
