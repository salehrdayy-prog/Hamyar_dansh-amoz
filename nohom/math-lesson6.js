// ============================================================
// فصل ۶ ریاضی — معادله‌ها
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده معادله درجه اول
  // ============================================================
  const linear = {
    simple: [
      { icon: '🎯', title: 'معادله ساده', desc: '2x + 3 = 7' },
      { icon: '📝', title: 'مرحله ۱', desc: '2x = 7 − 3 = 4' },
      { icon: '📝', title: 'مرحله ۲', desc: 'x = 4 ÷ 2 = 2' },
      { icon: '🎯', title: 'مثال ۲', desc: 'x − 5 = 10 → x = 15' },
      { icon: '🎯', title: 'مثال ۳', desc: '4x = 20 → x = 5' },
      { icon: '💡', title: 'نکته', desc: 'اعداد را یک طرف، متغیرها را طرف دیگر ببر.' }
    ],
    twosided: [
      { icon: '↔️', title: 'دو طرف متغیر', desc: 'متغیر در هر دو طرف معادله' },
      { icon: '🎯', title: 'مثال ۱', desc: '3x + 2 = x + 8' },
      { icon: '📝', title: 'مرحله', desc: '3x − x = 8 − 2 → 2x = 6 → x = 3' },
      { icon: '🎯', title: 'مثال ۲', desc: '5x − 3 = 2x + 9' },
      { icon: '📝', title: 'مرحله', desc: '5x − 2x = 9 + 3 → 3x = 12 → x = 4' },
      { icon: '💡', title: 'نکته', desc: 'اول متغیرها را یک طرف جمع کن.' }
    ],
    fraction: [
      { icon: '🔢', title: 'معادله کسری', desc: 'معادله‌ای که در آن کسر وجود دارد.' },
      { icon: '🎯', title: 'مثال ۱', desc: 'x/2 + 1 = 3' },
      { icon: '📝', title: 'مرحله', desc: 'x/2 = 2 → x = 4' },
      { icon: '🎯', title: 'مثال ۲', desc: '(x+1)/3 = 2' },
      { icon: '📝', title: 'مرحله', desc: 'x + 1 = 6 → x = 5' },
      { icon: '💡', title: 'نکته', desc: 'دو طرف را در مخرج ضرب کن تا کسر حذف شود.' }
    ]
  };

  // ============================================================
  // داده معادله درجه دوم
  // ============================================================
  const quadratic = {
    form: [
      { icon: '📐', title: 'فرم کلی', desc: 'ax² + bx + c = 0 (a ≠ 0)' },
      { icon: '🎯', title: 'مثال ۱', desc: 'x² − 5x + 6 = 0 (a=1, b=−5, c=6)' },
      { icon: '🎯', title: 'مثال ۲', desc: '2x² + 3x − 5 = 0 (a=2, b=3, c=−5)' },
      { icon: '📊', title: 'تعداد ریشه', desc: 'حداکثر ۲ ریشه حقیقی دارد.' },
      { icon: '💡', title: 'نکته', desc: 'اگر a=0 باشد، معادله درجه اول است.' },
      { icon: '🎓', title: 'کاربرد', desc: 'در فیزیک، مهندسی و اقتصاد.' }
    ],
    factor: [
      { icon: '🔧', title: 'حل با تجزیه', desc: 'عبارت را به ضرب دو پرانتز تبدیل می‌کنیم.' },
      { icon: '🎯', title: 'مثال ۱', desc: 'x² − 5x + 6 = 0 → (x−2)(x−3) = 0' },
      { icon: '📝', title: 'ریشه‌ها', desc: 'x = 2 یا x = 3' },
      { icon: '🎯', title: 'مثال ۲', desc: 'x² − 9 = 0 → (x−3)(x+3) = 0' },
      { icon: '📝', title: 'ریشه‌ها', desc: 'x = 3 یا x = −3' },
      { icon: '💡', title: 'نکته', desc: 'اگر حاصل‌ضرب صفر باشد، حداقل یک عامل صفر است.' }
    ],
    delta: [
      { icon: 'Δ', title: 'مبیّن (دلتا)', desc: 'Δ = b² − 4ac' },
      { icon: '🔢', title: 'فرمول ریشه‌ها', desc: 'x = (−b ± √Δ) / (2a)' },
      { icon: '🎯', title: 'Δ > ۰', desc: 'دو ریشه حقیقی متمایز' },
      { icon: '🎯', title: 'Δ = ۰', desc: 'یک ریشه مضاعف' },
      { icon: '🎯', title: 'Δ < ۰', desc: 'ریشه حقیقی ندارد' },
      { icon: '📝', title: 'مثال', desc: 'x² − 5x + 6 = 0 → Δ = 25 − 24 = 1 → x = 2, 3' }
    ]
  };

  // ============================================================
  // داده دستگاه
  // ============================================================
  const system = {
    substitution: [
      { icon: '🔄', title: 'روش جایگذاری', desc: 'از یک معادله، یک متغیر را برحسب دیگری می‌نویسیم.' },
      { icon: '📝', title: 'مراحل', desc: '۱. یک متغیر را جدا کن  ۲. در معادله دیگر جایگذاری کن  ۳. حل کن' },
      { icon: '🎯', title: 'مثال', desc: 'x = y + 1  و  x + y = 5' },
      { icon: '📝', title: 'حل', desc: '(y+1) + y = 5 → 2y = 4 → y = 2 → x = 3' },
      { icon: '💡', title: 'مزیت', desc: 'برای دستگاه‌های ساده مناسب است.' },
      { icon: '🎓', title: 'کاربرد', desc: 'وقتی یک معادله ساده است.' }
    ],
    elimination: [
      { icon: '➕', title: 'روش حذفی', desc: 'دو معادله را جمع یا تفریق می‌کنیم تا یک متغیر حذف شود.' },
      { icon: '📝', title: 'مراحل', desc: '۱. ضرایب یک متغیر را یکسان کن  ۲. جمع یا تفریق کن  ۳. حل کن' },
      { icon: '🎯', title: 'مثال', desc: 'x + y = 5  و  x − y = 1' },
      { icon: '📝', title: 'حل', desc: 'جمع: 2x = 6 → x = 3 → y = 2' },
      { icon: '💡', title: 'مزیت', desc: 'برای دستگاه‌های با ضرایب مساوی.' },
      { icon: '🎓', title: 'کاربرد', desc: 'روش رایج و سریع.' }
    ],
    graph: [
      { icon: '📊', title: 'روش ترسیمی', desc: 'هر معادله یک خط است. نقطه تقاطع، جواب دستگاه است.' },
      { icon: '📝', title: 'مراحل', desc: '۱. هر معادله را رسم کن  ۲. نقطه تقاطع را پیدا کن' },
      { icon: '🎯', title: 'مثال', desc: 'دو خط متقاطع → یک جواب' },
      { icon: '🎯', title: 'حالت‌ها', desc: 'موازی → بی‌جواب · منطبق → بی‌شمار جواب' },
      { icon: '💡', title: 'مزیت', desc: 'برای درک هندسی مفید است.' },
      { icon: '🎓', title: 'کاربرد', desc: 'برای دستگاه‌های دو متغیره.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    // درجه اول
    { q: 'حل x + 3 = 7 چقدر است؟', correct: 'x = 4', pool: ['x = 4', 'x = 10', 'x = 3', 'x = 7'] },
    { q: 'حل 2x = 10 چقدر است؟', correct: 'x = 5', pool: ['x = 5', 'x = 20', 'x = 8', 'x = 2'] },
    { q: 'حل 3x + 5 = 20 چقدر است؟', correct: 'x = 5', pool: ['x = 5', 'x = 25/3', 'x = 15', 'x = 10'] },
    { q: 'حل 2x − 4 = 10 چقدر است؟', correct: 'x = 7', pool: ['x = 7', 'x = 3', 'x = 6', 'x = 14'] },
    { q: 'حل 5x + 2 = 3x + 10 چقدر است؟', correct: 'x = 4', pool: ['x = 4', 'x = 6', 'x = 8', 'x = 2'] },
    { q: 'حل 4x − 3 = 2x + 7 چقدر است؟', correct: 'x = 5', pool: ['x = 5', 'x = 4', 'x = 10', 'x = 2'] },
    { q: 'حل x/2 = 4 چقدر است؟', correct: 'x = 8', pool: ['x = 8', 'x = 2', 'x = 4', 'x = 6'] },
    { q: 'حل x/3 + 1 = 3 چقدر است؟', correct: 'x = 6', pool: ['x = 6', 'x = 4', 'x = 9', 'x = 3'] },

    // درجه دوم
    { q: 'فرم کلی معادله درجه دوم چیست؟', correct: 'ax² + bx + c = 0', pool: ['ax² + bx + c = 0', 'ax + b = 0', 'ax³ + bx² + c = 0', 'a/x + b = 0'] },
    { q: 'ریشه‌های x² − 5x + 6 = 0 کدام‌اند؟', correct: 'x = 2, x = 3', pool: ['x = 2, x = 3', 'x = −2, x = −3', 'x = 1, x = 6', 'x = 5, x = 6'] },
    { q: 'ریشه‌های x² − 9 = 0 کدام‌اند؟', correct: 'x = 3, x = −3', pool: ['x = 3, x = −3', 'x = 9, x = −9', 'x = 3 تنها', 'ریشه ندارد'] },
    { q: 'ریشه‌های x² + 6x + 9 = 0 کدام‌اند؟', correct: 'x = −3 (مضاعف)', pool: ['x = −3 (مضاعف)', 'x = 3, x = −3', 'x = 3 تنها', 'ریشه ندارد'] },
    { q: 'فرمول دلتا چیست؟', correct: 'b² − 4ac', pool: ['b² − 4ac', 'b² + 4ac', '4ac − b²', 'a² − 4bc'] },
    { q: 'اگر Δ > ۰ باشد، معادله چند ریشه دارد؟', correct: 'دو ریشه متمایز', pool: ['دو ریشه متمایز', 'یک ریشه', 'ریشه ندارد', 'سه ریشه'] },
    { q: 'اگر Δ = ۰ باشد، معادله چند ریشه دارد؟', correct: 'یک ریشه مضاعف', pool: ['یک ریشه مضاعف', 'دو ریشه', 'ریشه ندارد', 'سه ریشه'] },
    { q: 'اگر Δ < ۰ باشد، معادله چه می‌شود؟', correct: 'ریشه حقیقی ندارد', pool: ['ریشه حقیقی ندارد', 'دو ریشه دارد', 'یک ریشه دارد', 'سه ریشه دارد'] },

    // دستگاه
    { q: 'حل دستگاه x + y = 5 و x − y = 1 کدام است؟', correct: 'x = 3, y = 2', pool: ['x = 3, y = 2', 'x = 2, y = 3', 'x = 4, y = 1', 'x = 5, y = 0'] },
    { q: 'حل دستگاه x + y = 7 و x − y = 3 کدام است؟', correct: 'x = 5, y = 2', pool: ['x = 5, y = 2', 'x = 3, y = 4', 'x = 7, y = 0', 'x = 4, y = 3'] },
    { q: 'حل دستگاه 2x + y = 7 و x = 2 کدام است؟', correct: 'y = 3', pool: ['y = 3', 'y = 5', 'y = 2', 'y = 7'] },

    // مفاهیم
    { q: 'ریشه معادله چیست؟', correct: 'عددی که معادله را برقرار کند', pool: ['عددی که معادله را برقرار کند', 'ضریب متغیر', 'عدد ثابت', 'درجه معادله'] },
    { q: 'در معادله x + 3 = 7، اگر ۳ را به طرف دیگر ببریم چه می‌شود؟', correct: 'x = 7 − 3', pool: ['x = 7 − 3', 'x = 7 + 3', 'x = 3 − 7', 'x = 7 × 3'] },
    { q: 'معادله همانی چیست؟', correct: 'برای همه مقادیر برقرار است', pool: ['برای همه مقادیر برقرار است', 'هیچ جوابی ندارد', 'یک جواب دارد', 'دو جواب دارد'] },
    { q: 'معادله بی‌جواب چه ویژگی دارد؟', correct: 'هیچ جوابی ندارد', pool: ['هیچ جوابی ندارد', 'بی‌شمار جواب دارد', 'یک جواب دارد', 'دو جواب دارد'] },
    { q: 'حل 5x = 0 چقدر است؟', correct: 'x = 0', pool: ['x = 0', 'x = 5', 'بی‌جواب', 'x = 1'] },
    { q: 'معادله x + 1 = x + 2 چه نوع معادله‌ای است؟', correct: 'بی‌جواب', pool: ['بی‌جواب', 'یک جواب', 'دو جواب', 'همانی'] },
    { q: 'معادله 2(x+1) = 2x+2 چه نوع معادله‌ای است؟', correct: 'همانی', pool: ['همانی', 'بی‌جواب', 'یک جواب', 'دو جواب'] }
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
  // رندر لیست‌ها
  // ============================================================
  const linearList = document.getElementById('linearList');
  const quadraticList = document.getElementById('quadraticList');
  const systemList = document.getElementById('systemList');

  function renderCards(container, data) {
    container.innerHTML = '';
    data.forEach(p => {
      const card = document.createElement('div');
      card.className = 'prop-card';
      card.innerHTML = `
        <div class="prop-icon">${p.icon}</div>
        <div class="prop-title">${p.title}</div>
        <div class="prop-desc">${p.desc}</div>
      `;
      container.appendChild(card);
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
      const section = parentSection.dataset.section;

      if (section === 'linear') {
        renderCards(linearList, linear[type]);
      } else if (section === 'quadratic') {
        renderCards(quadraticList, quadratic[type]);
      } else if (section === 'system') {
        renderCards(systemList, system[type]);
      }
    };
  });

  renderCards(linearList, linear.simple);
  renderCards(quadraticList, quadratic.form);
  renderCards(systemList, system.substitution);

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
  // تب ۵: تمرین
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
  // تب ۶: آزمون
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
  // تب ۷: بازی
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
  document.querySelectorAll('.prop-card, .option-btn, .motel-tab, .solve-step').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();