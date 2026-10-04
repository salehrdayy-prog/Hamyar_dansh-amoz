// ============================================================
// درس ۱۰ عربی نهم — مرور نهایی و جمع‌بندی
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // جدول‌های خلاصه
  // ============================================================
  const madiRules = [
    ['هُوَ', 'ـَ', 'كَتَبَ', 'او نوشت'],
    ['هُمَا', 'ـَا', 'كَتَبَا', 'آن دو (مذکر)'],
    ['هُمْ', 'ـُوا', 'كَتَبُوا', 'آن‌ها (مذکر)'],
    ['هِيَ', 'ـَتْ', 'كَتَبَتْ', 'او (مؤنث)'],
    ['هُمَا (مؤنث)', 'ـَتَا', 'كَتَبَتَا', 'آن دو (مؤنث)'],
    ['هُنَّ', 'ـْنَ', 'كَتَبْنَ', 'آن‌ها (مؤنث)'],
    ['أَنْتَ', 'ـْتَ', 'كَتَبْتَ', 'تو (مذکر)'],
    ['أَنْتُمَا (مذکر)', 'ـْتُمَا', 'كَتَبْتُمَا', 'شما دو نفر (مذکر)'],
    ['أَنْتُمَا (مؤنث)', 'ـْتُمَا', 'كَتَبْتُمَا', 'شما دو نفر (مؤنث)'],
    ['أَنْتُمْ', 'ـْتُمْ', 'كَتَبْتُمْ', 'شما (مذکر)'],
    ['أَنْتِ', 'ـْتِ', 'كَتَبْتِ', 'تو (مؤنث)'],
    ['أَنْتُنَّ', 'ـْتُنَّ', 'كَتَبْتُنَّ', 'شما (مؤنث)'],
    ['أَنَا', 'ـْتُ', 'كَتَبْتُ', 'من'],
    ['نَحْنُ', 'ـْنَا', 'كَتَبْنَا', 'ما']
  ];

  const mozareRules = [
    ['هُوَ', 'ـُ', 'يَكْتُبُ', 'او می‌نویسد'],
    ['هُمَا', 'ـَانِ', 'يَكْتُبَانِ', 'آن دو (مذکر)'],
    ['هُمْ', 'ـُونَ', 'يَكْتُبُونَ', 'آن‌ها (مذکر)'],
    ['هِيَ', 'ـُ', 'تَكْتُبُ', 'او (مؤنث)'],
    ['هُمَا (مؤنث)', 'ـَانِ', 'تَكْتُبَانِ', 'آن دو (مؤنث)'],
    ['هُنَّ', 'ـْنَ', 'يَكْتُبْنَ', 'آن‌ها (مؤنث)'],
    ['أَنْتَ', 'ـُ', 'تَكْتُبُ', 'تو (مذکر)'],
    ['أَنْتُمَا (مذکر)', 'ـَانِ', 'تَكْتُبَانِ', 'شما دو نفر (مذکر)'],
    ['أَنْتُمَا (مؤنث)', 'ـَانِ', 'تَكْتُبَانِ', 'شما دو نفر (مؤنث)'],
    ['أَنْتُمْ', 'ـُونَ', 'تَكْتُبُونَ', 'شما (مذکر)'],
    ['أَنْتِ', 'ـِينَ', 'تَكْتُبِينَ', 'تو (مؤنث)'],
    ['أَنْتُنَّ', 'ـْنَ', 'تَكْتُبْنَ', 'شما (مؤنث)'],
    ['أَنَا', 'ـُ', 'أَكْتُبُ', 'من'],
    ['نَحْنُ', 'ـُ', 'نَكْتُبُ', 'ما']
  ];

  const nounRules = [
    ['كَتَبَ', 'كاتِب', 'مَكتوب'],
    ['عَلِمَ', 'عالِم', 'مَعلوم'],
    ['نَصَرَ', 'ناصِر', 'مَنصور'],
    ['فَتَحَ', 'فاتِح', 'مَفتوح'],
    ['سَمِعَ', 'سامِع', 'مَسموع'],
    ['أَرسَلَ', 'مُرسِل', 'مُرسَل'],
    ['عَلَّمَ', 'مُعَلِّم', 'مُعَلَّم']
  ];

  const amrRules = [
    ['أَنْتَ', 'اُكْتُبْ', 'لا تَكْتُبْ'],
    ['أَنْتِ', 'اُكْتُبِي', 'لا تَكْتُبِي'],
    ['أَنْتُمَا', 'اُكْتُبَا', 'لا تَكْتُبَا'],
    ['أَنْتُمْ', 'اُكْتُبُوا', 'لا تَكْتُبُوا'],
    ['أَنْتُنَّ', 'اُكْتُبْنَ', 'لا تَكْتُبْنَ']
  ];

  function fillTable(tbodyId, rows, cols) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    rows.forEach(row => {
      const tr = document.createElement('tr');
      let html = '';
      row.forEach((cell, i) => {
        if (i === 0 && (cols === 'pronoun' || i === 0 && tbodyId !== 'nounTable')) {
          html += `<td class="pronoun">${cell}</td>`;
        } else if (/[\u0600-\u06FF]/.test(cell)) {
          html += `<td class="arabic">${cell}</td>`;
        } else {
          html += `<td class="meaning-cell">${cell}</td>`;
        }
      });
      tr.innerHTML = html;
      tbody.appendChild(tr);
    });
  }

  fillTable('madiTable', madiRules);
  fillTable('mozareTable', mozareRules);
  fillTable('nounTable', nounRules);
  fillTable('amrTable', amrRules);

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

      // به‌روزرسانی کارنامه هر بار که تب باز می‌شود
      if (tab.dataset.tab === 'certificate') {
        updateCertificate();
      }
    };
  });

  // ============================================================
  // بانک سؤالات جامع (۳۰ سؤال)
  // ============================================================
  const allQuestions = [
    // ماضی (۵)
    { q: 'صرف ماضی «كَتَبَ» برای «هُمْ»:', correct: 'كَتَبُوا', pool: ['كَتَبُوا', 'يَكْتُبُونَ', 'كَتَبَتْ', 'كَتَبْنَا'] },
    { q: 'صرف ماضی «ذَهَبَ» برای «أَنَا»:', correct: 'ذَهَبْتُ', pool: ['ذَهَبْتُ', 'أَذْهَبُ', 'ذَهَبْنَا', 'ذَهَبَتْ'] },
    { q: 'صرف ماضی «عَلِمَ» برای «أَنْتِ»:', correct: 'عَلِمْتِ', pool: ['عَلِمْتِ', 'عَلِمْتُ', 'تَعْلَمِينَ', 'عَلِمْنَ'] },
    { q: 'صرف ماضی «نَصَرَ» برای «هُنَّ»:', correct: 'نَصَرْنَ', pool: ['نَصَرْنَ', 'يَنْصُرْنَ', 'نَصَرُوا', 'نَصَرَتْ'] },
    { q: 'صرف ماضی «فَتَحَ» برای «أَنْتُمْ»:', correct: 'فَتَحْتُمْ', pool: ['فَتَحْتُمْ', 'تَفْتَحُونَ', 'فَتَحُوا', 'فَتَحْنَا'] },

    // مضارع (۵)
    { q: 'صرف مضارع «سَمِعَ» برای «هِيَ»:', correct: 'تَسْمَعُ', pool: ['تَسْمَعُ', 'يَسْمَعُ', 'سَمِعَتْ', 'تَسْمَعِينَ'] },
    { q: 'صرف مضارع «نَصَرَ» برای «نَحْنُ»:', correct: 'نَنْصُرُ', pool: ['نَنْصُرُ', 'أَنْصُرُ', 'نَصَرْنَا', 'يَنْصُرُونَ'] },
    { q: 'صرف مضارع «كَتَبَ» برای «أَنْتَ»:', correct: 'تَكْتُبُ', pool: ['تَكْتُبُ', 'يَكْتُبُ', 'أَكْتُبُ', 'كَتَبْتَ'] },
    { q: 'صرف مضارع «ذَهَبَ» برای «أَنْتِ»:', correct: 'تَذْهَبِينَ', pool: ['تَذْهَبِينَ', 'تَذْهَبُ', 'يَذْهَبُونَ', 'ذَهَبْتِ'] },
    { q: 'صرف مضارع «عَلِمَ» برای «هُمْ»:', correct: 'يَعْلَمُونَ', pool: ['يَعْلَمُونَ', 'تَعْلَمُونَ', 'عَلِمُوا', 'يَعْلَمْنَ'] },

    // معنی (۴)
    { q: 'معنی «يَكْتُبُونَ»:', correct: 'آن‌ها (مذکر) می‌نویسند', pool: ['آن‌ها (مذکر) می‌نویسند', 'شما می‌نویسید', 'آن دو می‌نویسند', 'او می‌نویسد'] },
    { q: 'معنی «كَتَبْتُنَّ»:', correct: 'شما (مؤنث) نوشتید', pool: ['شما (مؤنث) نوشتید', 'شما (مذکر) نوشتید', 'آن‌ها (مؤنث) نوشتند', 'من نوشتم'] },
    { q: 'معنی «نَصَرَ»:', correct: 'یاری کرد', pool: ['یاری کرد', 'یاری می‌کند', 'نوشت', 'دانست'] },
    { q: 'معنی «يَذْهَبُ»:', correct: 'می‌رود', pool: ['می‌رود', 'رفت', 'می‌نویسد', 'دانست'] },

    // معتل (۳)
    { q: 'نوع فعل «وَعَدَ»:', correct: 'مثال', pool: ['مثال', 'اجوف', 'ناقص', 'صحیح'] },
    { q: 'نوع فعل «قَالَ»:', correct: 'اجوف', pool: ['اجوف', 'مثال', 'ناقص', 'صحیح'] },
    { q: 'نوع فعل «دَعَا»:', correct: 'ناقص', pool: ['ناقص', 'مثال', 'اجوف', 'صحیح'] },

    // امر و نهی (۳)
    { q: 'امر «كَتَبَ» برای «أَنْتَ»:', correct: 'اُكْتُبْ', pool: ['اُكْتُبْ', 'لا تَكْتُبْ', 'يَكْتُبُ', 'كاتِب'] },
    { q: 'نهی «ذَهَبَ» برای «أَنْتَ»:', correct: 'لا تَذْهَبْ', pool: ['لا تَذْهَبْ', 'اِذْهَبْ', 'يَذْهَبُ', 'لا يَذْهَبُ'] },
    { q: 'امر غایب «كَتَبَ» برای «هُوَ»:', correct: 'لِيَكْتُبْ', pool: ['لِيَكْتُبْ', 'لِتَكْتُبْ', 'اُكْتُبْ', 'لا تَكْتُبْ'] },

    // اسم فاعل و مفعول (۳)
    { q: 'اسم فاعل «نَصَرَ»:', correct: 'ناصِر', pool: ['ناصِر', 'مَنصور', 'نَصير', 'يَنْصُرُ'] },
    { q: 'اسم مفعول «كَتَبَ»:', correct: 'مَكتوب', pool: ['مَكتوب', 'كاتِب', 'كِتاب', 'يَكتُبُ'] },
    { q: 'اسم فاعل «أَرسَلَ»:', correct: 'مُرسِل', pool: ['مُرسِل', 'مُرسَل', 'راسِل', 'مَرسول'] },

    // ترجمه (۳)
    { q: 'ترجمه «العِلمُ نورٌ»:', correct: 'دانش نور است', pool: ['دانش نور است', 'نور دانش است', 'دانا نور است', 'دانش در نور'] },
    { q: 'ترجمه «ذَهَبَ الطّالِبُ»:', correct: 'دانش‌آموز رفت', pool: ['دانش‌آموز رفت', 'دانش‌آموز می‌رود', 'دانش‌آموز نوشت', 'معلم رفت'] },
    { q: 'ترجمه «الصَّلاةُ عِمادُ الدّينِ»:', correct: 'نماز ستون دین است', pool: ['نماز ستون دین است', 'دین ستون نماز است', 'نماز در دین است', 'نماز دین است'] },

    // قواعد پیشرفته (۴)
    { q: 'در «كِتابُ الطّالِبِ» مضاف کدام است؟', correct: 'كِتابُ', pool: ['كِتابُ', 'الطّالِبِ', 'كِتابُ الطّالِبِ', 'ال'] },
    { q: 'در «طالِبٌ مُجتَهِدٌ» صفت کدام است؟', correct: 'مُجتَهِدٌ', pool: ['مُجتَهِدٌ', 'طالِبٌ', 'طالِبٌ مُجتَهِدٌ', 'هیچکدام'] },
    { q: 'در «العِلمُ نورٌ» مبتدا کدام است؟', correct: 'العِلمُ', pool: ['العِلمُ', 'نورٌ', 'العِلمُ نورٌ', 'هیچکدام'] },
    { q: 'کدام کلمه معرفه است؟', correct: 'المَدرَسَةُ', pool: ['المَدرَسَةُ', 'مَدرَسَةٌ', 'مَدرَسَةُ وَلَدٍ', 'مَدرَسَتانِ'] }
  ];

  function makeQuestion() {
    const q = allQuestions[Math.floor(Math.random() * allQuestions.length)];
    return {
      questionText: q.q,
      correct: q.correct,
      options: [...q.pool].sort(() => Math.random() - 0.5)
    };
  }

  // ============================================================
  // تب ۳: آزمون نهایی (۳۰ سؤال)
  // ============================================================
  const startFinalExam = document.getElementById('startFinalExam');
  const nextFinalQuestion = document.getElementById('nextFinalQuestion');
  const finalExamQuestion = document.getElementById('finalExamQuestion');
  const finalExamOptions = document.getElementById('finalExamOptions');
  const finalScoreEl = document.getElementById('finalScore');
  const finalTotalEl = document.getElementById('finalTotal');
  const examProgress = document.getElementById('examProgress');

  let fScore = 0, fTotal = 0, fAnswered = false, fCurrent = null;
  const FINAL_TOTAL = 30;

  startFinalExam.onclick = () => {
    fScore = 0; fTotal = 0;
    finalScoreEl.textContent = 0;
    finalTotalEl.textContent = 0;
    examProgress.style.width = '0%';
    startFinalExam.style.display = 'none';
    nextFinalQuestionFunc();
  };

  function nextFinalQuestionFunc() {
    if (fTotal >= FINAL_TOTAL) {
      // پایان آزمون
      const percent = Math.round((fScore / FINAL_TOTAL) * 100);
      let level = 'مبتدی';
      if (percent >= 90) level = 'استاد 🏆';
      else if (percent >= 75) level = 'پیشرفته ⭐';
      else if (percent >= 50) level = 'متوسط 👍';
      else if (percent >= 30) level = 'در حال یادگیری 📚';

      finalExamQuestion.innerHTML = `🎉 آزمون تمام شد!<br>امتیاز: <b>${fScore}</b> از ${FINAL_TOTAL}<br>درصد: <b>${percent}%</b><br>سطح: <b>${level}</b>`;
      finalExamOptions.innerHTML = '';
      nextFinalQuestion.style.display = 'none';
      startFinalExam.textContent = '🔄 آزمون مجدد';
      startFinalExam.style.display = 'block';
      examProgress.style.width = '100%';

      // ذخیره نتایج
      saveFinalResult(fScore, FINAL_TOTAL, level);
      return;
    }

    fAnswered = false;
    nextFinalQuestion.style.display = 'none';
    finalExamOptions.innerHTML = '';
    fCurrent = makeQuestion();
    finalExamQuestion.innerHTML = `<div style="font-size:0.85em;color:#999;margin-bottom:6px;">سؤال ${fTotal + 1} از ${FINAL_TOTAL}</div>${fCurrent.questionText}`;

    examProgress.style.width = `${(fTotal / FINAL_TOTAL) * 100}%`;

    fCurrent.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.onclick = () => checkFinal(btn, opt);
      finalExamOptions.appendChild(btn);
    });
  }

  function checkFinal(btn, selected) {
    if (fAnswered) return;
    fAnswered = true;
    fTotal++;

    finalExamOptions.querySelectorAll('.option-btn').forEach(b => {
      b.disabled = true;
      if (b.textContent === fCurrent.correct) b.classList.add('correct');
    });

    if (selected === fCurrent.correct) {
      fScore++;
      btn.classList.add('correct');
    } else {
      btn.classList.add('wrong');
    }

    finalScoreEl.textContent = fScore;
    finalTotalEl.textContent = fTotal;
    nextFinalQuestion.style.display = 'block';
  }

  nextFinalQuestion.onclick = nextFinalQuestionFunc;

  // ============================================================
  // ذخیره نتایج
  // ============================================================
  function saveFinalResult(score, total, level) {
    try {
      const data = JSON.parse(localStorage.getItem('arabicFinal') || '{}');
      const oldBest = data.bestScore || 0;
      data.bestScore = Math.max(oldBest, score);
      data.total = total;
      data.lastScore = score;
      data.lastLevel = level;
      data.lastDate = new Date().toLocaleDateString('fa-IR');
      localStorage.setItem('arabicFinal', JSON.stringify(data));
    } catch (e) {
      console.warn('خطا در ذخیره:', e);
    }
  }

  // ============================================================
  // تب ۴: بازی نهایی (۱۲۰ ثانیه)
  // ============================================================
  const startGame = document.getElementById('startGame');
  const gameQuestion = document.getElementById('gameQuestion');
  const gameOptions = document.getElementById('gameOptions');
  const timerEl = document.getElementById('timer');
  const gameScoreEl = document.getElementById('gameScore');

  let gTime = 120, gScore = 0, gTimer = null, gRunning = false, gCurrent = null;

  startGame.onclick = () => {
    if (gRunning) return;
    gRunning = true;
    gTime = 120;
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
    gameQuestion.innerHTML = `⏰ زمان تمام شد!<br>امتیاز نهایی: <b>${gScore}</b>`;

    try {
      const data = JSON.parse(localStorage.getItem('arabicFinal') || '{}');
      const oldBest = data.bestGame || 0;
      data.bestGame = Math.max(oldBest, gScore);
      localStorage.setItem('arabicFinal', JSON.stringify(data));
    } catch (e) {}

    gameOptions.innerHTML = '';
    startGame.textContent = '🔄 بازی مجدد';
    startGame.style.display = 'block';
  }

  // ============================================================
  // تب ۵: کارنامه
  // ============================================================
  function updateCertificate() {
    try {
      const data = JSON.parse(localStorage.getItem('arabicFinal') || '{}');

      const certScore = document.getElementById('certScore');
      const certLevel = document.getElementById('certLevel');
      const certLessons = document.getElementById('certLessons');
      const certGameBest = document.getElementById('certGameBest');
      const certMessage = document.getElementById('certMessage');

      if (data.lastScore !== undefined && data.total) {
        const percent = Math.round((data.lastScore / data.total) * 100);
        certScore.textContent = `${data.lastScore}/${data.total} (${percent}%)`;
        certLevel.textContent = data.lastLevel || '—';
        certLessons.textContent = '۱۰ درس';
        certGameBest.textContent = data.bestGame || 0;

        let msg = '';
        if (percent >= 90) msg = '🏆 عالی! تو استاد عربی هستی!';
        else if (percent >= 75) msg = '⭐ خیلی خوب! تسلط خوبی داری.';
        else if (percent >= 50) msg = '👍 خوب! با کمی تمرین بهتر می‌شوی.';
        else msg = '📚 اشکالی نداره! بازم تلاش کن.';
        certMessage.textContent = msg;
      } else {
        certScore.textContent = '—';
        certLevel.textContent = '—';
        certLessons.textContent = '—';
        certGameBest.textContent = data.bestGame || 0;
        certMessage.textContent = 'برای دریافت کارنامه، آزمون نهایی را بده';
      }
    } catch (e) {
      console.warn('خطا:', e);
    }
  }

  // ============================================================
  // ذخیره کارنامه (متن)
  // ============================================================
  const downloadCert = document.getElementById('downloadCert');
  downloadCert.onclick = () => {
    const data = JSON.parse(localStorage.getItem('arabicFinal') || '{}');
    if (data.lastScore === undefined) {
      alert('ابتدا آزمون نهایی را بده!');
      return;
    }

    const percent = Math.round((data.lastScore / data.total) * 100);
    const text = `🏆 کارنامه عربی نهم 🏆
━━━━━━━━━━━━━━━━━━━
📊 نمره آزمون نهایی: ${data.lastScore}/${data.total} (${percent}%)
⭐ سطح: ${data.lastLevel || '—'}
📚 درس‌های تکمیل‌شده: ۱۰ درس
🎮 رکورد بازی: ${data.bestGame || 0}
📅 تاریخ: ${data.lastDate || '—'}
━━━━━━━━━━━━━━━━━━━
ساخته‌شده با همیار دانش‌آموز`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        alert('✅ کارنامه در کلیپ‌بورد ذخیره شد!');
      });
    } else {
      // راه‌حل جایگزین
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      alert('✅ کارنامه در کلیپ‌بورد ذخیره شد!');
    }
  };

  // ============================================================
  // پاک کردن همه نتایج
  // ============================================================
  document.getElementById('resetAll').onclick = () => {
    if (confirm('آیا مطمئنی می‌خواهی همه نتایج پاک شود؟')) {
      localStorage.removeItem('arabicFinal');
      updateCertificate();
      alert('✅ نتایج پاک شد');
    }
  };

  // ============================================================
  // افکت کلیک
  // ============================================================
  document.querySelectorAll('.review-card, .option-btn').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

  // ============================================================
  // به‌روزرسانی اولیه کارنامه
  // ============================================================
  updateCertificate();

})();