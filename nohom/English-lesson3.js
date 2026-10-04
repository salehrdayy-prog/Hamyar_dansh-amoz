// ============================================================
// English Lesson 3 — Festivals and Ceremonies
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // واژگان
  // ============================================================
  const vocabulary = [
    { en: 'festival', fa: 'جشن', ph: '/ˈfes.tɪ.vəl/' },
    { en: 'ceremony', fa: 'مراسم', ph: '/ˈser.ɪ.mə.ni/' },
    { en: 'celebration', fa: 'جشن گرفتن', ph: '/ˌsel.ɪˈbreɪ.ʃən/' },
    { en: 'celebrate', fa: 'جشن گرفتن', ph: '/ˈsel.ɪ.breɪt/' },
    { en: 'tradition', fa: 'سنت', ph: '/trəˈdɪʃ.ən/' },
    { en: 'custom', fa: 'رسم، آداب', ph: '/ˈkʌs.təm/' },
    { en: 'religion', fa: 'دین', ph: '/rɪˈlɪdʒ.ən/' },
    { en: 'religious', fa: 'مذهبی', ph: '/rɪˈlɪdʒ.əs/' },
    { en: 'important', fa: 'مهم', ph: '/ɪmˈpɔː.tənt/' },
    { en: 'special', fa: 'مخصوص', ph: '/ˈspeʃ.əl/' },
    { en: 'ancient', fa: 'باستانی', ph: '/ˈeɪn.ʃənt/' },
    { en: 'gather', fa: 'جمع شدن', ph: '/ˈɡæð.ər/' },
    { en: 'family', fa: 'خانواده', ph: '/ˈfæm.əl.i/' },
    { en: 'gift', fa: 'هدیه', ph: '/ɡɪft/' },
    { en: 'dress', fa: 'لباس', ph: '/dres/' },
    { en: 'food', fa: 'غذا', ph: '/fuːd/' },
    { en: 'night', fa: 'شب', ph: '/naɪt/' },
    { en: 'long', fa: 'طولانی', ph: '/lɒŋ/' },
    { en: 'important', fa: 'مهم', ph: '/ɪmˈpɔː.tənt/' },
    { en: 'enjoy', fa: 'لذت بردن', ph: '/ɪnˈdʒɔɪ/' }
  ];

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    // واژگان
    { q: 'معنی «festival» چیست؟', correct: 'جشن', pool: ['جشن', 'مراسم', 'سنت', 'هدیه'] },
    { q: 'معنی «ceremony» چیست؟', correct: 'مراسم', pool: ['مراسم', 'جشن', 'رسم', 'دین'] },
    { q: 'معنی «celebration» چیست؟', correct: 'جشن گرفتن', pool: ['جشن گرفتن', 'مهمانی', 'مهم', 'سنت'] },
    { q: 'معنی «tradition» چیست؟', correct: 'سنت', pool: ['سنت', 'رسم', 'دین', 'جشن'] },
    { q: 'معنی «custom» چیست؟', correct: 'رسم، آداب', pool: ['رسم، آداب', 'سنت', 'دین', 'مراسم'] },
    { q: 'معنی «religion» چیست؟', correct: 'دین', pool: ['دین', 'مذهب', 'سنت', 'مراسم'] },
    { q: 'معنی «religious» چیست؟', correct: 'مذهبی', pool: ['مذهبی', 'دینی', 'سنت', 'مراسم'] },
    { q: 'معنی «important» چیست؟', correct: 'مهم', pool: ['مهم', 'کوچک', 'بزرگ', 'زیبا'] },
    { q: 'معنی «special» چیست؟', correct: 'مخصوص', pool: ['مخصوص', 'عادی', 'معمولی', 'ساده'] },
    { q: 'معنی «ancient» چیست؟', correct: 'باستانی', pool: ['باستانی', 'جدید', 'مدرن', 'تازه'] },
    { q: 'معنی «gather» چیست؟', correct: 'جمع شدن', pool: ['جمع شدن', 'پراکنده شدن', 'رفتن', 'آمدن'] },
    { q: 'معنی «family» چیست؟', correct: 'خانواده', pool: ['خانواده', 'دوستان', 'همسایه', 'مدرسه'] },
    { q: 'معنی «gift» چیست؟', correct: 'هدیه', pool: ['هدیه', 'پول', 'لباس', 'غذا'] },
    { q: 'معنی «dress» چیست؟', correct: 'لباس', pool: ['لباس', 'کفش', 'کلاه', 'کیف'] },
    { q: 'معنی «food» چیست؟', correct: 'غذا', pool: ['غذا', 'نوشیدنی', 'میوه', 'سبزی'] },
    { q: 'معنی «night» چیست؟', correct: 'شب', pool: ['شب', 'روز', 'صبح', 'عصر'] },
    { q: 'معنی «long» چیست؟', correct: 'طولانی', pool: ['طولانی', 'کوتاه', 'بلند', 'بزرگ'] },
    { q: 'معنی «enjoy» چیست؟', correct: 'لذت بردن', pool: ['لذت بردن', 'خسته شدن', 'ناراحت شدن', 'شاد بودن'] },

    // گرامر — Comparative
    { q: 'شکل مقایسه‌ای «old» چیست؟', correct: 'older', pool: ['older', 'more old', 'oldest', 'oldder'] },
    { q: 'شکل مقایسه‌ای «big» چیست؟', correct: 'bigger', pool: ['bigger', 'more big', 'biggest', 'biger'] },
    { q: 'شکل مقایسه‌ای «happy» چیست؟', correct: 'happier', pool: ['happier', 'more happy', 'happiest', 'happyier'] },
    { q: 'شکل مقایسه‌ای «beautiful» چیست؟', correct: 'more beautiful', pool: ['more beautiful', 'beautifuler', 'beautifulest', 'most beautiful'] },
    { q: 'شکل مقایسه‌ای «good» چیست؟', correct: 'better', pool: ['better', 'gooder', 'more good', 'best'] },
    { q: 'شکل مقایسه‌ای «bad» چیست؟', correct: 'worse', pool: ['worse', 'badder', 'more bad', 'worst'] },
    { q: 'کدام جمله درست است؟', correct: 'This book is older than that one.', pool: ['This book is older than that one.', 'This book is older that one.', 'This book older than that one.', 'This book is more old than that one.'] },

    // گرامر — Superlative
    { q: 'شکل برتر «old» چیست؟', correct: 'the oldest', pool: ['the oldest', 'the most old', 'older', 'oldest one'] },
    { q: 'شکل برتر «big» چیست؟', correct: 'the biggest', pool: ['the biggest', 'the most big', 'bigger', 'bigest'] },
    { q: 'شکل برتر «happy» چیست؟', correct: 'the happiest', pool: ['the happiest', 'the most happy', 'happier', 'happyest'] },
    { q: 'شکل برتر «beautiful» چیست؟', correct: 'the most beautiful', pool: ['the most beautiful', 'the beautifulest', 'more beautiful', 'the beautifullest'] },
    { q: 'شکل برتر «good» چیست؟', correct: 'the best', pool: ['the best', 'the goodest', 'the most good', 'better'] },
    { q: 'شکل برتر «bad» چیست؟', correct: 'the worst', pool: ['the worst', 'the baddest', 'the most bad', 'worse'] },
    { q: 'کدام جمله درست است؟', correct: 'Nowruz is the oldest festival in Iran.', pool: ['Nowruz is the oldest festival in Iran.', 'Nowruz is oldest festival in Iran.', 'Nowruz is the most old festival in Iran.', 'Nowruz is the older festival in Iran.'] },

    // معنی جملات
    { q: 'معنی «Nowruz is the most important festival in Iran.» چیست؟', correct: 'نوروز مهم‌ترین جشن در ایران است.', pool: ['نوروز مهم‌ترین جشن در ایران است.', 'نوروز مهم‌تر از جشن‌های دیگر است.', 'نوروز جشن مهمی است.', 'نوروز جشن باستانی ایران است.'] },
    { q: 'معنی «It is older than any other Iranian celebration.» چیست؟', correct: 'این جشن قدیمی‌تر از هر جشن ایرانی دیگری است.', pool: ['این جشن قدیمی‌تر از هر جشن ایرانی دیگری است.', 'این جشن قدیمی‌ترین جشن ایرانی است.', 'این جشن باستانی نیست.', 'این جشن قدیمی است.'] },
    { q: 'معنی «Yalda is one of the longest nights of the year.» چیست؟', correct: 'یلدا یکی از طولانی‌ترین شب‌های سال است.', pool: ['یلدا یکی از طولانی‌ترین شب‌های سال است.', 'یلدا طولانی‌ترین شب سال است.', 'یلدا شب طولانی است.', 'یلدا شب کوتاهی است.'] }
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