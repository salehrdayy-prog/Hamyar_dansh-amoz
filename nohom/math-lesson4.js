// ============================================================
// فصل ۴ ریاضی — توان و ریشه
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده قواعد توان
  // ============================================================
  const rules = {
    multiply: [
      { icon: '✖️', title: 'ضرب توان‌ها با پایه یکسان', desc: 'aᵐ × aⁿ = a^(m+n)' },
      { icon: '🎯', title: 'مثال ۱', desc: '۲³ × ۲² = ۲⁵ = ۳۲' },
      { icon: '🎯', title: 'مثال ۲', desc: '۳⁴ × ۳² = ۳⁶ = ۷۲۹' },
      { icon: '🎯', title: 'مثال ۳', desc: '۵² × ۵³ = ۵⁵ = ۳۱۲۵' },
      { icon: '💡', title: 'نکته', desc: 'پایه‌ها باید یکسان باشند.' },
      { icon: '📌', title: 'خلاصه', desc: 'در ضرب، نماها جمع می‌شوند.' }
    ],
    divide: [
      { icon: '➗', title: 'تقسیم توان‌ها با پایه یکسان', desc: 'aᵐ ÷ aⁿ = a^(m−n)' },
      { icon: '🎯', title: 'مثال ۱', desc: '۲⁵ ÷ ۲² = ۲³ = ۸' },
      { icon: '🎯', title: 'مثال ۲', desc: '۳⁶ ÷ ۳⁴ = ۳² = ۹' },
      { icon: '🎯', title: 'مثال ۳', desc: '۵⁴ ÷ ۵² = ۵² = ۲۵' },
      { icon: '💡', title: 'نکته', desc: 'اگر m = n، نتیجه a⁰ = ۱ است.' },
      { icon: '📌', title: 'خلاصه', desc: 'در تقسیم، نماها کم می‌شوند.' }
    ],
    power: [
      { icon: '⚡', title: 'توان توان', desc: '(aᵐ)ⁿ = a^(m×n)' },
      { icon: '🎯', title: 'مثال ۱', desc: '(۲³)² = ۲⁶ = ۶۴' },
      { icon: '🎯', title: 'مثال ۲', desc: '(۳²)³ = ۳⁶ = ۷۲۹' },
      { icon: '🎯', title: 'مثال ۳', desc: '(۵²)² = ۵⁴ = ۶۲۵' },
      { icon: '💡', title: 'نکته', desc: 'نماها در هم ضرب می‌شوند.' },
      { icon: '📌', title: 'خلاصه', desc: 'در توان توان، نماها ضرب می‌شوند.' }
    ],
    special: [
      { icon: '0️⃣', title: 'a⁰ = ۱', desc: 'هر عدد (به جز صفر) به توان صفر = ۱' },
      { icon: '1️⃣', title: 'a¹ = a', desc: 'هر عدد به توان ۱ = خودش' },
      { icon: '➖', title: 'a⁻ⁿ = ۱/aⁿ', desc: 'توان منفی، معکوس با نمای مثبت' },
      { icon: '✖️', title: '(ab)ⁿ = aⁿ × bⁿ', desc: 'توان ضرب، ضرب توان‌ها' },
      { icon: '➗', title: '(a/b)ⁿ = aⁿ/bⁿ', desc: 'توان تقسیم، تقسیم توان‌ها' },
      { icon: '🔄', title: '(a/b)⁻ⁿ = (b/a)ⁿ', desc: 'معکوس با نمای مثبت' }
    ]
  };

  // ============================================================
  // داده رادیکال
  // ============================================================
  const radicals = {
    basic: [
      { icon: '√', title: 'ریشه دوم (جذر)', desc: '√a عددی است که در خودش ضرب شود a بدهد.' },
      { icon: '🎯', title: 'مثال ۱', desc: '√25 = ۵ (چون ۵×۵=۲۵)' },
      { icon: '🎯', title: 'مثال ۲', desc: '√100 = ۱۰' },
      { icon: '🎯', title: 'مثال ۳', desc: '√144 = ۱۲' },
      { icon: '∛', title: 'ریشه سوم', desc: '∛a عددی که ۳ بار در خودش ضرب شود a بدهد.' },
      { icon: '🎯', title: 'مثال ∛', desc: '∛۸ = ۲ (چون ۲×۲×۲=۸)' }
    ],
    simplify: [
      { icon: '🔧', title: 'ساده کردن رادیکال', desc: 'عوامل مربع کامل را از زیر رادیکال بیرون می‌آوریم.' },
      { icon: '🎯', title: 'مثال ۱', desc: '√12 = √(4×3) = √4 × √3 = 2√3' },
      { icon: '🎯', title: 'مثال ۲', desc: '√50 = √(25×2) = 5√2' },
      { icon: '🎯', title: 'مثال ۳', desc: '√72 = √(36×2) = 6√2' },
      { icon: '📌', title: 'قاعده کلی', desc: '√(a×b) = √a × √b' },
      { icon: '💡', title: 'نکته', desc: 'بزرگ‌ترین مربع کامل را پیدا کن.' }
    ],
    operations: [
      { icon: '➕', title: 'جمع و تفریق', desc: 'فقط رادیکال‌های مشابه را می‌توان جمع/تفریق کرد.' },
      { icon: '🎯', title: 'مثال ۱', desc: '3√2 + 5√2 = 8√2' },
      { icon: '🎯', title: 'مثال ۲', desc: '7√3 − 4√3 = 3√3' },
      { icon: '✖️', title: 'ضرب', desc: '√a × √b = √(a×b)' },
      { icon: '🎯', title: 'مثال ضرب', desc: '√2 × √8 = √16 = ۴' },
      { icon: '➗', title: 'تقسیم', desc: '√a ÷ √b = √(a/b)' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    // توان
    { q: '۲³ چقدر است؟', correct: '۸', pool: ['۸', '۶', '۹', '۱۲'] },
    { q: '۳² چقدر است؟', correct: '۹', pool: ['۹', '۶', '۸', '۱۲'] },
    { q: '۵² چقدر است؟', correct: '۲۵', pool: ['۲۵', '۱۰', '۱۵', '۲۰'] },
    { q: '۲⁴ چقدر است؟', correct: '۱۶', pool: ['۱۶', '۸', '۱۲', '۲۰'] },
    { q: '۱۰³ چقدر است؟', correct: '۱۰۰۰', pool: ['۱۰۰۰', '۱۰۰', '۱۰۰۰۰', '۳۰'] },
    { q: '۲⁵ چقدر است؟', correct: '۳۲', pool: ['۳۲', '۱۰', '۲۵', '۱۶'] },
    { q: '۴³ چقدر است؟', correct: '۶۴', pool: ['۶۴', '۱۲', '۴۸', '۱۶'] },
    { q: 'a⁰ = ؟ (a≠0)', correct: '۱', pool: ['۱', '۰', 'a', 'نامشخص'] },
    { q: 'a¹ = ؟', correct: 'a', pool: ['a', '۱', '۰', 'a²'] },
    { q: '۲⁻³ چقدر است؟', correct: '۱/۸', pool: ['۱/۸', '-۸', '۸', '-۱/۸'] },
    { q: '(-۲)² چقدر است؟', correct: '۴', pool: ['۴', '-۴', '۲', '-۲'] },
    { q: '(-۲)³ چقدر است؟', correct: '-۸', pool: ['-۸', '۸', '-۶', '۶'] },

    // قواعد توان
    { q: '۲³ × ۲² = ؟', correct: '۲⁵', pool: ['۲⁵', '۲⁶', '۴⁵', '۴⁶'] },
    { q: '۳⁴ ÷ ۳² = ؟', correct: '۳²', pool: ['۳²', '۳⁶', '۳⁸', '۱²'] },
    { q: '(۲³)² = ؟', correct: '۲⁶', pool: ['۲⁶', '۲⁵', '۲⁹', '۴⁶'] },
    { q: 'aᵐ × aⁿ = ؟', correct: 'a^(m+n)', pool: ['a^(m+n)', 'a^(m×n)', 'a^(m−n)', 'a^(m/n)'] },
    { q: 'aᵐ ÷ aⁿ = ؟', correct: 'a^(m−n)', pool: ['a^(m−n)', 'a^(m+n)', 'a^(m×n)', 'a^(m/n)'] },
    { q: '(aᵐ)ⁿ = ؟', correct: 'a^(m×n)', pool: ['a^(m×n)', 'a^(m+n)', 'a^(m−n)', 'a^(m/n)'] },
    { q: '(۲×۳)² = ؟', correct: '۳۶', pool: ['۳۶', '۲۵', '۱۲', '۶'] },

    // ریشه
    { q: '√36 چقدر است؟', correct: '۶', pool: ['۶', '۱۸', '۳', '۹'] },
    { q: '√81 چقدر است؟', correct: '۹', pool: ['۹', '۴۰.۵', '۱۸', '۸'] },
    { q: '√144 چقدر است؟', correct: '۱۲', pool: ['۱۲', '۷۲', '۱۴', '۲۴'] },
    { q: '√169 چقدر است؟', correct: '۱۳', pool: ['۱۳', '۸۴.۵', '۲۶', '۲۳'] },
    { q: '√196 چقدر است؟', correct: '۱۴', pool: ['۱۴', '۹۸', '۲۸', '۲۴'] },
    { q: '√8 ساده‌شده کدام است؟', correct: '2√2', pool: ['2√2', '4√2', '8√2', '2√4'] },
    { q: '√12 ساده‌شده کدام است؟', correct: '2√3', pool: ['2√3', '3√2', '6√2', '12√3'] },
    { q: '√50 ساده‌شده کدام است؟', correct: '5√2', pool: ['5√2', '2√5', '10√5', '25√2'] },
    { q: '√72 ساده‌شده کدام است؟', correct: '6√2', pool: ['6√2', '8√3', '3√8', '2√36'] },
    { q: '3√2 + 5√2 = ؟', correct: '8√2', pool: ['8√2', '8√4', '15√2', '8'] },
    { q: '7√3 − 4√3 = ؟', correct: '3√3', pool: ['3√3', '3', '11√3', '3√6'] },
    { q: '√2 × √8 = ؟', correct: '۴', pool: ['۴', '۲√16', '۸', '۱۶'] }
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
  // تب ۲: قواعد توان
  // ============================================================
  const rulesList = document.getElementById('rulesList');
  let currentRule = 'multiply';

  function renderRules(type) {
    rulesList.innerHTML = '';
    rules[type].forEach(p => {
      const card = document.createElement('div');
      card.className = 'prop-card';
      card.innerHTML = `
        <div class="prop-icon">${p.icon}</div>
        <div class="prop-title">${p.title}</div>
        <div class="prop-desc">${p.desc}</div>
      `;
      rulesList.appendChild(card);
    });
  }

  // ============================================================
  // تب ۳: ریشه
  // ============================================================
  const radicalList = document.getElementById('radicalList');
  let currentRadical = 'basic';

  function renderRadicals(type) {
    radicalList.innerHTML = '';
    radicals[type].forEach(p => {
      const card = document.createElement('div');
      card.className = 'prop-card';
      card.innerHTML = `
        <div class="prop-icon">${p.icon}</div>
        <div class="prop-title">${p.title}</div>
        <div class="prop-desc">${p.desc}</div>
      `;
      radicalList.appendChild(card);
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
      if (parentSection.dataset.section === 'rules') {
        currentRule = type;
        renderRules(type);
      } else if (parentSection.dataset.section === 'radical') {
        currentRadical = type;
        renderRadicals(type);
      }
    };
  });

  renderRules('multiply');
  renderRadicals('basic');

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
  document.querySelectorAll('.prop-card, .option-btn, .motel-tab, .power-visual').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();