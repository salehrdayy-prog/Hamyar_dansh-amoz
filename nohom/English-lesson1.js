// ============================================================
// English Lesson 1 — Saving Nature
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // واژگان
  // ============================================================
  const vocabulary = [
    { en: 'nature', fa: 'طبیعت', ph: '/ˈneɪ.tʃər/' },
    { en: 'protect', fa: 'محافظت کردن', ph: '/prəˈtekt/' },
    { en: 'environment', fa: 'محیط زیست', ph: '/ɪnˈvaɪ.rən.mənt/' },
    { en: 'tree', fa: 'درخت', ph: '/triː/' },
    { en: 'forest', fa: 'جنگل', ph: '/ˈfɒr.ɪst/' },
    { en: 'river', fa: 'رودخانه', ph: '/ˈrɪv.ər/' },
    { en: 'animal', fa: 'حیوان', ph: '/ˈæn.ɪ.məl/' },
    { en: 'plant', fa: 'کاشتن', ph: '/plɑːnt/' },
    { en: 'water', fa: 'آب', ph: '/ˈwɔː.tər/' },
    { en: 'waste', fa: 'زباله', ph: '/weɪst/' },
    { en: 'save', fa: 'نجات دادن / صرفه‌جویی', ph: '/seɪv/' },
    { en: 'clean', fa: 'تمیز', ph: '/kliːn/' },
    { en: 'pollution', fa: 'آلودگی', ph: '/pəˈluː.ʃən/' },
    { en: 'recycle', fa: 'بازیافت', ph: '/ˌriːˈsaɪ.kəl/' },
    { en: 'air', fa: 'هوا', ph: '/eər/' },
    { en: 'life', fa: 'زندگی', ph: '/laɪf/' },
    { en: 'must', fa: 'باید', ph: '/mʌst/' },
    { en: 'should', fa: 'بهتر است', ph: '/ʃʊd/' },
    { en: 'cut', fa: 'قطع کردن', ph: '/kʌt/' },
    { en: 'throw', fa: 'انداختن', ph: '/θroʊ/' }
  ];

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'معنی «nature» چیست؟', correct: 'طبیعت', pool: ['طبیعت', 'حیوان', 'جنگل', 'آب'] },
    { q: 'معنی «protect» چیست؟', correct: 'محافظت کردن', pool: ['محافظت کردن', 'کاشتن', 'انداختن', 'قطع کردن'] },
    { q: 'معنی «environment» چیست؟', correct: 'محیط زیست', pool: ['محیط زیست', 'طبیعت', 'زندگی', 'هوا'] },
    { q: 'معنی «tree» چیست؟', correct: 'درخت', pool: ['درخت', 'جنگل', 'رودخانه', 'حیوان'] },
    { q: 'معنی «forest» چیست؟', correct: 'جنگل', pool: ['جنگل', 'درخت', 'رودخانه', 'کوه'] },
    { q: 'معنی «river» چیست؟', correct: 'رودخانه', pool: ['رودخانه', 'دریا', 'درخت', 'آب'] },
    { q: 'معنی «plant» چیست؟', correct: 'کاشتن', pool: ['کاشتن', 'قطع کردن', 'انداختن', 'آب دادن'] },
    { q: 'معنی «waste» چیست؟', correct: 'زباله', pool: ['زباله', 'آب', 'هوا', 'خاک'] },
    { q: 'معنی «save» چیست؟', correct: 'نجات دادن', pool: ['نجات دادن', 'انداختن', 'کاشتن', 'قطع کردن'] },
    { q: 'معنی «pollution» چیست؟', correct: 'آلودگی', pool: ['آلودگی', 'زباله', 'پاکیزگی', 'بازیافت'] },
    { q: 'معنی «recycle» چیست؟', correct: 'بازیافت کردن', pool: ['بازیافت کردن', 'کاشتن', 'قطع کردن', 'انداختن'] },
    { q: 'معنی «must» چیست؟', correct: 'باید', pool: ['باید', 'بهتر است', 'نباید', 'می‌تواند'] },
    { q: 'معنی «should» چیست؟', correct: 'بهتر است', pool: ['بهتر است', 'باید', 'نباید', 'می‌تواند'] },
    { q: 'معنی «air» چیست؟', correct: 'هوا', pool: ['هوا', 'آب', 'خاک', 'آتش'] },
    { q: 'معنی «life» چیست؟', correct: 'زندگی', pool: ['زندگی', 'طبیعت', 'محیط', 'سلامتی'] },
    { q: 'معنی «clean» چیست؟', correct: 'تمیز', pool: ['تمیز', 'کثیف', 'بزرگ', 'کوچک'] },
    { q: 'معنی «cut» چیست؟', correct: 'قطع کردن', pool: ['قطع کردن', 'کاشتن', 'انداختن', 'بازیافت'] },
    { q: 'معنی «throw» چیست؟', correct: 'انداختن', pool: ['انداختن', 'گرفتن', 'کاشتن', 'قطع کردن'] },
    { q: '«طبیعت» به انگلیسی چیست؟', correct: 'nature', pool: ['nature', 'forest', 'animal', 'water'] },
    { q: '«درخت» به انگلیسی چیست؟', correct: 'tree', pool: ['tree', 'forest', 'plant', 'river'] },
    { q: '«آب» به انگلیسی چیست؟', correct: 'water', pool: ['water', 'air', 'life', 'clean'] },
    { q: 'کدام جمله درست است؟', correct: 'We must protect nature.', pool: ['We must protect nature.', 'We protect must nature.', 'We nature protect must.', 'Protect we must nature.'] },
    { q: 'کدام جمله درست است؟', correct: 'We should plant trees.', pool: ['We should plant trees.', 'We plant should trees.', 'Should we trees plant.', 'Trees we should plant.'] },
    { q: '«ما نباید درختان را قطع کنیم» کدام است؟', correct: 'We must not cut trees.', pool: ['We must not cut trees.', 'We must cut not trees.', 'We not must cut trees.', 'Cut trees we must not.'] },
    { q: '«ما باید آب را ذخیره کنیم» کدام است؟', correct: 'We must save water.', pool: ['We must save water.', 'We save must water.', 'Water we must save.', 'Must we save water.'] },
    { q: 'معنی «We should not throw waste.» چیست؟', correct: 'بهتر است زباله نیندازیم.', pool: ['بهتر است زباله نیندازیم.', 'ما باید زباله بیندازیم.', 'ما زباله انداختیم.', 'زباله نباید بیندازیم.'] },
    { q: 'معنی «Nature is beautiful.» چیست؟', correct: 'طبیعت زیباست.', pool: ['طبیعت زیباست.', 'طبیعت بزرگ است.', 'طبیعت سبز است.', 'طبیعت زیبا بود.'] },
    { q: 'معنی «We must help animals.» چیست؟', correct: 'ما باید به حیوانات کمک کنیم.', pool: ['ما باید به حیوانات کمک کنیم.', 'ما به حیوانات کمک کردیم.', 'ما نباید به حیوانات کمک کنیم.', 'ما می‌توانیم به حیوانات کمک کنیم.'] },
    { q: 'معنی «We should recycle paper.» چیست؟', correct: 'بهتر است کاغذ را بازیافت کنیم.', pool: ['بهتر است کاغذ را بازیافت کنیم.', 'ما کاغذ را بازیافت کردیم.', 'ما نباید کاغذ را بازیافت کنیم.', 'کاغذ را باید دور بریزیم.'] }
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
  // تب ۲: واژگان + دکمه صوتی
  // ============================================================
  const vocabGrid = document.getElementById('vocabGrid');

  // تابع پخش صدا
  function playWord(word) {
    // اول از voice.js استفاده کن
    if (typeof window.speakEnglish === 'function') {
      window.speakEnglish(word);
      return;
    }
    if (typeof window.speakText === 'function') {
      window.speakText(word);
      return;
    }
    // پشتیبان: Web Speech API مستقیم
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

      // افکت
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