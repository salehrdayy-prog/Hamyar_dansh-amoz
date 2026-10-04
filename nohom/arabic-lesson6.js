// ============================================================
// درس ۶ عربی نهم — قواعد ترکیبی (جمع‌بندی)
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // جدول خلاصه شناسه‌های ماضی و مضارع
  // ============================================================
  const conjSummary = [
    ['هُوَ', 'كَتَبَ', 'يَكْتُبُ', 'او نوشت / می‌نویسد'],
    ['هُمَا', 'كَتَبَا', 'يَكْتُبَانِ', 'آن دو (مذکر)'],
    ['هُمْ', 'كَتَبُوا', 'يَكْتُبُونَ', 'آن‌ها (مذکر)'],
    ['هِيَ', 'كَتَبَتْ', 'تَكْتُبُ', 'او (مؤنث)'],
    ['هُمَا (مؤنث)', 'كَتَبَتَا', 'تَكْتُبَانِ', 'آن دو (مؤنث)'],
    ['هُنَّ', 'كَتَبْنَ', 'يَكْتُبْنَ', 'آن‌ها (مؤنث)'],
    ['أَنْتَ', 'كَتَبْتَ', 'تَكْتُبُ', 'تو (مذکر)'],
    ['أَنْتُمَا (مذکر)', 'كَتَبْتُمَا', 'تَكْتُبَانِ', 'شما دو نفر (مذکر)'],
    ['أَنْتُمَا (مؤنث)', 'كَتَبْتُمَا', 'تَكْتُبَانِ', 'شما دو نفر (مؤنث)'],
    ['أَنْتُمْ', 'كَتَبْتُمْ', 'تَكْتُبُونَ', 'شما (مذکر)'],
    ['أَنْتِ', 'كَتَبْتِ', 'تَكْتُبِينَ', 'تو (مؤنث)'],
    ['أَنْتُنَّ', 'كَتَبْتُنَّ', 'تَكْتُبْنَ', 'شما (مؤنث)'],
    ['أَنَا', 'كَتَبْتُ', 'أَكْتُبُ', 'من'],
    ['نَحْنُ', 'كَتَبْنَا', 'نَكْتُبُ', 'ما']
  ];

  // ============================================================
  // جدول خلاصه اسم فاعل و مفعول
  // ============================================================
  const nounSummary = [
    ['كَتَبَ', 'كاتِب', 'مَكتوب', 'نویسنده / نوشته‌شده'],
    ['عَلِمَ', 'عالِم', 'مَعلوم', 'دانا / دانسته'],
    ['نَصَرَ', 'ناصِر', 'مَنصور', 'یاری‌کننده / یاری‌شده'],
    ['فَتَحَ', 'فاتِح', 'مَفتوح', 'بازکننده / بازشده'],
    ['سَمِعَ', 'سامِع', 'مَسموع', 'شنونده / شنیده‌شده']
  ];

  // ============================================================
  // جدول خلاصه امر و نهی
  // ============================================================
  const amrSummary = [
    ['أَنْتَ', 'تَكْتُبُ', 'اُكْتُبْ', 'لا تَكْتُبْ'],
    ['أَنْتِ', 'تَكْتُبِينَ', 'اُكْتُبِي', 'لا تَكْتُبِي'],
    ['أَنْتُمَا', 'تَكْتُبَانِ', 'اُكْتُبَا', 'لا تَكْتُبَا'],
    ['أَنْتُمْ', 'تَكْتُبُونَ', 'اُكْتُبُوا', 'لا تَكْتُبُوا'],
    ['أَنْتُنَّ', 'تَكْتُبْنَ', 'اُكْتُبْنَ', 'لا تَكْتُبْنَ']
  ];

  // ============================================================
  // پر کردن جدول‌ها
  // ============================================================
  function fillTable(tbodyId, rows, hasNumber = false) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    rows.forEach((row, idx) => {
      const tr = document.createElement('tr');
      let html = '';
      if (hasNumber) html += `<td>${idx + 1}</td>`;
      row.forEach((cell, i) => {
        if (i === 0) html += `<td class="pronoun">${cell}</td>`;
        else if (/[\u0600-\u06FF]/.test(cell)) html += `<td class="arabic">${cell}</td>`;
        else html += `<td class="meaning-cell">${cell}</td>`;
      });
      tr.innerHTML = html;
      tbody.appendChild(tr);
    });
  }

  // ستون‌ها متفاوته، پس هر جدول رو جدا پر می‌کنیم
  const conjTbody = document.getElementById('conjSummaryTable');
  conjSummary.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="pronoun">${row[0]}</td>
      <td class="arabic">${row[1]}</td>
      <td class="arabic">${row[2]}</td>
      <td class="meaning-cell">${row[3]}</td>
    `;
    conjTbody.appendChild(tr);
  });

  const nounTbody = document.getElementById('nounSummaryTable');
  nounSummary.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="arabic">${row[0]}</td>
      <td class="arabic">${row[1]}</td>
      <td class="arabic">${row[2]}</td>
      <td class="meaning-cell">${row[3]}</td>
    `;
    nounTbody.appendChild(tr);
  });

  const amrTbody = document.getElementById('amrSummaryTable');
  amrSummary.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="pronoun">${row[0]}</td>
      <td class="arabic">${row[1]}</td>
      <td class="arabic">${row[2]}</td>
      <td class="arabic">${row[3]}</td>
    `;
    amrTbody.appendChild(tr);
  });

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
  // بانک سؤالات ترکیبی
  // ============================================================
  const questions = [
    // ===== فعل ماضی =====
    { q: 'صرف ماضی فعل «كَتَبَ» برای «هُمْ» چیست؟', correct: 'كَتَبُوا', pool: ['كَتَبُوا', 'يَكْتُبُونَ', 'كَتَبَتْ', 'كَتَبْنَا'] },
    { q: 'صرف ماضی فعل «ذَهَبَ» برای «أَنَا» چیست؟', correct: 'ذَهَبْتُ', pool: ['ذَهَبْتُ', 'أَذْهَبُ', 'ذَهَبْنَا', 'ذَهَبَتْ'] },
    { q: 'صرف ماضی فعل «عَلِمَ» برای «أَنْتِ» چیست؟', correct: 'عَلِمْتِ', pool: ['عَلِمْتِ', 'عَلِمْتُ', 'تَعْلَمِينَ', 'عَلِمْنَ'] },

    // ===== فعل مضارع =====
    { q: 'صرف مضارع فعل «نَصَرَ» برای «هُمْ» چیست؟', correct: 'يَنْصُرُونَ', pool: ['يَنْصُرُونَ', 'نَصَرُوا', 'تَنْصُرُونَ', 'يَنْصُرْنَ'] },
    { q: 'صرف مضارع فعل «فَتَحَ» برای «هِيَ» چیست؟', correct: 'تَفْتَحُ', pool: ['تَفْتَحُ', 'يَفْتَحُ', 'فَتَحَتْ', 'تَفْتَحِينَ'] },
    { q: 'صرف مضارع فعل «سَمِعَ» برای «نَحْنُ» چیست؟', correct: 'نَسْمَعُ', pool: ['نَسْمَعُ', 'أَسْمَعُ', 'سَمِعْنَا', 'يَسْمَعُونَ'] },

    // ===== معنی =====
    { q: 'معنی «يَكْتُبُونَ» چیست؟', correct: 'آن‌ها (مذکر) می‌نویسند', pool: ['آن‌ها (مذکر) می‌نویسند', 'شما می‌نویسید', 'آن دو می‌نویسند', 'او می‌نویسد'] },
    { q: 'معنی «كَتَبْتُنَّ» چیست؟', correct: 'شما (مؤنث) نوشتید', pool: ['شما (مؤنث) نوشتید', 'شما (مذکر) نوشتید', 'آن‌ها (مؤنث) نوشتند', 'من نوشتم'] },
    { q: 'معنی «نَصَرَ» چیست؟', correct: 'یاری کرد', pool: ['یاری کرد', 'یاری می‌کند', 'نوشت', 'دانست'] },

    // ===== فعل معتل =====
    { q: 'فعل «وَعَدَ» چه نوع فعل معتلی است؟', correct: 'مثال', pool: ['مثال', 'اجوف', 'ناقص', 'صحیح'] },
    { q: 'فعل «قَالَ» چه نوع فعل معتلی است؟', correct: 'اجوف', pool: ['اجوف', 'مثال', 'ناقص', 'صحیح'] },
    { q: 'فعل «دَعَا» چه نوع فعل معتلی است؟', correct: 'ناقص', pool: ['ناقص', 'مثال', 'اجوف', 'صحیح'] },
    { q: 'مضارع «وَصَلَ» چیست؟', correct: 'يَصِلُ', pool: ['يَصِلُ', 'يَوْصِلُ', 'يَصَلُ', 'واصِل'] },

    // ===== امر و نهی =====
    { q: 'امر فعل «كَتَبَ» برای «أَنْتَ» چیست؟', correct: 'اُكْتُبْ', pool: ['اُكْتُبْ', 'لا تَكْتُبْ', 'يَكْتُبُ', 'كاتِب'] },
    { q: 'نهی فعل «ذَهَبَ» برای «أَنْتَ» چیست؟', correct: 'لا تَذْهَبْ', pool: ['لا تَذْهَبْ', 'اِذْهَبْ', 'يَذْهَبُ', 'لا يَذْهَبُ'] },
    { q: 'امر غایب فعل «كَتَبَ» برای «هُوَ» چیست؟', correct: 'لِيَكْتُبْ', pool: ['لِيَكْتُبْ', 'لِتَكْتُبْ', 'اُكْتُبْ', 'لا تَكْتُبْ'] },

    // ===== اسم فاعل و مفعول =====
    { q: 'اسم فاعل «نَصَرَ» چیست؟', correct: 'ناصِر', pool: ['ناصِر', 'مَنصور', 'نَصير', 'يَنْصُرُ'] },
    { q: 'اسم مفعول «كَتَبَ» چیست؟', correct: 'مَكتوب', pool: ['مَكتوب', 'كاتِب', 'كِتاب', 'يَكتُبُ'] },
    { q: 'اسم فاعل «أَرسَلَ» چیست؟', correct: 'مُرسِل', pool: ['مُرسِل', 'مُرسَل', 'راسِل', 'مَرسول'] },

    // ===== ترجمه =====
    { q: 'ترجمه «العِلمُ نورٌ» چیست؟', correct: 'دانش نور است', pool: ['دانش نور است', 'نور دانش است', 'دانا نور است', 'دانش در نور است'] },
    { q: 'ترجمه «ذَهَبَ الطّالِبُ» چیست؟', correct: 'دانش‌آموز رفت', pool: ['دانش‌آموز رفت', 'دانش‌آموز می‌رود', 'دانش‌آموز نوشت', 'معلم رفت'] },
    { q: 'ترجمه «الصَّلاةُ عِمادُ الدّينِ» چیست؟', correct: 'نماز ستون دین است', pool: ['نماز ستون دین است', 'دین ستون نماز است', 'نماز در دین است', 'نماز دین است'] }
  ];

  function makeQuestion() {
    const q = questions[Math.floor(Math.random() * questions.length)];
    const options = [...q.pool].sort(() => Math.random() - 0.5);
    return {
      questionText: q.q,
      correct: q.correct,
      options: options
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
  document.querySelectorAll('.review-card, .option-btn').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();