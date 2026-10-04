// ============================================================
// فصل ۱۲ علوم — دنیای گیاهان
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده انواع گیاهان
  // ============================================================
  const types = {
    moss: [
      { icon: '🌱', title: 'خزه', desc: 'ساده‌ترین گیاه خشکی — بدون ریشه، ساقه و برگ واقعی.' },
      { icon: '💧', title: 'محل زندگی', desc: 'در جاهای مرطوب و سایه — کنار سنگ و درخت.' },
      { icon: '📏', title: 'اندازه', desc: 'معمولاً بسیار کوچک — چند سانتی‌متر.' },
      { icon: '💦', title: 'جذب آب', desc: 'از سطح تمام بدنش آب جذب می‌کند.' },
      { icon: '🌿', title: 'تکثیر', desc: 'با هاگ تکثیر می‌شود.' },
      { icon: '🌍', title: 'نقش', desc: 'جلوگیری از فرسایش خاک و نگه‌داشتن رطوبت.' }
    ],
    fern: [
      { icon: '🌿', title: 'سرخس', desc: 'گیاه آوندی بدون دانه — با هاگ تکثیر می‌شود.' },
      { icon: '🍃', title: 'برگ', desc: 'برگ‌های بزرگ و شانه‌ای شکل.' },
      { icon: '🌳', title: 'اندازه', desc: 'از چند سانتی‌متر تا چند متر.' },
      { icon: '🕰️', title: 'قدمت', desc: 'حدود ۳۰۰ میلیون سال قدمت دارند.' },
      { icon: '🌱', title: 'آوند', desc: 'آوند دارند — آب و مواد را جابه‌جا می‌کنند.' },
      { icon: '🌡️', title: 'محل', desc: 'در جنگل‌های مرطوب و گرم.' }
    ],
    gymno: [
      { icon: '🌲', title: 'کاج', desc: 'درخت همیشه‌سبز با برگ‌های سوزنی.' },
      { icon: '🎄', title: 'صنوبر', desc: 'درخت مخروطی با شکل هرمی.' },
      { icon: '🌰', title: 'دانه', desc: 'دانه‌ها در مخروط قرار دارند — بدون میوه.' },
      { icon: '🍃', title: 'برگ', desc: 'سوزنی یا پولکی شکل — مقاوم به سرما.' },
      { icon: '🌍', title: 'پراکندگی', desc: 'در مناطق سرد و کوهستانی.' },
      { icon: '📅', title: 'رشد', desc: 'کند رشد می‌کنند ولی عمر طولانی دارند.' }
    ],
    angio: [
      { icon: '🌸', title: 'نهاندانگان', desc: 'گیاهان گل‌دار — متنوع‌ترین گروه گیاهان.' },
      { icon: '🌹', title: 'گل', desc: 'اندام تولیدمثل — رنگ‌های زیبا برای جذب حشرات.' },
      { icon: '🍎', title: 'میوه', desc: 'دانه‌ها داخل میوه قرار دارند.' },
      { icon: '🌳', title: 'درختان', desc: 'مثل سیب، گیلاس، بلوط.' },
      { icon: '🌾', title: 'گیاهان علفی', desc: 'مثل گندم، برنج، ذرت.' },
      { icon: '💐', title: 'تنوع', desc: 'بیش از ۳۰۰ هزار گونه نهاندانگان وجود دارد.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'گیاهان چه نقشی در اکوسیستم دارند؟', correct: 'تولیدکننده', pool: ['تولیدکننده', 'مصرف‌کننده', 'تجزیه‌کننده', 'بی‌اثر'] },
    { q: 'فتوسنتز چیست؟', correct: 'ساختن غذا با نور خورشید', pool: ['ساختن غذا با نور خورشید', 'تنفس گیاه', 'جذب آب', 'رشد گیاه'] },
    { q: 'در فتوسنتز چه گازی مصرف می‌شود؟', correct: 'دی‌اکسید کربن', pool: ['دی‌اکسید کربن', 'اکسیژن', 'نیتروژن', 'هیدروژن'] },
    { q: 'در فتوسنتز چه گازی تولید می‌شود؟', correct: 'اکسیژن', pool: ['اکسیژن', 'دی‌اکسید کربن', 'نیتروژن', 'هلیم'] },
    { q: 'محل فتوسنتز کجاست؟', correct: 'کلروپلاست', pool: ['کلروپلاست', 'هسته', 'میتوکندری', 'واکوئل'] },
    { q: 'رنگدانه سبز گیاه چه نام دارد؟', correct: 'کلروفیل', pool: ['کلروفیل', 'کاروتن', 'هموگلوبین', 'ملانین'] },
    { q: 'محل ورود و خروج گازها در برگ چیست؟', correct: 'روزنه', pool: ['روزنه', 'دُمبرگ', 'پهنک', 'آوند'] },
    { q: 'ریشه گیاه چه کاری می‌کند؟', correct: 'جذب آب و مواد معدنی', pool: ['جذب آب و مواد معدنی', 'فتوسنتز', 'تولید گل', 'حمل غذا'] },
    { q: 'ساقه چه کاری می‌کند؟', correct: 'حمل آب و مواد بین ریشه و برگ', pool: ['حمل آب و مواد بین ریشه و برگ', 'فتوسنتز', 'جذب آب', 'تولید میوه'] },
    { q: 'برگ چه کاری می‌کند؟', correct: 'فتوسنتز', pool: ['فتوسنتز', 'جذب آب', 'حمل مواد', 'تولید ریشه'] },
    { q: 'گل چه کاری می‌کند؟', correct: 'تولیدمثل گیاه', pool: ['تولیدمثل گیاه', 'فتوسنتز', 'جذب آب', 'حمل مواد'] },
    { q: 'ساده‌ترین گیاهان خشکی کدامند؟', correct: 'خزه‌ها', pool: ['خزه‌ها', 'سرخس‌ها', 'کاج', 'گل'] },
    { q: 'سرخس‌ها با چه چیزی تکثیر می‌شوند؟', correct: 'هاگ', pool: ['هاگ', 'دانه', 'گل', 'میوه'] },
    { q: 'بازدانگان دانه‌هایشان کجاست؟', correct: 'در مخروط', pool: ['در مخروط', 'در میوه', 'در گل', 'در برگ'] },
    { q: 'کدام گروه گیاهان گل دارند؟', correct: 'نهاندانگان', pool: ['نهاندانگان', 'بازدانگان', 'سرخس‌ها', 'خزه‌ها'] },
    { q: 'کدام گیاه برگ سوزنی دارد؟', correct: 'کاج', pool: ['کاج', 'سرخس', 'خزه', 'گل رز'] },
    { q: 'گیاهان شب‌ها چه می‌کنند؟', correct: 'تنفس می‌کنند و CO₂ آزاد می‌کنند', pool: ['تنفس می‌کنند و CO₂ آزاد می‌کنند', 'فتوسنتز می‌کنند', 'استراحت می‌کنند', 'می‌خوابند'] },
    { q: 'مواد اولیه فتوسنتز چیست؟', correct: 'آب، CO₂، نور خورشید', pool: ['آب، CO₂، نور خورشید', 'اکسیژن، آب', 'گلوکز، O₂', 'گلوکز، آب'] },
    { q: 'محصولات فتوسنتز چیست؟', correct: 'گلوکز و اکسیژن', pool: ['گلوکز و اکسیژن', 'آب و CO₂', 'گلوکز و آب', 'پروتئین و O₂'] },
    { q: 'کلروپلاست کجاست؟', correct: 'در سلول‌های گیاهی', pool: ['در سلول‌های گیاهی', 'در سلول‌های جانوری', 'در ریشه', 'در خاک'] },
    { q: 'دُمبرگ چه کاری می‌کند؟', correct: 'برگ را به ساقه وصل می‌کند', pool: ['برگ را به ساقه وصل می‌کند', 'فتوسنتز', 'جذب آب', 'حمل غذا'] },
    { q: 'پهنک کدام قسمت برگ است؟', correct: 'سطح پهن و سبز برگ', pool: ['سطح پهن و سبز برگ', 'دُمبرگ', 'آوند', 'ریشه'] },
    { q: 'کدام گیاه گل ندارد؟', correct: 'کاج', pool: ['کاج', 'گل رز', 'گیلاس', 'سیب'] },
    { q: 'بیش از چند گونه نهاندانگان وجود دارد؟', correct: '۳۰۰ هزار', pool: ['۳۰۰ هزار', '۳۰۰', '۳ میلیون', '۳۰ هزار'] },
    { q: 'اهمیت اصلی گیاهان برای ما چیست؟', correct: 'تولید اکسیژن و غذا', pool: ['تولید اکسیژن و غذا', 'زیبایی', 'چوب', 'دارو'] },
    { q: 'چرا گیاهان در جاهای مرطوب بیشتر رشد می‌کنند؟', correct: 'آب بیشتری برای فتوسنتز دارند', pool: ['آب بیشتری برای فتوسنتز دارند', 'نور بیشتر است', 'سردتر است', 'خاک بهتر است'] }
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
  // تب ۳: انواع گیاهان
  // ============================================================
  const typesList = document.getElementById('typesList');
  let currentType = 'moss';

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

  renderTypes('moss');

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
  document.querySelectorAll('.prop-card, .option-btn, .motel-tab, .plant-part, .leaf-item, .photo-card').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();