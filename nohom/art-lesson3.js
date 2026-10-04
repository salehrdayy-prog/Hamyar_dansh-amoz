// ============================================================
// درس ۳ نقاشی — طراحی از طبیعت
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده گام‌ها
  // ============================================================
  const treeSteps = [
    { num: '۱', title: 'کشیدن تنه', desc: 'اول یک خط عمودی برای تنه درخت بکش. می‌تواند کمی خمیده باشد.', visual: '│' },
    { num: '۲', title: 'اضافه کردن شاخه‌ها', desc: 'از تنه، دو یا سه شاخه اصلی به سمت بالا بکش.', visual: 'Y' },
    { num: '۳', title: 'شاخه‌های فرعی', desc: 'از شاخه‌های اصلی، شاخه‌های کوچک‌تر اضافه کن.', visual: '⋔' },
    { num: '۴', title: 'کشیدن برگ‌ها', desc: 'روی شاخه‌ها، توده‌های برگ بکش. اول ساده، بعد پرتر.', visual: '🌳' },
    { num: '۵', title: 'سایه و حجم', desc: 'زیر درخت و زیر توده‌های برگ، سایه بزن.', visual: '🌳  ▓' }
  ];

  const flowerSteps = [
    { num: '۱', title: 'کشیدن مرکز گل', desc: 'یک دایره کوچک برای مرکز گل بکش.', visual: '●' },
    { num: '۲', title: 'گلبرگ‌ها', desc: 'دور دایره، ۵ تا ۶ گلبرگ به شکل بیضی بکش.', visual: '✿' },
    { num: '۳', title: 'ساقه', desc: 'از پایین گل، یک خط منحنی برای ساقه بکش.', visual: '❀' },
    { num: '۴', title: 'برگ‌ها', desc: 'روی ساقه، دو برگ بیضی‌شکل اضافه کن.', visual: '🌸' },
    { num: '۵', title: 'سایه و جزئیات', desc: 'در مرکز گل و زیر برگ‌ها سایه بزن.', visual: '🌷' }
  ];

  const sceneSteps = [
    { num: '۱', title: 'خط افق', desc: 'یک خط افقی در وسط کاغذ بکش. این خط جداکننده آسمان و زمین است.', visual: '─────' },
    { num: '۲', title: 'کوه‌ها', desc: 'پشت خط افق، دو یا سه کوه با زاویه بکش.', visual: '◢▲◣' },
    { num: '۳', title: 'خورشید یا ماه', desc: 'یک دایره در آسمان بکش.', visual: '☀️' },
    { num: '۴', title: 'درخت‌های دور', desc: 'در جلوی کوه‌ها، چند درخت کوچک اضافه کن.', visual: '🌲 🌲' },
    { num: '۵', title: 'دشت و علف', desc: 'زیر خط افق، خطوط کوتاه برای علف بکش.', visual: '🌾🌾🌾' },
    { num: '۶', title: 'سایه و نور', desc: 'سمت مخالف خورشید را سایه بزن.', visual: '🌅' }
  ];

  // ============================================================
  // داده نمونه‌ها
  // ============================================================
  const examples = {
    trees: [
      { visual: '🌲', title: 'کاج', desc: 'درخت بلند با نوک تیز. شاخه‌ها به سمت بالا.' },
      { visual: '🌳', title: 'بلوط', desc: 'تنه ضخیم با توده بزرگ برگ.' },
      { visual: '🌴', title: 'نخل', desc: 'تنه بلند و برگ‌های پهن در بالا.' },
      { visual: '🎋', title: 'بامبو', desc: 'ساقه‌های صاف و بلند کنار هم.' },
      { visual: '🌵', title: 'کاکتوس', desc: 'شکل استوانه‌ای با خارها.' },
      { visual: '🍂', title: 'درخت پاییزی', desc: 'با برگ‌های ریخته و شاخه‌های برهنه.' }
    ],
    flowers: [
      { visual: '🌹', title: 'گل رز', desc: 'گلبرگ‌های پیچیده و ساقه با خار.' },
      { visual: '🌷', title: 'لاله', desc: 'گلبرگ‌های جام‌شکل با ساقه بلند.' },
      { visual: '🌻', title: 'آفتابگردان', desc: 'مرکز بزرگ با گلبرگ‌های زرد.' },
      { visual: '🌸', title: 'شکوفه', desc: 'گل‌های کوچک روی شاخه.' },
      { visual: '🌼', title: 'گل بابونه', desc: 'مرکز زرد با گلبرگ‌های سفید.' },
      { visual: '💐', title: 'دسته گل', desc: 'چند گل مختلف کنار هم.' }
    ],
    scenes: [
      { visual: '🏔️', title: 'کوهستان', desc: 'کوه‌های بلند با قله‌های برفی.' },
      { visual: '🏞️', title: 'دریاچه', desc: 'آب آرام با بازتاب کوه‌ها.' },
      { visual: '🌅', title: 'طلوع خورشید', desc: 'خورشید در حال بالا آمدن.' },
      { visual: '🌄', title: 'غروب', desc: 'آسمان نارنجی و کوه‌های تیره.' },
      { visual: '🌊', title: 'ساحل', desc: 'موج دریا و ماسه.' },
      { visual: '🌾', title: 'دشت', desc: 'زمین صاف با علف‌های بلند.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'اولین گام طراحی درخت چیست؟', correct: 'کشیدن تنه', pool: ['کشیدن تنه', 'کشیدن برگ', 'کشیدن سایه', 'کشیدن ریشه'] },
    { q: 'بعد از تنه درخت چه می‌کشیم؟', correct: 'شاخه‌ها', pool: ['شاخه‌ها', 'برگ‌ها', 'میوه‌ها', 'سایه'] },
    { q: 'آخرین گام طراحی درخت چیست؟', correct: 'سایه و حجم', pool: ['سایه و حجم', 'تنه', 'شاخه', 'برگ'] },
    { q: 'اولین گام طراحی گل چیست؟', correct: 'کشیدن مرکز گل', pool: ['کشیدن مرکز گل', 'کشیدن ساقه', 'کشیدن برگ', 'کشیدن گلبرگ'] },
    { q: 'گل چند گلبرگ دارد؟', correct: 'معمولاً ۵ یا ۶ گلبرگ', pool: ['معمولاً ۵ یا ۶ گلبرگ', 'همیشه ۳ گلبرگ', 'فقط ۱۰ گلبرگ', 'گلبرگ ندارد'] },
    { q: 'اولین گام طراحی منظره چیست؟', correct: 'کشیدن خط افق', pool: ['کشیدن خط افق', 'کشیدن کوه', 'کشیدن درخت', 'کشیدن خورشید'] },
    { q: 'خط افق چه کاری می‌کند؟', correct: 'آسمان و زمین را جدا می‌کند', pool: ['آسمان و زمین را جدا می‌کند', 'آب را نشان می‌دهد', 'سایه ایجاد می‌کند', 'رنگ را نشان می‌دهد'] },
    { q: 'برای طراحی طبیعت، از چه چیزی شروع می‌کنیم؟', correct: 'از شکل کلی', pool: ['از شکل کلی', 'از جزئیات', 'از سایه', 'از رنگ'] },
    { q: 'کدام درخت برگ‌های پهن دارد؟', correct: 'بلوط', pool: ['بلوط', 'کاج', 'نخل', 'بامبو'] },
    { q: 'کدام درخت نوک تیز دارد؟', correct: 'کاج', pool: ['کاج', 'بلوط', 'نخل', 'درخت پاییزی'] },
    { q: 'کدام درخت تنه بلند و بدون شاخه دارد؟', correct: 'نخل', pool: ['نخل', 'کاج', 'بلوط', 'بامبو'] },
    { q: 'آفتابگردان چه شکلی است؟', correct: 'مرکز بزرگ با گلبرگ‌های زرد', pool: ['مرکز بزرگ با گلبرگ‌های زرد', 'گلبرگ‌های سفید', 'گلبرگ‌های بنفش', 'بدون گلبرگ'] },
    { q: 'چرا سایه در طراحی مهم است؟', correct: 'به طرح حجم می‌دهد', pool: ['به طرح حجم می‌دهد', 'رنگ را نشان می‌دهد', 'سریع‌تر می‌کند', 'زیباتر می‌کند'] },
    { q: 'بهترین معلم طراحی چیست؟', correct: 'نگاه کردن به طبیعت', pool: ['نگاه کردن به طبیعت', 'کتاب‌ها', 'ویدیوها', 'خرید ابزار'] },
    { q: 'برای طراحی منظره چه چیزی لازم است؟', correct: 'خط افق، کوه، آسمان', pool: ['خط افق، کوه، آسمان', 'فقط درخت', 'فقط خورشید', 'فقط آب'] },
    { q: 'برای طراحی گل، ابتدا چه چیزی می‌کشیم؟', correct: 'مرکز گل', pool: ['مرکز گل', 'ساقه', 'برگ', 'زمین'] },
    { q: 'چند گام برای طراحی درخت داریم؟', correct: '۵ گام', pool: ['۵ گام', '۳ گام', '۷ گام', '۱۰ گام'] },
    { q: 'در طراحی منظره، درخت‌ها کجا قرار می‌گیرند؟', correct: 'جلوی کوه‌ها', pool: ['جلوی کوه‌ها', 'پشت کوه‌ها', 'بالای آسمان', 'روی خورشید'] },
    { q: 'کدام یک از طبیعت نیست؟', correct: 'ساختمان', pool: ['ساختمان', 'درخت', 'گل', 'کوه'] },
    { q: 'رنگ مناسب برای طراحی اولیه چیست؟', correct: 'مداد HB', pool: ['مداد HB', 'مداد B', 'مداد 2B', 'رنگ روغن'] }
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
  // تب ۲: گام‌ها
  // ============================================================
  function renderSteps(containerId, steps) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    steps.forEach(step => {
      const item = document.createElement('div');
      item.className = 'step-item';
      item.innerHTML = `
        <div class="step-number">${step.num}</div>
        <div class="step-content">
          <div class="step-title">${step.title}</div>
          <div class="step-desc">${step.desc}</div>
          <div class="step-visual">${step.visual}</div>
        </div>
      `;
      item.onclick = () => {
        item.classList.toggle('expanded');
      };
      container.appendChild(item);
    });
  }

  renderSteps('treeSteps', treeSteps);
  renderSteps('flowerSteps', flowerSteps);
  renderSteps('sceneSteps', sceneSteps);

  // ============================================================
  // تب ۳: نمونه‌ها
  // ============================================================
  const examplesList = document.getElementById('examplesList');
  let currentType = 'trees';

  function renderExamples(type) {
    examplesList.innerHTML = '';
    examples[type].forEach(ex => {
      const card = document.createElement('div');
      card.className = 'example-item';
      card.innerHTML = `
        <div class="example-visual">${ex.visual}</div>
        <div class="example-title">${ex.title}</div>
        <div class="example-desc">${ex.desc}</div>
      `;
      examplesList.appendChild(card);
    });
  }

  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentType = tab.dataset.type;
      renderExamples(currentType);
    };
  });

  renderExamples('trees');

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
  document.querySelectorAll('.step-item, .example-item, .option-btn, .motel-tab').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.98)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();