// ============================================================
// فصل ۴ علوم — حرکت چیست؟
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده انواع حرکت
  // ============================================================
  const types = {
    bypath: [
      { icon: '➡️', title: 'حرکت مستقیم‌الخط', desc: 'حرکت روی خط راست — مثل حرکت ماشین در جاده مستقیم.' },
      { icon: '⭕', title: 'حرکت دایره‌ای', desc: 'حرکت روی مسیر دایره‌ای — مثل چرخش زمین دور خورشید.' },
      { icon: '〰️', title: 'حرکت منحنی', desc: 'حرکت روی مسیر خمیده — مثل پرتاب توپ.' },
      { icon: '📳', title: 'حرکت نوسانی', desc: 'حرکت رفت و برگشتی — مثل پاندول ساعت.' }
    ],
    byspeed: [
      { icon: '🚗', title: 'حرکت یکنواخت', desc: 'سرعت ثابت است — جسم در زمان‌های مساوی، مسافت‌های مساوی طی می‌کند.' },
      { icon: '🏎️', title: 'حرکت شتاب‌دار', desc: 'سرعت تغییر می‌کند — یا زیاد می‌شود یا کم.' },
      { icon: '🚦', title: 'حرکت تندشونده', desc: 'سرعت به‌طور مداوم زیاد می‌شود — مثل ماشینی که گاز می‌دهد.' },
      { icon: '🛑', title: 'حرکت کندشونده', desc: 'سرعت به‌طور مداوم کم می‌شود — مثل ماشینی که ترمز می‌گیرد.' }
    ],
    bychange: [
      { icon: '📍', title: 'جابه‌جایی', desc: 'تغییر مکان از نقطه شروع به پایان — یک خط راست.' },
      { icon: '🛤️', title: 'مسافت', desc: 'طول کل مسیر طی‌شده — ممکن است خمیده باشد.' },
      { icon: '↩️', title: 'حرکت رفت و برگشت', desc: 'اگر جسم به نقطه شروع برگردد، جابه‌جایی صفر ولی مسافت ≠ صفر.' },
      { icon: '⚖️', title: 'حرکت نسبی', desc: 'حرکت یک جسم نسبت به جسم دیگر سنجیده می‌شود.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'حرکت چیست؟', correct: 'تغییر موقعیت نسبت به مرجع', pool: ['تغییر موقعیت نسبت به مرجع', 'سکون کامل', 'تغییر رنگ', 'تغییر حجم'] },
    { q: 'حرکت نسبی یعنی چه؟', correct: 'حرکت نسبت به مرجع سنجیده می‌شود', pool: ['حرکت نسبت به مرجع سنجیده می‌شود', 'حرکت همیشه یکسان', 'حرکت فقط در خط راست', 'حرکت فقط در دایره'] },
    { q: 'یکای مسافت در SI چیست؟', correct: 'متر', pool: ['متر', 'کیلومتر', 'سانتی‌متر', 'مایل'] },
    { q: 'یکای زمان در SI چیست؟', correct: 'ثانیه', pool: ['ثانیه', 'دقیقه', 'ساعت', 'روز'] },
    { q: 'فرمول سرعت متوسط چیست؟', correct: 'v = d / t', pool: ['v = d / t', 'v = t / d', 'v = d × t', 'v = d + t'] },
    { q: 'یکای سرعت در SI چیست؟', correct: 'm/s', pool: ['m/s', 'km/h', 'm/h', 'km/s'] },
    { q: 'برای تبدیل km/h به m/s چیکار می‌کنیم؟', correct: 'تقسیم بر ۳.۶', pool: ['تقسیم بر ۳.۶', 'ضرب در ۳.۶', 'تقسیم بر ۱۰۰', 'ضرب در ۱۰۰'] },
    { q: 'تفاوت سرعت و تندی چیست؟', correct: 'سرعت جهت دارد، تندی ندارد', pool: ['سرعت جهت دارد، تندی ندارد', 'هیچ تفاوتی ندارند', 'تندی جهت دارد', 'سرعت فقط مقدار'] },
    { q: 'مسافت چیست؟', correct: 'طول کل مسیر طی‌شده', pool: ['طول کل مسیر طی‌شده', 'فاصله مستقیم', 'زمان طی شده', 'سرعت متوسط'] },
    { q: 'جابه‌جایی چیست؟', correct: 'فاصله مستقیم شروع تا پایان', pool: ['فاصله مستقیم شروع تا پایان', 'طول مسیر', 'سرعت', 'زمان'] },
    { q: 'اگر جسم دایره‌ای بچرخد و به نقطه شروع برگردد، جابه‌جایی چقدر است؟', correct: 'صفر', pool: ['صفر', 'محیط دایره', 'نصف محیط', 'دوبرابر محیط'] },
    { q: 'ماشینی ۱۰۰ کیلومتر را در ۲ ساعت می‌رود. سرعتش چقدر است؟', correct: '۵۰ km/h', pool: ['۵۰ km/h', '۱۰۰ km/h', '۲۰۰ km/h', '۲۵ km/h'] },
    { q: 'دونده‌ای ۲۰۰ متر را در ۲۵ ثانیه می‌دود. سرعتش چقدر است؟', correct: '۸ m/s', pool: ['۸ m/s', '۱۰ m/s', '۴ m/s', '۲۵ m/s'] },
    { q: 'سرعت ۳۶ km/h معادل چند m/s است؟', correct: '۱۰', pool: ['۱۰', '۳۶', '۳.۶', '۱۰۰'] },
    { q: 'حرکت پاندول ساعت چه نوع حرکتی است؟', correct: 'نوسانی', pool: ['نوسانی', 'مستقیم', 'دایره‌ای', 'منحنی'] },
    { q: 'حرکت ماشین روی جاده مستقیم چه نوع حرکتی است؟', correct: 'مستقیم‌الخط', pool: ['مستقیم‌الخط', 'دایره‌ای', 'نوسانی', 'منحنی'] },
    { q: 'چرخش زمین دور خورشید چه نوع حرکتی است؟', correct: 'دایره‌ای', pool: ['دایره‌ای', 'مستقیم', 'نوسانی', 'منحنی'] },
    { q: 'در حرکت یکنواخت چه چیزی ثابت است؟', correct: 'سرعت', pool: ['سرعت', 'مکان', 'زمان', 'جهت'] },
    { q: 'اگر سرعت افزایش یابد، چه نوع حرکتی است؟', correct: 'تندشونده', pool: ['تندشونده', 'کندشونده', 'یکنواخت', 'ساکن'] },
    { q: 'اگر سرعت کاهش یابد، چه نوع حرکتی است؟', correct: 'کندشونده', pool: ['کندشونده', 'تندشونده', 'یکنواخت', 'نوسانی'] },
    { q: 'حرکت یک جسم نسبت به جسم دیگر چه نام دارد؟', correct: 'حرکت نسبی', pool: ['حرکت نسبی', 'حرکت مستقیم', 'حرکت دایره‌ای', 'حرکت نوسانی'] },
    { q: 'اتوبوسی ۱۸۰ کیلومتر را در ۳ ساعت می‌رود. سرعتش چقدر است؟', correct: '۶۰ km/h', pool: ['۶۰ km/h', '۹۰ km/h', '۱۸۰ km/h', '۳۰ km/h'] },
    { q: 'اگر v = ۱۵ m/s و t = ۴ s باشد، d چقدر است؟', correct: '۶۰ m', pool: ['۶۰ m', '۱۹ m', '۳.۷۵ m', '۴ m'] },
    { q: 'در فرمول v = d/t، اگر d دو برابر و t ثابت بماند، v چه می‌شود؟', correct: 'دو برابر', pool: ['دو برابر', 'نصف', 'ثابت', 'سه برابر'] },
    { q: 'دوچرخه‌سواری ۳۶۰۰ متر را در ۶۰۰ ثانیه می‌رود. سرعتش چقدر است؟', correct: '۶ m/s', pool: ['۶ m/s', '۳۶ m/s', '۶۰ m/s', '۰.۶ m/s'] }
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
  // تب ۲: انواع حرکت
  // ============================================================
  const typesList = document.getElementById('typesList');
  let currentType = 'bypath';

  function renderTypes(type) {
    typesList.innerHTML = '';
    types[type].forEach(p => {
      const card = document.createElement('div');
      card.className = 'prop-card';
      card.innerHTML = `
        <div class="prop-icon">${p.icon}</div>
        <div class="prop-title">${p.title}</div>
        <div class="prop-desc">${p.desc}</div>
      `;
      typesList.appendChild(card);
    });
  }

  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentType = tab.dataset.type;
      renderTypes(currentType);
    };
  });

  renderTypes('bypath');

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
  document.querySelectorAll('.prop-card, .option-btn, .motel-tab, .example-calc').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();