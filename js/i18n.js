/* ============ نظام الترجمة الدولي (i18n) ============ */

var currentLang = 'ar'; // اللغة الافتراضية
var translations = {}; // ستحتوي على جميع الترجمات المحملة

// تحميل ملف لغة ديناميكياً
function loadLanguageFile(langCode, callback) {
  if (translations[langCode]) {
    callback(translations[langCode]);
    return;
  }
  
  var script = document.createElement('script');
  script.src = 'lang/' + langCode + '.js';
  script.onload = function() {
    translations[langCode] = window.TRANSLATIONS[langCode];
    callback(translations[langCode]);
  };
  script.onerror = function() {
    console.error('فشل تحميل ملف اللغة: ' + langCode);
    // في حالة الفشل، استخدم العربية كلغة احتياطية
    if (langCode !== 'ar') {
      loadLanguageFile('ar', callback);
    }
  };
  document.head.appendChild(script);
}

// تطبيق الترجمة على جميع العناصر
function applyTranslations(langData) {
  // تحديث النصوص الثابتة
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (langData[key]) {
      el.innerHTML = langData[key];
    }
  });
  
  // تحديث اتجاه الصفحة
  var dir = (currentLang === 'ar') ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', currentLang);
  
  // تحديث عنوان الصفحة
  document.title = langData.app_title || document.title;
}

// تغيير اللغة
function setLanguage(langCode) {
  currentLang = langCode;
  
  // حفظ اللغة في localStorage
  try {
    localStorage.setItem('preferredLanguage', langCode);
  } catch (e) {
    console.warn('لا يمكن حفظ اللغة في localStorage');
  }
  
  // تحميل وتطبيق اللغة
  loadLanguageFile(langCode, function(langData) {
    applyTranslations(langData);
    
    // إعادة رسم المحتوى الديناميكي
    if (typeof renderLessonList === 'function') {
      renderLessonList();
    }
    if (typeof renderLesson === 'function') {
      renderLesson();
    }
    if (typeof renderChips === 'function') {
      renderChips();
    }
    if (typeof loadChallenge === 'function') {
      loadChallenge();
    }
    if (typeof startQuiz === 'function') {
      startQuiz();
    }
  });
}

// اكتشاف لغة المتصفح
function detectBrowserLanguage() {
  var lang = navigator.language || navigator.userLanguage;
  lang = lang.split('-')[0]; // أخذ الجزء الأول فقط (ar, en, fr)
  
  // التحقق من دعم اللغة
  if (['ar', 'en', 'fr'].indexOf(lang) === -1) {
    lang = 'ar'; // اللغة الافتراضية
  }
  
  return lang;
}

// تهيئة اللغة عند تحميل الصفحة
function initLanguage() {
  var savedLang = null;
  
  // محاولة استرجاع اللغة المحفوظة
  try {
    savedLang = localStorage.getItem('preferredLanguage');
  } catch (e) {
    console.warn('لا يمكن الوصول إلى localStorage');
  }
  
  // تحديد اللغة
  var langToLoad = savedLang || detectBrowserLanguage();
  
  // تحديث محدد اللغة
  var langSelector = document.getElementById('langSelector');
  if (langSelector) {
    langSelector.value = langToLoad;
    langSelector.addEventListener('change', function(e) {
      setLanguage(e.target.value);
    });
  }
  
  // تحميل اللغة
  setLanguage(langToLoad);
}

// بدء تهيئة اللغة عند تحميل DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguage);
} else {
  initLanguage();
}