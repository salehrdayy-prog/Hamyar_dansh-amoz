// ============================================================
// فصل ۷ علوم — آثاری از گذشته زمین
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده فسیل‌ها
  // ============================================================
  const fossils = {
    types: [
      { icon: '🦴', title: 'فسیل استخوانی', desc: 'استخوان‌های جانداران که در سنگ‌ها حفظ شده‌اند — مثل استخوان دایناسور.' },
      { icon: '🐚', title: 'فسیل صدفی', desc: 'صدف‌های دریایی که در سنگ‌های رسوبی یافت می‌شوند.' },
      { icon: '👣', title: 'فسیل رد پا', desc: 'رد پای جانداران روی گل که بعداً سنگ شده است.' },
      { icon: '🍃', title: 'فسیل برگ', desc: 'اثر برگ گیاهان در سنگ‌های رسوبی.' },
      { icon: '🐛', title: 'فسیل حشره', desc: 'حشرات محفوظ در کهربا (صمغ فسیل‌شده).' },
      { icon: '🥚', title: 'فسیل تخم', desc: 'تخم‌های دایناسور که در سنگ‌ها کشف شده‌اند.' }
    ],
    formation: [
      { icon: '💀', title: 'گام ۱: مرگ جاندار', desc: 'جاندار در محیطی مثل دریاچه یا باتلاق می‌میرد.' },
      { icon: '🏖️', title: 'گام ۲: دفن سریع', desc: 'جسد به سرعت با رسوب (ماسه، گل) پوشیده می‌شود.' },
      { icon: '⏳', title: 'گام ۳: گذر زمان', desc: 'طی میلیون‌ها سال، رسوب به سنگ تبدیل می‌شود.' },
      { icon: '💧', title: 'گام ۴: جایگزینی', desc: 'مواد معدنی جای استخوان یا بافت را می‌گیرند.' },
      { icon: '🪨', title: 'گام ۵: فسیل کامل', desc: 'فسیل داخل سنگ رسوبی تشکیل می‌شود.' },
      { icon: '⛏️', title: 'گام ۶: کشف', desc: 'با فرسایش یا کاوش، فسیل کشف می‌شود.' }
    ],
    uses: [
      { icon: '🦕', title: 'شناخت جانداران قدیم', desc: 'فسیل‌ها نشان می‌دهند چه جاندارانی در گذشته زندگی می‌کردند.' },
      { icon: '🌡️', title: 'شناخت آب‌وهوای قدیم', desc: 'از نوع فسیل‌ها می‌فهمیم آب‌وهوا چگونه بوده است.' },
      { icon: '🗺️', title: 'جابه‌جایی قاره‌ها', desc: 'فسیل‌های مشابه در قاره‌های دور نشان می‌دهند آن‌ها قبلاً به هم چسبیده بودند.' },
      { icon: '📅', title: 'تعیین سن سنگ‌ها', desc: 'فسیل‌های شاخص به تعیین سن لایه‌های سنگ کمک می‌کنند.' },
      { icon: '🛢️', title: 'یافتن نفت و ذغال', desc: 'فسیل‌ها به کشف منابع انرژی کمک می‌کنند.' },
      { icon: '🔬', title: 'تکامل جانداران', desc: 'فسیل‌ها مسیر تکامل موجودات زنده را نشان می‌دهند.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'فسیل چیست؟', correct: 'بقایای جانداران قدیمی در سنگ‌ها', pool: ['بقایای جانداران قدیمی در سنگ‌ها', 'نوعی سنگ', 'نوعی کانی', 'نوعی گاز'] },
    { q: 'سن زمین چقدر است؟', correct: '۴.۶ میلیارد سال', pool: ['۴.۶ میلیارد سال', '۴.۶ میلیون سال', '۴۶۰ میلیون سال', '۴۶ هزار سال'] },
    { q: 'فسیل‌ها بیشتر در کدام سنگ یافت می‌شوند؟', correct: 'رسوبی', pool: ['رسوبی', 'آذرین', 'دگرگونی', 'همه انواع'] },
    { q: 'سنگ آذرین چگونه تشکیل می‌شود؟', correct: 'از سرد شدن ماگما', pool: ['از سرد شدن ماگما', 'از ته‌نشست رسوب', 'از فشار و حرارت', 'از آب'] },
    { q: 'سنگ رسوبی چگونه تشکیل می‌شود؟', correct: 'از ته‌نشست رسوبات', pool: ['از ته‌نشست رسوبات', 'از سرد شدن ماگما', 'از فشار و حرارت', 'از یخ'] },
    { q: 'سنگ دگرگونی چگونه تشکیل می‌شود؟', correct: 'از فشار و حرارت', pool: ['از فشار و حرارت', 'از سرد شدن ماگما', 'از ته‌نشست رسوب', 'از باد'] },
    { q: 'کدام سنگ فسیل دارد؟', correct: 'رسوبی', pool: ['رسوبی', 'آذرین', 'دگرگونی', 'هیچکدام'] },
    { q: 'دوران دایناسورها چه نام دارد؟', correct: 'مزوزوئیک', pool: ['مزوزوئیک', 'پالئوزوئیک', 'سنوزوئیک', 'پرکامبرین'] },
    { q: 'عصر پستانداران چه نام دارد؟', correct: 'سنوزوئیک', pool: ['سنوزوئیک', 'مزوزوئیک', 'پالئوزوئیک', 'پرکامبرین'] },
    { q: 'قدیمی‌ترین دوران زمین چه نام دارد؟', correct: 'پرکامبرین', pool: ['پرکامبرین', 'پالئوزوئیک', 'مزوزوئیک', 'سنوزوئیک'] },
    { q: 'کهربا چیست؟', correct: 'صمغ فسیل‌شده درختان', pool: ['صمغ فسیل‌شده درختان', 'نوعی سنگ', 'نوعی فلز', 'نوعی گاز'] },
    { q: 'فسیل رد پا چگونه تشکیل می‌شود؟', correct: 'جاندار روی گل راه می‌رود و رد پایش سنگ می‌شود', pool: ['جاندار روی گل راه می‌رود و رد پایش سنگ می‌شود', 'استخوان جاندار در سنگ', 'صدف در سنگ', 'برگ در سنگ'] },
    { q: 'فسیل‌ها چه کمکی به دانشمندان می‌کنند؟', correct: 'شناخت گذشته زمین', pool: ['شناخت گذشته زمین', 'شناخت آینده', 'پیش‌بینی هوا', 'ساخت دارو'] },
    { q: 'مرمر چه نوع سنگی است؟', correct: 'دگرگونی', pool: ['دگرگونی', 'آذرین', 'رسوبی', 'آتشفشانی'] },
    { q: 'گرانیت چه نوع سنگی است؟', correct: 'آذرین', pool: ['آذرین', 'رسوبی', 'دگرگونی', 'آتشفشانی'] },
    { q: 'آهک چه نوع سنگی است؟', correct: 'رسوبی', pool: ['رسوبی', 'آذرین', 'دگرگونی', 'آتشفشانی'] },
    { q: 'سنگ‌ها در چرخه سنگ به چند دسته اصلی تقسیم می‌شوند؟', correct: '۳', pool: ['۳', '۲', '۴', '۵'] },
    { q: 'فسیل‌های مشابه در قاره‌های دور نشان‌دهنده چیست؟', correct: 'قاره‌ها قبلاً به هم چسبیده بودند', pool: ['قاره‌ها قبلاً به هم چسبیده بودند', 'قاره‌ها همیشه جدا بودند', 'همه فسیل‌ها یکسان‌اند', 'هیچ ارتباطی نیست'] },
    { q: 'اولین گام تشکیل فسیل چیست؟', correct: 'مرگ جاندار', pool: ['مرگ جاندار', 'دفن سریع', 'گذر زمان', 'جایگزینی'] },
    { q: 'چرا فسیل در سنگ آذرین یافت نمی‌شود؟', correct: 'به دلیل حرارت زیاد ماگما', pool: ['به دلیل حرارت زیاد ماگما', 'چون سخت است', 'چون قدیمی نیست', 'چون سیاه است'] },
    { q: 'بازالت چه نوع سنگی است؟', correct: 'آذرین', pool: ['آذرین', 'رسوبی', 'دگرگونی', 'آتشفشانی'] },
    { q: 'ماسه‌سنگ چه نوع سنگی است؟', correct: 'رسوبی', pool: ['رسوبی', 'آذرین', 'دگرگونی', 'آتشفشانی'] },
    { q: 'کوارتزیت چه نوع سنگی است؟', correct: 'دگرگونی', pool: ['دگرگونی', 'آذرین', 'رسوبی', 'آتشفشانی'] },
    { q: 'فسیل‌ها برای کشف چه منبعی کمک می‌کنند؟', correct: 'نفت و ذغال', pool: ['نفت و ذغال', 'طلا', 'الماس', 'آب'] },
    { q: 'دایناسورها در کدام دوران منقرض شدند؟', correct: 'پایان مزوزوئیک', pool: ['پایان مزوزوئیک', 'پایان سنوزوئیک', 'پایان پالئوزوئیک', 'پایان پرکامبرین'] },
    { q: 'لایه‌های سنگ رسوبی چه چیزی را نشان می‌دهند؟', correct: 'سن نسبی لایه‌ها', pool: ['سن نسبی لایه‌ها', 'رنگ سنگ', 'سختی سنگ', 'وزن سنگ'] }
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
  // تب ۲: فسیل‌ها
  // ============================================================
  const fossilList = document.getElementById('fossilList');
  let currentType = 'types';

  function renderFossils(type) {
    fossilList.innerHTML = '';
    fossils[type].forEach(p => {
      const card = document.createElement('div');
      card.className = 'prop-card';
      card.innerHTML = `
        <div class="prop-icon">${p.icon}</div>
        <div class="prop-title">${p.title}</div>
        <div class="prop-desc">${p.desc}</div>
      `;
      fossilList.appendChild(card);
    });
  }

  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentType = tab.dataset.type;
      renderFossils(currentType);
    };
  });

  renderFossils('types');

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
  document.querySelectorAll('.prop-card, .option-btn, .motel-tab, .rock-card, .cycle-step').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();