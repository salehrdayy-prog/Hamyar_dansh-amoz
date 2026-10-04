// ============================================================
// فصل ۱ ریاضی — مجموعه‌ها
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده عملیات روی مجموعه‌ها
  // ============================================================
  const operations = {
    union: [
      { icon: '∪', title: 'اجتماع', desc: 'اعضای دو مجموعه با هم — اعضای مشترک یک بار نوشته می‌شوند.' },
      { icon: '📝', title: 'نماد', desc: 'A ∪ B = همه اعضای A و B' },
      { icon: '🎯', title: 'مثال ۱', desc: '{1,2,3} ∪ {3,4,5} = {1,2,3,4,5}' },
      { icon: '🎯', title: 'مثال ۲', desc: '{a,b} ∪ {c,d} = {a,b,c,d}' },
      { icon: '🎯', title: 'مثال ۳', desc: '{1,2} ∪ { } = {1,2}' },
      { icon: '💡', title: 'نکته', desc: 'اجتماع، مجموعه بزرگ‌تری می‌سازد.' }
    ],
    intersection: [
      { icon: '∩', title: 'اشتراک', desc: 'اعضای مشترک دو مجموعه.' },
      { icon: '📝', title: 'نماد', desc: 'A ∩ B = اعضای مشترک A و B' },
      { icon: '🎯', title: 'مثال ۱', desc: '{1,2,3} ∩ {3,4,5} = {3}' },
      { icon: '🎯', title: 'مثال ۲', desc: '{a,b,c} ∩ {b,c,d} = {b,c}' },
      { icon: '🎯', title: 'مثال ۳', desc: '{1,2} ∩ {3,4} = { } (تهی)' },
      { icon: '💡', title: 'نکته', desc: 'اشتراک، مجموعه کوچک‌تری می‌سازد.' }
    ],
    difference: [
      { icon: '−', title: 'تفاضل', desc: 'اعضایی از A که در B نیستند.' },
      { icon: '📝', title: 'نماد', desc: 'A − B = اعضای A که در B نیستند' },
      { icon: '🎯', title: 'مثال ۱', desc: '{1,2,3,4} − {2,4} = {1,3}' },
      { icon: '🎯', title: 'مثال ۲', desc: '{a,b,c} − {b} = {a,c}' },
      { icon: '🎯', title: 'مثال ۳', desc: '{1,2} − {1,2,3} = { } (تهی)' },
      { icon: '💡', title: 'نکته', desc: 'ترتیب مهم است — A−B ≠ B−A' }
    ],
    complement: [
      { icon: "'", title: 'متمم', desc: 'اعضای مجموعه مرجع که در A نیستند.' },
      { icon: '📝', title: 'نماد', desc: "A' = U − A (U مجموعه مرجع)" },
      { icon: '🎯', title: 'مثال ۱', desc: "U={1,2,3,4,5}, A={1,2} → A'={3,4,5}" },
      { icon: '🎯', title: 'مثال ۲', desc: "U={a,b,c}, A={a} → A'={b,c}" },
      { icon: '🎯', title: 'مثال ۳', desc: "U=A → A'={ } (تهی)" },
      { icon: '💡', title: 'نکته', desc: 'متمم، مکمل A تا U است.' }
    ]
  };

  // ============================================================
  // داده انواع مجموعه‌ها
  // ============================================================
  const types = {
    special: [
      { icon: '∅', title: 'مجموعه تهی', desc: 'مجموعه‌ای که هیچ عضوی ندارد — با ∅ یا { } نمایش می‌دهیم.' },
      { icon: '🔢', title: 'مجموعه متناهی', desc: 'تعداد اعضای آن قابل شمارش است — {1, 2, 3}' },
      { icon: '∞', title: 'مجموعه نامتناهی', desc: 'تعداد اعضای آن قابل شمارش نیست — {1, 2, 3, ...}' },
      { icon: '🎯', title: 'مجموعه یک‌عضوی', desc: 'فقط یک عضو دارد — {5}' },
      { icon: '🌍', title: 'مجموعه مرجع (U)', desc: 'مجموعه‌ای که همه اعضای مورد بحث را شامل می‌شود.' },
      { icon: '🔵', title: 'مجموعه مساوی', desc: 'دو مجموعه با اعضای یکسان — {1,2,3} = {2,1,3}' }
    ],
    numbers: [
      { icon: 'ℕ', title: 'اعداد طبیعی', desc: 'شمارش اعداد صحیح مثبت — {1, 2, 3, 4, ...}' },
      { icon: '𝕎', title: 'اعداد حسابی', desc: 'طبیعی + صفر — {0, 1, 2, 3, ...}' },
      { icon: 'ℤ', title: 'اعداد صحیح', desc: 'مثبت، منفی و صفر — {..., -2, -1, 0, 1, 2, ...}' },
      { icon: 'ℚ', title: 'اعداد گویا', desc: 'کسری — a/b که b ≠ 0' },
      { icon: 'ℝ', title: 'اعداد حقیقی', desc: 'گویا + گنگ — همه اعداد روی محور' },
      { icon: 'ℂ', title: 'اعداد مختلط', desc: 'شامل ریشه‌های منفی — سطح بالاتر' }
    ],
    relation: [
      { icon: '⊂', title: 'زیرمجموعه', desc: 'A زیرمجموعه B است اگر همه اعضای A در B باشند.' },
      { icon: '⊃', title: 'زبرمجموعه', desc: 'B زبرمجموعه A است اگر A زیرمجموعه B باشد.' },
      { icon: '=', title: 'مجموعه‌های مساوی', desc: 'دو مجموعه که اعضای یکسان دارند.' },
      { icon: '∩', title: 'مجموعه‌های جدا', desc: 'دو مجموعه که اشتراکشان تهی است.' },
      { icon: '🔗', title: 'زیرمجموعه محض', desc: 'A ⊂ B ولی A ≠ B — زیرمجموعه سره.' },
      { icon: '📊', title: 'تعداد زیرمجموعه‌ها', desc: 'اگر مجموعه‌ای n عضو داشته باشد، 2ⁿ زیرمجموعه دارد.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'مجموعه چیست؟', correct: 'گروهی از اشیا با ویژگی مشترک', pool: ['گروهی از اشیا با ویژگی مشترک', 'فقط اعداد', 'فقط میوه‌ها', 'فقط حروف'] },
    { q: 'نماد عضویت چیست؟', correct: '∈', pool: ['∈', '∉', '⊂', '∪'] },
    { q: 'نماد عدم عضویت چیست؟', correct: '∉', pool: ['∉', '∈', '∩', '∅'] },
    { q: 'نماد مجموعه تهی چیست؟', correct: '∅', pool: ['∅', '⊂', '∪', '∈'] },
    { q: 'آیا ۳ ∈ {1, 2, 3, 4}؟', correct: 'بله', pool: ['بله', 'خیر', 'شاید', 'نامشخص'] },
    { q: 'آیا ۵ ∈ {1, 2, 3, 4}؟', correct: 'خیر', pool: ['خیر', 'بله', 'شاید', 'نامشخص'] },
    { q: '{1, 2, 3} ∪ {3, 4, 5} = ؟', correct: '{1, 2, 3, 4, 5}', pool: ['{1, 2, 3, 4, 5}', '{3}', '{1, 2, 4, 5}', '{ }'] },
    { q: '{1, 2, 3} ∩ {3, 4, 5} = ؟', correct: '{3}', pool: ['{3}', '{1, 2, 3, 4, 5}', '{1, 2}', '{ }'] },
    { q: '{1, 2, 3, 4} − {2, 4} = ؟', correct: '{1, 3}', pool: ['{1, 3}', '{2, 4}', '{1, 2, 3, 4}', '{ }'] },
    { q: 'اگر U = {1, 2, 3, 4, 5} و A = {1, 2}، A\' چیست؟', correct: '{3, 4, 5}', pool: ['{3, 4, 5}', '{1, 2}', '{ }', '{1, 2, 3}'] },
    { q: 'نماد اجتماع چیست؟', correct: '∪', pool: ['∪', '∩', '∈', '⊂'] },
    { q: 'نماد اشتراک چیست؟', correct: '∩', pool: ['∩', '∪', '∉', '∅'] },
    { q: 'مجموعه {a, b, c} چند عضو دارد؟', correct: '۳', pool: ['۳', '۲', '۴', '۱'] },
    { q: 'آیا {1, 2, 3} = {3, 2, 1}؟', correct: 'بله', pool: ['بله', 'خیر', 'شاید', 'نامشخص'] },
    { q: 'آیا {1, 1, 2, 3} = {1, 2, 3}؟', correct: 'بله', pool: ['بله', 'خیر', 'شاید', 'نامشخص'] },
    { q: 'اعداد طبیعی کدام‌اند؟', correct: '{1, 2, 3, 4, ...}', pool: ['{1, 2, 3, 4, ...}', '{0, 1, 2, 3, ...}', '{..., -1, 0, 1, ...}', '{ }'] },
    { q: 'اعداد حسابی کدام‌اند؟', correct: '{0, 1, 2, 3, ...}', pool: ['{0, 1, 2, 3, ...}', '{1, 2, 3, ...}', '{..., -1, 0, 1, ...}', '{ }'] },
    { q: 'اعداد صحیح کدام‌اند؟', correct: '{..., -2, -1, 0, 1, 2, ...}', pool: ['{..., -2, -1, 0, 1, 2, ...}', '{1, 2, 3, ...}', '{0, 1, 2, ...}', '{ }'] },
    { q: 'مجموعه‌ای با یک عضو چه نام دارد؟', correct: 'یک‌عضوی', pool: ['یک‌عضوی', 'تهی', 'ناتمام', 'متناهی'] },
    { q: 'مجموعه‌ای که عضو ندارد چه نام دارد؟', correct: 'تهی', pool: ['تهی', 'یک‌عضوی', 'ناتمام', 'بزرگ'] },
    { q: 'تعداد زیرمجموعه‌های مجموعه {a, b} چقدر است؟', correct: '۴', pool: ['۴', '۲', '۳', '۸'] },
    { q: 'تعداد زیرمجموعه‌های مجموعه ۳ عضوی چقدر است؟', correct: '۸', pool: ['۸', '۶', '۳', '۹'] },
    { q: 'اگر A ⊂ B و B ⊂ A باشد، آنگاه...', correct: 'A = B', pool: ['A = B', 'A ≠ B', 'A = ∅', 'B = ∅'] },
    { q: 'آیا {1, 2} زیرمجموعه {1, 2, 3} است؟', correct: 'بله', pool: ['بله', 'خیر', 'شاید', 'نامشخص'] },
    { q: 'آیا {1, 4} زیرمجموعه {1, 2, 3} است؟', correct: 'خیر', pool: ['خیر', 'بله', 'شاید', 'نامشخص'] },
    { q: '{1, 2} ∩ {3, 4} = ؟', correct: '{ }', pool: ['{ }', '{1, 2, 3, 4}', '{1}', '{3}'] }
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
  // تب ۲: عملیات
  // ============================================================
  const operationsList = document.getElementById('operationsList');
  let currentOperation = 'union';

  function renderOperations(type) {
    operationsList.innerHTML = '';
    operations[type].forEach(p => {
      const card = document.createElement('div');
      card.className = 'prop-card';
      card.innerHTML = `
        <div class="prop-icon">${p.icon}</div>
        <div class="prop-title">${p.title}</div>
        <div class="prop-desc">${p.desc}</div>
      `;
      operationsList.appendChild(card);
    });
  }

  // ============================================================
  // تب ۳: انواع
  // ============================================================
  const typesList = document.getElementById('typesList');
  let currentType = 'special';

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

  // مدیریت همه motel-tab ها
  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      const parent = tab.parentElement;
      parent.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const type = tab.dataset.type;
      const parentSection = tab.closest('.lesson-section');
      if (parentSection.dataset.section === 'operations') {
        currentOperation = type;
        renderOperations(type);
      } else if (parentSection.dataset.section === 'types') {
        currentType = type;
        renderTypes(type);
      }
    };
  });

  renderOperations('union');
  renderTypes('special');

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
  document.querySelectorAll('.prop-card, .option-btn, .motel-tab').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();