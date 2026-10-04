// ============================================================
// English Lesson 4 — Healthy Lifestyle
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // واژگان
  // ============================================================
  const vocabulary = [
    { en: 'healthy', fa: 'سالم', ph: '/ˈhel.θi/' },
    { en: 'lifestyle', fa: 'سبک زندگی', ph: '/ˈlaɪf.staɪl/' },
    { en: 'food', fa: 'غذا', ph: '/fuːd/' },
    { en: 'fruit', fa: 'میوه', ph: '/fruːt/' },
    { en: 'vegetable', fa: 'سبزیجات', ph: '/ˈvedʒ.tə.bəl/' },
    { en: 'exercise', fa: 'ورزش', ph: '/ˈek.sə.saɪz/' },
    { en: 'sport', fa: 'ورزش', ph: '/spɔːt/' },
    { en: 'water', fa: 'آب', ph: '/ˈwɔː.tər/' },
    { en: 'sleep', fa: 'خوابیدن', ph: '/sliːp/' },
    { en: 'rest', fa: 'استراحت', ph: '/rest/' },
    { en: 'relax', fa: 'آرام شدن', ph: '/rɪˈlæks/' },
    { en: 'smoke', fa: 'سیگار کشیدن', ph: '/sməʊk/' },
    { en: 'sugar', fa: 'شکر', ph: '/ˈʃʊɡ.ər/' },
    { en: 'fast food', fa: 'فست‌فود', ph: '/fɑːst fuːd/' },
    { en: 'junk food', fa: 'غذای بی‌ارزش', ph: '/dʒʌŋk fuːd/' },
    { en: 'important', fa: 'مهم', ph: '/ɪmˈpɔː.tənt/' },
    { en: 'should', fa: 'باید', ph: '/ʃʊd/' },
    { en: 'shouldn\'t', fa: 'نباید', ph: '/ˈʃʊd.ənt/' },
    { en: 'enough', fa: 'کافی', ph: '/ɪˈnʌf/' },
    { en: 'health', fa: 'سلامتی', ph: '/helθ/' }
  ];

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    // واژگان — انگلیسی به فارسی
    { q: 'معنی «healthy» چیست؟', correct: 'سالم', pool: ['سالم', 'بیمار', 'خسته', 'قوی'] },
    { q: 'معنی «lifestyle» چیست؟', correct: 'سبک زندگی', pool: ['سبک زندگی', 'خانه', 'کار', 'ورزش'] },
    { q: 'معنی «fruit» چیست؟', correct: 'میوه', pool: ['میوه', 'سبزی', 'غذا', 'آب'] },
    { q: 'معنی «vegetable» چیست؟', correct: 'سبزیجات', pool: ['سبزیجات', 'میوه', 'گوشت', 'نان'] },
    { q: 'معنی «exercise» چیست؟', correct: 'ورزش', pool: ['ورزش', 'استراحت', 'خواب', 'غذا'] },
    { q: 'معنی «sleep» چیست؟', correct: 'خوابیدن', pool: ['خوابیدن', 'بیدار شدن', 'استراحت', 'ورزش'] },
    { q: 'معنی «rest» چیست؟', correct: 'استراحت', pool: ['استراحت', 'ورزش', 'کار', 'خواب'] },
    { q: 'معنی «relax» چیست؟', correct: 'آرام شدن', pool: ['آرام شدن', 'خسته شدن', 'عصبانی شدن', 'شاد شدن'] },
    { q: 'معنی «smoke» چیست؟', correct: 'سیگار کشیدن', pool: ['سیگار کشیدن', 'خوردن', 'نوشیدن', 'خوابیدن'] },
    { q: 'معنی «sugar» چیست؟', correct: 'شکر', pool: ['شکر', 'نمک', 'آب', 'شیر'] },
    { q: 'معنی «fast food» چیست؟', correct: 'فست‌فود', pool: ['فست‌فود', 'غذای سالم', 'میوه', 'سبزیجات'] },
    { q: 'معنی «junk food» چیست؟', correct: 'غذای بی‌ارزش', pool: ['غذای بی‌ارزش', 'غذای سالم', 'غذای گرم', 'غذای سرد'] },
    { q: 'معنی «important» چیست؟', correct: 'مهم', pool: ['مهم', 'کوچک', 'بزرگ', 'آسان'] },
    { q: 'معنی «enough» چیست؟', correct: 'کافی', pool: ['کافی', 'کم', 'زیاد', 'بیش از حد'] },
    { q: 'معنی «health» چیست؟', correct: 'سلامتی', pool: ['سلامتی', 'بیماری', 'خستگی', 'قدرت'] },

    // واژگان — فارسی به انگلیسی
    { q: '«سالم» به انگلیسی چیست؟', correct: 'healthy', pool: ['healthy', 'sick', 'tired', 'strong'] },
    { q: '«میوه» به انگلیسی چیست؟', correct: 'fruit', pool: ['fruit', 'vegetable', 'food', 'water'] },
    { q: '«ورزش» به انگلیسی چیست؟', correct: 'exercise', pool: ['exercise', 'rest', 'sleep', 'food'] },

    // گرامر — should
    { q: '«باید میوه بخوری» کدام است؟', correct: 'You should eat fruit.', pool: ['You should eat fruit.', 'You eat should fruit.', 'You fruit should eat.', 'Should you eat fruit.'] },
    { q: '«نباید سیگار بکشی» کدام است؟', correct: 'You shouldn\'t smoke.', pool: ['You shouldn\'t smoke.', 'You shouldn\'t to smoke.', 'You not should smoke.', 'You smoke shouldn\'t.'] },
    { q: 'کدام جمله درست است؟', correct: 'We should exercise every day.', pool: ['We should exercise every day.', 'We exercise should every day.', 'We every day should exercise.', 'Should we exercise every day.'] },
    { q: '«باید زود بخوابی» کدام است؟', correct: 'You should sleep early.', pool: ['You should sleep early.', 'You sleep should early.', 'You early should sleep.', 'Should you sleep early.'] },
    { q: '«نباید فست‌فود بخوری» کدام است؟', correct: 'You shouldn\'t eat fast food.', pool: ['You shouldn\'t eat fast food.', 'You shouldn\'t to eat fast food.', 'You not should eat fast food.', 'You eat shouldn\'t fast food.'] },

    // گرامر — Imperative
    { q: '«آب بنوش» کدام است؟', correct: 'Drink water.', pool: ['Drink water.', 'You drink water.', 'To drink water.', 'Drinking water.'] },
    { q: '«سیگار نکش» کدام است؟', correct: 'Don\'t smoke.', pool: ['Don\'t smoke.', 'Not smoke.', 'No smoke.', 'Don\'t to smoke.'] },
    { q: '«هر روز ورزش کن» کدام است؟', correct: 'Do exercise every day.', pool: ['Do exercise every day.', 'You do exercise every day.', 'Exercise every day do.', 'Doing exercise every day.'] },
    { q: '«زیاد تلویزیون نگاه نکن» کدام است؟', correct: 'Don\'t watch too much TV.', pool: ['Don\'t watch too much TV.', 'Not watch too much TV.', 'No watch too much TV.', 'Don\'t to watch too much TV.'] },
    { q: '«به اندازه کافی بخواب» کدام است؟', correct: 'Sleep enough.', pool: ['Sleep enough.', 'You sleep enough.', 'Enough sleep.', 'To sleep enough.'] },

    // معنی جملات
    { q: 'معنی «You should eat fruit and vegetables.» چیست؟', correct: 'باید میوه و سبزیجات بخوری.', pool: ['باید میوه و سبزیجات بخوری.', 'میوه و سبزیجات دوست داری.', 'میوه و سبزیجات می‌خوری.', 'میوه و سبزیجات خوب است.'] },
    { q: 'معنی «Don\'t stay up late.» چیست؟', correct: 'تا دیروقت بیدار نمان.', pool: ['تا دیروقت بیدار نمان.', 'زود بخواب.', 'دیر بلند شو.', 'خواب کافی داشته باش.'] },
    { q: 'معنی «A healthy lifestyle is very important.» چیست؟', correct: 'سبک زندگی سالم بسیار مهم است.', pool: ['سبک زندگی سالم بسیار مهم است.', 'زندگی سالم خوب است.', 'سلامتی مهم نیست.', 'سبک زندگی سخت است.'] },
    { q: 'معنی «Don\'t eat too much sugar.» چیست؟', correct: 'زیاد شکر نخور.', pool: ['زیاد شکر نخور.', 'شکر بخور.', 'کمی شکر بخور.', 'شکر بد است.'] }
  ];

  // ============================================================
  // تب‌ها
  // ============================================================
  document.querySelectorAll('.lesson-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.lesson-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.lesson-section').forEach(s => s.classList.remove('active'));
      tab.classList.add('active');
      const target = document.querySelector(`.lesson-section[data-section="${tab.dataset.tab}"]`);
      if (target) target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  });

  // ============================================================
  // تابع پخش صدا
  // ============================================================
  function playWord(word) {
    if (typeof window.speakEnglish === 'function') {
      window.speakEnglish(word);
      return;
    }
    if (typeof window.speakText === 'function') {
      window.speakText(word);
      return;
    }
    if ('speechSynthesis' in window) {
      try {
        speechSynthesis.cancel();
        const utt = new SpeechSynthesisUtterance(word);
        utt.lang = 'en-US';
        utt.rate = 0.8;
        const voices = speechSynthesis.getVoices();
        const enVoice = voices.find(v => v.lang === 'en-US')
                     || voices.find(v => v.lang.startsWith('en'));
        if (enVoice) utt.voice = enVoice;
        speechSynthesis.speak(utt);
      } catch (err) {
        console.warn('صدا پخش نشد:', err);
      }
    }
  }

  // ============================================================
  // تب ۲: واژگان
  // ============================================================
  const vocabGrid = document.getElementById('vocabGrid');
  vocabulary.forEach(v => {
    const card = document.createElement('div');
    card.className = 'vocab-card';
    card.innerHTML = `
      <div class="vocab-english">${v.en}</div>
      <div class="vocab-phonetic">${v.ph}</div>
      <div class="vocab-meaning">${v.fa}</div>
    `;

    const speakBtn = document.createElement('button');
    speakBtn.className = 'vocab-speak-btn';
    speakBtn.type = 'button';
    speakBtn.innerHTML = '🔊';
    speakBtn.title = 'شنیدن تلفظ';
    speakBtn.setAttribute('aria-label', 'شنیدن تلفظ');

    speakBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      speakBtn.style.background = '#ff9800';
      speakBtn.style.color = 'white';
      speakBtn.style.transform = 'scale(1.15)';
      setTimeout(() => {
        speakBtn.style.background = '';
        speakBtn.style.color = '';
        speakBtn.style.transform = '';
      }, 300);
      playWord(v.en);
    };

    card.appendChild(speakBtn);
    vocabGrid.appendChild(card);
  });

  // ============================================================
  // ساخت سؤال
  // ============================================================
  function makeQuestion() {
    const q = questions[Math.floor(Math.random() * questions.length)];
    return {
      questionText: q.q,
      correct: q.correct,
      options: [...q.pool].sort(() => Math.random() - 0.5)
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
    quizQuestion.innerHTML = `<div style="font-size:0.85em;color:#999;margin-bottom:6px;">سؤال ${qTotal + 1} از ۱۵</div>${qCurrent.questionText}`;

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
  document.querySelectorAll('.en-sentence').forEach(el => {
    el.addEventListener('touchstart', () => { el.style.transform = 'scale(0.98)'; }, { passive: true });
    el.addEventListener('touchend', () => { el.style.transform = ''; }, { passive: true });
  });

})();