// ============================================================
// فصل ۱۴ علوم — جانوران مهره‌دار
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده ۵ رده مهره‌داران
  // ============================================================
  const classes = {
    fish: [
      { icon: '🐟', title: 'قزل‌آلا', desc: 'ماهی آب شیرین — در رودخانه‌ها زندگی می‌کند.' },
      { icon: '🦈', title: 'کوسه', desc: 'ماهی غضروفی — بدون استخوان واقعی.' },
      { icon: '🐠', title: 'ماهی گرمسیری', desc: 'رنگ‌های زیبا — در آب‌های گرم.' },
      { icon: '🌊', title: 'تنفس', desc: 'با آبشش — اکسیژن از آب جذب می‌کنند.' },
      { icon: '❄️', title: 'خون', desc: 'خون‌سرد — دمای بدن با محیط تغییر می‌کند.' },
      { icon: '🥚', title: 'تولیدمثل', desc: 'تخم می‌گذارند — اکثراً در آب.' }
    ],
    amphibian: [
      { icon: '🐸', title: 'قورباغه', desc: 'در آب زندگی می‌کند، روی خشکی شکار می‌کند.' },
      { icon: '🦎', title: 'سمندر', desc: 'دوزیست با بدن کشیده — در آب و خشکی.' },
      { icon: '🐛', title: 'غذای قورباغه', desc: 'حشرات — با زبان چسبنده شکار می‌کند.' },
      { icon: '💧', title: 'پوست', desc: 'پوست مرطوب بدون پولک — از آن تنفس هم می‌کنند.' },
      { icon: '🥚', title: 'تولیدمثل', desc: 'تخم در آب می‌گذارند — نوزاد اول آبشش دارد.' },
      { icon: '❄️', title: 'خون', desc: 'خون‌سرد — در زمستان به خواب می‌روند.' }
    ],
    reptile: [
      { icon: '🐍', title: 'مار', desc: 'بدن کشیده، بدون پا — بعضی سمی.' },
      { icon: '🦎', title: 'سوسمار', desc: 'چهار پا، پولک — در بیابان.' },
      { icon: '🐢', title: 'لاک‌پشت', desc: 'بدن در لاک — برخی آبزی، برخی خشکی.' },
      { icon: '🐊', title: 'کروکودیل', desc: 'شکارچی قوی آبزی — نزدیک به پرندگان و پستانداران.' },
      { icon: '💧', title: 'پوست', desc: 'پولک خشک — از هدر رفتن آب جلوگیری می‌کند.' },
      { icon: '🥚', title: 'تولیدمثل', desc: 'تخم در خشکی می‌گذارند — بدون نیاز به آب.' }
    ],
    bird: [
      { icon: '🦅', title: 'عقاب', desc: 'پرنده شکاری — دید قوی، پرواز بلند.' },
      { icon: '🦜', title: 'طوطی', desc: 'پرنده رنگی — بعضی حرف زدن یاد می‌گیرند.' },
      { icon: '🦉', title: 'جغد', desc: 'پرنده شب‌گرد — شکارچی جوندگان.' },
      { icon: '🦆', title: 'اردک', desc: 'پرنده آبزی — با پاهای پرده‌دار شنا می‌کند.' },
      { icon: '🪶', title: 'پر', desc: 'پوشش بدن — برای پرواز و گرم ماندن.' },
      { icon: '🥚', title: 'تولیدمثل', desc: 'تخم می‌گذارند — روی تخم‌ها می‌خوابند.' }
    ],
    mammal: [
      { icon: '🦁', title: 'شیر', desc: 'پستاندار گوشت‌خوار — شکارچی قوی.' },
      { icon: '🐘', title: 'فیل', desc: 'بزرگ‌ترین پستاندار خشکی — خرطوم و عاج.' },
      { icon: '🐬', title: 'دلفین', desc: 'پستاندار آبزی — باهوش و اجتماعی.' },
      { icon: '🐳', title: 'نهنگ', desc: 'بزرگ‌ترین جانور جهان — پستاندار آبزی.' },
      { icon: '🦇', title: 'خفاش', desc: 'تنها پستاندار پرنده — شب‌گرد.' },
      { icon: '👤', title: 'انسان', desc: 'پستاندار باهوش — مغز پیشرفته.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'مهره‌داران چه ویژگی دارند؟', correct: 'ستون فقرات', pool: ['ستون فقرات', 'بدون استخوان', 'اسکلت خارجی', 'بدون مغز'] },
    { q: 'چند رده مهره‌داران داریم؟', correct: '۵', pool: ['۵', '۴', '۶', '۳'] },
    { q: 'کدام رده آبشش دارد؟', correct: 'ماهی', pool: ['ماهی', 'دوزیست', 'خزنده', 'پستاندار'] },
    { q: 'کدام رده هم آبشش و هم شش دارد؟', correct: 'دوزیست', pool: ['دوزیست', 'ماهی', 'خزنده', 'پرنده'] },
    { q: 'کدام رده پولک خشک دارد؟', correct: 'خزنده', pool: ['خزنده', 'دوزیست', 'ماهی', 'پستاندار'] },
    { q: 'کدام رده پر دارد؟', correct: 'پرنده', pool: ['پرنده', 'خزنده', 'پستاندار', 'دوزیست'] },
    { q: 'کدام رده مو دارد؟', correct: 'پستاندار', pool: ['پستاندار', 'پرنده', 'خزنده', 'ماهی'] },
    { q: 'کدام رده بچه می‌زاید؟', correct: 'پستاندار', pool: ['پستاندار', 'پرنده', 'خزنده', 'دوزیست'] },
    { q: 'کدام رده شیر می‌دهد؟', correct: 'پستاندار', pool: ['پستاندار', 'پرنده', 'خزنده', 'ماهی'] },
    { q: 'کدام رده خون‌گرم است؟', correct: 'پرنده و پستاندار', pool: ['پرنده و پستاندار', 'ماهی و دوزیست', 'خزنده و ماهی', 'فقط پرنده'] },
    { q: 'کدام رده خون‌سرد است؟', correct: 'ماهی، دوزیست، خزنده', pool: ['ماهی، دوزیست، خزنده', 'پرنده و پستاندار', 'همه مهره‌داران', 'فقط پستاندار'] },
    { q: 'قورباغه در کدام رده است؟', correct: 'دوزیست', pool: ['دوزیست', 'خزنده', 'ماهی', 'پستاندار'] },
    { q: 'مار در کدام رده است؟', correct: 'خزنده', pool: ['خزنده', 'دوزیست', 'پستاندار', 'پرنده'] },
    { q: 'دلفین در کدام رده است؟', correct: 'پستاندار', pool: ['پستاندار', 'ماهی', 'خزنده', 'دوزیست'] },
    { q: 'نهنگ در کدام رده است؟', correct: 'پستاندار', pool: ['پستاندار', 'ماهی', 'خزنده', 'دوزیست'] },
    { q: 'کدام پستاندار پرواز می‌کند؟', correct: 'خفاش', pool: ['خفاش', 'دلفین', 'نهنگ', 'شیر'] },
    { q: 'کدام پرنده شب‌گرد است؟', correct: 'جغد', pool: ['جغد', 'عقاب', 'طوطی', 'گنجشک'] },
    { q: 'بزرگ‌ترین جانور جهان کدام است؟', correct: 'نهنگ آبی', pool: ['نهنگ آبی', 'فیل', 'کوسه', 'زرافه'] },
    { q: 'بزرگ‌ترین پستاندار خشکی کدام است؟', correct: 'فیل', pool: ['فیل', 'کرگدن', 'اسب آبی', 'زرافه'] },
    { q: 'کروکودیل در کدام رده است؟', correct: 'خزنده', pool: ['خزنده', 'دوزیست', 'ماهی', 'پستاندار'] },
    { q: 'لاک‌پشت در کدام رده است؟', correct: 'خزنده', pool: ['خزنده', 'دوزیست', 'پستاندار', 'پرنده'] },
    { q: 'کدام رده تخم در خشکی می‌گذارد؟', correct: 'خزنده، پرنده', pool: ['خزنده، پرنده', 'ماهی، دوزیست', 'فقط ماهی', 'فقط پستاندار'] },
    { q: 'کدام رده پوست مرطوب دارد؟', correct: 'دوزیست', pool: ['دوزیست', 'خزنده', 'پرنده', 'پستاندار'] },
    { q: 'کدام ماهی اسکلت غضروفی دارد؟', correct: 'کوسه', pool: ['کوسه', 'قزل‌آلا', 'کپور', 'ماهی قرمز'] },
    { q: 'تنها پستاندار پرنده کدام است؟', correct: 'خفاش', pool: ['خفاش', 'سنجاب پرنده', 'پنگوئن', 'شترمرغ'] },
    { q: 'پنگوئن چه نوع جانوری است؟', correct: 'پرنده', pool: ['پرنده', 'پستاندار', 'ماهی', 'خزنده'] }
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
  // تب ۲: رده‌ها
  // ============================================================
  const classesList = document.getElementById('classesList');
  let currentClass = 'fish';

  function renderClasses(type) {
    classesList.innerHTML = '';
    classes[type].forEach(p => {
      const card = document.createElement('div');
      card.className = 'prop-card';
      card.innerHTML = `
        <div class="prop-icon">${p.icon}</div>
        <div class="prop-title">${p.title}</div>
        <div class="prop-desc">${p.desc}</div>
      `;
      classesList.appendChild(card);
    });
  }

  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentClass = tab.dataset.type;
      renderClasses(currentClass);
    };
  });

  renderClasses('fish');

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
  document.querySelectorAll('.prop-card, .option-btn, .motel-tab, .blood-card').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();