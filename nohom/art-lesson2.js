// ============================================================
// درس ۲ نقاشی — رنگ‌آمیزی
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده رنگ‌ها
  // ============================================================
  const colors = {
    primary: [
      { hex: '#f44336', name: 'قرمز', meaning: 'عشق، انرژی، هیجان' },
      { hex: '#ffeb3b', name: 'زرد', meaning: 'شادی، نور، خورشید' },
      { hex: '#2196f3', name: 'آبی', meaning: 'آرامش، آسمان، دریا' }
    ],
    secondary: [
      { hex: '#ff9800', name: 'نارنجی', meaning: 'گرما، خلاقیت' },
      { hex: '#4caf50', name: 'سبز', meaning: 'طبیعت، زندگی' },
      { hex: '#9c27b0', name: 'بنفش', meaning: 'شاهی، رمز و راز' }
    ],
    neutral: [
      { hex: '#ffffff', name: 'سفید', meaning: 'پاکی، سادگی' },
      { hex: '#000000', name: 'سیاه', meaning: 'قدرت، مرموز' },
      { hex: '#9e9e9e', name: 'خاکستری', meaning: 'بی‌طرفی، تعادل' },
      { hex: '#795548', name: 'قهوه‌ای', meaning: 'زمین، طبیعت' }
    ],
    warm: [
      { hex: '#f44336', name: 'قرمز', meaning: 'گرم' },
      { hex: '#ff9800', name: 'نارنجی', meaning: 'گرم' },
      { hex: '#ffc107', name: 'زرد طلایی', meaning: 'گرم' },
      { hex: '#e91e63', name: 'صورتی', meaning: 'گرم ملایم' }
    ],
    cool: [
      { hex: '#2196f3', name: 'آبی', meaning: 'سرد' },
      { hex: '#4caf50', name: 'سبز', meaning: 'سرد' },
      { hex: '#9c27b0', name: 'بنفش', meaning: 'سرد' },
      { hex: '#00bcd4', name: 'فیروزه‌ای', meaning: 'سرد' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    // رنگ‌های اصلی
    { q: 'کدام‌ها رنگ‌های اصلی هستند؟', correct: 'قرمز، زرد، آبی', pool: ['قرمز، زرد، آبی', 'سبز، نارنجی، بنفش', 'سفید، سیاه، خاکستری', 'صورتی، قهوه‌ای، فیروزه‌ای'] },
    { q: 'قرمز + زرد = ؟', correct: 'نارنجی', pool: ['نارنجی', 'سبز', 'بنفش', 'قهوه‌ای'] },
    { q: 'زرد + آبی = ؟', correct: 'سبز', pool: ['سبز', 'نارنجی', 'بنفش', 'صورتی'] },
    { q: 'قرمز + آبی = ؟', correct: 'بنفش', pool: ['بنفش', 'سبز', 'نارنجی', 'قهوه‌ای'] },
    { q: 'قرمز + سبز = ؟', correct: 'قهوه‌ای', pool: ['قهوه‌ای', 'نارنجی', 'بنفش', 'خاکستری'] },

    // گرم و سرد
    { q: 'کدام رنگ گرم است؟', correct: 'قرمز', pool: ['قرمز', 'آبی', 'سبز', 'بنفش'] },
    { q: 'کدام رنگ سرد است؟', correct: 'آبی', pool: ['آبی', 'قرمز', 'نارنجی', 'زرد'] },
    { q: 'رنگ‌های گرم چه حسی می‌دهند؟', correct: 'شادی و انرژی', pool: ['شادی و انرژی', 'آرامش و سکون', 'غم و اندوه', 'سردی'] },
    { q: 'رنگ‌های سرد چه حسی می‌دهند؟', correct: 'آرامش و سکون', pool: ['آرامش و سکون', 'شادی و انرژی', 'هیجان', 'گرما'] },

    // ترکیب
    { q: 'رنگ + سفید = ؟', correct: 'روشن‌تر', pool: ['روشن‌تر', 'تیره‌تر', 'مات‌تر', 'پررنگ‌تر'] },
    { q: 'رنگ + سیاه = ؟', correct: 'تیره‌تر', pool: ['تیره‌تر', 'روشن‌تر', 'شفاف‌تر', 'زنده‌تر'] },
    { q: 'رنگ‌های مکمل چیست؟', correct: 'رنگ‌های روبرو در دایره رنگ', pool: ['رنگ‌های روبرو در دایره رنگ', 'رنگ‌های کنار هم', 'رنگ‌های اصلی', 'رنگ‌های خنثی'] },
    { q: 'مکمل قرمز کدام رنگ است؟', correct: 'سبز', pool: ['سبز', 'آبی', 'زرد', 'بنفش'] },
    { q: 'مکمل آبی کدام رنگ است؟', correct: 'نارنجی', pool: ['نارنجی', 'زرد', 'سبز', 'قرمز'] },
    { q: 'مکمل زرد کدام رنگ است؟', correct: 'بنفش', pool: ['بنفش', 'قرمز', 'آبی', 'سبز'] },

    // نکات
    { q: 'برای رنگ‌آمیزی بهتر، از کجا شروع کنیم؟', correct: 'از رنگ روشن', pool: ['از رنگ روشن', 'از رنگ تیره', 'از وسط', 'از کنار'] },
    { q: 'رنگ‌آمیزی بهتر چگونه است؟', correct: 'لایه‌لایه و نازک', pool: ['لایه‌لایه و نازک', 'یک لایه ضخیم', 'با فشار زیاد', 'سریع'] },
    { q: 'کنتراست چیست؟', correct: 'کنار هم گذاشتن رنگ‌های متضاد', pool: ['کنار هم گذاشتن رنگ‌های متضاد', 'رنگ‌های مشابه', 'یک رنگ تنها', 'ترکیب دو رنگ نزدیک'] },
    { q: 'کدام رنگ نماد طبیعت است؟', correct: 'سبز', pool: ['سبز', 'قرمز', 'آبی', 'زرد'] },
    { q: 'کدام رنگ نماد آرامش است؟', correct: 'آبی', pool: ['آبی', 'قرمز', 'نارنجی', 'زرد'] }
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
  // تب ۲: رنگ‌ها
  // ============================================================
  const colorsList = document.getElementById('colorsList');
  let currentType = 'primary';

  function renderColors(type) {
    colorsList.innerHTML = '';
    colors[type].forEach(c => {
      const card = document.createElement('div');
      card.className = 'color-card';
      card.innerHTML = `
        <div class="color-swatch" style="background:${c.hex};"></div>
        <div class="color-name">${c.name}</div>
        <div class="color-meaning">${c.meaning}</div>
      `;
      colorsList.appendChild(card);
    });
  }

  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentType = tab.dataset.type;
      renderColors(currentType);
    };
  });

  renderColors('primary');

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
  document.querySelectorAll('.color-card, .mix-card, .option-btn, .motel-tab').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();