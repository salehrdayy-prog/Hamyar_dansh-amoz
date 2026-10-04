// ============================================================
// درس ۱ نقاشی — اصول طراحی
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // عناصر طراحی
  // ============================================================
  const elements = {
    line: [
      { visual: '—', title: 'خط افقی', desc: 'خط آرام و پایدار. حس سکون می‌دهد.' },
      { visual: '|', title: 'خط عمودی', desc: 'خط قدرت و ایستایی. حس استحکام می‌دهد.' },
      { visual: '/', title: 'خط مورب', desc: 'خط حرکت و پویایی. حس سرعت می‌دهد.' },
      { visual: '◯', title: 'خط منحنی', desc: 'خط نرمی و زیبایی. حس لطافت می‌دهد.' },
      { visual: '⌇', title: 'خط شکسته', desc: 'خط هیجان و آشفتگی.' },
      { visual: '〰', title: 'خط موجی', desc: 'خط جریان و زندگی.' }
    ],
    shape: [
      { visual: '□', title: 'مربع', desc: 'شکل چهارضلعی منظم. حس پایداری.' },
      { visual: '△', title: 'مثلث', desc: 'شکل سه‌ضلعی. حس قدرت.' },
      { visual: '◯', title: 'دایره', desc: 'شکل گرد کامل. حس آرامش.' },
      { visual: '▭', title: 'مستطیل', desc: 'مربع کشیده. حس گستردگی.' },
      { visual: '◇', title: 'لوزی', desc: 'مربع چرخیده. حس تعادل.' },
      { visual: '☆', title: 'ستاره', desc: 'ترکیب مثلث‌ها. حس شکوه.' }
    ],
    shade: [
      { visual: '░', title: 'سایه روشن', desc: 'برای جاهای روشن اشیا' },
      { visual: '▒', title: 'سایه متوسط', desc: 'برای وسط‌های جسم' },
      { visual: '▓', title: 'سایه تیره', desc: 'برای جاهای تیره' },
      { visual: '█', title: 'سیاه کامل', desc: 'برای تاریکی مطلق' },
      { visual: '≋', title: 'هاشور', desc: 'خطوط موازی برای سایه' },
      { visual: '☰', title: 'کراس‌هچ', desc: 'خطوط متقاطع برای سایه' }
    ],
    light: [
      { visual: '💡', title: 'منبع نور', desc: 'جایی که نور از آن می‌آید' },
      { visual: '☀️', title: 'نور مستقیم', desc: 'نور قوی و روشن' },
      { visual: '🌙', title: 'نور غیرمستقیم', desc: 'نور ملایم و نرم' },
      { visual: '🌓', title: 'نیم‌سایه', desc: 'منطقه بین روشن و تاریک' },
      { visual: '🌑', title: 'سایه خود', desc: 'سایه‌ی خودِ جسم' },
      { visual: '⬛', title: 'سایه افتاده', desc: 'سایه‌ی جسم روی زمین' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'پایه همه طراحی‌ها چیست؟', correct: 'خط', pool: ['خط', 'رنگ', 'سایه', 'نور'] },
    { q: 'کدام عنصر به جسم حجم می‌دهد؟', correct: 'سایه', pool: ['سایه', 'خط', 'شکل', 'رنگ'] },
    { q: 'مداد H برای چه کاری مناسب است؟', correct: 'خطوط نازک و روشن', pool: ['خطوط نازک و روشن', 'خطوط ضخیم و تیره', 'رنگ‌آمیزی', 'پاک کردن'] },
    { q: 'مداد B برای چه کاری مناسب است؟', correct: 'خطوط ضخیم و تیره', pool: ['خطوط ضخیم و تیره', 'خطوط نازک و روشن', 'طراحی هندسی', 'پاک کردن'] },
    { q: 'مداد HB چه نوع مدادی است؟', correct: 'مداد معمولی', pool: ['مداد معمولی', 'مداد تیره', 'مداد روشن', 'مداد رنگی'] },
    { q: 'کدام خط حس سکون می‌دهد؟', correct: 'خط افقی', pool: ['خط افقی', 'خط عمودی', 'خط مورب', 'خط منحنی'] },
    { q: 'کدام خط حس قدرت می‌دهد؟', correct: 'خط عمودی', pool: ['خط عمودی', 'خط افقی', 'خط منحنی', 'خط شکسته'] },
    { q: 'کدام خط حس حرکت می‌دهد؟', correct: 'خط مورب', pool: ['خط مورب', 'خط افقی', 'خط عمودی', 'خط منحنی'] },
    { q: 'کدام خط حس نرمی و لطافت می‌دهد؟', correct: 'خط منحنی', pool: ['خط منحنی', 'خط شکسته', 'خط مورب', 'خط افقی'] },
    { q: 'هاشور چیست؟', correct: 'خطوط موازی برای سایه', pool: ['خطوط موازی برای سایه', 'خطوط متقاطع', 'خط منحنی', 'خط افقی'] },
    { q: 'کراس‌هچ چیست؟', correct: 'خطوط متقاطع برای سایه', pool: ['خطوط متقاطع برای سایه', 'خطوط موازی', 'خط منحنی', 'خط عمودی'] },
    { q: 'سایه افتاده چیست؟', correct: 'سایه جسم روی زمین', pool: ['سایه جسم روی زمین', 'سایه خود جسم', 'منبع نور', 'نیم‌سایه'] },
    { q: 'چند عنصر اصلی طراحی داریم؟', correct: 'خط، شکل، سایه، نور', pool: ['خط، شکل، سایه، نور', 'فقط خط', 'رنگ و شکل', 'کاغذ و مداد'] },
    { q: 'برای کشیدن خطوط صاف از چه استفاده می‌کنیم؟', correct: 'خط‌کش', pool: ['خط‌کش', 'پاک‌کن', 'مداد رنگی', 'قلم‌مو'] },
    { q: 'برای پاک کردن اشتباهات از چه استفاده می‌کنیم؟', correct: 'پاک‌کن', pool: ['پاک‌کن', 'خط‌کش', 'مداد', 'کاغذ'] },
    { q: 'بهترین روش یادگیری طراحی چیست؟', correct: 'تمرین هر روز', pool: ['تمرین هر روز', 'یک بار تمرین', 'نگاه کردن', 'خرید ابزار'] },
    { q: 'طراحی خوب چه ویژگی دارد؟', correct: 'صبوری و تمرین', pool: ['صبوری و تمرین', 'ابزار گران', 'استعداد ذاتی', 'سرعت زیاد'] },
    { q: 'مربع چه نوع شکلی است؟', correct: 'چهارضلعی منظم', pool: ['چهارضلعی منظم', 'سه‌ضلعی', 'دایره', 'پنج‌ضلعی'] },
    { q: 'مثلث چه حسی می‌دهد؟', correct: 'قدرت و استواری', pool: ['قدرت و استواری', 'آرامش', 'حرکت', 'لطافت'] },
    { q: 'دایره چه حسی می‌دهد؟', correct: 'آرامش و کامل بودن', pool: ['آرامش و کامل بودن', 'قدرت', 'سرعت', 'هیجان'] }
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
  // تب ۲: عناصر
  // ============================================================
  const elementsList = document.getElementById('elementsList');
  let currentType = 'line';

  function renderElements(type) {
    elementsList.innerHTML = '';
    elements[type].forEach(el => {
      const card = document.createElement('div');
      card.className = 'element-card';
      card.innerHTML = `
        <div class="element-visual">${el.visual}</div>
        <div class="element-title">${el.title}</div>
        <div class="element-desc">${el.desc}</div>
      `;
      elementsList.appendChild(card);
    });
  }

  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentType = tab.dataset.type;
      renderElements(currentType);
    };
  });

  renderElements('line');

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
  // تب ۳: تمرین
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
  // تب ۴: آزمون
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
  // تب ۵: بازی
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
  document.querySelectorAll('.element-card, .option-btn, .motel-tab').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();