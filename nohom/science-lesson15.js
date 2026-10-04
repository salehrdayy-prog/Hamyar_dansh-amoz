// ============================================================
// فصل ۱۵ علوم — با هم زیستن
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده روابط بین جانداران
  // ============================================================
  const relations = {
    positive: [
      { icon: '🤝', title: 'همزیستی (هم‌یاری)', desc: 'هر دو جاندار سود می‌برند — مثل مورچه و شته.' },
      { icon: '🐝', title: 'گرده‌افشانی', desc: 'زنبور از گل شهد می‌گیرد، گل گرده‌افشانی می‌شود.' },
      { icon: '🐠', title: 'ماهی و شقایق', desc: 'ماهی از شقایق محافظت می‌گیرد، شقایق غذا می‌گیرد.' },
      { icon: '🌱', title: 'میکوریزا', desc: 'قارچ با ریشه گیاه همزیستی دارد — هر دو سود می‌برند.' },
      { icon: '🐜', title: 'مورچه و آکاسیا', desc: 'مورچه در درخت آکاسیا زندگی می‌کند و از آن محافظت می‌کند.' },
      { icon: '🦜', title: 'پرنده و تمساح', desc: 'پرنده دندان‌های تمساح را تمیز می‌کند، تمساح از او محافظت می‌کند.' }
    ],
    negative: [
      { icon: '🦁', title: 'شکار (شکارچی-شکار)', desc: 'یک جاندار جاندار دیگر را می‌خورد — مثل شیر و گوزن.' },
      { icon: '🪱', title: 'انگلی', desc: 'یک جاندار در بدن دیگری زندگی می‌کند و به او آسیب می‌زند.' },
      { icon: '🦟', title: 'پشه و انسان', desc: 'پشه خون انسان را می‌خورد و بیماری منتقل می‌کند.' },
      { icon: '🪰', title: 'کرم کدو', desc: 'در روده انسان زندگی می‌کند و از غذای او تغذیه می‌کند.' },
      { icon: '🌿', title: 'رقابت', desc: 'دو جاندار برای یک منبع (غذا، جا) با هم رقابت می‌کنند.' },
      { icon: '🍄', title: 'قارچ انگل', desc: 'روی گیاه یا جانور رشد می‌کند و به آن آسیب می‌زند.' }
    ],
    neutral: [
      { icon: '🦈', title: 'چسبندگی', desc: 'یک جاندار به دیگری می‌چسبد ولی نه سود می‌برد نه ضرر.' },
      { icon: '🐟', title: 'ماهی و کوسه', desc: 'ماهی کوچک به کوسه می‌چسبد — بدون آسیب.' },
      { icon: '🐿️', title: 'هم‌خانه‌ای', desc: 'دو جاندار در یک مکان زندگی می‌کنند بدون تأثیر روی هم.' },
      { icon: '🕷️', title: 'بی‌طرفی', desc: 'دو جاندار در یک اکوسیستم‌اند ولی با هم کاری ندارند.' },
      { icon: '🐜', title: 'مورچه و سوسک', desc: 'در یک لانه زندگی می‌کنند بدون تأثیر.' },
      { icon: '🌳', title: 'درخت و پرنده', desc: 'پرنده روی درخت لانه می‌سازد — درخت ضرر نمی‌بیند.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'اکوسیستم چیست؟', correct: 'مجموعه جانداران و محیط غیرزنده', pool: ['مجموعه جانداران و محیط غیرزنده', 'فقط جانداران', 'فقط گیاهان', 'فقط خاک'] },
    { q: 'تولیدکننده در اکوسیستم کیست؟', correct: 'گیاهان', pool: ['گیاهان', 'جانوران', 'قارچ‌ها', 'باکتری'] },
    { q: 'مصرف‌کننده در اکوسیستم کیست؟', correct: 'جانوران', pool: ['جانوران', 'گیاهان', 'قارچ‌ها', 'آب'] },
    { q: 'تجزیه‌کننده در اکوسیستم کیست؟', correct: 'قارچ‌ها و باکتری‌ها', pool: ['قارچ‌ها و باکتری‌ها', 'گیاهان', 'جانوران', 'سنگ'] },
    { q: 'زیستگاه چیست؟', correct: 'محل زندگی جاندار', pool: ['محل زندگی جاندار', 'غذای جاندار', 'دشمن جاندار', 'خانواده جاندار'] },
    { q: 'تنوع زیستی چیست؟', correct: 'گوناگونی جانداران در اکوسیستم', pool: ['گوناگونی جانداران در اکوسیستم', 'تعداد گیاهان', 'تعداد جانوران', 'اندازه اکوسیستم'] },
    { q: 'زنجیره غذایی از کجا شروع می‌شود؟', correct: 'خورشید', pool: ['خورشید', 'گیاه', 'جانور', 'قارچ'] },
    { q: 'در زنجیره غذایی، بعد از خورشید چیست؟', correct: 'تولیدکننده (گیاه)', pool: ['تولیدکننده (گیاه)', 'مصرف‌کننده', 'تجزیه‌کننده', 'شکارچی'] },
    { q: 'گیاه‌خواران کدام سطح‌اند؟', correct: 'سطح دوم', pool: ['سطح دوم', 'سطح اول', 'سطح سوم', 'سطح چهارم'] },
    { q: 'در هر سطح هرم انرژی، چند درصد انرژی به سطح بعد می‌رسد؟', correct: '۱۰٪', pool: ['۱۰٪', '۵۰٪', '۹۰٪', '۱۰۰٪'] },
    { q: 'شبکه غذایی چیست؟', correct: 'چند زنجیره غذایی متصل به هم', pool: ['چند زنجیره غذایی متصل به هم', 'یک زنجیره غذایی', 'مجموعه گیاهان', 'مجموعه جانوران'] },
    { q: 'همزیستی چیست؟', correct: 'رابطه‌ای که هر دو جاندار سود می‌برند', pool: ['رابطه‌ای که هر دو جاندار سود می‌برند', 'رابطه‌ای که یکی سود می‌برد', 'رابطه‌ای که یکی آسیب می‌بیند', 'رابطه بدون تأثیر'] },
    { q: 'انگلی چیست؟', correct: 'یک جاندار در بدن دیگری زندگی می‌کند و به او آسیب می‌زند', pool: ['یک جاندار در بدن دیگری زندگی می‌کند و به او آسیب می‌زند', 'هر دو سود می‌برند', 'هر دو ضرر می‌کنند', 'بی‌تأثیر است'] },
    { q: 'شکارچی و شکار چه رابطه‌ای دارند؟', correct: 'شکارچی شکار را می‌خورد', pool: ['شکارچی شکار را می‌خورد', 'هر دو سود می‌برند', 'بی‌تأثیرند', 'شکار شکارچی را می‌خورد'] },
    { q: 'گرده‌افشانی چه نوع رابطه‌ای است؟', correct: 'همزیستی', pool: ['همزیستی', 'انگلی', 'شکار', 'رقابت'] },
    { q: 'میکوریزا چه نوع رابطه‌ای است؟', correct: 'همزیستی قارچ و ریشه گیاه', pool: ['همزیستی قارچ و ریشه گیاه', 'انگلی', 'شکار', 'رقابت'] },
    { q: 'کرم کدو چه نوع رابطه‌ای دارد؟', correct: 'انگلی', pool: ['انگلی', 'همزیستی', 'شکار', 'رقابت'] },
    { q: 'پشه و انسان چه نوع رابطه‌ای است؟', correct: 'انگلی', pool: ['انگلی', 'همزیستی', 'رقابت', 'بی‌تأثیر'] },
    { q: 'رقابت چیست؟', correct: 'دو جاندار برای یک منبع با هم رقابت می‌کنند', pool: ['دو جاندار برای یک منبع با هم رقابت می‌کنند', 'هر دو سود می‌برند', 'هر دو ضرر می‌کنند', 'یکی دیگری را می‌خورد'] },
    { q: 'چرا تنوع زیستی مهم است؟', correct: 'اکوسیستم پایدارتر می‌شود', pool: ['اکوسیستم پایدارتر می‌شود', 'زیبایی بیشتر', 'غذای بیشتر', 'بی‌اهمیت است'] },
    { q: 'چرخه مواد در اکوسیستم چه می‌کند؟', correct: 'مواد را بین جانداران و محیط می‌چرخاند', pool: ['مواد را بین جانداران و محیط می‌چرخاند', 'انرژی می‌سازد', 'جانداران را می‌خورد', 'آب می‌سازد'] },
    { q: 'انرژی از خورشید به کدام جاندار می‌رود؟', correct: 'گیاهان', pool: ['گیاهان', 'جانوران', 'قارچ‌ها', 'باکتری'] },
    { q: 'اگر یک گونه از اکوسیستم حذف شود، چه اتفاقی می‌افتد؟', correct: 'تعادل اکوسیستم به هم می‌خورد', pool: ['تعادل اکوسیستم به هم می‌خورد', 'هیچ تغییری نمی‌کند', 'اکوسیستم بهتر می‌شود', 'گونه‌های دیگر بیشتر می‌شوند'] },
    { q: 'مورچه و شته چه نوع رابطه‌ای دارند؟', correct: 'همزیستی', pool: ['همزیستی', 'انگلی', 'شکار', 'رقابت'] },
    { q: 'ماهی و شقایق دریایی چه رابطه‌ای دارند؟', correct: 'همزیستی', pool: ['همزیستی', 'انگلی', 'شکار', 'بی‌تأثیر'] },
    { q: 'چرا شبکه غذایی پایدارتر از زنجیره است؟', correct: 'اگر یک مسیر از بین برود، مسیرهای دیگر هست', pool: ['اگر یک مسیر از بین برود، مسیرهای دیگر هست', 'ساده‌تر است', 'غذای بیشتر دارد', 'بی‌اهمیت است'] }
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
  // تب ۲: روابط
  // ============================================================
  const relationsList = document.getElementById('relationsList');
  let currentRelation = 'positive';

  function renderRelations(type) {
    relationsList.innerHTML = '';
    relations[type].forEach(p => {
      const card = document.createElement('div');
      card.className = 'prop-card';
      card.innerHTML = `
        <div class="prop-icon">${p.icon}</div>
        <div class="prop-title">${p.title}</div>
        <div class="prop-desc">${p.desc}</div>
      `;
      relationsList.appendChild(card);
    });
  }

  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentRelation = tab.dataset.type;
      renderRelations(currentRelation);
    };
  });

  renderRelations('positive');

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
  document.querySelectorAll('.prop-card, .option-btn, .motel-tab, .chain-item, .pyramid-level, .web-item').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();