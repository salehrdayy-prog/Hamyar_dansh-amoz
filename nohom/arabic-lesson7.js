// ============================================================
// درس ۷ عربی نهم — تمرین ترکیبی
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // بانک سؤالات (۴ گزینه‌ای)
  // ============================================================
  const mcQuestions = [
    // ===== فعل ماضی =====
    { q: 'صرف ماضی «كَتَبَ» برای «هُمْ»:', correct: 'كَتَبُوا', pool: ['كَتَبُوا', 'يَكْتُبُونَ', 'كَتَبَتْ', 'كَتَبْنَا'] },
    { q: 'صرف ماضی «ذَهَبَ» برای «أَنَا»:', correct: 'ذَهَبْتُ', pool: ['ذَهَبْتُ', 'أَذْهَبُ', 'ذَهَبْنَا', 'ذَهَبَتْ'] },
    { q: 'صرف ماضی «عَلِمَ» برای «أَنْتِ»:', correct: 'عَلِمْتِ', pool: ['عَلِمْتِ', 'عَلِمْتُ', 'تَعْلَمِينَ', 'عَلِمْنَ'] },
    { q: 'صرف ماضی «نَصَرَ» برای «هُنَّ»:', correct: 'نَصَرْنَ', pool: ['نَصَرْنَ', 'يَنْصُرْنَ', 'نَصَرُوا', 'نَصَرَتْ'] },
    { q: 'صرف ماضی «فَتَحَ» برای «أَنْتُمْ»:', correct: 'فَتَحْتُمْ', pool: ['فَتَحْتُمْ', 'تَفْتَحُونَ', 'فَتَحُوا', 'فَتَحْنَا'] },

    // ===== فعل مضارع =====
    { q: 'صرف مضارع «سَمِعَ» برای «هِيَ»:', correct: 'تَسْمَعُ', pool: ['تَسْمَعُ', 'يَسْمَعُ', 'سَمِعَتْ', 'تَسْمَعِينَ'] },
    { q: 'صرف مضارع «نَصَرَ» برای «نَحْنُ»:', correct: 'نَنْصُرُ', pool: ['نَنْصُرُ', 'أَنْصُرُ', 'نَصَرْنَا', 'يَنْصُرُونَ'] },
    { q: 'صرف مضارع «كَتَبَ» برای «أَنْتَ»:', correct: 'تَكْتُبُ', pool: ['تَكْتُبُ', 'يَكْتُبُ', 'أَكْتُبُ', 'كَتَبْتَ'] },
    { q: 'صرف مضارع «ذَهَبَ» برای «أَنْتِ»:', correct: 'تَذْهَبِينَ', pool: ['تَذْهَبِينَ', 'تَذْهَبُ', 'يَذْهَبُونَ', 'ذَهَبْتِ'] },
    { q: 'صرف مضارع «عَلِمَ» برای «هُمْ»:', correct: 'يَعْلَمُونَ', pool: ['يَعْلَمُونَ', 'تَعْلَمُونَ', 'عَلِمُوا', 'يَعْلَمْنَ'] },

    // ===== معنی =====
    { q: 'معنی «يَكْتُبُونَ»:', correct: 'آن‌ها (مذکر) می‌نویسند', pool: ['آن‌ها (مذکر) می‌نویسند', 'شما می‌نویسید', 'آن دو می‌نویسند', 'او می‌نویسد'] },
    { q: 'معنی «كَتَبْتُنَّ»:', correct: 'شما (مؤنث) نوشتید', pool: ['شما (مؤنث) نوشتید', 'شما (مذکر) نوشتید', 'آن‌ها (مؤنث) نوشتند', 'من نوشتم'] },
    { q: 'معنی «نَصَرَ»:', correct: 'یاری کرد', pool: ['یاری کرد', 'یاری می‌کند', 'نوشت', 'دانست'] },

    // ===== فعل معتل =====
    { q: 'نوع فعل «وَعَدَ»:', correct: 'مثال', pool: ['مثال', 'اجوف', 'ناقص', 'صحیح'] },
    { q: 'نوع فعل «قَالَ»:', correct: 'اجوف', pool: ['اجوف', 'مثال', 'ناقص', 'صحیح'] },
    { q: 'نوع فعل «دَعَا»:', correct: 'ناقص', pool: ['ناقص', 'مثال', 'اجوف', 'صحیح'] },
    { q: 'مضارع «وَصَلَ»:', correct: 'يَصِلُ', pool: ['يَصِلُ', 'يَوْصِلُ', 'يَصَلُ', 'واصِل'] },

    // ===== امر و نهی =====
    { q: 'امر «كَتَبَ» برای «أَنْتَ»:', correct: 'اُكْتُبْ', pool: ['اُكْتُبْ', 'لا تَكْتُبْ', 'يَكْتُبُ', 'كاتِب'] },
    { q: 'نهی «ذَهَبَ» برای «أَنْتَ»:', correct: 'لا تَذْهَبْ', pool: ['لا تَذْهَبْ', 'اِذْهَبْ', 'يَذْهَبُ', 'لا يَذْهَبُ'] },
    { q: 'امر غایب «كَتَبَ» برای «هُوَ»:', correct: 'لِيَكْتُبْ', pool: ['لِيَكْتُبْ', 'لِتَكْتُبْ', 'اُكْتُبْ', 'لا تَكْتُبْ'] },
    { q: 'امر حاضر «ذَهَبَ» برای «أَنْتُمْ»:', correct: 'اِذْهَبُوا', pool: ['اِذْهَبُوا', 'اِذْهَبْ', 'لا تَذْهَبُوا', 'يَذْهَبُونَ'] },

    // ===== اسم فاعل و مفعول =====
    { q: 'اسم فاعل «نَصَرَ»:', correct: 'ناصِر', pool: ['ناصِر', 'مَنصور', 'نَصير', 'يَنْصُرُ'] },
    { q: 'اسم مفعول «كَتَبَ»:', correct: 'مَكتوب', pool: ['مَكتوب', 'كاتِب', 'كِتاب', 'يَكتُبُ'] },
    { q: 'اسم فاعل «أَرسَلَ»:', correct: 'مُرسِل', pool: ['مُرسِل', 'مُرسَل', 'راسِل', 'مَرسول'] },
    { q: 'اسم مفعول «عَلَّمَ»:', correct: 'مُعَلَّم', pool: ['مُعَلَّم', 'مُعَلِّم', 'عالِم', 'مَعلوم'] },

    // ===== ترجمه =====
    { q: 'ترجمه «العِلمُ نورٌ»:', correct: 'دانش نور است', pool: ['دانش نور است', 'نور دانش است', 'دانا نور است', 'دانش در نور است'] },
    { q: 'ترجمه «ذَهَبَ الطّالِبُ»:', correct: 'دانش‌آموز رفت', pool: ['دانش‌آموز رفت', 'دانش‌آموز می‌رود', 'دانش‌آموز نوشت', 'معلم رفت'] },
    { q: 'ترجمه «الصَّلاةُ عِمادُ الدّينِ»:', correct: 'نماز ستون دین است', pool: ['نماز ستون دین است', 'دین ستون نماز است', 'نماز در دین است', 'نماز دین است'] }
  ];

  // ============================================================
  // جملات جای خالی
  // ============================================================
  const fillQuestions = [
    {
      sentence: 'هُوَ ______ الدَّرسَ.',
      correct: 'يَكتُبُ',
      options: ['يَكتُبُ', 'تَكتُبُ', 'كَتَبَتْ', 'كاتِب']
    },
    {
      sentence: 'أَنَا ______ في المَدرَسَةِ.',
      correct: 'أَذهَبُ',
      options: ['أَذهَبُ', 'يَذهَبُ', 'ذَهَبْتُ', 'ذاهِب']
    },
    {
      sentence: 'نَحنُ ______ العُلومَ.',
      correct: 'نَتَعَلَّمُ',
      options: ['نَتَعَلَّمُ', 'يَتَعَلَّمُ', 'تَعَلَّمْنَا', 'مُتَعَلِّم']
    },
    {
      sentence: 'لا ______ في الصَّفِّ!',
      correct: 'تَتَكَلَّمْ',
      options: ['تَتَكَلَّمْ', 'تَتَكَلَّمُ', 'تَكَلَّمَ', 'مُتَكَلِّم']
    },
    {
      sentence: 'هُوَ ______ في المَكتَبَةِ.',
      correct: 'يَقرَأُ',
      options: ['يَقرَأُ', 'تَقرَأُ', 'قَرَأَتْ', 'قارِئ']
    },
    {
      sentence: 'أَنْتَ ______ الدَّرسَ جَيِّداً.',
      correct: 'تَفهَمُ',
      options: ['تَفهَمُ', 'يَفهَمُ', 'فَهِمْتُ', 'فاهِم']
    },
    {
      sentence: '______ يا وَلَدي!',
      correct: 'اُكتُبْ',
      options: ['اُكتُبْ', 'كَتَبَ', 'يَكتُبُ', 'كاتِب']
    },
    {
      sentence: 'العِلمُ ______ وَ الجَهلُ ظَلامٌ.',
      correct: 'نورٌ',
      options: ['نورٌ', 'ظَلامٌ', 'كِتابٌ', 'قَلَمٌ']
    },
    {
      sentence: 'المُعَلِّمُ ______ في الصَّفِّ.',
      correct: 'مُعَلِّم',
      options: ['مُعَلِّم', 'مُعَلَّم', 'عالِم', 'عِلم']
    },
    {
      sentence: 'الكِتابُ ______.',
      correct: 'مَكتوبٌ',
      options: ['مَكتوبٌ', 'كاتِبٌ', 'كِتابٌ', 'يَكتُبُ']
    },
    {
      sentence: 'هِيَ ______ الفِلمَ.',
      correct: 'تَشاهِدُ',
      options: ['تَشاهِدُ', 'يُشاهِدُ', 'شاهَدَتْ', 'مُشاهِد']
    },
    {
      sentence: 'هُمْ ______ في الحَديقَةِ.',
      correct: 'يَلعَبُونَ',
      options: ['يَلعَبُونَ', 'تَلعَبُونَ', 'لَعِبُوا', 'لاعِب']
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
  // ساخت سؤال چهارگزینه‌ای
  // ============================================================
  function makeMCQuestion() {
    const q = mcQuestions[Math.floor(Math.random() * mcQuestions.length)];
    return {
      questionText: q.q,
      correct: q.correct,
      options: [...q.pool].sort(() => Math.random() - 0.5)
    };
  }

  // ============================================================
  // تب ۲: تمرین چهارگزینه‌ای
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
    pCurrent = makeMCQuestion();
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
  // تب ۳: جای خالی
  // ============================================================
  const startFill = document.getElementById('startFill');
  const nextFill = document.getElementById('nextFill');
  const fillQuestion = document.getElementById('fillQuestion');
  const fillOptions = document.getElementById('fillOptions');
  const fillScoreEl = document.getElementById('fillScore');
  const fillTotalEl = document.getElementById('fillTotal');

  let fScore = 0, fTotal = 0, fAnswered = false, fCurrent = null;

  startFill.onclick = () => {
    fScore = 0; fTotal = 0;
    fillScoreEl.textContent = 0;
    fillTotalEl.textContent = 0;
    startFill.style.display = 'none';
    nextFillQuestion();
  };

  function nextFillQuestion() {
    fAnswered = false;
    nextFill.style.display = 'none';
    fillOptions.innerHTML = '';
    fCurrent = fillQuestions[Math.floor(Math.random() * fillQuestions.length)];

    const sentence = fCurrent.sentence.replace('______', '<span class="blank">؟</span>');
    fillQuestion.innerHTML = `<div class="fill-sentence">${sentence}</div>`;

    const shuffled = [...fCurrent.options].sort(() => Math.random() - 0.5);
    shuffled.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.onclick = () => checkFill(btn, opt);
      fillOptions.appendChild(btn);
    });
  }

  function checkFill(btn, selected) {
    if (fAnswered) return;
    fAnswered = true;
    fTotal++;

    fillOptions.querySelectorAll('.option-btn').forEach(b => {
      b.disabled = true;
      if (b.textContent === fCurrent.correct) b.classList.add('correct');
    });

    if (selected === fCurrent.correct) {
      fScore++;
      btn.classList.add('correct');
    } else {
      btn.classList.add('wrong');
    }

    fillScoreEl.textContent = fScore;
    fillTotalEl.textContent = fTotal;
    nextFill.style.display = 'block';
  }

  nextFill.onclick = nextFillQuestion;

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
    qCurrent = makeMCQuestion();
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
  // تب ۵: بازی (۹۰ ثانیه)
  // ============================================================
  const startGame = document.getElementById('startGame');
  const gameQuestion = document.getElementById('gameQuestion');
  const gameOptions = document.getElementById('gameOptions');
  const timerEl = document.getElementById('timer');
  const gameScoreEl = document.getElementById('gameScore');

  let gTime = 90, gScore = 0, gTimer = null, gRunning = false, gCurrent = null;

  startGame.onclick = () => {
    if (gRunning) return;
    gRunning = true;
    gTime = 90;
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
    // 50% چهارگزینه‌ای، 50% جای خالی
    const useFill = Math.random() < 0.5;
    gCurrent = useFill ? null : makeMCQuestion();

    if (useFill) {
      const fillQ = fillQuestions[Math.floor(Math.random() * fillQuestions.length)];
      gCurrent = {
        questionText: fillQ.sentence.replace('______', '<span class="blank">؟</span>'),
        correct: fillQ.correct,
        options: [...fillQ.options].sort(() => Math.random() - 0.5),
        isHTML: true
      };
      gameQuestion.innerHTML = `<div class="fill-sentence">${gCurrent.questionText}</div>`;
    } else {
      gameQuestion.innerHTML = gCurrent.questionText;
    }

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