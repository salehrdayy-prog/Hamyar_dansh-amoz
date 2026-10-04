// ============================================================
//  voice.js — تلفظ صحیح عربی و انگلیسی
//  نسخه نهایی برای همیار دانش‌آموز
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // تنظیمات
  // ============================================================
  const VOICE_CONFIG = {
    ar: { lang: 'ar-SA', rate: 0.7, pitch: 1 },
    en: { lang: 'en-US', rate: 0.8, pitch: 1 }
  };

  // ============================================================
  // نقشه تلفظ عربی (فعل‌ها + ضمایر)
  // ============================================================
  const AR_MAP = {
    // کَتَبَ — ماضی
    "كَتَبَ": "كَتَبَ", "كَتَبَا": "كَتَبا", "كَتَبُوا": "كَتَبوا",
    "كَتَبَتْ": "كَتَبَت", "كَتَبَتَا": "كَتَبَتا", "كَتَبْنَ": "كَتَبنَ",
    "كَتَبْتَ": "كَتَبتَ", "كَتَبْتُمَا": "كَتَبتُما", "كَتَبْتُمْ": "كَتَبتُم",
    "كَتَبْتِ": "كَتَبتِ", "كَتَبْتُنَّ": "كَتَبتُنَّ", "كَتَبْتُ": "كَتَبتُ", "كَتَبْنَا": "كَتَبنا",
    // كَتَبَ — مضارع
    "يَكْتُبُ": "يَكتُبُ", "يَكْتُبَانِ": "يَكتُبانِ", "يَكْتُبُونَ": "يَكتُبونَ",
    "تَكْتُبُ": "تَكتُبُ", "تَكْتُبَانِ": "تَكتُبانِ", "يَكْتُبْنَ": "يَكتُبنَ",
    "تَكْتُبِينَ": "تَكتُبينَ", "أَكْتُبُ": "أَكتُبُ", "نَكْتُبُ": "نَكتُبُ",

    // ذَهَبَ — ماضی
    "ذَهَبَ": "ذَهَبَ", "ذَهَبَا": "ذَهَبا", "ذَهَبُوا": "ذَهَبوا",
    "ذَهَبَتْ": "ذَهَبَت", "ذَهَبَتَا": "ذَهَبَتا", "ذَهَبْنَ": "ذَهَبنَ",
    "ذَهَبْتَ": "ذَهَبتَ", "ذَهَبْتُمَا": "ذَهَبتُما", "ذَهَبْتُمْ": "ذَهَبتُم",
    "ذَهَبْتِ": "ذَهَبتِ", "ذَهَبْتُنَّ": "ذَهَبتُنَّ", "ذَهَبْتُ": "ذَهَبتُ", "ذَهَبْنَا": "ذَهَبنا",
    // ذَهَبَ — مضارع
    "يَذْهَبُ": "يَذهَبُ", "يَذْهَبَانِ": "يَذهَبانِ", "يَذْهَبُونَ": "يَذهَبونَ",
    "تَذْهَبُ": "تَذهَبُ", "تَذْهَبَانِ": "تَذهَبانِ", "يَذْهَبْنَ": "يَذهَبنَ",
    "تَذْهَبِينَ": "تَذهَبينَ", "أَذْهَبُ": "أَذهَبُ", "نَذْهَبُ": "نَذهَبُ",

    // عَلِمَ — ماضی
    "عَلِمَ": "عَلِمَ", "عَلِمَا": "عَلِما", "عَلِمُوا": "عَلِموا",
    "عَلِمَتْ": "عَلِمَت", "عَلِمَتَا": "عَلِمَتا", "عَلِمْنَ": "عَلِمنَ",
    "عَلِمْتَ": "عَلِمتَ", "عَلِمْتُمَا": "عَلِمتُما", "عَلِمْتُمْ": "عَلِمتُم",
    "عَلِمْتِ": "عَلِمتِ", "عَلِمْتُنَّ": "عَلِمتُنَّ", "عَلِمْتُ": "عَلِمتُ", "عَلِمْنَا": "عَلِمنا",
    // عَلِمَ — مضارع
    "يَعْلَمُ": "يَعلَمُ", "يَعْلَمَانِ": "يَعلَمانِ", "يَعْلَمُونَ": "يَعلَمونَ",
    "تَعْلَمُ": "تَعلَمُ", "تَعْلَمَانِ": "تَعلَمانِ", "يَعْلَمْنَ": "يَعلَمنَ",
    "تَعْلَمِينَ": "تَعلَمينَ", "أَعْلَمُ": "أَعلَمُ", "نَعْلَمُ": "نَعلَمُ",

    // نَصَرَ — ماضی
    "نَصَرَ": "نَصَرَ", "نَصَرَا": "نَصَرا", "نَصَرُوا": "نَصَروا",
    "نَصَرَتْ": "نَصَرَت", "نَصَرَتَا": "نَصَرَتا", "نَصَرْنَ": "نَصَرنَ",
    "نَصَرْتَ": "نَصَرتَ", "نَصَرْتُمَا": "نَصَرتُما", "نَصَرْتُمْ": "نَصَرتُم",
    "نَصَرْتِ": "نَصَرتِ", "نَصَرْتُنَّ": "نَصَرتُنَّ", "نَصَرْتُ": "نَصَرتُ", "نَصَرْنَا": "نَصَرنا",
    // نَصَرَ — مضارع
    "يَنْصُرُ": "يَنصُرُ", "يَنْصُرَانِ": "يَنصُرانِ", "يَنْصُرُونَ": "يَنصُرونَ",
    "تَنْصُرُ": "تَنصُرُ", "تَنْصُرَانِ": "تَنصُرانِ", "يَنْصُرْنَ": "يَنصُرنَ",
    "تَنْصُرِينَ": "تَنصُرينَ", "أَنْصُرُ": "أَنصُرُ", "نَنْصُرُ": "نَنصُرُ",

    // فَتَحَ — ماضی
    "فَتَحَ": "فَتَحَ", "فَتَحَا": "فَتَحا", "فَتَحُوا": "فَتَحوا",
    "فَتَحَتْ": "فَتَحَت", "فَتَحَتَا": "فَتَحَتا", "فَتَحْنَ": "فَتَحنَ",
    "فَتَحْتَ": "فَتَحتَ", "فَتَحْتُمَا": "فَتَحتُما", "فَتَحْتُمْ": "فَتَحتُم",
    "فَتَحْتِ": "فَتَحتِ", "فَتَحْتُنَّ": "فَتَحتُنَّ", "فَتَحْتُ": "فَتَحتُ", "فَتَحْنَا": "فَتَحنا",
    // فَتَحَ — مضارع
    "يَفْتَحُ": "يَفتَحُ", "يَفْتَحَانِ": "يَفتَحانِ", "يَفْتَحُونَ": "يَفتَحونَ",
    "تَفْتَحُ": "تَفتَحُ", "تَفْتَحَانِ": "تَفتَحانِ", "يَفْتَحْنَ": "يَفتَحنَ",
    "تَفْتَحِينَ": "تَفتَحينَ", "أَفْتَحُ": "أَفتَحُ", "نَفْتَحُ": "نَفتَحُ",

    // سَمِعَ — ماضی
    "سَمِعَ": "سَمِعَ", "سَمِعَا": "سَمِعا", "سَمِعُوا": "سَمِعوا",
    "سَمِعَتْ": "سَمِعَت", "سَمِعَتَا": "سَمِعَتا", "سَمِعْنَ": "سَمِعna",
    "سَمِعْتَ": "سَمِعتَ", "سَمِعْتُمَا": "سَمِعتُما", "سَمِعْتُمْ": "سَمِعتُم",
    "سَمِعْتِ": "سَمِعتِ", "سَمِعْتُنَّ": "سَمِعتُنَّ", "سَمِعْتُ": "سَمِعتُ", "سَمِعْنَا": "سَمِعنا",
    // سَمِعَ — مضارع
    "يَسْمَعُ": "يَسمَعُ", "يَسْمَعَانِ": "يَسمَعانِ", "يَسْمَعُونَ": "يَسمَعونَ",
    "تَسْمَعُ": "تَسمَعُ", "تَسْمَعَانِ": "تَسمَعانِ", "يَسْمَعْنَ": "يَسمَعنَ",
    "تَسْمَعِينَ": "تَسمَعينَ", "أَسْمَعُ": "أَسمَعُ", "نَسْمَعُ": "نَسمَعُ",

    // ===== افعال معتل =====
    // وَعَدَ
    "وَعَدَ": "وَعَدَ", "وَعَدُوا": "وَعَدوا", "وَعَدَتْ": "وَعَدَت",
    "وَعَدْتُ": "وَعَدتُ", "يَعِدُ": "يَعِدُ", "يَعِدُونَ": "يَعِدونَ",
    "تَعِدُ": "تَعِدُ", "أَعِدُ": "أَعِدُ", "نَعِدُ": "نَعِدُ",

    // وَصَلَ
    "وَصَلَ": "وَصَلَ", "وَصَلُوا": "وَصَلوا", "وَصَلَتْ": "وَصَلَت",
    "وَصَلْتُ": "وَصَلتُ", "يَصِلُ": "يَصِلُ", "يَصِلُونَ": "يَصِلونَ",
    "تَصِلُ": "تَصِلُ", "أَصِلُ": "أَصِلُ", "نَصِلُ": "نَصِلُ",

    // يَقِظَ
    "يَقِظَ": "يَقِظَ", "يَقِظُوا": "يَقِظوا", "يَقِظَتْ": "يَقِظَت",
    "يَقِظْتُ": "يَقِظتُ", "يَيْقَظُ": "يَيْقَظُ", "يَيْقَظُونَ": "يَيْقَظونَ",
    "تَيْقَظُ": "تَيْقَظُ", "أَيْقَظُ": "أَيْقَظُ", "نَيْقَظُ": "نَيْقَظُ",

    // قَالَ
    "قَالَ": "قَالَ", "قَالُوا": "قَالوا", "قَالَتْ": "قَالَت",
    "قُلْتُ": "قُلتُ", "قُلْتَ": "قُلتَ", "قُلْتِ": "قُلتِ",
    "يَقُولُ": "يَقُولُ", "يَقُولُونَ": "يَقُولونَ",
    "تَقُولُ": "تَقُولُ", "أَقُولُ": "أَقُولُ", "نَقُولُ": "نَقُولُ",

    // بَاعَ
    "بَاعَ": "بَاعَ", "بَاعُوا": "بَاعوا", "بَاعَتْ": "بَاعَت",
    "بِعْتُ": "بِعتُ", "بِعْتَ": "بِعتَ", "بِعْتِ": "بِعتِ",
    "يَبِيعُ": "يَبِيعُ", "يَبِيعُونَ": "يَبِيعونَ",
    "تَبِيعُ": "تَبِيعُ", "أَبِيعُ": "أَبِيعُ", "نَبِيعُ": "نَبِيعُ",

    // صَامَ
    "صَامَ": "صَامَ", "صَامُوا": "صَاموا", "صَامَتْ": "صَامَت",
    "صُمْتُ": "صُمتُ", "صُمْتَ": "صُمتَ", "صُمْتِ": "صُمتِ",
    "يَصُومُ": "يَصُومُ", "يَصُومُونَ": "يَصُومونَ",
    "تَصُومُ": "تَصُومُ", "أَصُومُ": "أَصُومُ", "نَصُومُ": "نَصُومُ",

    // دَعَا
    "دَعَا": "دَعَا", "دَعَوْا": "دَعَوا", "دَعَتْ": "دَعَت",
    "دَعَوْتُ": "دَعَوتُ", "يَدْعُو": "يَدعُو", "يَدْعُونَ": "يَدعُونَ",
    "تَدْعُو": "تَدعُو", "أَدْعُو": "أَدعُو", "نَدْعُو": "نَدعُو",

    // رَمَى
    "رَمَى": "رَمَى", "رَمَوْا": "رَمَوا", "رَمَتْ": "رَمَت",
    "رَمَيْتُ": "رَمَيتُ", "يَرْمِي": "يَرمِي", "يَرْمُونَ": "يَرمُونَ",
    "تَرْمِي": "تَرمِي", "أَرْمِي": "أَرمِي", "نَرْمِي": "نَرمِي",

    // سَعَى
    "سَعَى": "سَعَى", "سَعَوْا": "سَعَوا", "سَعَتْ": "سَعَت",
    "سَعَيْتُ": "سَعَيتُ", "يَسْعَى": "يَسعَى", "يَسْعَوْنَ": "يَسعَونَ",
    "تَسْعَى": "تَسعَى", "أَسْعَى": "أَسعَى", "نَسْعَى": "نَسعَى",

    // ===== ضمایر =====
    "هُوَ": "هُوَ", "هُمَا": "هُمَا", "هُمْ": "هُم",
    "هِيَ": "هِيَ", "هُنَّ": "هُنَّ",
    "أَنْتَ": "أَنتَ", "أَنْتِ": "أَنتِ",
    "أَنْتُمْ": "أَنتُم", "أَنْتُنَّ": "أَنتُنَّ",
    "أَنَا": "أَنا", "نَحْنُ": "نَحنُ"
  };

  // ============================================================
  // نقشه تلفظ شناسه‌ها
  // ============================================================
  const AR_SUFFIX = {
    "ـَ": "فتحه", "ـَا": "الف", "ـُوا": "واو",
    "ـَتْ": "تَت", "ـَتَا": "تَتا", "ـْنَ": "نَ",
    "ـْتَ": "تَ", "ـْتُمَا": "تُما", "ـْتُمْ": "تُم",
    "ـْتِ": "تِ", "ـْتُنَّ": "تُنَّ", "ـْتُ": "تُ", "ـْنَا": "نا",
    "ـُ": "ضمه", "ـَانِ": "انی", "ـُونَ": "ونا", "ـِينَ": "ینا",
    "أ": "أَلف", "ت": "تاء", "ی": "یاء", "ي": "یاء", "ن": "نون"
  };

  // ============================================================
  // نقشه تلفظ انگلیسی
  // ============================================================
  const EN_MAP = {
    "hello": "hello", "hi": "hi",
    "book": "book", "pen": "pen", "table": "table",
    "student": "student", "teacher": "teacher",
    "school": "school", "class": "class",
    "morning": "morning", "evening": "evening",
    "good": "good", "bad": "bad",
    "yes": "yes", "no": "no",
    "please": "please", "thanks": "thanks",
    "water": "water", "food": "food",
    "friend": "friend", "family": "family"
  };

  // ============================================================
  // تشخیص پشتیبانی
  // ============================================================
  function isSupported() {
    return 'speechSynthesis' in window;
  }

  // ============================================================
  // کش صداها
  // ============================================================
  const voiceCache = { ar: null, en: null };
  let voicesLoaded = false;

  function getVoice(lang) {
    const key = lang.startsWith('ar') ? 'ar' : 'en';
    if (voiceCache[key]) return voiceCache[key];

    const voices = speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;
    voicesLoaded = true;

    let found = null;
    if (key === 'ar') {
      found = voices.find(v => v.lang === 'ar-SA' && /hamed|maged/i.test(v.name))
           || voices.find(v => v.lang === 'ar-SA')
           || voices.find(v => v.lang === 'ar-EG')
           || voices.find(v => v.lang.startsWith('ar'));
    } else {
      found = voices.find(v => v.lang === 'en-US' && /female|samantha|zira/i.test(v.name))
           || voices.find(v => v.lang === 'en-US')
           || voices.find(v => v.lang === 'en-GB')
           || voices.find(v => v.lang.startsWith('en'));
    }

    if (found) voiceCache[key] = found;
    return found;
  }

  // ============================================================
  // نرمال‌سازی
  // ============================================================
  function normalize(text) {
    if (!text) return '';
    return text
      .replace(/\u200c/g, '')
      .replace(/\u200f/g, '')
      .replace(/\u200e/g, '')
      .replace(/[0-9۰-۹]/g, '')
      .replace(/[#️⃣🎯📝🔊🎮📖🎓✏️📊✅❌🏆📈🔥💯➡️⬅️🔄🗑️⏱️؟?]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // ============================================================
  // پیدا کردن تلفظ
  // ============================================================
  function getPronunciation(text, lang) {
    const clean = normalize(text);
    if (!clean) return '';

    if (lang === 'ar') {
      if (AR_SUFFIX[clean]) return AR_SUFFIX[clean];
      if (AR_MAP[clean]) return AR_MAP[clean];

      // جستجوی جزئی
      for (const [key, val] of Object.entries(AR_MAP)) {
        if (clean === key || clean === key.replace(/[\u064B-\u0652]/g, '')) {
          return val;
        }
      }
    } else {
      const lower = clean.toLowerCase();
      if (EN_MAP[lower]) return EN_MAP[lower];
    }

    return clean;
  }

  // ============================================================
  // تشخیص خودکار زبان
  // ============================================================
  function detectLang(text) {
    // اگر کاراکتر عربی داشت → عربی
    if (/[\u0600-\u06FF]/.test(text)) return 'ar';
    // اگر حرف انگلیسی داشت → انگلیسی
    if (/[a-zA-Z]/.test(text)) return 'en';
    return 'ar'; // پیش‌فرض
  }

  // ============================================================
  // صحبت کردن
  // ============================================================
  function speak(text, lang) {
    if (!isSupported()) {
      console.warn('Web Speech API پشتیبانی نمی‌شود');
      return;
    }

    if (!lang) lang = detectLang(text);
    const cfg = VOICE_CONFIG[lang] || VOICE_CONFIG.ar;

    const pron = getPronunciation(text, lang);
    if (!pron) return;

    try {
      if (speechSynthesis.speaking || speechSynthesis.pending) {
        speechSynthesis.cancel();
      }
    } catch (e) {}

    setTimeout(() => {
      try {
        const utt = new SpeechSynthesisUtterance(pron);
        utt.lang = cfg.lang;
        utt.rate = cfg.rate;
        utt.pitch = cfg.pitch;
        utt.volume = 1;

        const voice = getVoice(cfg.lang);
        if (voice && voice.lang) utt.voice = voice;

        utt.onerror = (e) => {
          if (e.error === 'interrupted' || e.error === 'canceled') return;
          console.warn('خطای تلفظ:', e.error);
        };

        speechSynthesis.speak(utt);
      } catch (err) {
        console.warn('خطا:', err);
      }
    }, 60);
  }

  // ============================================================
  // ساخت دکمه صوتی
  // ============================================================
  function createBtn(text, size = 'small') {
    const btn = document.createElement('button');
    btn.className = 'speak-btn';
    btn.type = 'button';
    btn.innerHTML = '🔊';
    btn.title = 'شنیدن تلفظ';
    btn.dataset.arabic = text;
    btn.dataset.lang = detectLang(text);

    btn.onclick = function(e) {
      e.preventDefault();
      e.stopPropagation();

      btn.style.transform = 'scale(1.3)';
      btn.style.background = 'rgba(76, 175, 80, 0.35)';
      setTimeout(() => {
        btn.style.transform = '';
        btn.style.background = '';
      }, 300);

      speak(text, btn.dataset.lang);
    };

    if (size === 'small') {
      btn.style.cssText = `
        background: rgba(99, 102, 241, 0.08);
        border: 1px solid rgba(99, 102, 241, 0.25);
        border-radius: 50%;
        cursor: pointer;
        font-size: 12px;
        width: 26px;
        height: 26px;
        padding: 0;
        margin-right: 6px;
        transition: 0.2s;
        vertical-align: middle;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      `;
    } else {
      btn.style.cssText = `
        background: rgba(118, 75, 162, 0.1);
        border: 1px solid rgba(118, 75, 162, 0.3);
        border-radius: 50%;
        cursor: pointer;
        font-size: 15px;
        width: 32px;
        height: 32px;
        padding: 0;
        margin-right: 8px;
        transition: 0.2s;
        vertical-align: middle;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      `;
    }

    btn.onmouseenter = () => {
      btn.style.background = 'rgba(118, 75, 162, 0.25)';
      btn.style.transform = 'scale(1.1)';
    };
    btn.onmouseleave = () => {
      btn.style.background = size === 'small'
        ? 'rgba(99, 102, 241, 0.08)'
        : 'rgba(118, 75, 162, 0.1)';
      btn.style.transform = '';
    };

    return btn;
  }

  // ============================================================
  // افزودن خودکار دکمه‌ها به همه عناصر
  // ============================================================
  function autoAttach() {
    // ۱. جدول‌های صرف
    document.querySelectorAll('.conj-table td.arabic').forEach(td => {
      if (td.querySelector('.speak-btn')) return;
      const text = td.innerText.trim();
      if (!text || text === '—') return;
      const btn = createBtn(text, 'small');
      td.insertBefore(btn, td.firstChild);
    });

    // ۲. متن عربی بزرگ
    document.querySelectorAll('.arabic-big').forEach(el => {
      if (el.querySelector('.speak-btn')) return;
      const text = el.innerText.trim();
      if (!text || text === '—' || text === '؟') return;
      const btn = createBtn(text, 'large');
      el.insertBefore(btn, el.firstChild);
    });

    // ۳. دکمه‌های افعال
    document.querySelectorAll('.verb-btn').forEach(btn => {
      if (btn.querySelector('.speak-btn')) return;
      const meaning = btn.querySelector('.meaning');
      const typeEl = btn.querySelector('.verb-type');
      let arabicText = btn.innerText;
      if (meaning) arabicText = arabicText.replace(meaning.innerText, '');
      if (typeEl) arabicText = arabicText.replace(typeEl.innerText, '');
      arabicText = arabicText.trim();
      if (!arabicText) return;
      const speakBtn = createBtn(arabicText, 'small');
      speakBtn.style.position = 'absolute';
      speakBtn.style.top = '6px';
      speakBtn.style.left = '6px';
      speakBtn.style.margin = '0';
      btn.style.position = 'relative';
      btn.appendChild(speakBtn);
    });

    // ۴. گزینه‌های عربی/انگلیسی
    document.querySelectorAll('.option-btn').forEach(btn => {
      if (btn.querySelector('.speak-btn')) return;
      if (btn.disabled) return;
      const text = btn.textContent.trim();
      const isArabic = /[\u0600-\u06FF]/.test(text);
      const isEnglish = /[a-zA-Z]/.test(text) && !isArabic;
      if (!isArabic && !isEnglish) return;
      const speakBtn = createBtn(text, 'small');
      speakBtn.style.position = 'absolute';
      speakBtn.style.top = '6px';
      speakBtn.style.left = '6px';
      speakBtn.style.margin = '0';
      btn.style.position = 'relative';
      btn.appendChild(speakBtn);
    });

    // ۵. ضمایر جدول
    document.querySelectorAll('.conj-table td.pronoun').forEach(td => {
      if (td.querySelector('.speak-btn')) return;
      const text = td.innerText.trim();
      if (!text) return;
      const btn = createBtn(text, 'small');
      td.insertBefore(btn, td.firstChild);
    });

    // ۶. شناسه‌ها
    document.querySelectorAll('#rules .conj-table td.arabic').forEach(td => {
      if (td.querySelector('.speak-btn')) return;
      const text = td.innerText.trim();
      if (!text || text === '—') return;
      if (!text.startsWith('ـ') && text.length > 2) return;
      const btn = createBtn(text, 'small');
      td.insertBefore(btn, td.firstChild);
    });

    // ۷. کارت‌های حروف مضارعه
    document.querySelectorAll('.letter-card .arabic-big').forEach(el => {
      if (el.querySelector('.speak-btn')) return;
      const text = el.innerText.trim();
      if (!text || text.length > 2) return;
      const btn = createBtn(text, 'large');
      btn.style.display = 'block';
      btn.style.margin = '8px auto 0';
      el.appendChild(btn);
    });

    // ۸. کلمات انگلیسی داخل متن
    document.querySelectorAll('.english-word, .en-text').forEach(el => {
      if (el.querySelector('.speak-btn')) return;
      const text = el.innerText.trim();
      if (!text) return;
      const btn = createBtn(text, 'small');
      el.insertBefore(btn, el.firstChild);
    });
  }

  // ============================================================
  // راه‌اندازی
  // ============================================================
  function init() {
    if (!isSupported()) {
      console.warn('Web Speech API پشتیبانی نمی‌شود');
      return;
    }

    // بارگذاری چندباره صداها
    function loadVoices() {
      const voices = speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        voiceCache.ar = null;
        voiceCache.en = null;
        getVoice('ar-SA');
        getVoice('en-US');
      }
    }

    loadVoices();
    setTimeout(loadVoices, 100);
    setTimeout(loadVoices, 500);
    setTimeout(loadVoices, 1500);

    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }

    autoAttach();

    // ناظر برای عناصر جدید
    const observer = new MutationObserver(() => autoAttach());
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // ============================================================
  // API عمومی
  // ============================================================
  window.speakArabic = (text) => speak(text, 'ar');
  window.speakEnglish = (text) => speak(text, 'en');
  window.speakText = (text) => speak(text);
  window.speak = speak;

  // ============================================================
  // اجرا
  // ============================================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();