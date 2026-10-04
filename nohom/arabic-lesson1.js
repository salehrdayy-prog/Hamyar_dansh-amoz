// ============================================================
// درس ۱ عربی نهم — فعل ماضی و مضارع
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده‌های افعال (۱۴ صیغه با معنی فارسی)
  // ============================================================
  const verbs = [
    {
      root: "كَتَبَ", meaning: "نوشتن",
      madi: {
        "هُوَ": { form: "كَتَبَ", fa: "او نوشت" },
        "هُمَا": { form: "كَتَبَا", fa: "آن دو (مذکر) نوشتند" },
        "هُمْ": { form: "كَتَبُوا", fa: "آن‌ها (مذکر) نوشتند" },
        "هِيَ": { form: "كَتَبَتْ", fa: "او (مؤنث) نوشت" },
        "هُمَا (مؤنث)": { form: "كَتَبَتَا", fa: "آن دو (مؤنث) نوشتند" },
        "هُنَّ": { form: "كَتَبْنَ", fa: "آن‌ها (مؤنث) نوشتند" },
        "أَنْتَ": { form: "كَتَبْتَ", fa: "تو (مذکر) نوشتی" },
        "أَنْتُمَا (مذکر)": { form: "كَتَبْتُمَا", fa: "شما دو نفر (مذکر) نوشتید" },
        "أَنْتُمَا (مؤنث)": { form: "كَتَبْتُمَا", fa: "شما دو نفر (مؤنث) نوشتید" },
        "أَنْتُمْ": { form: "كَتَبْتُمْ", fa: "شما (مذکر) نوشتید" },
        "أَنْتِ": { form: "كَتَبْتِ", fa: "تو (مؤنث) نوشتی" },
        "أَنْتُنَّ": { form: "كَتَبْتُنَّ", fa: "شما (مؤنث) نوشتید" },
        "أَنَا": { form: "كَتَبْتُ", fa: "من نوشتم" },
        "نَحْنُ": { form: "كَتَبْنَا", fa: "ما نوشتیم" }
      },
      mozare: {
        "هُوَ": { form: "يَكْتُبُ", fa: "او می‌نویسد" },
        "هُمَا": { form: "يَكْتُبَانِ", fa: "آن دو (مذکر) می‌نویسند" },
        "هُمْ": { form: "يَكْتُبُونَ", fa: "آن‌ها (مذکر) می‌نویسند" },
        "هِيَ": { form: "تَكْتُبُ", fa: "او (مؤنث) می‌نویسد" },
        "هُمَا (مؤنث)": { form: "تَكْتُبَانِ", fa: "آن دو (مؤنث) می‌نویسند" },
        "هُنَّ": { form: "يَكْتُبْنَ", fa: "آن‌ها (مؤنث) می‌نویسند" },
        "أَنْتَ": { form: "تَكْتُبُ", fa: "تو (مذکر) می‌نویسی" },
        "أَنْتُمَا (مذکر)": { form: "تَكْتُبَانِ", fa: "شما دو نفر (مذکر) می‌نویسید" },
        "أَنْتُمَا (مؤنث)": { form: "تَكْتُبَانِ", fa: "شما دو نفر (مؤنث) می‌نویسید" },
        "أَنْتُمْ": { form: "تَكْتُبُونَ", fa: "شما (مذکر) می‌نویسید" },
        "أَنْتِ": { form: "تَكْتُبِينَ", fa: "تو (مؤنث) می‌نویسی" },
        "أَنْتُنَّ": { form: "تَكْتُبْنَ", fa: "شما (مؤنث) می‌نویسید" },
        "أَنَا": { form: "أَكْتُبُ", fa: "من می‌نویسم" },
        "نَحْنُ": { form: "نَكْتُبُ", fa: "ما می‌نویسیم" }
      }
    },
    {
      root: "ذَهَبَ", meaning: "رفتن",
      madi: {
        "هُوَ": { form: "ذَهَبَ", fa: "او رفت" },
        "هُمَا": { form: "ذَهَبَا", fa: "آن دو (مذکر) رفتند" },
        "هُمْ": { form: "ذَهَبُوا", fa: "آن‌ها (مذکر) رفتند" },
        "هِيَ": { form: "ذَهَبَتْ", fa: "او (مؤنث) رفت" },
        "هُمَا (مؤنث)": { form: "ذَهَبَتَا", fa: "آن دو (مؤنث) رفتند" },
        "هُنَّ": { form: "ذَهَبْنَ", fa: "آن‌ها (مؤنث) رفتند" },
        "أَنْتَ": { form: "ذَهَبْتَ", fa: "تو (مذکر) رفتی" },
        "أَنْتُمَا (مذکر)": { form: "ذَهَبْتُمَا", fa: "شما دو نفر (مذکر) رفتید" },
        "أَنْتُمَا (مؤنث)": { form: "ذَهَبْتُمَا", fa: "شما دو نفر (مؤنث) رفتید" },
        "أَنْتُمْ": { form: "ذَهَبْتُمْ", fa: "شما (مذکر) رفتید" },
        "أَنْتِ": { form: "ذَهَبْتِ", fa: "تو (مؤنث) رفتی" },
        "أَنْتُنَّ": { form: "ذَهَبْتُنَّ", fa: "شما (مؤنث) رفتید" },
        "أَنَا": { form: "ذَهَبْتُ", fa: "من رفتم" },
        "نَحْنُ": { form: "ذَهَبْنَا", fa: "ما رفتیم" }
      },
      mozare: {
        "هُوَ": { form: "يَذْهَبُ", fa: "او می‌رود" },
        "هُمَا": { form: "يَذْهَبَانِ", fa: "آن دو (مذکر) می‌روند" },
        "هُمْ": { form: "يَذْهَبُونَ", fa: "آن‌ها (مذکر) می‌روند" },
        "هِيَ": { form: "تَذْهَبُ", fa: "او (مؤنث) می‌رود" },
        "هُمَا (مؤنث)": { form: "تَذْهَبَانِ", fa: "آن دو (مؤنث) می‌روند" },
        "هُنَّ": { form: "يَذْهَبْنَ", fa: "آن‌ها (مؤنث) می‌روند" },
        "أَنْتَ": { form: "تَذْهَبُ", fa: "تو (مذکر) می‌روی" },
        "أَنْتُمَا (مذکر)": { form: "تَذْهَبَانِ", fa: "شما دو نفر (مذکر) می‌روید" },
        "أَنْتُمَا (مؤنث)": { form: "تَذْهَبَانِ", fa: "شما دو نفر (مؤنث) می‌روید" },
        "أَنْتُمْ": { form: "تَذْهَبُونَ", fa: "شما (مذکر) می‌روید" },
        "أَنْتِ": { form: "تَذْهَبِينَ", fa: "تو (مؤنث) می‌روی" },
        "أَنْتُنَّ": { form: "تَذْهَبْنَ", fa: "شما (مؤنث) می‌روید" },
        "أَنَا": { form: "أَذْهَبُ", fa: "من می‌روم" },
        "نَحْنُ": { form: "نَذْهَبُ", fa: "ما می‌رویم" }
      }
    },
    {
      root: "عَلِمَ", meaning: "دانستن",
      madi: {
        "هُوَ": { form: "عَلِمَ", fa: "او دانست" },
        "هُمَا": { form: "عَلِمَا", fa: "آن دو (مذکر) دانستند" },
        "هُمْ": { form: "عَلِمُوا", fa: "آن‌ها (مذکر) دانستند" },
        "هِيَ": { form: "عَلِمَتْ", fa: "او (مؤنث) دانست" },
        "هُمَا (مؤنث)": { form: "عَلِمَتَا", fa: "آن دو (مؤنث) دانستند" },
        "هُنَّ": { form: "عَلِمْنَ", fa: "آن‌ها (مؤنث) دانستند" },
        "أَنْتَ": { form: "عَلِمْتَ", fa: "تو (مذکر) دانستی" },
        "أَنْتُمَا (مذکر)": { form: "عَلِمْتُمَا", fa: "شما دو نفر (مذکر) دانستید" },
        "أَنْتُمَا (مؤنث)": { form: "عَلِمْتُمَا", fa: "شما دو نفر (مؤنث) دانستید" },
        "أَنْتُمْ": { form: "عَلِمْتُمْ", fa: "شما (مذکر) دانستید" },
        "أَنْتِ": { form: "عَلِمْتِ", fa: "تو (مؤنث) دانستی" },
        "أَنْتُنَّ": { form: "عَلِمْتُنَّ", fa: "شما (مؤنث) دانستید" },
        "أَنَا": { form: "عَلِمْتُ", fa: "من دانستم" },
        "نَحْنُ": { form: "عَلِمْنَا", fa: "ما دانستیم" }
      },
      mozare: {
        "هُوَ": { form: "يَعْلَمُ", fa: "او می‌داند" },
        "هُمَا": { form: "يَعْلَمَانِ", fa: "آن دو (مذکر) می‌دانند" },
        "هُمْ": { form: "يَعْلَمُونَ", fa: "آن‌ها (مذکر) می‌دانند" },
        "هِيَ": { form: "تَعْلَمُ", fa: "او (مؤنث) می‌داند" },
        "هُمَا (مؤنث)": { form: "تَعْلَمَانِ", fa: "آن دو (مؤنث) می‌دانند" },
        "هُنَّ": { form: "يَعْلَمْنَ", fa: "آن‌ها (مؤنث) می‌دانند" },
        "أَنْتَ": { form: "تَعْلَمُ", fa: "تو (مذکر) می‌دانی" },
        "أَنْتُمَا (مذکر)": { form: "تَعْلَمَانِ", fa: "شما دو نفر (مذکر) می‌دانید" },
        "أَنْتُمَا (مؤنث)": { form: "تَعْلَمَانِ", fa: "شما دو نفر (مؤنث) می‌دانید" },
        "أَنْتُمْ": { form: "تَعْلَمُونَ", fa: "شما (مذکر) می‌دانید" },
        "أَنْتِ": { form: "تَعْلَمِينَ", fa: "تو (مؤنث) می‌دانی" },
        "أَنْتُنَّ": { form: "تَعْلَمْنَ", fa: "شما (مؤنث) می‌دانید" },
        "أَنَا": { form: "أَعْلَمُ", fa: "من می‌دانم" },
        "نَحْنُ": { form: "نَعْلَمُ", fa: "ما می‌دانیم" }
      }
    },
    {
      root: "نَصَرَ", meaning: "یاری کردن",
      madi: {
        "هُوَ": { form: "نَصَرَ", fa: "او یاری کرد" },
        "هُمَا": { form: "نَصَرَا", fa: "آن دو (مذکر) یاری کردند" },
        "هُمْ": { form: "نَصَرُوا", fa: "آن‌ها (مذکر) یاری کردند" },
        "هِيَ": { form: "نَصَرَتْ", fa: "او (مؤنث) یاری کرد" },
        "هُمَا (مؤنث)": { form: "نَصَرَتَا", fa: "آن دو (مؤنث) یاری کردند" },
        "هُنَّ": { form: "نَصَرْنَ", fa: "آن‌ها (مؤنث) یاری کردند" },
        "أَنْتَ": { form: "نَصَرْتَ", fa: "تو (مذکر) یاری کردی" },
        "أَنْتُمَا (مذکر)": { form: "نَصَرْتُمَا", fa: "شما دو نفر (مذکر) یاری کردید" },
        "أَنْتُمَا (مؤنث)": { form: "نَصَرْتُمَا", fa: "شما دو نفر (مؤنث) یاری کردید" },
        "أَنْتُمْ": { form: "نَصَرْتُمْ", fa: "شما (مذکر) یاری کردید" },
        "أَنْتِ": { form: "نَصَرْتِ", fa: "تو (مؤنث) یاری کردی" },
        "أَنْتُنَّ": { form: "نَصَرْتُنَّ", fa: "شما (مؤنث) یاری کردید" },
        "أَنَا": { form: "نَصَرْتُ", fa: "من یاری کردم" },
        "نَحْنُ": { form: "نَصَرْنَا", fa: "ما یاری کردیم" }
      },
      mozare: {
        "هُوَ": { form: "يَنْصُرُ", fa: "او یاری می‌کند" },
        "هُمَا": { form: "يَنْصُرَانِ", fa: "آن دو (مذکر) یاری می‌کنند" },
        "هُمْ": { form: "يَنْصُرُونَ", fa: "آن‌ها (مذکر) یاری می‌کنند" },
        "هِيَ": { form: "تَنْصُرُ", fa: "او (مؤنث) یاری می‌کند" },
        "هُمَا (مؤنث)": { form: "تَنْصُرَانِ", fa: "آن دو (مؤنث) یاری می‌کنند" },
        "هُنَّ": { form: "يَنْصُرْنَ", fa: "آن‌ها (مؤنث) یاری می‌کنند" },
        "أَنْتَ": { form: "تَنْصُرُ", fa: "تو (مذکر) یاری می‌کنی" },
        "أَنْتُمَا (مذکر)": { form: "تَنْصُرَانِ", fa: "شما دو نفر (مذکر) یاری می‌کنید" },
        "أَنْتُمَا (مؤنث)": { form: "تَنْصُرَانِ", fa: "شما دو نفر (مؤنث) یاری می‌کنید" },
        "أَنْتُمْ": { form: "تَنْصُرُونَ", fa: "شما (مذکر) یاری می‌کنید" },
        "أَنْتِ": { form: "تَنْصُرِينَ", fa: "تو (مؤنث) یاری می‌کنی" },
        "أَنْتُنَّ": { form: "تَنْصُرْنَ", fa: "شما (مؤنث) یاری می‌کنید" },
        "أَنَا": { form: "أَنْصُرُ", fa: "من یاری می‌کنم" },
        "نَحْنُ": { form: "نَنْصُرُ", fa: "ما یاری می‌کنیم" }
      }
    },
    {
      root: "فَتَحَ", meaning: "باز کردن",
      madi: {
        "هُوَ": { form: "فَتَحَ", fa: "او باز کرد" },
        "هُمَا": { form: "فَتَحَا", fa: "آن دو (مذکر) باز کردند" },
        "هُمْ": { form: "فَتَحُوا", fa: "آن‌ها (مذکر) باز کردند" },
        "هِيَ": { form: "فَتَحَتْ", fa: "او (مؤنث) باز کرد" },
        "هُمَا (مؤنث)": { form: "فَتَحَتَا", fa: "آن دو (مؤنث) باز کردند" },
        "هُنَّ": { form: "فَتَحْنَ", fa: "آن‌ها (مؤنث) باز کردند" },
        "أَنْتَ": { form: "فَتَحْتَ", fa: "تو (مذکر) باز کردی" },
        "أَنْتُمَا (مذکر)": { form: "فَتَحْتُمَا", fa: "شما دو نفر (مذکر) باز کردید" },
        "أَنْتُمَا (مؤنث)": { form: "فَتَحْتُمَا", fa: "شما دو نفر (مؤنث) باز کردید" },
        "أَنْتُمْ": { form: "فَتَحْتُمْ", fa: "شما (مذکر) باز کردید" },
        "أَنْتِ": { form: "فَتَحْتِ", fa: "تو (مؤنث) باز کردی" },
        "أَنْتُنَّ": { form: "فَتَحْتُنَّ", fa: "شما (مؤنث) باز کردید" },
        "أَنَا": { form: "فَتَحْتُ", fa: "من باز کردم" },
        "نَحْنُ": { form: "فَتَحْنَا", fa: "ما باز کردیم" }
      },
      mozare: {
        "هُوَ": { form: "يَفْتَحُ", fa: "او باز می‌کند" },
        "هُمَا": { form: "يَفْتَحَانِ", fa: "آن دو (مذکر) باز می‌کنند" },
        "هُمْ": { form: "يَفْتَحُونَ", fa: "آن‌ها (مذکر) باز می‌کنند" },
        "هِيَ": { form: "تَفْتَحُ", fa: "او (مؤنث) باز می‌کند" },
        "هُمَا (مؤنث)": { form: "تَفْتَحَانِ", fa: "آن دو (مؤنث) باز می‌کنند" },
        "هُنَّ": { form: "يَفْتَحْنَ", fa: "آن‌ها (مؤنث) باز می‌کنند" },
        "أَنْتَ": { form: "تَفْتَحُ", fa: "تو (مذکر) باز می‌کنی" },
        "أَنْتُمَا (مذکر)": { form: "تَفْتَحَانِ", fa: "شما دو نفر (مذکر) باز می‌کنید" },
        "أَنْتُمَا (مؤنث)": { form: "تَفْتَحَانِ", fa: "شما دو نفر (مؤنث) باز می‌کنید" },
        "أَنْتُمْ": { form: "تَفْتَحُونَ", fa: "شما (مذکر) باز می‌کنید" },
        "أَنْتِ": { form: "تَفْتَحِينَ", fa: "تو (مؤنث) باز می‌کنی" },
        "أَنْتُنَّ": { form: "تَفْتَحْنَ", fa: "شما (مؤنث) باز می‌کنید" },
        "أَنَا": { form: "أَفْتَحُ", fa: "من باز می‌کنم" },
        "نَحْنُ": { form: "نَفْتَحُ", fa: "ما باز می‌کنیم" }
      }
    },
    {
      root: "سَمِعَ", meaning: "شنیدن",
      madi: {
        "هُوَ": { form: "سَمِعَ", fa: "او شنید" },
        "هُمَا": { form: "سَمِعَا", fa: "آن دو (مذکر) شنیدند" },
        "هُمْ": { form: "سَمِعُوا", fa: "آن‌ها (مذکر) شنیدند" },
        "هِيَ": { form: "سَمِعَتْ", fa: "او (مؤنث) شنید" },
        "هُمَا (مؤنث)": { form: "سَمِعَتَا", fa: "آن دو (مؤنث) شنیدند" },
        "هُنَّ": { form: "سَمِعْنَ", fa: "آن‌ها (مؤنث) شنیدند" },
        "أَنْتَ": { form: "سَمِعْتَ", fa: "تو (مذکر) شنیدی" },
        "أَنْتُمَا (مذکر)": { form: "سَمِعْتُمَا", fa: "شما دو نفر (مذکر) شنیدید" },
        "أَنْتُمَا (مؤنث)": { form: "سَمِعْتُمَا", fa: "شما دو نفر (مؤنث) شنیدید" },
        "أَنْتُمْ": { form: "سَمِعْتُمْ", fa: "شما (مذکر) شنیدید" },
        "أَنْتِ": { form: "سَمِعْتِ", fa: "تو (مؤنث) شنیدی" },
        "أَنْتُنَّ": { form: "سَمِعْتُنَّ", fa: "شما (مؤنث) شنیدید" },
        "أَنَا": { form: "سَمِعْتُ", fa: "من شنیدم" },
        "نَحْنُ": { form: "سَمِعْنَا", fa: "ما شنیدیم" }
      },
      mozare: {
        "هُوَ": { form: "يَسْمَعُ", fa: "او می‌شنود" },
        "هُمَا": { form: "يَسْمَعَانِ", fa: "آن دو (مذکر) می‌شنوند" },
        "هُمْ": { form: "يَسْمَعُونَ", fa: "آن‌ها (مذکر) می‌شنوند" },
        "هِيَ": { form: "تَسْمَعُ", fa: "او (مؤنث) می‌شنود" },
        "هُمَا (مؤنث)": { form: "تَسْمَعَانِ", fa: "آن دو (مؤنث) می‌شنوند" },
        "هُنَّ": { form: "يَسْمَعْنَ", fa: "آن‌ها (مؤنث) می‌شنوند" },
        "أَنْتَ": { form: "تَسْمَعُ", fa: "تو (مذکر) می‌شنوی" },
        "أَنْتُمَا (مذکر)": { form: "تَسْمَعَانِ", fa: "شما دو نفر (مذکر) می‌شنوید" },
        "أَنْتُمَا (مؤنث)": { form: "تَسْمَعَانِ", fa: "شما دو نفر (مؤنث) می‌شنوید" },
        "أَنْتُمْ": { form: "تَسْمَعُونَ", fa: "شما (مذکر) می‌شنوید" },
        "أَنْتِ": { form: "تَسْمَعِينَ", fa: "تو (مؤنث) می‌شنوی" },
        "أَنْتُنَّ": { form: "تَسْمَعْنَ", fa: "شما (مؤنث) می‌شنوید" },
        "أَنَا": { form: "أَسْمَعُ", fa: "من می‌شنوم" },
        "نَحْنُ": { form: "نَسْمَعُ", fa: "ما می‌شنویم" }
      }
    }
  ];

  // ============================================================
  // تب‌ها
  // ============================================================
  document.querySelectorAll('.lesson-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.lesson-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.lesson-section').forEach(s => s.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector(`.lesson-section[data-section="${tab.dataset.tab}"]`).classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  });

  // ============================================================
  // تب ۱: آموزش — دکمه‌های افعال
  // ============================================================
  const verbsGrid = document.getElementById('verbsGrid');
  const conjugationCard = document.getElementById('conjugationCard');
  const verbTitle = document.getElementById('verbTitle');
  const conjugationTable = document.getElementById('conjugationTable');
  let currentVerb = null;
  let currentTense = 'madi';

  verbs.forEach((verb, i) => {
    const btn = document.createElement('button');
    btn.className = 'verb-btn';
    btn.innerHTML = `${verb.root}<span class="meaning">${verb.meaning}</span>`;
    btn.onclick = () => selectVerb(i, btn);
    verbsGrid.appendChild(btn);
  });

  function selectVerb(i, btn) {
    document.querySelectorAll('.verb-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentVerb = verbs[i];
    currentTense = 'madi';
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelector('.tab[data-tense="madi"]').classList.add('active');
    showConjugation();
    conjugationCard.style.display = 'block';
  }

  function showConjugation() {
    if (!currentVerb) return;
    verbTitle.textContent = `صرف «${currentVerb.root}» (${currentVerb.meaning})`;
    const data = currentVerb[currentTense];
    const tenseName = currentTense === 'madi' ? 'ماضی' : 'مضارع';
    let html = `<div class="table-wrapper"><table class="conj-table">
      <thead><tr><th>#</th><th>ضمیر</th><th>${tenseName}</th><th>معنی</th></tr></thead><tbody>`;
    let i = 1;
    for (const [pronoun, obj] of Object.entries(data)) {
      html += `<tr>
        <td>${i}</td>
        <td class="pronoun">${pronoun}</td>
        <td class="arabic">${obj.form}</td>
        <td class="meaning-cell">${obj.fa}</td>
      </tr>`;
      i++;
    }
    html += '</tbody></table></div>';
    conjugationTable.innerHTML = html;
  }

  document.querySelectorAll('.tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentTense = tab.dataset.tense;
      showConjugation();
    };
  });

  // ============================================================
  // تب ۲: جدول‌های روش ساخت
  // ============================================================
  const madiRules = [
    ['۱','هُوَ','ـَ','كَتَبَ','او نوشت'],
    ['۲','هُمَا','ـَا','كَتَبَا','آن دو (مذکر) نوشتند'],
    ['۳','هُمْ','ـُوا','كَتَبُوا','آن‌ها (مذکر) نوشتند'],
    ['۴','هِيَ','ـَتْ','كَتَبَتْ','او (مؤنث) نوشت'],
    ['۵','هُمَا (مؤنث)','ـَتَا','كَتَبَتَا','آن دو (مؤنث) نوشتند'],
    ['۶','هُنَّ','ـْنَ','كَتَبْنَ','آن‌ها (مؤنث) نوشتند'],
    ['۷','أَنْتَ','ـْتَ','كَتَبْتَ','تو (مذکر) نوشتی'],
    ['۸','أَنْتُمَا (مذکر)','ـْتُمَا','كَتَبْتُمَا','شما دو نفر (مذکر) نوشتید'],
    ['۹','أَنْتُمَا (مؤنث)','ـْتُمَا','كَتَبْتُمَا','شما دو نفر (مؤنث) نوشتید'],
    ['۱۰','أَنْتُمْ','ـْتُمْ','كَتَبْتُمْ','شما (مذکر) نوشتید'],
    ['۱۱','أَنْتِ','ـْتِ','كَتَبْتِ','تو (مؤنث) نوشتی'],
    ['۱۲','أَنْتُنَّ','ـْتُنَّ','كَتَبْتُنَّ','شما (مؤنث) نوشتید'],
    ['۱۳','أَنَا','ـْتُ','كَتَبْتُ','من نوشتم'],
    ['۱۴','نَحْنُ','ـْنَا','كَتَبْنَا','ما نوشتیم']
  ];

  const mozareRules = [
    ['۱','هُوَ','ـُ','يَكْتُبُ','او می‌نویسد'],
    ['۲','هُمَا','ـَانِ','يَكْتُبَانِ','آن دو (مذکر) می‌نویسند'],
    ['۳','هُمْ','ـُونَ','يَكْتُبُونَ','آن‌ها (مذکر) می‌نویسند'],
    ['۴','هِيَ','ـُ','تَكْتُبُ','او (مؤنث) می‌نویسد'],
    ['۵','هُمَا (مؤنث)','ـَانِ','تَكْتُبَانِ','آن دو (مؤنث) می‌نویسند'],
    ['۶','هُنَّ','ـْنَ','يَكْتُبْنَ','آن‌ها (مؤنث) می‌نویسند'],
    ['۷','أَنْتَ','ـُ','تَكْتُبُ','تو (مذکر) می‌نویسی'],
    ['۸','أَنْتُمَا (مذکر)','ـَانِ','تَكْتُبَانِ','شما دو نفر (مذکر) می‌نویسید'],
    ['۹','أَنْتُمَا (مؤنث)','ـَانِ','تَكْتُبَانِ','شما دو نفر (مؤنث) می‌نویسید'],
    ['۱۰','أَنْتُمْ','ـُونَ','تَكْتُبُونَ','شما (مذکر) می‌نویسید'],
    ['۱۱','أَنْتِ','ـِينَ','تَكْتُبِينَ','تو (مؤنث) می‌نویسی'],
    ['۱۲','أَنْتُنَّ','ـْنَ','تَكْتُبْنَ','شما (مؤنث) می‌نویسید'],
    ['۱۳','أَنَا','ـُ','أَكْتُبُ','من می‌نویسم'],
    ['۱۴','نَحْنُ','ـُ','نَكْتُبُ','ما می‌نویسیم']
  ];

  function fillRules(tbodyId, rules) {
    const tbody = document.getElementById(tbodyId);
    rules.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${row[0]}</td>
        <td class="pronoun">${row[1]}</td>
        <td class="arabic">${row[2]}</td>
        <td class="arabic">${row[3]}</td>
        <td class="meaning-cell">${row[4]}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  fillRules('madiRulesTable', madiRules);
  fillRules('mozareRulesTable', mozareRules);

  // ============================================================
  // ساخت سؤال تصادفی (۴ نوع)
  // ============================================================
  function makeQuestion() {
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const tense = Math.random() < 0.5 ? 'madi' : 'mozare';
    const pronouns = Object.keys(verb[tense]);
    const pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    const correctObj = verb[tense][pronoun];
    const qType = Math.floor(Math.random() * 4);

    let questionText = '';
    let correctAnswer = '';
    let pool = [];

    if (qType === 0) {
      questionText = `صرف <b>${tense === 'madi' ? 'ماضی' : 'مضارع'}</b> فعل «${verb.root}» برای ضمیر «<b>${pronoun}</b>» چیست؟`;
      correctAnswer = correctObj.form;
      pool = Object.values(verb[tense]).map(o => o.form);
    } else if (qType === 1) {
      questionText = `معنی «<b>${correctObj.form}</b>» چیست؟`;
      correctAnswer = correctObj.fa;
      pool = [...new Set(Object.values(verb[tense]).map(o => o.fa))];
    } else if (qType === 2) {
      questionText = `فعل «<b>${correctObj.form}</b>» مربوط به کدام ضمیر است؟`;
      correctAnswer = pronoun;
      pool = pronouns;
    } else {
      questionText = `کدام فعل معنی «<b>${correctObj.fa}</b>» را می‌دهد؟`;
      correctAnswer = correctObj.form;
      pool = Object.values(verb[tense]).map(o => o.form);
    }

    const options = new Set([correctAnswer]);
    let attempts = 0;
    while (options.size < 4 && attempts < 100) {
      const r = pool[Math.floor(Math.random() * pool.length)];
      if (r) options.add(r);
      attempts++;
    }

    const allForms = verbs.flatMap(v => Object.values(v[tense]).map(o => qType === 1 ? o.fa : o.form));
    while (options.size < 4) {
      options.add(allForms[Math.floor(Math.random() * allForms.length)]);
    }

    return {
      verb, tense, pronoun, correct: correctAnswer,
      options: [...options].sort(() => Math.random() - 0.5),
      questionText
    };
  }

  // ============================================================
  // تب ۳: تمرین
  // ============================================================
  const startPractice = document.getElementById('startPractice');
  const nextPractice = document.getElementById('nextPractice');
  const practiceQuestion = document.getElementById('practiceQuestion');
  const practiceOptions = document.getElementById('practiceOptions');
  const practiceScoreEl = document.getElementById('practiceScore');
  const practiceTotalEl = document.getElementById('practiceTotal');

  let pScore = 0, pTotal = 0, pAnswered = false, pCurrent = null;

  startPractice.onclick = () => {
    pScore = 0; pTotal = 0;
    practiceScoreEl.textContent = 0;
    practiceTotalEl.textContent = 0;
    startPractice.style.display = 'none';
    nextPracticeQuestion();
  };

  function nextPracticeQuestion() {
    pAnswered = false;
    nextPractice.style.display = 'none';
    practiceOptions.innerHTML = '';
    pCurrent = makeQuestion();
    practiceQuestion.innerHTML = pCurrent.questionText;

    pCurrent.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.onclick = () => checkPractice(btn, opt);
      practiceOptions.appendChild(btn);
    });
  }

  function checkPractice(btn, selected) {
    if (pAnswered) return;
    pAnswered = true;
    pTotal++;

    practiceOptions.querySelectorAll('.option-btn').forEach(b => {
      b.disabled = true;
      if (b.textContent === pCurrent.correct) b.classList.add('correct');
    });

    if (selected === pCurrent.correct) {
      pScore++;
      btn.classList.add('correct');
    } else {
      btn.classList.add('wrong');
    }

    practiceScoreEl.textContent = pScore;
    practiceTotalEl.textContent = pTotal;
    nextPractice.style.display = 'block';
  }

  nextPractice.onclick = nextPracticeQuestion;

  // ============================================================
  // تب ۴: آزمون
  // ============================================================
  const startQuiz = document.getElementById('startQuiz');
  const nextQuestion = document.getElementById('nextQuestion');
  const quizQuestion = document.getElementById('quizQuestion');
  const quizOptions = document.getElementById('quizOptions');
  const quizScoreEl = document.getElementById('quizScore');
  const quizTotalEl = document.getElementById('quizTotal');

  let qScore = 0, qTotal = 0, qAnswered = false, qCurrent = null;

  startQuiz.onclick = () => {
    qScore = 0; qTotal = 0;
    quizScoreEl.textContent = 0;
    quizTotalEl.textContent = 0;
    startQuiz.style.display = 'none';
    nextQuizQuestion();
  };

  function nextQuizQuestion() {
    if (qTotal >= 20) {
      quizQuestion.innerHTML = `🎉 آزمون تمام شد!<br>امتیاز: <b>${qScore}</b> از ۲۰`;
      quizOptions.innerHTML = '';
      nextQuestion.style.display = 'none';
      startQuiz.textContent = '🔄 آزمون مجدد';
      startQuiz.style.display = 'block';
      return;
    }

    qAnswered = false;
    nextQuestion.style.display = 'none';
    quizOptions.innerHTML = '';
    qCurrent = makeQuestion();
    quizQuestion.innerHTML = qCurrent.questionText;

    qCurrent.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.onclick = () => checkQuiz(btn, opt);
      quizOptions.appendChild(btn);
    });
  }

  function checkQuiz(btn, selected) {
    if (qAnswered) return;
    qAnswered = true;
    qTotal++;

    quizOptions.querySelectorAll('.option-btn').forEach(b => {
      b.disabled = true;
      if (b.textContent === qCurrent.correct) b.classList.add('correct');
    });

    if (selected === qCurrent.correct) {
      qScore++;
      btn.classList.add('correct');
    } else {
      btn.classList.add('wrong');
    }

    quizScoreEl.textContent = qScore;
    quizTotalEl.textContent = qTotal;
    nextQuestion.style.display = 'block';
  }

  nextQuestion.onclick = nextQuizQuestion;

  // ============================================================
  // تب ۵: بازی (۶۰ ثانیه)
  // ============================================================
  const startGame = document.getElementById('startGame');
  const gameQuestion = document.getElementById('gameQuestion');
  const gameOptions = document.getElementById('gameOptions');
  const timerEl = document.getElementById('timer');
  const gameScoreEl = document.getElementById('gameScore');

  let gTime = 60, gScore = 0, gTimer = null, gRunning = false, gCurrent = null;

  startGame.onclick = () => {
    if (gRunning) return;
    gRunning = true;
    gTime = 60;
    gScore = 0;
    timerEl.textContent = gTime;
    gameScoreEl.textContent = gScore;
    startGame.style.display = 'none';

    gTimer = setInterval(() => {
      gTime--;
      timerEl.textContent = gTime;
      if (gTime <= 0) endGame();
    }, 1000);

    nextGameQuestion();
  };

  function nextGameQuestion() {
    if (!gRunning) return;
    gameOptions.innerHTML = '';
    gCurrent = makeQuestion();
    gameQuestion.innerHTML = gCurrent.questionText;

    gCurrent.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.onclick = () => {
        if (opt === gCurrent.correct) {
          gScore++;
          gameScoreEl.textContent = gScore;
          nextGameQuestion();
        } else {
          btn.classList.add('wrong');
          setTimeout(() => nextGameQuestion(), 400);
        }
      };
      gameOptions.appendChild(btn);
    });
  }

  function endGame() {
    clearInterval(gTimer);
    gRunning = false;
    gameQuestion.innerHTML = `⏰ زمان تمام شد!<br>امتیاز: <b>${gScore}</b>`;
    gameOptions.innerHTML = '';
    startGame.textContent = '🔄 بازی مجدد';
    startGame.style.display = 'block';
  }

  // ============================================================
  // تب ۶: امتحان تعاملی
  // ============================================================
  const examVerbSelect = document.getElementById('examVerbSelect');
  const pronounGrid = document.getElementById('pronounGrid');
  const examResult = document.getElementById('examResult');
  const examVerbDisplay = document.getElementById('examVerbDisplay');
  const examMeaningDisplay = document.getElementById('examMeaningDisplay');
  const examHintDisplay = document.getElementById('examHintDisplay');
  const examTabs = document.querySelectorAll('.exam-tab');

  let examVerb = verbs[0];
  let examTense = 'madi';

  // پر کردن select
  verbs.forEach((v, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `${v.root} (${v.meaning})`;
    examVerbSelect.appendChild(opt);
  });

  function buildPronounGrid() {
    pronounGrid.innerHTML = '';
    const pronouns = Object.keys(examVerb[examTense]);
    pronouns.forEach(p => {
      const btn = document.createElement('button');
      btn.className = 'pronoun-btn';
      btn.textContent = p;
      btn.onclick = () => selectPronoun(p, btn);
      pronounGrid.appendChild(btn);
    });
  }

  function selectPronoun(p, btn) {
    pronounGrid.querySelectorAll('.pronoun-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const data = examVerb[examTense][p];
    examResult.classList.add('filled');
    examVerbDisplay.textContent = data.form;
    examVerbDisplay.classList.remove('show');
    void examVerbDisplay.offsetWidth;
    examVerbDisplay.classList.add('show');
    examMeaningDisplay.textContent = data.fa;
    examHintDisplay.textContent = '';
  }

  function resetExam() {
    examResult.classList.remove('filled');
    examVerbDisplay.textContent = '—';
    examVerbDisplay.classList.remove('show');
    examMeaningDisplay.textContent = '';
    examHintDisplay.textContent = 'یک ضمیر انتخاب کن';
    buildPronounGrid();
  }

  examVerbSelect.onchange = () => {
    examVerb = verbs[parseInt(examVerbSelect.value)];
    resetExam();
  };

  examTabs.forEach(tab => {
    tab.onclick = () => {
      examTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      examTense = tab.dataset.tense;
      resetExam();
    };
  });

  buildPronounGrid();

  // ============================================================
  // افکت کلیک
  // ============================================================
  document.querySelectorAll('.verb-btn, .option-btn, .pronoun-btn').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();