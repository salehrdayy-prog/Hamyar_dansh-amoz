// ============================================================
// فصل ۳ ریاضی — استدلال و اثبات
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده انواع استدلال
  // ============================================================
  const types = {
    deductive: [
      { icon: '🎯', title: 'استدلال استنتاجی', desc: 'از قواعد کلی به نتیجه جزئی می‌رسیم.' },
      { icon: '📌', title: 'ویژگی', desc: 'نتیجه قطعی و یقینی است.' },
      { icon: '🎯', title: 'مثال ۱', desc: 'همه انسان‌ها فانی هستند. سقراط انسان است. → سقراط فانی است.' },
      { icon: '🎯', title: 'مثال ۲', desc: 'همه اعداد زوج بر ۲ بخش‌پذیرند. ۸ زوج است. → ۸ بر ۲ بخش‌پذیر است.' },
      { icon: '📐', title: 'کاربرد در ریاضی', desc: 'بیشتر قضیه‌های ریاضی با استدلال استنتاجی اثبات می‌شوند.' },
      { icon: '💡', title: 'قوت', desc: 'اگر فرض‌ها درست باشند، نتیجه حتماً درست است.' }
    ],
    inductive: [
      { icon: '📊', title: 'استدلال استقرایی', desc: 'از مثال‌های جزئی به یک قاعده کلی می‌رسیم.' },
      { icon: '🔍', title: 'ویژگی', desc: 'نتیجه احتمالی است، نه قطعی.' },
      { icon: '🎯', title: 'مثال ۱', desc: '۲، ۴، ۶، ۸ زوج‌اند → همه اعداد زوج‌اند؟' },
      { icon: '🎯', title: 'مثال ۲', desc: 'خورشید هر روز طلوع کرده → فردا هم طلوع می‌کند.' },
      { icon: '⚠️', title: 'خطر', desc: 'ممکن است نتیجه اشتباه باشد — نیاز به اثبات دارد.' },
      { icon: '💡', title: 'کاربرد', desc: 'در علوم تجربی و کشف الگوهای ریاضی.' }
    ],
    analogy: [
      { icon: '🔄', title: 'استدلال تمثیلی', desc: 'بین دو چیز مشابه، مقایسه می‌کنیم.' },
      { icon: '🎯', title: 'مثال ۱', desc: 'زمین مثل توپ گرد است.' },
      { icon: '🎯', title: 'مثال ۲', desc: 'قلب مثل پمپ است.' },
      { icon: '🎯', title: 'مثال ۳', desc: 'اتم مثل منظومه شمسی است.' },
      { icon: '⚠️', title: 'ضعف', desc: 'نتیجه یقینی نیست — فقط شباهت را نشان می‌دهد.' },
      { icon: '💡', title: 'کاربرد', desc: 'برای توضیح مفاهیم پیچیده استفاده می‌شود.' }
    ]
  };

  // ============================================================
  // داده روش‌های اثبات
  // ============================================================
  const proofs = {
    direct: [
      { icon: '➡️', title: 'اثبات مستقیم', desc: 'از فرض شروع می‌کنیم و با استدلال‌های منطقی به حکم می‌رسیم.' },
      { icon: '📌', title: 'مراحل', desc: 'فرض → استدلال ۱ → استدلال ۲ → ... → حکم' },
      { icon: '🎯', title: 'مثال ۱', desc: 'اثبات زوج بودن مجموع دو عدد زوج.' },
      { icon: '🎯', title: 'مثال ۲', desc: 'اثبات اینکه مجموع زوایای مثلث ۱۸۰ درجه است.' },
      { icon: '💡', title: 'مزیت', desc: 'روش رایج و قابل فهم.' },
      { icon: '🎓', title: 'کاربرد', desc: 'بیشتر اثبات‌های ریاضی.' }
    ],
    contradiction: [
      { icon: '🔄', title: 'اثبات با خلف', desc: 'فرض می‌کنیم حکم غلط است، سپس به تناقض می‌رسیم.' },
      { icon: '📌', title: 'مراحل', desc: 'فرض نقیض → استدلال → تناقض → حکم درست است' },
      { icon: '🎯', title: 'مثال کلاسیک', desc: 'اثبات گنگ بودن √2 — فرض می‌کنیم گویاست، به تناقض می‌رسیم.' },
      { icon: '🎯', title: 'مثال', desc: 'اثبات بی‌نهایت بودن تعداد اعداد اول.' },
      { icon: '💡', title: 'مزیت', desc: 'وقتی راه مستقیم سخت است، به کار می‌آید.' },
      { icon: '🎓', title: 'کاربرد', desc: 'اثبات قضیه‌های مهم ریاضی.' }
    ],
    counter: [
      { icon: '❌', title: 'مثال نقض', desc: 'برای رد یک حکم کلی، یک مثال کافی است که حکم را نقض کند.' },
      { icon: '📌', title: 'مراحل', desc: 'پیدا کردن یک مثال که حکم در آن نادرست است.' },
      { icon: '🎯', title: 'مثال ۱', desc: 'حکم «همه اعداد فرد اول هستند» — مثال نقض: ۹ (فرد ولی اول نیست).' },
      { icon: '🎯', title: 'مثال ۲', desc: 'حکم «همه اعداد بخش‌پذیر بر ۳، فردند» — مثال نقض: ۶.' },
      { icon: '⚠️', title: 'نکته', desc: 'مثال نقض حکم را رد می‌کند، ولی مثال مثبت آن را اثبات نمی‌کند.' },
      { icon: '💡', title: 'کاربرد', desc: 'برای رد حکم‌های غلط.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    // استدلال
    { q: 'استدلال چیست؟', correct: 'فرایند رسیدن از معلوم به نتیجه', pool: ['فرایند رسیدن از معلوم به نتیجه', 'فقط حدس زدن', 'فقط محاسبه', 'فقط حفظ کردن'] },
    { q: 'اثبات چیست؟', correct: 'نشان دادن درستی یک حکم با استدلال منطقی', pool: ['نشان دادن درستی یک حکم با استدلال منطقی', 'حدس زدن', 'محاسبه کردن', 'حفظ کردن'] },
    { q: 'استدلال استنتاجی از کجا به کجا می‌رود؟', correct: 'از کلی به جزئی', pool: ['از کلی به جزئی', 'از جزئی به کلی', 'از دو چیز مشابه', 'هیچ‌کدام'] },
    { q: 'استدلال استقرایی از کجا به کجا می‌رود؟', correct: 'از جزئی به کلی', pool: ['از جزئی به کلی', 'از کلی به جزئی', 'از دو چیز مشابه', 'هیچ‌کدام'] },
    { q: 'کدام استدلال نتیجه قطعی می‌دهد؟', correct: 'استنتاجی', pool: ['استنتاجی', 'استقرایی', 'تمثیلی', 'هیچکدام'] },
    { q: '«همه انسان‌ها فانی هستند، سقراط انسان است → سقراط فانی است» چه نوع استدلالی است؟', correct: 'استنتاجی', pool: ['استنتاجی', 'استقرایی', 'تمثیلی', 'هیچکدام'] },
    { q: '«۲، ۴، ۶، ۸ زوج‌اند → همه اعداد زوج‌اند» چه نوع استدلالی است؟', correct: 'استقرایی', pool: ['استقرایی', 'استنتاجی', 'تمثیلی', 'هیچکدام'] },
    { q: '«زمین مثل توپ گرد است» چه نوع استدلالی است؟', correct: 'تمثیلی', pool: ['تمثیلی', 'استنتاجی', 'استقرایی', 'هیچکدام'] },

    // اجزای اثبات
    { q: 'فرض در اثبات چیست؟', correct: 'اطلاعات داده‌شده', pool: ['اطلاعات داده‌شده', 'آنچه می‌خواهیم اثبات کنیم', 'نتیجه نهایی', 'اشتباه'] },
    { q: 'حکم در اثبات چیست؟', correct: 'آنچه می‌خواهیم اثبات کنیم', pool: ['آنچه می‌خواهیم اثبات کنیم', 'اطلاعات داده‌شده', 'مراحل اثبات', 'خطا'] },
    { q: 'اجزای یک اثبات ریاضی چند تاست؟', correct: '۴ (فرض، حکم، استدلال، نتیجه)', pool: ['۴ (فرض، حکم، استدلال، نتیجه)', '۲', '۳', '۵'] },

    // روش‌های اثبات
    { q: 'اثبات مستقیم چگونه است؟', correct: 'از فرض با استدلال به حکم می‌رسیم', pool: ['از فرض با استدلال به حکم می‌رسیم', 'فرض می‌کنیم حکم غلط است', 'مثال نقض می‌آوریم', 'حدس می‌زنیم'] },
    { q: 'اثبات با خلف چگونه است؟', correct: 'فرض می‌کنیم حکم غلط است، به تناقض می‌رسیم', pool: ['فرض می‌کنیم حکم غلط است، به تناقض می‌رسیم', 'از فرض به حکم', 'مثال نقض', 'حدس'] },
    { q: 'مثال نقض چیست؟', correct: 'مثالی که حکم را نادرست نشان می‌دهد', pool: ['مثالی که حکم را نادرست نشان می‌دهد', 'مثالی که حکم را درست نشان می‌دهد', 'فرض', 'استدلال'] },
    { q: '«همه اعداد فرد اول هستند» — مثال نقض؟', correct: '۹', pool: ['۹', '۳', '۵', '۷'] },
    { q: '«همه اعداد بخش‌پذیر بر ۳، فردند» — مثال نقض؟', correct: '۶', pool: ['۶', '۳', '۹', '۱۵'] },
    { q: 'اگر a و b زوج باشند، a + b چه می‌شود؟', correct: 'زوج', pool: ['زوج', 'فرد', 'اول', 'کمتر از a'] },
    { q: 'اگر a و b فرد باشند، a + b چه می‌شود؟', correct: 'زوج', pool: ['زوج', 'فرد', 'اول', 'صفر'] },
    { q: 'اگر a زوج و b فرد باشند، a + b چه می‌شود؟', correct: 'فرد', pool: ['فرد', 'زوج', 'اول', 'صفر'] },

    // نکات
    { q: 'آیا یک مثال می‌تواند یک حکم را اثبات کند؟', correct: 'خیر — نیاز به اثبات منطقی دارد', pool: ['خیر — نیاز به اثبات منطقی دارد', 'بله', 'شاید', 'نامشخص'] },
    { q: 'آیا یک مثال نقض می‌تواند یک حکم را رد کند؟', correct: 'بله', pool: ['بله', 'خیر', 'شاید', 'نامشخص'] },
    { q: 'کدام روش برای اثبات گنگ بودن √2 استفاده می‌شود؟', correct: 'خلف', pool: ['خلف', 'مستقیم', 'تمثیلی', 'استقرایی'] },
    { q: 'زوج بودن a یعنی چه؟', correct: 'a = 2m (m صحیح)', pool: ['a = 2m (m صحیح)', 'a = 2m + 1', 'a = m/2', 'a = m+2'] },
    { q: 'فرد بودن a یعنی چه؟', correct: 'a = 2m + 1 (m صحیح)', pool: ['a = 2m + 1 (m صحیح)', 'a = 2m', 'a = m/2', 'a = m+2'] },
    { q: 'چرا ۱ عدد اول نیست؟', correct: 'فقط یک مقسوم‌علیه (خودش) دارد', pool: ['فقط یک مقسوم‌علیه (خودش) دارد', 'زوج است', 'بزرگ است', 'منفی است'] },
    { q: 'اولین عدد اول چیست؟', correct: '۲', pool: ['۲', '۱', '۳', 'صفر'] },
    { q: 'تنها عدد اول زوج کدام است؟', correct: '۲', pool: ['۲', '۴', '۶', '۸'] }
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
  // تب ۲: انواع استدلال
  // ============================================================
  const typesList = document.getElementById('typesList');
  let currentType = 'deductive';

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

  // ============================================================
  // تب ۳: روش‌های اثبات
  // ============================================================
  const proofList = document.getElementById('proofList');
  let currentProof = 'direct';

  function renderProofs(type) {
    proofList.innerHTML = '';
    proofs[type].forEach(p => {
      const card = document.createElement('div');
      card.className = 'prop-card';
      card.innerHTML = `
        <div class="prop-icon">${p.icon}</div>
        <div class="prop-title">${p.title}</div>
        <div class="prop-desc">${p.desc}</div>
      `;
      proofList.appendChild(card);
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
      if (parentSection.dataset.section === 'types') {
        currentType = type;
        renderTypes(type);
      } else if (parentSection.dataset.section === 'proof') {
        currentProof = type;
        renderProofs(type);
      }
    };
  });

  renderTypes('deductive');
  renderProofs('direct');

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
  document.querySelectorAll('.prop-card, .option-btn, .motel-tab, .proof-step').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();