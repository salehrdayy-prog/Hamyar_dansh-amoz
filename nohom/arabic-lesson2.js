// ============================================================
// درس ۲ عربی نهم — فعل معتل
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده‌های افعال معتل
  // ============================================================
  const motelVerbs = {
    mithal: [
      {
        root: "وَعَدَ", meaning: "وعده دادن", type: "مثال",
        madi: {
          "هُوَ": { form: "وَعَدَ", fa: "او وعده داد" },
          "هُمَا": { form: "وَعَدَا", fa: "آن دو (مذکر) وعده دادند" },
          "هُمْ": { form: "وَعَدُوا", fa: "آن‌ها (مذکر) وعده دادند" },
          "هِيَ": { form: "وَعَدَتْ", fa: "او (مؤنث) وعده داد" },
          "هُمَا (مؤنث)": { form: "وَعَدَتَا", fa: "آن دو (مؤنث) وعده دادند" },
          "هُنَّ": { form: "وَعَدْنَ", fa: "آن‌ها (مؤنث) وعده دادند" },
          "أَنْتَ": { form: "وَعَدْتَ", fa: "تو (مذکر) وعده دادی" },
          "أَنْتُمَا (مذکر)": { form: "وَعَدْتُمَا", fa: "شما دو نفر (مذکر) وعده دادید" },
          "أَنْتُمَا (مؤنث)": { form: "وَعَدْتُمَا", fa: "شما دو نفر (مؤنث) وعده دادید" },
          "أَنْتُمْ": { form: "وَعَدْتُمْ", fa: "شما (مذکر) وعده دادید" },
          "أَنْتِ": { form: "وَعَدْتِ", fa: "تو (مؤنث) وعده دادی" },
          "أَنْتُنَّ": { form: "وَعَدْتُنَّ", fa: "شما (مؤنث) وعده دادید" },
          "أَنَا": { form: "وَعَدْتُ", fa: "من وعده دادم" },
          "نَحْنُ": { form: "وَعَدْنَا", fa: "ما وعده دادیم" }
        },
        mozare: {
          "هُوَ": { form: "يَعِدُ", fa: "او وعده می‌دهد" },
          "هُمَا": { form: "يَعِدَانِ", fa: "آن دو (مذکر) وعده می‌دهند" },
          "هُمْ": { form: "يَعِدُونَ", fa: "آن‌ها (مذکر) وعده می‌دهند" },
          "هِيَ": { form: "تَعِدُ", fa: "او (مؤنث) وعده می‌دهد" },
          "هُمَا (مؤنث)": { form: "تَعِدَانِ", fa: "آن دو (مؤنث) وعده می‌دهند" },
          "هُنَّ": { form: "يَعِدْنَ", fa: "آن‌ها (مؤنث) وعده می‌دهند" },
          "أَنْتَ": { form: "تَعِدُ", fa: "تو (مذکر) وعده می‌دهی" },
          "أَنْتُمَا (مذکر)": { form: "تَعِدَانِ", fa: "شما دو نفر (مذکر) وعده می‌دهید" },
          "أَنْتُمَا (مؤنث)": { form: "تَعِدَانِ", fa: "شما دو نفر (مؤنث) وعده می‌دهید" },
          "أَنْتُمْ": { form: "تَعِدُونَ", fa: "شما (مذکر) وعده می‌دهید" },
          "أَنْتِ": { form: "تَعِدِينَ", fa: "تو (مؤنث) وعده می‌دهی" },
          "أَنْتُنَّ": { form: "تَعِدْنَ", fa: "شما (مؤنث) وعده می‌دهید" },
          "أَنَا": { form: "أَعِدُ", fa: "من وعده می‌دهم" },
          "نَحْنُ": { form: "نَعِدُ", fa: "ما وعده می‌دهیم" }
        }
      },
      {
        root: "وَصَلَ", meaning: "رسیدن", type: "مثال",
        madi: {
          "هُوَ": { form: "وَصَلَ", fa: "او رسید" },
          "هُمَا": { form: "وَصَلَا", fa: "آن دو (مذکر) رسیدند" },
          "هُمْ": { form: "وَصَلُوا", fa: "آن‌ها (مذکر) رسیدند" },
          "هِيَ": { form: "وَصَلَتْ", fa: "او (مؤنث) رسید" },
          "هُمَا (مؤنث)": { form: "وَصَلَتَا", fa: "آن دو (مؤنث) رسیدند" },
          "هُنَّ": { form: "وَصَلْنَ", fa: "آن‌ها (مؤنث) رسیدند" },
          "أَنْتَ": { form: "وَصَلْتَ", fa: "تو (مذکر) رسیدی" },
          "أَنْتُمَا (مذکر)": { form: "وَصَلْتُمَا", fa: "شما دو نفر (مذکر) رسیدید" },
          "أَنْتُمَا (مؤنث)": { form: "وَصَلْتُمَا", fa: "شما دو نفر (مؤنث) رسیدید" },
          "أَنْتُمْ": { form: "وَصَلْتُمْ", fa: "شما (مذکر) رسیدید" },
          "أَنْتِ": { form: "وَصَلْتِ", fa: "تو (مؤنث) رسیدی" },
          "أَنْتُنَّ": { form: "وَصَلْتُنَّ", fa: "شما (مؤنث) رسیدید" },
          "أَنَا": { form: "وَصَلْتُ", fa: "من رسیدم" },
          "نَحْنُ": { form: "وَصَلْنَا", fa: "ما رسیدیم" }
        },
        mozare: {
          "هُوَ": { form: "يَصِلُ", fa: "او می‌رسد" },
          "هُمَا": { form: "يَصِلَانِ", fa: "آن دو (مذکر) می‌رسند" },
          "هُمْ": { form: "يَصِلُونَ", fa: "آن‌ها (مذکر) می‌رسند" },
          "هِيَ": { form: "تَصِلُ", fa: "او (مؤنث) می‌رسد" },
          "هُمَا (مؤنث)": { form: "تَصِلَانِ", fa: "آن دو (مؤنث) می‌رسند" },
          "هُنَّ": { form: "يَصِلْنَ", fa: "آن‌ها (مؤنث) می‌رسند" },
          "أَنْتَ": { form: "تَصِلُ", fa: "تو (مذکر) می‌رسی" },
          "أَنْتُمَا (مذکر)": { form: "تَصِلَانِ", fa: "شما دو نفر (مذکر) می‌رسید" },
          "أَنْتُمَا (مؤنث)": { form: "تَصِلَانِ", fa: "شما دو نفر (مؤنث) می‌رسید" },
          "أَنْتُمْ": { form: "تَصِلُونَ", fa: "شما (مذکر) می‌رسید" },
          "أَنْتِ": { form: "تَصِلِينَ", fa: "تو (مؤنث) می‌رسی" },
          "أَنْتُنَّ": { form: "تَصِلْنَ", fa: "شما (مؤنث) می‌رسید" },
          "أَنَا": { form: "أَصِلُ", fa: "من می‌رسم" },
          "نَحْنُ": { form: "نَصِلُ", fa: "ما می‌رسیم" }
        }
      },
      {
        root: "يَقِظَ", meaning: "بیدار شدن", type: "مثال",
        madi: {
          "هُوَ": { form: "يَقِظَ", fa: "او بیدار شد" },
          "هُمَا": { form: "يَقِظَا", fa: "آن دو (مذکر) بیدار شدند" },
          "هُمْ": { form: "يَقِظُوا", fa: "آن‌ها (مذکر) بیدار شدند" },
          "هِيَ": { form: "يَقِظَتْ", fa: "او (مؤنث) بیدار شد" },
          "هُمَا (مؤنث)": { form: "يَقِظَتَا", fa: "آن دو (مؤنث) بیدار شدند" },
          "هُنَّ": { form: "يَقِظْنَ", fa: "آن‌ها (مؤنث) بیدار شدند" },
          "أَنْتَ": { form: "يَقِظْتَ", fa: "تو (مذکر) بیدار شدی" },
          "أَنْتُمَا (مذکر)": { form: "يَقِظْتُمَا", fa: "شما دو نفر (مذکر) بیدار شدید" },
          "أَنْتُمَا (مؤنث)": { form: "يَقِظْتُمَا", fa: "شما دو نفر (مؤنث) بیدار شدید" },
          "أَنْتُمْ": { form: "يَقِظْتُمْ", fa: "شما (مذکر) بیدار شدید" },
          "أَنْتِ": { form: "يَقِظْتِ", fa: "تو (مؤنث) بیدار شدی" },
          "أَنْتُنَّ": { form: "يَقِظْتُنَّ", fa: "شما (مؤنث) بیدار شدید" },
          "أَنَا": { form: "يَقِظْتُ", fa: "من بیدار شدم" },
          "نَحْنُ": { form: "يَقِظْنَا", fa: "ما بیدار شدیم" }
        },
        mozare: {
          "هُوَ": { form: "يَيْقَظُ", fa: "او بیدار می‌شود" },
          "هُمَا": { form: "يَيْقَظَانِ", fa: "آن دو (مذکر) بیدار می‌شوند" },
          "هُمْ": { form: "يَيْقَظُونَ", fa: "آن‌ها (مذکر) بیدار می‌شوند" },
          "هِيَ": { form: "تَيْقَظُ", fa: "او (مؤنث) بیدار می‌شود" },
          "هُمَا (مؤنث)": { form: "تَيْقَظَانِ", fa: "آن دو (مؤنث) بیدار می‌شوند" },
          "هُنَّ": { form: "يَيْقَظْنَ", fa: "آن‌ها (مؤنث) بیدار می‌شوند" },
          "أَنْتَ": { form: "تَيْقَظُ", fa: "تو (مذکر) بیدار می‌شوی" },
          "أَنْتُمَا (مذکر)": { form: "تَيْقَظَانِ", fa: "شما دو نفر (مذکر) بیدار می‌شوید" },
          "أَنْتُمَا (مؤنث)": { form: "تَيْقَظَانِ", fa: "شما دو نفر (مؤنث) بیدار می‌شوید" },
          "أَنْتُمْ": { form: "تَيْقَظُونَ", fa: "شما (مذکر) بیدار می‌شوید" },
          "أَنْتِ": { form: "تَيْقَظِينَ", fa: "تو (مؤنث) بیدار می‌شوی" },
          "أَنْتُنَّ": { form: "تَيْقَظْنَ", fa: "شما (مؤنث) بیدار می‌شوید" },
          "أَنَا": { form: "أَيْقَظُ", fa: "من بیدار می‌شوم" },
          "نَحْنُ": { form: "نَيْقَظُ", fa: "ما بیدار می‌شویم" }
        }
      }
    ],
    ajwaf: [
      {
        root: "قَالَ", meaning: "گفتن", type: "اجوف",
        madi: {
          "هُوَ": { form: "قَالَ", fa: "او گفت" },
          "هُمَا": { form: "قَالَا", fa: "آن دو (مذکر) گفتند" },
          "هُمْ": { form: "قَالُوا", fa: "آن‌ها (مذکر) گفتند" },
          "هِيَ": { form: "قَالَتْ", fa: "او (مؤنث) گفت" },
          "هُمَا (مؤنث)": { form: "قَالَتَا", fa: "آن دو (مؤنث) گفتند" },
          "هُنَّ": { form: "قُلْنَ", fa: "آن‌ها (مؤنث) گفتند" },
          "أَنْتَ": { form: "قُلْتَ", fa: "تو (مذکر) گفتی" },
          "أَنْتُمَا (مذکر)": { form: "قُلْتُمَا", fa: "شما دو نفر (مذکر) گفتید" },
          "أَنْتُمَا (مؤنث)": { form: "قُلْتُمَا", fa: "شما دو نفر (مؤنث) گفتید" },
          "أَنْتُمْ": { form: "قُلْتُمْ", fa: "شما (مذکر) گفتید" },
          "أَنْتِ": { form: "قُلْتِ", fa: "تو (مؤنث) گفتی" },
          "أَنْتُنَّ": { form: "قُلْتُنَّ", fa: "شما (مؤنث) گفتید" },
          "أَنَا": { form: "قُلْتُ", fa: "من گفتم" },
          "نَحْنُ": { form: "قُلْنَا", fa: "ما گفتیم" }
        },
        mozare: {
          "هُوَ": { form: "يَقُولُ", fa: "او می‌گوید" },
          "هُمَا": { form: "يَقُولَانِ", fa: "آن دو (مذکر) می‌گویند" },
          "هُمْ": { form: "يَقُولُونَ", fa: "آن‌ها (مذکر) می‌گویند" },
          "هِيَ": { form: "تَقُولُ", fa: "او (مؤنث) می‌گوید" },
          "هُمَا (مؤنث)": { form: "تَقُولَانِ", fa: "آن دو (مؤنث) می‌گویند" },
          "هُنَّ": { form: "يَقُلْنَ", fa: "آن‌ها (مؤنث) می‌گویند" },
          "أَنْتَ": { form: "تَقُولُ", fa: "تو (مذکر) می‌گویی" },
          "أَنْتُمَا (مذکر)": { form: "تَقُولَانِ", fa: "شما دو نفر (مذکر) می‌گویید" },
          "أَنْتُمَا (مؤنث)": { form: "تَقُولَانِ", fa: "شما دو نفر (مؤنث) می‌گویید" },
          "أَنْتُمْ": { form: "تَقُولُونَ", fa: "شما (مذکر) می‌گویید" },
          "أَنْتِ": { form: "تَقُولِينَ", fa: "تو (مؤنث) می‌گویی" },
          "أَنْتُنَّ": { form: "تَقُلْنَ", fa: "شما (مؤنث) می‌گویید" },
          "أَنَا": { form: "أَقُولُ", fa: "من می‌گویم" },
          "نَحْنُ": { form: "نَقُولُ", fa: "ما می‌گوییم" }
        }
      },
      {
        root: "بَاعَ", meaning: "فروختن", type: "اجوف",
        madi: {
          "هُوَ": { form: "بَاعَ", fa: "او فروخت" },
          "هُمَا": { form: "بَاعَا", fa: "آن دو (مذکر) فروختند" },
          "هُمْ": { form: "بَاعُوا", fa: "آن‌ها (مذکر) فروختند" },
          "هِيَ": { form: "بَاعَتْ", fa: "او (مؤنث) فروخت" },
          "هُمَا (مؤنث)": { form: "بَاعَتَا", fa: "آن دو (مؤنث) فروختند" },
          "هُنَّ": { form: "بِعْنَ", fa: "آن‌ها (مؤنث) فروختند" },
          "أَنْتَ": { form: "بِعْتَ", fa: "تو (مذکر) فروختی" },
          "أَنْتُمَا (مذکر)": { form: "بِعْتُمَا", fa: "شما دو نفر (مذکر) فروختید" },
          "أَنْتُمَا (مؤنث)": { form: "بِعْتُمَا", fa: "شما دو نفر (مؤنث) فروختید" },
          "أَنْتُمْ": { form: "بِعْتُمْ", fa: "شما (مذکر) فروختید" },
          "أَنْتِ": { form: "بِعْتِ", fa: "تو (مؤنث) فروختی" },
          "أَنْتُنَّ": { form: "بِعْتُنَّ", fa: "شما (مؤنث) فروختید" },
          "أَنَا": { form: "بِعْتُ", fa: "من فروختم" },
          "نَحْنُ": { form: "بِعْنَا", fa: "ما فروختیم" }
        },
        mozare: {
          "هُوَ": { form: "يَبِيعُ", fa: "او می‌فروشد" },
          "هُمَا": { form: "يَبِيعَانِ", fa: "آن دو (مذکر) می‌فروشند" },
          "هُمْ": { form: "يَبِيعُونَ", fa: "آن‌ها (مذکر) می‌فروشند" },
          "هِيَ": { form: "تَبِيعُ", fa: "او (مؤنث) می‌فروشد" },
          "هُمَا (مؤنث)": { form: "تَبِيعَانِ", fa: "آن دو (مؤنث) می‌فروشند" },
          "هُنَّ": { form: "يَبِعْنَ", fa: "آن‌ها (مؤنث) می‌فروشند" },
          "أَنْتَ": { form: "تَبِيعُ", fa: "تو (مذکر) می‌فروشی" },
          "أَنْتُمَا (مذکر)": { form: "تَبِيعَانِ", fa: "شما دو نفر (مذکر) می‌فروشید" },
          "أَنْتُمَا (مؤنث)": { form: "تَبِيعَانِ", fa: "شما دو نفر (مؤنث) می‌فروشید" },
          "أَنْتُمْ": { form: "تَبِيعُونَ", fa: "شما (مذکر) می‌فروشید" },
          "أَنْتِ": { form: "تَبِيعِينَ", fa: "تو (مؤنث) می‌فروشی" },
          "أَنْتُنَّ": { form: "تَبِعْنَ", fa: "شما (مؤنث) می‌فروشید" },
          "أَنَا": { form: "أَبِيعُ", fa: "من می‌فروشم" },
          "نَحْنُ": { form: "نَبِيعُ", fa: "ما می‌فروشیم" }
        }
      },
      {
        root: "صَامَ", meaning: "روزه گرفتن", type: "اجوف",
        madi: {
          "هُوَ": { form: "صَامَ", fa: "او روزه گرفت" },
          "هُمَا": { form: "صَامَا", fa: "آن دو (مذکر) روزه گرفتند" },
          "هُمْ": { form: "صَامُوا", fa: "آن‌ها (مذکر) روزه گرفتند" },
          "هِيَ": { form: "صَامَتْ", fa: "او (مؤنث) روزه گرفت" },
          "هُمَا (مؤنث)": { form: "صَامَتَا", fa: "آن دو (مؤنث) روزه گرفتند" },
          "هُنَّ": { form: "صُمْنَ", fa: "آن‌ها (مؤنث) روزه گرفتند" },
          "أَنْتَ": { form: "صُمْتَ", fa: "تو (مذکر) روزه گرفتی" },
          "أَنْتُمَا (مذکر)": { form: "صُمْتُمَا", fa: "شما دو نفر (مذکر) روزه گرفتید" },
          "أَنْتُمَا (مؤنث)": { form: "صُمْتُمَا", fa: "شما دو نفر (مؤنث) روزه گرفتید" },
          "أَنْتُمْ": { form: "صُمْتُمْ", fa: "شما (مذکر) روزه گرفتید" },
          "أَنْتِ": { form: "صُمْتِ", fa: "تو (مؤنث) روزه گرفتی" },
          "أَنْتُنَّ": { form: "صُمْتُنَّ", fa: "شما (مؤنث) روزه گرفتید" },
          "أَنَا": { form: "صُمْتُ", fa: "من روزه گرفتم" },
          "نَحْنُ": { form: "صُمْنَا", fa: "ما روزه گرفتیم" }
        },
        mozare: {
          "هُوَ": { form: "يَصُومُ", fa: "او روزه می‌گیرد" },
          "هُمَا": { form: "يَصُومَانِ", fa: "آن دو (مذکر) روزه می‌گیرند" },
          "هُمْ": { form: "يَصُومُونَ", fa: "آن‌ها (مذکر) روزه می‌گیرند" },
          "هِيَ": { form: "تَصُومُ", fa: "او (مؤنث) روزه می‌گیرد" },
          "هُمَا (مؤنث)": { form: "تَصُومَانِ", fa: "آن دو (مؤنث) روزه می‌گیرند" },
          "هُنَّ": { form: "يَصُمْنَ", fa: "آن‌ها (مؤنث) روزه می‌گیرند" },
          "أَنْتَ": { form: "تَصُومُ", fa: "تو (مذکر) روزه می‌گیری" },
          "أَنْتُمَا (مذکر)": { form: "تَصُومَانِ", fa: "شما دو نفر (مذکر) روزه می‌گیرید" },
          "أَنْتُمَا (مؤنث)": { form: "تَصُومَانِ", fa: "شما دو نفر (مؤنث) روزه می‌گیرید" },
          "أَنْتُمْ": { form: "تَصُومُونَ", fa: "شما (مذکر) روزه می‌گیرید" },
          "أَنْتِ": { form: "تَصُومِينَ", fa: "تو (مؤنث) روزه می‌گیری" },
          "أَنْتُنَّ": { form: "تَصُمْنَ", fa: "شما (مؤنث) روزه می‌گیرید" },
          "أَنَا": { form: "أَصُومُ", fa: "من روزه می‌گیرم" },
          "نَحْنُ": { form: "نَصُومُ", fa: "ما روزه می‌گیریم" }
        }
      }
    ],
    naqes: [
      {
        root: "دَعَا", meaning: "صدا زدن", type: "ناقص",
        madi: {
          "هُوَ": { form: "دَعَا", fa: "او صدا زد" },
          "هُمَا": { form: "دَعَوَا", fa: "آن دو (مذکر) صدا زدند" },
          "هُمْ": { form: "دَعَوْا", fa: "آن‌ها (مذکر) صدا زدند" },
          "هِيَ": { form: "دَعَتْ", fa: "او (مؤنث) صدا زد" },
          "هُمَا (مؤنث)": { form: "دَعَتَا", fa: "آن دو (مؤنث) صدا زدند" },
          "هُنَّ": { form: "دَعَوْنَ", fa: "آن‌ها (مؤنث) صدا زدند" },
          "أَنْتَ": { form: "دَعَوْتَ", fa: "تو (مذکر) صدا زدی" },
          "أَنْتُمَا (مذکر)": { form: "دَعَوْتُمَا", fa: "شما دو نفر (مذکر) صدا زدید" },
          "أَنْتُمَا (مؤنث)": { form: "دَعَوْتُمَا", fa: "شما دو نفر (مؤنث) صدا زدید" },
          "أَنْتُمْ": { form: "دَعَوْتُمْ", fa: "شما (مذکر) صدا زدید" },
          "أَنْتِ": { form: "دَعَوْتِ", fa: "تو (مؤنث) صدا زدی" },
          "أَنْتُنَّ": { form: "دَعَوْتُنَّ", fa: "شما (مؤنث) صدا زدید" },
          "أَنَا": { form: "دَعَوْتُ", fa: "من صدا زدم" },
          "نَحْنُ": { form: "دَعَوْنَا", fa: "ما صدا زدیم" }
        },
        mozare: {
          "هُوَ": { form: "يَدْعُو", fa: "او صدا می‌زند" },
          "هُمَا": { form: "يَدْعُوَانِ", fa: "آن دو (مذکر) صدا می‌زنند" },
          "هُمْ": { form: "يَدْعُونَ", fa: "آن‌ها (مذکر) صدا می‌زنند" },
          "هِيَ": { form: "تَدْعُو", fa: "او (مؤنث) صدا می‌زند" },
          "هُمَا (مؤنث)": { form: "تَدْعُوَانِ", fa: "آن دو (مؤنث) صدا می‌زنند" },
          "هُنَّ": { form: "يَدْعُونَ", fa: "آن‌ها (مؤنث) صدا می‌زنند" },
          "أَنْتَ": { form: "تَدْعُو", fa: "تو (مذکر) صدا می‌زنی" },
          "أَنْتُمَا (مذکر)": { form: "تَدْعُوَانِ", fa: "شما دو نفر (مذکر) صدا می‌زنید" },
          "أَنْتُمَا (مؤنث)": { form: "تَدْعُوَانِ", fa: "شما دو نفر (مؤنث) صدا می‌زنید" },
          "أَنْتُمْ": { form: "تَدْعُونَ", fa: "شما (مذکر) صدا می‌زنید" },
          "أَنْتِ": { form: "تَدْعِينَ", fa: "تو (مؤنث) صدا می‌زنی" },
          "أَنْتُنَّ": { form: "تَدْعُونَ", fa: "شما (مؤنث) صدا می‌زنید" },
          "أَنَا": { form: "أَدْعُو", fa: "من صدا می‌زنم" },
          "نَحْنُ": { form: "نَدْعُو", fa: "ما صدا می‌زنیم" }
        }
      },
      {
        root: "رَمَى", meaning: "پرتاب کردن", type: "ناقص",
        madi: {
          "هُوَ": { form: "رَمَى", fa: "او پرتاب کرد" },
          "هُمَا": { form: "رَمَيَا", fa: "آن دو (مذکر) پرتاب کردند" },
          "هُمْ": { form: "رَمَوْا", fa: "آن‌ها (مذکر) پرتاب کردند" },
          "هِيَ": { form: "رَمَتْ", fa: "او (مؤنث) پرتاب کرد" },
          "هُمَا (مؤنث)": { form: "رَمَتَا", fa: "آن دو (مؤنث) پرتاب کردند" },
          "هُنَّ": { form: "رَمَيْنَ", fa: "آن‌ها (مؤنث) پرتاب کردند" },
          "أَنْتَ": { form: "رَمَيْتَ", fa: "تو (مذکر) پرتاب کردی" },
          "أَنْتُمَا (مذکر)": { form: "رَمَيْتُمَا", fa: "شما دو نفر (مذکر) پرتاب کردید" },
          "أَنْتُمَا (مؤنث)": { form: "رَمَيْتُمَا", fa: "شما دو نفر (مؤنث) پرتاب کردید" },
          "أَنْتُمْ": { form: "رَمَيْتُمْ", fa: "شما (مذکر) پرتاب کردید" },
          "أَنْتِ": { form: "رَمَيْتِ", fa: "تو (مؤنث) پرتاب کردی" },
          "أَنْتُنَّ": { form: "رَمَيْتُنَّ", fa: "شما (مؤنث) پرتاب کردید" },
          "أَنَا": { form: "رَمَيْتُ", fa: "من پرتاب کردم" },
          "نَحْنُ": { form: "رَمَيْنَا", fa: "ما پرتاب کردیم" }
        },
        mozare: {
          "هُوَ": { form: "يَرْمِي", fa: "او پرتاب می‌کند" },
          "هُمَا": { form: "يَرْمِيَانِ", fa: "آن دو (مذکر) پرتاب می‌کنند" },
          "هُمْ": { form: "يَرْمُونَ", fa: "آن‌ها (مذکر) پرتاب می‌کنند" },
          "هِيَ": { form: "تَرْمِي", fa: "او (مؤنث) پرتاب می‌کند" },
          "هُمَا (مؤنث)": { form: "تَرْمِيَانِ", fa: "آن دو (مؤنث) پرتاب می‌کنند" },
          "هُنَّ": { form: "يَرْمِينَ", fa: "آن‌ها (مؤنث) پرتاب می‌کنند" },
          "أَنْتَ": { form: "تَرْمِي", fa: "تو (مذکر) پرتاب می‌کنی" },
          "أَنْتُمَا (مذکر)": { form: "تَرْمِيَانِ", fa: "شما دو نفر (مذکر) پرتاب می‌کنید" },
          "أَنْتُمَا (مؤنث)": { form: "تَرْمِيَانِ", fa: "شما دو نفر (مؤنث) پرتاب می‌کنید" },
          "أَنْتُمْ": { form: "تَرْمُونَ", fa: "شما (مذکر) پرتاب می‌کنید" },
          "أَنْتِ": { form: "تَرْمِينَ", fa: "تو (مؤنث) پرتاب می‌کنی" },
          "أَنْتُنَّ": { form: "تَرْمِينَ", fa: "شما (مؤنث) پرتاب می‌کنید" },
          "أَنَا": { form: "أَرْمِي", fa: "من پرتاب می‌کنم" },
          "نَحْنُ": { form: "نَرْمِي", fa: "ما پرتاب می‌کنیم" }
        }
      },
      {
        root: "سَعَى", meaning: "تلاش کردن", type: "ناقص",
        madi: {
          "هُوَ": { form: "سَعَى", fa: "او تلاش کرد" },
          "هُمَا": { form: "سَعَيَا", fa: "آن دو (مذکر) تلاش کردند" },
          "هُمْ": { form: "سَعَوْا", fa: "آن‌ها (مذکر) تلاش کردند" },
          "هِيَ": { form: "سَعَتْ", fa: "او (مؤنث) تلاش کرد" },
          "هُمَا (مؤنث)": { form: "سَعَتَا", fa: "آن دو (مؤنث) تلاش کردند" },
          "هُنَّ": { form: "سَعَيْنَ", fa: "آن‌ها (مؤنث) تلاش کردند" },
          "أَنْتَ": { form: "سَعَيْتَ", fa: "تو (مذکر) تلاش کردی" },
          "أَنْتُمَا (مذکر)": { form: "سَعَيْتُمَا", fa: "شما دو نفر (مذکر) تلاش کردید" },
          "أَنْتُمَا (مؤنث)": { form: "سَعَيْتُمَا", fa: "شما دو نفر (مؤنث) تلاش کردید" },
          "أَنْتُمْ": { form: "سَعَيْتُمْ", fa: "شما (مذکر) تلاش کردید" },
          "أَنْتِ": { form: "سَعَيْتِ", fa: "تو (مؤنث) تلاش کردی" },
          "أَنْتُنَّ": { form: "سَعَيْتُنَّ", fa: "شما (مؤنث) تلاش کردید" },
          "أَنَا": { form: "سَعَيْتُ", fa: "من تلاش کردم" },
          "نَحْنُ": { form: "سَعَيْنَا", fa: "ما تلاش کردیم" }
        },
        mozare: {
          "هُوَ": { form: "يَسْعَى", fa: "او تلاش می‌کند" },
          "هُمَا": { form: "يَسْعَيَانِ", fa: "آن دو (مذکر) تلاش می‌کنند" },
          "هُمْ": { form: "يَسْعَوْنَ", fa: "آن‌ها (مذکر) تلاش می‌کنند" },
          "هِيَ": { form: "تَسْعَى", fa: "او (مؤنث) تلاش می‌کند" },
          "هُمَا (مؤنث)": { form: "تَسْعَيَانِ", fa: "آن دو (مؤنث) تلاش می‌کنند" },
          "هُنَّ": { form: "يَسْعَيْنَ", fa: "آن‌ها (مؤنث) تلاش می‌کنند" },
          "أَنْتَ": { form: "تَسْعَى", fa: "تو (مذکر) تلاش می‌کنی" },
          "أَنْتُمَا (مذکر)": { form: "تَسْعَيَانِ", fa: "شما دو نفر (مذکر) تلاش می‌کنید" },
          "أَنْتُمَا (مؤنث)": { form: "تَسْعَيَانِ", fa: "شما دو نفر (مؤنث) تلاش می‌کنید" },
          "أَنْتُمْ": { form: "تَسْعَوْنَ", fa: "شما (مذکر) تلاش می‌کنید" },
          "أَنْتِ": { form: "تَسْعَيْنَ", fa: "تو (مؤنث) تلاش می‌کنی" },
          "أَنْتُنَّ": { form: "تَسْعَيْنَ", fa: "شما (مؤنث) تلاش می‌کنید" },
          "أَنَا": { form: "أَسْعَى", fa: "من تلاش می‌کنم" },
          "نَحْنُ": { form: "نَسْعَى", fa: "ما تلاش می‌کنیم" }
        }
      }
    ]
  };

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
  // تب ۳: مثال‌ها
  // ============================================================
  const motelVerbList = document.getElementById('motelVerbList');
  const motelConjCard = document.getElementById('motelConjCard');
  const motelVerbTitle = document.getElementById('motelVerbTitle');
  const motelConjTable = document.getElementById('motelConjTable');
  let currentMotelType = 'mithal';
  let currentMotelVerb = null;
  let currentTense = 'madi';

  function renderMotelVerbs(type) {
    motelVerbList.innerHTML = '';
    motelConjCard.style.display = 'none';
    motelVerbs[type].forEach((verb) => {
      const btn = document.createElement('button');
      btn.className = 'verb-btn';
      btn.innerHTML = `${verb.root}<span class="meaning">${verb.meaning}</span><span class="verb-type">${verb.type}</span>`;
      btn.onclick = () => selectMotelVerb(verb, btn);
      motelVerbList.appendChild(btn);
    });
  }

  function selectMotelVerb(verb, btn) {
    document.querySelectorAll('.verb-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentMotelVerb = verb;
    currentTense = 'madi';
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelector('.tab[data-tense="madi"]').classList.add('active');
    showMotelConjugation();
    motelConjCard.style.display = 'block';
  }

  function showMotelConjugation() {
    if (!currentMotelVerb) return;
    motelVerbTitle.textContent = `صرف «${currentMotelVerb.root}» (${currentMotelVerb.meaning}) — ${currentMotelVerb.type}`;
    const data = currentMotelVerb[currentTense];
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
    motelConjTable.innerHTML = html;
  }

  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentMotelType = tab.dataset.type;
      renderMotelVerbs(currentMotelType);
    };
  });

  document.querySelectorAll('.tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentTense = tab.dataset.tense;
      showMotelConjugation();
    };
  });

  renderMotelVerbs('mithal');

  // ============================================================
  // ساخت سؤال تصادفی
  // ============================================================
  const allMotelVerbs = [
    ...motelVerbs.mithal,
    ...motelVerbs.ajwaf,
    ...motelVerbs.naqes
  ];

  function makeQuestion() {
    const verb = allMotelVerbs[Math.floor(Math.random() * allMotelVerbs.length)];
    const tense = Math.random() < 0.5 ? 'madi' : 'mozare';
    const pronouns = Object.keys(verb[tense]);
    const pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    const correctObj = verb[tense][pronoun];
    const qType = Math.floor(Math.random() * 3);

    let questionText = '';
    let correctAnswer = '';
    let pool = [];

    if (qType === 0) {
      questionText = `فعل «<b>${verb.root}</b>» چه نوع فعل معتلی است؟`;
      correctAnswer = verb.type;
      pool = ['مثال', 'اجوف', 'ناقص'];
    } else if (qType === 1) {
      questionText = `صرف <b>${tense === 'madi' ? 'ماضی' : 'مضارع'}</b> فعل «<b>${verb.root}</b>» برای «<b>${pronoun}</b>» چیست؟`;
      correctAnswer = correctObj.form;
      pool = Object.values(verb[tense]).map(o => o.form);
    } else {
      questionText = `معنی «<b>${correctObj.form}</b>» چیست؟`;
      correctAnswer = correctObj.fa;
      pool = [...new Set(Object.values(verb[tense]).map(o => o.fa))];
    }

    const options = new Set([correctAnswer]);
    let attempts = 0;
    while (options.size < 4 && attempts < 100) {
      const r = pool[Math.floor(Math.random() * pool.length)];
      if (r) options.add(r);
      attempts++;
    }

    const allForms = allMotelVerbs.flatMap(v => Object.values(v[tense]).map(o => qType === 2 ? o.fa : o.form));
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
  // تب ۴: تمرین
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
  // تب ۵: آزمون
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
    if (qTotal >= 15) {
      quizQuestion.innerHTML = `🎉 آزمون تمام شد!<br>امتیاز: <b>${qScore}</b> از ۱۵`;
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
  // تب ۶: بازی
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
  // افکت کلیک
  // ============================================================
  document.querySelectorAll('.verb-btn, .option-btn, .motel-tab').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();