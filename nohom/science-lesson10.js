// ============================================================
// فصل ۱۰ علوم — نگاهی به فضا
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده سیارات و اجرام
  // ============================================================
  const solar = {
    inner: [
      { icon: '🌑', title: 'عطارد', desc: 'نزدیک‌ترین سیاره به خورشید — کوچک و بدون جو. روزها داغ، شب‌ها سرد.' },
      { icon: '🌕', title: 'زهره', desc: 'داغ‌ترین سیاره — جو غلیظ از CO₂. به آن «خواهر زمین» می‌گویند.' },
      { icon: '🌍', title: 'زمین', desc: 'سیاره ما — تنها سیاره شناخته‌شده با حیات. دارای آب مایع و جو.' },
      { icon: '🔴', title: 'مریخ', desc: 'سیاره سرخ — دارای دو قمر. دانشمندان در جستجوی حیات در آن هستند.' },
      { icon: '🌙', title: 'ماه', desc: 'قمر زمین — هر ۲۷ روز به دور زمین می‌چرخد. نور آن از خورشید است.' },
      { icon: '☄️', title: 'کمربند سیارکی', desc: 'بین مریخ و مشتری — میلیون‌ها سنگ فضایی.' }
    ],
    outer: [
      { icon: '🟠', title: 'مشتری', desc: 'بزرگ‌ترین سیاره — لکه سرخ بزرگ، طوفانی عظیم. ۹۵ قمر دارد.' },
      { icon: '🪐', title: 'زحل', desc: 'سیاره حلقه‌دار — حلقه‌های یخی زیبا. سبک‌تر از آب است.' },
      { icon: '🔵', title: 'اورانوس', desc: 'سیاره آبی-سبز — به پهلو می‌چرخد. سردترین جو منظومه شمسی.' },
      { icon: '🔷', title: 'نپتون', desc: 'دورترین سیاره — بادهای سریع تا ۲۰۰۰ km/h.' },
      { icon: '💫', title: 'سیارات کوتوله', desc: 'پلوتو، اریس و... — کوچک‌تر از سیارات ولی گرد.' },
      { icon: '🌌', title: 'منطقه فرانپتون', desc: 'لبه منظومه شمسی — سیارک‌های یخی.' }
    ],
    others: [
      { icon: '☀️', title: 'خورشید', desc: 'ستاره مرکزی منظومه — گوی عظیم گاز داغ. فاصله: ۱۵۰ میلیون کیلومتر.' },
      { icon: '🌠', title: 'شهاب', desc: 'سنگ فضایی که وارد جو زمین می‌شود و می‌سوزد — «شهاب سنگ» اگر به زمین برسد.' },
      { icon: '☄️', title: 'دنباله‌دار', desc: 'جسم یخی با دنباله درخشان. معروف: هالی.' },
      { icon: '🌑', title: 'خسوف', desc: 'ماه‌گرفتگی — زمین بین خورشید و ماه قرار می‌گیرد.' },
      { icon: '🌞', title: 'کسوف', desc: 'خورشیدگرفتگی — ماه بین خورشید و زمین قرار می‌گیرد.' },
      { icon: '🛰️', title: 'ماهواره', desc: 'جسم ساخت بشر که دور زمین یا سیارات می‌چرخد.' }
    ]
  };

  const stars = {
    life: [
      { icon: '☁️', title: 'سحابی', desc: 'ابر عظیم گاز و غبار — محل تولد ستارگان.' },
      { icon: '⭐', title: 'پیش‌ستاره', desc: 'توده گاز در حال فشرده شدن — مرحله قبل از ستاره.' },
      { icon: '🌟', title: 'ستاره اصلی', desc: 'ستاره‌ای که در حال سوختن هیدروژن است — مثل خورشید.' },
      { icon: '🔴', title: 'غول سرخ', desc: 'ستاره‌ای که منبسط شده — خورشید در آینده.' },
      { icon: '💥', title: 'ابرنواختر', desc: 'انفجار عظیم ستاره در پایان عمر.' },
      { icon: '⚫', title: 'سیاهچاله', desc: 'نتیجه فروپاشی ستاره‌های بزرگ — جاذبه بسیار قوی.' }
    ],
    types: [
      { icon: '🔵', title: 'ستاره آبی', desc: 'داغ‌ترین ستاره — دما بیش از ۲۵۰۰۰ درجه.' },
      { icon: '⚪', title: 'ستاره سفید', desc: 'داغ — دما حدود ۱۰۰۰۰ درجه.' },
      { icon: '🟡', title: 'ستاره زرد', desc: 'مثل خورشید — دما حدود ۵۵۰۰ درجه.' },
      { icon: '🟠', title: 'ستاره نارنجی', desc: 'خنک‌تر — دما حدود ۴۰۰۰ درجه.' },
      { icon: '🔴', title: 'ستاره سرخ', desc: 'خنک‌ترین ستاره — دما حدود ۳۰۰۰ درجه.' },
      { icon: '🌟', title: 'ستاره دوتایی', desc: 'دو ستاره که دور یکدیگر می‌چرخند.' }
    ],
    galaxy: [
      { icon: '🌌', title: 'کهکشان راه شیری', desc: 'کهکشان ما — حدود ۱۰۰ میلیارد ستاره. شکل مارپیچی.' },
      { icon: '🌀', title: 'کهکشان آندرومدا', desc: 'نزدیک‌ترین کهکشان بزرگ به ما — در حال نزدیک شدن.' },
      { icon: '⚪', title: 'کهکشان بیضوی', desc: 'شکل تخم‌مرغی — ستارگان پیر.' },
      { icon: '🌀', title: 'کهکشان مارپیچی', desc: 'شکل بازوهای چرخان — راه شیری از این نوع.' },
      { icon: '🔷', title: 'کهکشان نامنظم', desc: 'بدون شکل مشخص — ابرهای ماژلانی.' },
      { icon: '💫', title: 'خوشه کهکشانی', desc: 'مجموعه‌ای از کهکشان‌ها که با گرانش به هم پیوسته‌اند.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'ستاره چیست؟', correct: 'گوی داغ از گاز که نور و گرما تولید می‌کند', pool: ['گوی داغ از گاز که نور و گرما تولید می‌کند', 'جسم سرد', 'سیاره‌ای مثل زمین', 'سنگ فضایی'] },
    { q: 'سیاره چیست؟', correct: 'جسمی که دور ستاره می‌چرخد', pool: ['جسمی که دور ستاره می‌چرخد', 'جسمی که نور تولید می‌کند', 'ستاره داغ', 'کهکشان'] },
    { q: 'چند سیاره در منظومه شمسی داریم؟', correct: '۸', pool: ['۸', '۹', '۷', '۱۰'] },
    { q: 'نزدیک‌ترین سیاره به خورشید کدام است؟', correct: 'عطارد', pool: ['عطارد', 'زهره', 'زمین', 'مریخ'] },
    { q: 'بزرگ‌ترین سیاره منظومه شمسی کدام است؟', correct: 'مشتری', pool: ['مشتری', 'زحل', 'زمین', 'نپتون'] },
    { q: 'کدام سیاره حلقه دارد؟', correct: 'زحل', pool: ['زحل', 'مریخ', 'زمین', 'عطارد'] },
    { q: 'داغ‌ترین سیاره منظومه شمسی کدام است؟', correct: 'زهره', pool: ['زهره', 'عطارد', 'مریخ', 'مشتری'] },
    { q: 'سیاره سرخ کدام است؟', correct: 'مریخ', pool: ['مریخ', 'زهره', 'مشتری', 'عطارد'] },
    { q: 'دورترین سیاره منظومه شمسی کدام است؟', correct: 'نپتون', pool: ['نپتون', 'اورانوس', 'زحل', 'مشتری'] },
    { q: 'قمر زمین چه نام دارد؟', correct: 'ماه', pool: ['ماه', 'خورشید', 'زهره', 'مریخ'] },
    { q: 'خورشید چه چیزی است؟', correct: 'ستاره', pool: ['ستاره', 'سیاره', 'قمر', 'کهکشان'] },
    { q: 'کهکشان ما چه نام دارد؟', correct: 'راه شیری', pool: ['راه شیری', 'آندرومدا', 'مثلث', 'ماژلان'] },
    { q: 'شهاب چیست؟', correct: 'سنگ فضایی که در جو می‌سوزد', pool: ['سنگ فضایی که در جو می‌سوزد', 'ستاره دنباله‌دار', 'سیاره کوچک', 'قمر'] },
    { q: 'خسوف (ماه‌گرفتگی) چه زمانی رخ می‌دهد؟', correct: 'زمین بین خورشید و ماه قرار می‌گیرد', pool: ['زمین بین خورشید و ماه قرار می‌گیرد', 'ماه بین خورشید و زمین', 'خورشید بین زمین و ماه', 'هر ماه'] },
    { q: 'کسوف (خورشیدگرفتگی) چه زمانی رخ می‌دهد؟', correct: 'ماه بین خورشید و زمین قرار می‌گیرد', pool: ['ماه بین خورشید و زمین قرار می‌گیرد', 'زمین بین خورشید و ماه', 'خورشید بین زمین و ماه', 'هر ماه'] },
    { q: 'سحابی چیست؟', correct: 'ابر عظیم گاز و غبار', pool: ['ابر عظیم گاز و غبار', 'ستاره داغ', 'سیاره', 'کهکشان'] },
    { q: 'ستاره در پایان عمرش چه می‌شود؟ (ستاره‌های کوچک)', correct: 'کوتوله سفید', pool: ['کوتوله سفید', 'سیاهچاله', 'سیاره', 'کهکشان'] },
    { q: 'ستاره در پایان عمرش چه می‌شود؟ (ستاره‌های بزرگ)', correct: 'سیاهچاله', pool: ['سیاهچاله', 'کوتوله سفید', 'سیاره', 'قمر'] },
    { q: 'خورشید چه رنگی است؟', correct: 'زرد', pool: ['زرد', 'آبی', 'قرمز', 'سبز'] },
    { q: 'داغ‌ترین ستارگان چه رنگی هستند؟', correct: 'آبی', pool: ['آبی', 'قرمز', 'زرد', 'نارنجی'] },
    { q: 'خنک‌ترین ستارگان چه رنگی هستند؟', correct: 'قرمز', pool: ['قرمز', 'آبی', 'سفید', 'زرد'] },
    { q: 'حدود چند ستاره در کهکشان راه شیری وجود دارد؟', correct: '۱۰۰ میلیارد', pool: ['۱۰۰ میلیارد', '۱۰۰ میلیون', '۱۰۰ هزار', '۱۰۰'] },
    { q: 'دنباله‌دار معروف چه نام دارد؟', correct: 'هالی', pool: ['هالی', 'نیوتن', 'اینشتین', 'گالیله'] },
    { q: 'فاصله زمین تا خورشید چقدر است؟', correct: '۱۵۰ میلیون کیلومتر', pool: ['۱۵۰ میلیون کیلومتر', '۱۵۰ هزار کیلومتر', '۱۵۰ کیلومتر', '۱ میلیارد کیلومتر'] },
    { q: 'ماهواره چیست؟', correct: 'جسم ساخت بشر که دور زمین می‌چرخد', pool: ['جسم ساخت بشر که دور زمین می‌چرخد', 'ستاره طبیعی', 'قمر طبیعی', 'سیاره کوچک'] },
    { q: 'کدام یک سیاره سنگی است؟', correct: 'مریخ', pool: ['مریخ', 'مشتری', 'زحل', 'اورانوس'] },
    { q: 'کدام یک سیاره گازی است؟', correct: 'مشتری', pool: ['مشتری', 'زمین', 'مریخ', 'زهره'] }
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
  // تب ۲: منظومه شمسی
  // ============================================================
  const solarList = document.getElementById('solarList');
  let currentSolarType = 'inner';

  function renderSolar(type) {
    solarList.innerHTML = '';
    solar[type].forEach(p => {
      const card = document.createElement('div');
      card.className = 'prop-card';
      card.innerHTML = `
        <div class="prop-icon">${p.icon}</div>
        <div class="prop-title">${p.title}</div>
        <div class="prop-desc">${p.desc}</div>
      `;
      solarList.appendChild(card);
    });
  }

  // ============================================================
  // تب ۳: ستارگان
  // ============================================================
  const starsList = document.getElementById('starsList');
  let currentStarsType = 'life';

  function renderStars(type) {
    starsList.innerHTML = '';
    stars[type].forEach(p => {
      const card = document.createElement('div');
      card.className = 'prop-card';
      card.innerHTML = `
        <div class="prop-icon">${p.icon}</div>
        <div class="prop-title">${p.title}</div>
        <div class="prop-desc">${p.desc}</div>
      `;
      starsList.appendChild(card);
    });
  }

  // مدیریت همه motel-tab ها
  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      const parent = tab.parentElement;
      parent.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const type = tab.dataset.type;
      const parentSection = tab.closest('.lesson-section');
      if (parentSection.dataset.section === 'solar') {
        currentSolarType = type;
        renderSolar(type);
      } else if (parentSection.dataset.section === 'stars') {
        currentStarsType = type;
        renderStars(type);
      }
    };
  });

  renderSolar('inner');
  renderStars('life');

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
  document.querySelectorAll('.prop-card, .option-btn, .motel-tab, .planet-card').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();