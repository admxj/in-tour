(function() {
  const DEFAULT_LANG = 'en';
  const STORAGE_KEY = 'china-guide-lang';
  let basePath = '';
  let translations = {};
  let currentLang = DEFAULT_LANG;

  // Detect base path from script tag src, then append "i18n/"
  // e.g. "js/i18n.js"  → basePath = "js/i18n/" (root pages)
  // e.g. "../js/i18n.js" → basePath = "../js/i18n/" (subdir pages)
  const scripts = document.getElementsByTagName('script');
  for (const script of scripts) {
    if (script.src && script.src.includes('i18n.js')) {
      const srcAttr = script.getAttribute('src');
      const matches = srcAttr.match(/\.\.\//g);
      const upLevels = matches ? matches.length : 0;
      basePath = '../'.repeat(upLevels) + 'i18n/';
      break;
    }
  }

  async function loadTranslations(lang) {
    try {
      const url = basePath + lang + '.json';
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to load');
      translations = await res.json();
      currentLang = lang;
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      console.warn('i18n: Could not load ' + lang + '.json (tried: ' + basePath + ')');
    }
  }

  function getNestedValue(obj, path) {
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined) ? o[k] : null, obj);
  }

  function applyTranslations() {
    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = getNestedValue(translations, key);
      if (val) el.textContent = val;
    });

    // HTML content (preserve bold, links, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const val = getNestedValue(translations, key);
      if (val) el.innerHTML = val;
    });

    // Attribute translation (format: "attrName:key")
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const parts = el.getAttribute('data-i18n-attr').split(':');
      if (parts.length === 2) {
        const [attr, key] = parts;
        const val = getNestedValue(translations, key);
        if (val) el.setAttribute(attr, val);
      }
    });

    // Update <html lang> for accessibility and CSS targeting
    document.documentElement.lang = currentLang;
  }

  function createLangSwitcher() {
    const container = document.querySelector('.nav-list');
    if (!container) return;

    const existing = document.querySelector('.lang-toggle');
    if (existing) existing.remove();

    const btn = document.createElement('button');
    btn.className = 'lang-toggle';
    btn.setAttribute('aria-label', 'Switch language');
    btn.textContent = currentLang === 'en' ? '中文' : 'EN';
    btn.addEventListener('click', () => {
      const newLang = currentLang === 'en' ? 'zh' : 'en';
      loadTranslations(newLang).then(() => {
        applyTranslations();
        createLangSwitcher();
      });
    });

    const wrapper = document.createElement('li');
    wrapper.className = 'lang-toggle-wrapper';
    wrapper.appendChild(btn);
    container.appendChild(wrapper);
  }

  // Global API
  window.switchLanguage = function(lang) {
    loadTranslations(lang).then(() => {
      applyTranslations();
      createLangSwitcher();
    });
  };

  // Init: restore saved language or default to English
  const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  loadTranslations(savedLang).then(() => {
    applyTranslations();
    createLangSwitcher();
  });
})();