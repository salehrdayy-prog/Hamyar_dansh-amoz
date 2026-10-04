// ============================================================
// فصل ۵ علوم — نیرو
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده انواع نیرو
  // ============================================================
  const types = {
    contact: [
      { icon: '💪', title: 'نیروی عضلانی', desc: 'نیرویی که با ماهیچه‌های خود وارد می‌کنیم — مثل هل دادن یا کشیدن.' },
      { icon: '🧲', title: 'نیروی اصطکاک', desc: 'نیرویی که در سطح تماس دو جسم ایجاد می‌شود و مخالف حرکت است.' },
      { icon: '🎈', title: 'نیروی کشش طناب', desc: 'نیرویی که طناب یا سیم کشیده‌شده وارد می‌کند.' },
      { icon: '🌬️', title: 'نیروی هوا', desc: 'نیرویی که هوا به جسم در حال حرکت وارد می‌کند.' },
      { icon: '🚰', title: 'نیروی فشار آب', desc: 'نیرویی که آب یا مایع به جسم وارد می‌کند.' },
      { icon: '⚽', title: 'نیروی ضربه', desc: 'نیروی لحظه‌ای هنگام برخورد دو جسم — مثل ضربه به توپ.' }
    ],
    noncontact: [
      { icon: '🧲', title: 'نیروی مغناطیسی', desc: 'نیروی آهنربا بر اجسام آهنی — بدون تماس.' },
      { icon: '⚡', title: 'نیروی الکتریکی', desc: 'جذب یا دفع بین بارهای الکتریکی.' },
      { icon: '🌍', title: 'نیروی گرانش', desc: 'نیروی جاذبه زمین — همه اجسام را به سمت خود می‌کشد.' },
      { icon: '🌞', title: 'نیروی گرانش خورشید', desc: 'نیرویی که خورشید به سیارات وارد می‌کند.' },
      { icon: '☢️', title: 'نیروی هسته‌ای قوی', desc: 'نیرویی که پروتون‌ها و نوترون‌ها را در هسته نگه می‌دارد.' },
      { icon: '⚛️', title: 'نیروی هسته‌ای ضعیف', desc: 'نیروی مربوط به واپاشی رادیواکتیو.' }
    ],
    common: [
      { icon: '🌍', title: 'وزن (W)', desc: 'نیروی گرانش زمین بر جسم — W = m × g. یکا: نیوتن.' },
      { icon: '🛋️', title: 'نیروی عمودی سطح (N)', desc: 'نیرویی که سطح به جسم وارد می‌کند — عمود بر سطح.' },
      { icon: '🎯', title: 'نیروی اصطکاک (f)', desc: 'مخالف حرکت — به جنس سطوح بستگی دارد.' },
      { icon: '📏', title: 'نیروی کشش (T)', desc: 'نیروی وارد بر طناب یا فنر.' },
      { icon: '🌀', title: 'نیروی مقاومت هوا', desc: 'مخالفت هوا با حرکت جسم.' },
      { icon: '🚀', title: 'نیروی رانش', desc: 'نیرویی که جسم را به جلو می‌راند — مثل موتور موشک.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'نیرو چیست؟', correct: 'هر کشیدن یا هل دادن', pool: ['هر کشیدن یا هل دادن', 'فقط هل دادن', 'فقط کشیدن', 'فقط حرکت'] },
    { q: 'یکای نیرو در SI چیست؟', correct: 'نیوتن', pool: ['نیوتن', 'کیلوگرم', 'متر', 'ژول'] },
    { q: 'نیرو چه نوع کمیتی است؟', correct: 'برداری', pool: ['برداری', 'اسکالر', 'مطلق', 'نسبی'] },
    { q: 'کدام‌یک ویژگی نیرو نیست؟', correct: 'رنگ', pool: ['رنگ', 'اندازه', 'جهت', 'نقطه اثر'] },
    { q: 'نیرو می‌تواند چه کند؟', correct: 'همه موارد', pool: ['همه موارد', 'فقط حرکت دهد', 'فقط متوقف کند', 'فقط تغییر شکل دهد'] },
    { q: 'نیروی عضلانی چه نوع نیرویی است؟', correct: 'تماسی', pool: ['تماسی', 'غیرتماسی', 'مغناطیسی', 'گرانشی'] },
    { q: 'نیروی مغناطیسی چه نوع نیرویی است؟', correct: 'غیرتماسی', pool: ['غیرتماسی', 'تماسی', 'اصطکاکی', 'عضلانی'] },
    { q: 'نیروی گرانش چه نوع نیرویی است؟', correct: 'غیرتماسی', pool: ['غیرتماسی', 'تماسی', 'اصطکاکی', 'کششی'] },
    { q: 'نیروی اصطکاک چه نوع نیرویی است؟', correct: 'تماسی', pool: ['تماسی', 'غیرتماسی', 'مغناطیسی', 'الکتریکی'] },
    { q: 'وزن یک جسم چه نیرویی است؟', correct: 'گرانش زمین بر جسم', pool: ['گرانش زمین بر جسم', 'جرم جسم', 'فشار هوا', 'نیروی مغناطیسی'] },
    { q: 'نیروی اصطکاک چه جهتی دارد؟', correct: 'مخالف حرکت', pool: ['مخالف حرکت', 'هم‌جهت حرکت', 'عمود بر حرکت', 'بدون جهت'] },
    { q: 'کدام‌یک از اثرات نیرو نیست؟', correct: 'تغییر رنگ', pool: ['تغییر رنگ', 'شروع حرکت', 'توقف حرکت', 'تغییر شکل'] },
    { q: 'وقتی کتاب روی میز ساکن است، نیروها چگونه‌اند؟', correct: 'متعادل', pool: ['متعادل', 'نامتعادل', 'صفر', 'نامشخص'] },
    { q: 'وقتی ماشین شتاب می‌گیرد، نیروها چگونه‌اند؟', correct: 'نامتعادل', pool: ['نامتعادل', 'متعادل', 'صفر', 'نامشخص'] },
    { q: 'برآیند نیروهای متعادل چقدر است؟', correct: 'صفر', pool: ['صفر', 'بزرگ', 'کوچک', 'نامشخص'] },
    { q: 'نیروی عمودی سطح چه جهتی دارد؟', correct: 'عمود بر سطح', pool: ['عمود بر سطح', 'افقی', 'مایل', 'به سمت پایین'] },
    { q: 'کدام نیرو همیشه به سمت مرکز زمین است؟', correct: 'گرانش', pool: ['گرانش', 'اصطکاک', 'کشش', 'عمودی سطح'] },
    { q: 'نیروی کشش طناب چه نوع نیرویی است؟', correct: 'تماسی', pool: ['تماسی', 'غیرتماسی', 'گرانشی', 'مغناطیسی'] },
    { q: 'برای نشان دادن نیرو از چه چیزی استفاده می‌کنیم؟', correct: 'پیکان', pool: ['پیکان', 'دایره', 'مربع', 'خط منحنی'] },
    { q: 'طول پیکان نیرو نشان‌دهنده چیست؟', correct: 'اندازه نیرو', pool: ['اندازه نیرو', 'جهت نیرو', 'نقطه اثر', 'سرعت'] },
    { q: 'جهت پیکان نیرو نشان‌دهنده چیست؟', correct: 'جهت نیرو', pool: ['جهت نیرو', 'اندازه نیرو', 'نقطه اثر', 'زمان'] },
    { q: 'کدام یک نیروی غیرتماسی است؟', correct: 'نیروی الکتریکی', pool: ['نیروی الکتریکی', 'نیروی عضلانی', 'اصطکاک', 'کشش طناب'] },
    { q: 'کدام یک نیروی تماسی است؟', correct: 'نیروی ضربه', pool: ['نیروی ضربه', 'گرانش', 'مغناطیسی', 'الکتریکی'] },
    { q: 'نیروی مقاومت هوا چه اثری دارد؟', correct: 'مخالفت با حرکت جسم', pool: ['مخالفت با حرکت جسم', 'افزایش سرعت', 'توقف کامل', 'تغییر جهت'] },
    { q: 'وقتی جسمی به حالت سکون می‌ماند، یعنی چه؟', correct: 'نیروها متعادل هستند', pool: ['نیروها متعادل هستند', 'نیروها نامتعادل هستند', 'نیرو صفر است', 'گرانش نیست'] }
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
  // تب ۲: انواع
  // ============================================================
  const typesList = document.getElementById('typesList');
  let currentType = 'contact';

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

  renderTypes('contact');

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
  document.querySelectorAll('.prop-card, .option-btn, .motel-tab, .effect-card, .balance-card').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();