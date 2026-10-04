// ============================================================
// English Lesson 2 — Personal Experiences
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // واژگان
  // ============================================================
  const vocabulary = [
    { en: 'experience', fa: 'تجربه', ph: '/ɪkˈspɪə.ri.əns/' },
    { en: 'travel', fa: 'سفر کردن', ph: '/ˈtræv.əl/' },
    { en: 'visit', fa: 'دیدن کردن', ph: '/ˈvɪz.ɪt/' },
    { en: 'journey', fa: 'سفر', ph: '/ˈdʒɜː.ni/' },
    { en: 'trip', fa: 'سفر کوتاه', ph: '/trɪp/' },
    { en: 'abroad', fa: 'خارج از کشور', ph: '/əˈbrɔːd/' },
    { en: 'city', fa: 'شهر', ph: '/ˈsɪt.i/' },
    { en: 'country', fa: 'کشور', ph: '/ˈkʌn.tri/' },
    { en: 'mosque', fa: 'مسجد', ph: '/mɒsk/' },
    { en: 'bridge', fa: 'پل', ph: '/brɪdʒ/' },
    { en: 'ever', fa: 'تا حالا', ph: '/ˈev.ər/' },
    { en: 'never', fa: 'هرگز', ph: '/ˈnev.ər/' },
    { en: 'already', fa: 'قبلاً', ph: '/ɔːlˈred.i/' },
    { en: 'yet', fa: 'هنوز', ph: '/jet/' },
    { en: 'just', fa: 'همین حالا', ph: '/dʒʌst/' },
    { en: 'before', fa: 'قبل از', ph: '/bɪˈfɔːr/' },
    { en: 'meet', fa: 'ملاقات کردن', ph: '/miːt/' },
    { en: 'learn', fa: 'یاد گرفتن', ph: '/lɜːn/' },
    { en: 'find', fa: 'پیدا کردن', ph: '/faɪnd/' },
    { en: 'win', fa: 'بردن، برنده شدن', ph: '/wɪn/' }
  ];

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    // واژگان
    { q: 'معنی «experience» چیست؟', correct: 'تجربه', pool: ['تجربه', 'سفر', 'شهر', 'ملاقات'] },
    { q: 'معنی «travel» چیست؟', correct: 'سفر کردن', pool: ['سفر کردن', 'دیدن کردن', 'ملاقات کردن', 'پیدا کردن'] },
    { q: 'معنی «visit» چیست؟', correct: 'دیدن کردن', pool: ['دیدن کردن', 'سفر کردن', 'خواندن', 'رفتن'] },
    { q: 'معنی «journey» چیست؟', correct: 'سفر', pool: ['سفر', 'شهر', 'کشور', 'پل'] },
    { q: 'معنی «abroad» چیست؟', correct: 'خارج از کشور', pool: ['خارج از کشور', 'داخل کشور', 'شهر', 'روستا'] },
    { q: 'معنی «city» چیست؟', correct: 'شهر', pool: ['شهر', 'روستا', 'کشور', 'استان'] },
    { q: 'معنی «country» چیست؟', correct: 'کشور', pool: ['کشور', 'شهر', 'پل', 'مسجد'] },
    { q: 'معنی «bridge» چیست؟', correct: 'پل', pool: ['پل', 'مسجد', 'خانه', 'مدرسه'] },
    { q: 'معنی «ever» چیست؟', correct: 'تا حالا', pool: ['تا حالا', 'هرگز', 'قبلاً', 'هنوز'] },
    { q: 'معنی «never» چیست؟', correct: 'هرگز', pool: ['هرگز', 'تا حالا', 'قبلاً', 'همیشه'] },
    { q: 'معنی «already» چیست؟', correct: 'قبلاً', pool: ['قبلاً', 'هنوز', 'هرگز', 'همین حالا'] },
    { q: 'معنی «yet» چیست؟', correct: 'هنوز', pool: ['هنوز', 'قبلاً', 'هرگز', 'زود'] },
    { q: 'معنی «just» چیست؟', correct: 'همین حالا', pool: ['همین حالا', 'قبلاً', 'هنوز', 'هرگز'] },
    { q: 'معنی «before» چیست؟', correct: 'قبل از', pool: ['قبل از', 'بعد از', 'در', 'روی'] },
    { q: 'معنی «meet» چیست؟', correct: 'ملاقات کردن', pool: ['ملاقات کردن', 'دیدن کردن', 'رفتن', 'آمدن'] },
    { q: 'معنی «learn» چیست؟', correct: 'یاد گرفتن', pool: ['یاد گرفتن', 'یاد دادن', 'خواندن', 'نوشتن'] },
    { q: 'معنی «find» چیست؟', correct: 'پیدا کردن', pool: ['پیدا کردن', 'گم کردن', 'دیدن', 'گرفتن'] },
    { q: 'معنی «win» چیست؟', correct: 'بردن', pool: ['بردن', 'باختن', 'کشیدن', 'خریدن'] },

    // گرامر — Present Perfect
    { q: 'کدام جمله حال کامل است؟', correct: 'I have visited Isfahan.', pool: ['I have visited Isfahan.', 'I visited Isfahan yesterday.', 'I visit Isfahan every year.', 'I will visit Isfahan.'] },
    { q: 'ساختار حال کامل چیست؟', correct: 'have/has + past participle', pool: ['have/has + past participle', 'have/has + verb+ing', 'did + past', 'will + verb'] },
    { q: '«او (مؤنث) نوشته است» کدام است؟', correct: 'She has written.', pool: ['She has written.', 'She have written.', 'She wrote written.', 'She is written.'] },
    { q: '«من هرگز به لندن نرفته‌ام» کدام است؟', correct: 'I have never been to London.', pool: ['I have never been to London.', 'I never have gone to London.', 'I have ever been to London.', 'I went never to London.'] },
    { q: 'کدام جمله با «He» درست است؟', correct: 'He has eaten breakfast.', pool: ['He has eaten breakfast.', 'He have eaten breakfast.', 'He has ate breakfast.', 'He is eat breakfast.'] },
    { q: 'سؤال حال کامل «Have you ever ... ?» یعنی؟', correct: 'آیا تا حالا ... کرده‌ای؟', pool: ['آیا تا حالا ... کرده‌ای؟', 'آیا دیروز ... کردی؟', 'آیا فردا ... می‌کنی؟', 'آیا همیشه ... می‌کنی؟'] },
    { q: 'قسمت سوم فعل «go» چیست؟', correct: 'gone', pool: ['gone', 'went', 'goed', 'going'] },
    { q: 'قسمت سوم فعل «see» چیست؟', correct: 'seen', pool: ['seen', 'saw', 'seed', 'seeing'] },
    { q: 'قسمت سوم فعل «eat» چیست؟', correct: 'eaten', pool: ['eaten', 'ate', 'eated', 'eating'] },
    { q: 'قسمت سوم فعل «write» چیست؟', correct: 'written', pool: ['written', 'wrote', 'writed', 'writing'] },

    // معنی جملات
    { q: 'معنی «I have visited Isfahan.» چیست؟', correct: 'من اصفهان را دیده‌ام.', pool: ['من اصفهان را دیده‌ام.', 'من اصفهان رفتم.', 'من به اصفهان می‌روم.', 'من اصفهان را دوست دارم.'] },
    { q: 'معنی «Have you ever been to London?» چیست؟', correct: 'آیا تا حالا به لندن رفته‌ای؟', pool: ['آیا تا حالا به لندن رفته‌ای؟', 'آیا دیروز به لندن رفتی؟', 'آیا هر روز به لندن می‌روی؟', 'آیا به لندن خواهی رفت؟'] },
    { q: 'معنی «She has finished her homework.» چیست؟', correct: 'او تکالیفش را تمام کرده است.', pool: ['او تکالیفش را تمام کرده است.', 'او تکالیفش را دیروز تمام کرد.', 'او در حال انجام تکالیف است.', 'او تکالیفش را انجام خواهد داد.'] },
    { q: 'معنی «I have never seen a lion.» چیست؟', correct: 'من هرگز شیری ندیده‌ام.', pool: ['من هرگز شیری ندیده‌ام.', 'من یک شیر دیدم.', 'من شیرها را دوست دارم.', 'من دیروز شیر دیدم.'] }
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