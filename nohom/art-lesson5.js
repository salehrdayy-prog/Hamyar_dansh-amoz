// ============================================================
// درس ۵ نقاشی — طراحی اشیا
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده اشیا
  // ============================================================
  const objects = {
    fruit: [
      { visual: '🍎', title: 'سیب', desc: 'کره با فرورفتگی کوچک در بالا. سایه زیر آن بیضی است.' },
      { visual: '🍊', title: 'پرتقال', desc: 'کره‌ی کامل. بافت ناهموار با نقطه‌های کوچک.' },
      { visual: '🍋', title: 'لیمو', desc: 'بیضی با دو سر تیز.' },
      { visual: '🍇', title: 'انگور', desc: 'توده‌ای از کره‌های کوچک کنار هم.' },
      { visual: '🍌', title: 'موز', desc: 'خط منحنی با سرهای گرد.' },
      { visual: '🍉', title: 'هندوانه', desc: 'بیضی بزرگ یا نیم‌دایره برش‌خورده.' }
    ],
    cup: [
      { visual: '☕', title: 'لیوان', desc: 'استوانه با بیضی در بالا برای دهانه.' },
      { visual: '🥛', title: 'لیوان شیر', desc: 'استوانه با مایع در داخل.' },
      { visual: '🍵', title: 'فنجان', desc: 'استوانه کوتاه با دستگیره.' },
      { visual: '🍶', title: 'بطری', desc: 'استوانه با گردنه باریک در بالا.' },
      { visual: '🥤', title: 'لیوان کاغذی', desc: 'مخروط ناقص (بالا پهن‌تر).' },
      { visual: '🍾', title: 'بطری شامپاین', desc: 'استوانه با گردن و درپوش.' }
    ],
    book: [
      { visual: '📚', title: 'کتاب بسته', desc: 'مکعب باریک. ضخامت را ببین.' },
      { visual: '📖', title: 'کتاب باز', desc: 'دو صفحه شیب‌دار با خطوط متن.' },
      { visual: '📔', title: 'دفتر', desc: 'مکعب با جلد رنگی.' },
      { visual: '📕', title: 'کتاب ایستاده', desc: 'مکعب ایستاده روی لبه.' },
      { visual: '📓', title: 'دفترچه', desc: 'مکعب کوچک با خطوط.' },
      { visual: '📗', title: 'کتاب کج', desc: 'مکعب با یک لبه روی کتاب دیگر.' }
    ],
    vase: [
      { visual: '🏺', title: 'کوزه', desc: 'شکل پیازی با دهانه باریک.' },
      { visual: '🏺', title: 'گلدان بلند', desc: 'استوانه با فرورفتگی در وسط.' },
      { visual: '🍶', title: 'گلدان گرد', desc: 'کره با گردن کوتاه.' },
      { visual: '🫙', title: 'شیشه', desc: 'استوانه با درپوش.' },
      { visual: '🏺', title: 'گلدان گوش‌دار', desc: 'بدنه استوانه با دو دستگیره.' },
      { visual: '🏺', title: 'گلدان مخروطی', desc: 'مخروط برعکس (پایین باریک).' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'هر شیء را اول به چه شکلی تجزیه می‌کنیم؟', correct: 'شکل هندسی ساده', pool: ['شکل هندسی ساده', 'شکل پیچیده', 'رنگ', 'سایه'] },
    { q: 'لیوان شبیه چه شکلی است؟', correct: 'استوانه', pool: ['استوانه', 'مکعب', 'کره', 'مخروط'] },
    { q: 'کتاب شبیه چه شکلی است؟', correct: 'مکعب', pool: ['مکعب', 'کره', 'استوانه', 'مخروط'] },
    { q: 'سیب شبیه چه شکلی است؟', correct: 'کره', pool: ['کره', 'مکعب', 'استوانه', 'مخروط'] },
    { q: 'بستنی شبیه چه شکلی است؟', correct: 'مخروط', pool: ['مخروط', 'کره', 'مکعب', 'استوانه'] },
    { q: 'تخم‌مرغ شبیه چه شکلی است؟', correct: 'بیضی', pool: ['بیضی', 'کره', 'مکعب', 'مخروط'] },
    { q: 'دهانه لیوان چه شکلی است؟', correct: 'بیضی', pool: ['بیضی', 'دایره', 'مربع', 'مثلث'] },
    { q: 'سایه چه فایده‌ای دارد؟', correct: 'حجم می‌سازد', pool: ['حجم می‌سازد', 'رنگ می‌دهد', 'زیبایی می‌دهد', 'کوچک می‌کند'] },
    { q: 'سایه افتاده چیست؟', correct: 'سایه شیء روی زمین', pool: ['سایه شیء روی زمین', 'سایه خود شیء', 'منبع نور', 'نیم‌سایه'] },
    { q: 'روشن‌ترین نقطه شیء کجاست؟', correct: 'جایی که نور مستقیم می‌تابد', pool: ['جایی که نور مستقیم می‌تابد', 'سمت مخالف نور', 'زیر شیء', 'کنار شیء'] },
    { q: 'تیره‌ترین نقطه روی شیء کجاست؟', correct: 'سمت مخالف نور', pool: ['سمت مخالف نور', 'جایی که نور می‌تابد', 'بالای شیء', 'وسط شیء'] },
    { q: 'نیم‌سایه چیست؟', correct: 'منطقه بین روشن و تاریک', pool: ['منطقه بین روشن و تاریک', 'کاملاً تیره', 'کاملاً روشن', 'بازتاب نور'] },
    { q: 'بازتاب نور چیست؟', correct: 'نور منعکس‌شده از زمین', pool: ['نور منعکس‌شده از زمین', 'نور مستقیم', 'سایه تیره', 'نیم‌سایه'] },
    { q: 'اولین گام سایه‌زنی چیست؟', correct: 'مشخص کردن منبع نور', pool: ['مشخص کردن منبع نور', 'سایه زدن', 'رنگ زدن', 'پاک کردن'] },
    { q: 'سایه‌زنی با چه خطوطی شروع می‌شود؟', correct: 'خطوط نازک', pool: ['خطوط نازک', 'خطوط ضخیم', 'خطوط رنگی', 'خطوط منحنی'] },
    { q: 'هاشور چیست؟', correct: 'خطوط موازی برای سایه', pool: ['خطوط موازی برای سایه', 'خطوط متقاطع', 'خط منحنی', 'نقطه‌گذاری'] },
    { q: 'کدام یک شیء حجم‌دار است؟', correct: 'گلدان', pool: ['گلدان', 'کاغذ', 'آینه', 'سایه'] },
    { q: 'برای طراحی گلدان، اولین شکل پایه چیست؟', correct: 'استوانه', pool: ['استوانه', 'مربع', 'مثلث', 'ستاره'] },
    { q: 'چرا شکل‌های هندسی مهم‌اند؟', correct: 'طراحی را ساده‌تر می‌کنند', pool: ['طراحی را ساده‌تر می‌کنند', 'زیبایی می‌دهند', 'رنگ می‌دهند', 'سرعت می‌دهند'] },
    { q: 'کدام یک از اشیا نیست؟', correct: 'خورشید', pool: ['خورشید', 'کتاب', 'لیوان', 'گلدان'] }
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
  // تب ۲: اشیا
  // ============================================================
  const objectsList = document.getElementById('objectsList');
  let currentType = 'fruit';

  function renderObjects(type) {
    objectsList.innerHTML = '';
    objects[type].forEach(obj => {
      const card = document.createElement('div');
      card.className = 'object-card';
      card.innerHTML = `
        <div class="object-visual">${obj.visual}</div>
        <div class="object-title">${obj.title}</div>
        <div class="object-desc">${obj.desc}</div>
      `;
      objectsList.appendChild(card);
    });
  }

  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentType = tab.dataset.type;
      renderObjects(currentType);
    };
  });

  renderObjects('fruit');

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
  document.querySelectorAll('.object-card, .shade-card, .option-btn, .motel-tab').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();