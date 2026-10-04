// ============================================================
// فصل ۵ ریاضی — عبارت‌های جبری
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده روش‌های تجزیه
  // ============================================================
  const factorize = {
    common: [
      { icon: '🔢', title: 'فاکتور مشترک', desc: 'بزرگ‌ترین عامل مشترک را بیرون می‌کشیم.' },
      { icon: '🎯', title: 'مثال ۱', desc: '6x + 9 = 3(2x + 3)' },
      { icon: '🎯', title: 'مثال ۲', desc: '4x² + 8x = 4x(x + 2)' },
      { icon: '🎯', title: 'مثال ۳', desc: '15x³ − 10x² = 5x²(3x − 2)' },
      { icon: '📌', title: 'قاعده', desc: 'a·b + a·c = a(b + c)' },
      { icon: '💡', title: 'نکته', desc: 'همیشه بزرگ‌ترین فاکتور مشترک را انتخاب کن.' }
    ],
    grouping: [
      { icon: '📦', title: 'دسته‌بندی', desc: 'جملات را به دو گروه تقسیم می‌کنیم و از هر گروه فاکتور می‌گیریم.' },
      { icon: '🎯', title: 'مثال ۱', desc: 'ax + ay + bx + by = a(x+y) + b(x+y) = (x+y)(a+b)' },
      { icon: '🎯', title: 'مثال ۲', desc: 'x² + 2x + 3x + 6 = x(x+2) + 3(x+2) = (x+2)(x+3)' },
      { icon: '📌', title: 'مراحل', desc: '۱. دوتا دوتا گروه کن  ۲. فاکتور بگیر  ۳. گروه مشترک را جدا کن' },
      { icon: '💡', title: 'نکته', desc: 'بعد از گروه‌بندی، عبارت مشترک باید یکسان باشد.' },
      { icon: '🎓', title: 'کاربرد', desc: 'برای تجزیه چندجمله‌ای‌های چهار جمله‌ای.' }
    ],
    identity: [
      { icon: '🎯', title: 'تجزیه با اتحاد', desc: 'از اتحادهای جبری برای تجزیه استفاده می‌کنیم.' },
      { icon: '🎯', title: 'مثال ۱ (مزدوج)', desc: 'x² − 9 = (x − 3)(x + 3)' },
      { icon: '🎯', title: 'مثال ۲ (مربع کامل)', desc: 'x² + 6x + 9 = (x + 3)²' },
      { icon: '🎯', title: 'مثال ۳', desc: '4x² − 25 = (2x − 5)(2x + 5)' },
      { icon: '📌', title: 'قاعده مهم', desc: 'a² − b² = (a − b)(a + b)' },
      { icon: '💡', title: 'نکته', desc: 'اگر سه جمله داشته باشیم و دو سر مربع کامل بود → مربع کامل.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    // ساده کردن
    { q: '3x + 5x = ؟', correct: '8x', pool: ['8x', '8x²', '15x', '15x²'] },
    { q: '7x − 4x = ؟', correct: '3x', pool: ['3x', '3', '11x', '3x²'] },
    { q: '2x + 3y + 4x = ؟', correct: '6x + 3y', pool: ['6x + 3y', '9xy', '9x', '6x + 3'] },
    { q: '3x² + 5x² = ؟', correct: '8x²', pool: ['8x²', '8x⁴', '15x²', '8x'] },
    { q: '2x × 3x = ؟', correct: '6x²', pool: ['6x²', '6x', '5x²', '6x⁴'] },
    { q: '4x³ × 2x² = ؟', correct: '8x⁵', pool: ['8x⁵', '8x⁶', '6x⁵', '8x'] },
    { q: '6x³ ÷ 2x = ؟', correct: '3x²', pool: ['3x²', '3x³', '4x²', '3x'] },
    { q: '10x⁵ ÷ 5x² = ؟', correct: '2x³', pool: ['2x³', '2x⁷', '5x³', '2x²'] },
    { q: '2x(x + 3) = ؟', correct: '2x² + 6x', pool: ['2x² + 6x', '2x² + 3', '2x + 6x', '2x² + 6'] },
    { q: '(x + 2)(x + 3) = ؟', correct: 'x² + 5x + 6', pool: ['x² + 5x + 6', 'x² + 6x + 5', 'x² + 6', 'x² + 5x'] },

    // اتحادها
    { q: '(a + b)² = ؟', correct: 'a² + 2ab + b²', pool: ['a² + 2ab + b²', 'a² + b²', 'a² − 2ab + b²', 'a² + ab + b²'] },
    { q: '(a − b)² = ؟', correct: 'a² − 2ab + b²', pool: ['a² − 2ab + b²', 'a² + 2ab + b²', 'a² − b²', 'a² + b²'] },
    { q: '(a + b)(a − b) = ؟', correct: 'a² − b²', pool: ['a² − b²', 'a² + b²', 'a² + 2ab + b²', 'a² − 2ab + b²'] },
    { q: '(x + 3)² = ؟', correct: 'x² + 6x + 9', pool: ['x² + 6x + 9', 'x² + 9', 'x² + 3x + 9', 'x² + 9x + 6'] },
    { q: '(x − 3)² = ؟', correct: 'x² − 6x + 9', pool: ['x² − 6x + 9', 'x² − 9', 'x² − 3x + 9', 'x² + 6x + 9'] },
    { q: '(x + 4)(x − 4) = ؟', correct: 'x² − 16', pool: ['x² − 16', 'x² + 16', 'x² − 8x + 16', 'x² − 4'] },
    { q: '(x + 1)² = ؟', correct: 'x² + 2x + 1', pool: ['x² + 2x + 1', 'x² + 1', 'x² + x + 1', 'x² + 2x'] },
    { q: '(x + 5)(x − 5) = ؟', correct: 'x² − 25', pool: ['x² − 25', 'x² + 25', 'x² − 10x + 25', 'x² − 5'] },

    // تجزیه
    { q: '6x + 9 = ؟', correct: '3(2x + 3)', pool: ['3(2x + 3)', '3(2x + 9)', '6(x + 9)', '3(2x + 6)'] },
    { q: '4x² + 8x = ؟', correct: '4x(x + 2)', pool: ['4x(x + 2)', '4(x² + 2)', '4x(x + 8)', '2x(2x + 4)'] },
    { q: 'x² − 9 = ؟', correct: '(x − 3)(x + 3)', pool: ['(x − 3)(x + 3)', '(x − 9)(x + 1)', '(x − 3)²', 'x(x − 9)'] },
    { q: 'x² + 6x + 9 = ؟', correct: '(x + 3)²', pool: ['(x + 3)²', '(x − 3)²', '(x + 9)(x + 1)', '(x + 3)(x − 3)'] },
    { q: '4x² − 25 = ؟', correct: '(2x − 5)(2x + 5)', pool: ['(2x − 5)(2x + 5)', '(4x − 5)(x + 5)', '(2x − 5)²', '(4x − 25)(x + 1)'] },
    { q: 'x² − 4 = ؟', correct: '(x − 2)(x + 2)', pool: ['(x − 2)(x + 2)', '(x − 4)(x + 1)', '(x − 2)²', 'x(x − 4)'] },

    // درجه
    { q: 'درجه 3x² + 5x − 2 چقدر است؟', correct: '۲', pool: ['۲', '۱', '۳', '۰'] },
    { q: 'درجه x³ + x² + x چقدر است؟', correct: '۳', pool: ['۳', '۲', '۱', '۴'] },
    { q: 'درجه عدد ثابت ۵ چقدر است؟', correct: '۰', pool: ['۰', '۱', '۵', 'نامشخص'] }
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
  // تب ۳: تجزیه
  // ============================================================
  const factorizeList = document.getElementById('factorizeList');
  let currentFactorize = 'common';

  function renderFactorize(type) {
    factorizeList.innerHTML = '';
    factorize[type].forEach(p => {
      const card = document.createElement('div');
      card.className = 'prop-card';
      card.innerHTML = `
        <div class="prop-icon">${p.icon}</div>
        <div class="prop-title">${p.title}</div>
        <div class="prop-desc">${p.desc}</div>
      `;
      factorizeList.appendChild(card);
    });
  }

  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFactorize = tab.dataset.type;
      renderFactorize(currentFactorize);
    };
  });

  renderFactorize('common');

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
  document.querySelectorAll('.prop-card, .option-btn, .motel-tab, .identity-card').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();