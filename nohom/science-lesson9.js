// ============================================================
// فصل ۹ علوم — ماشین‌ها
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده ماشین‌های دیگر
  // ============================================================
  const others = {
    pulley: [
      { icon: '🎡', title: 'قرقره ثابت', desc: 'فقط جهت نیرو را عوض می‌کند — صرفه‌جویی نیرو ندارد.' },
      { icon: '🎢', title: 'قرقره متحرک', desc: 'نیرو را نصف می‌کند، ولی مسافت دو برابر می‌شود.' },
      { icon: '⚙️', title: 'قرقره مرکب', desc: 'ترکیب چند قرقره — نیرو را به شدت کم می‌کند.' },
      { icon: '🏗️', title: 'بالابر', desc: 'استفاده از قرقره برای بلند کردن اجسام سنگین.' },
      { icon: '🛗', title: 'جرثقیل', desc: 'قرقره‌های قوی برای بلند کردن بارهای بزرگ.' },
      { icon: '⛵', title: 'قایق‌رانی', desc: 'قرقره در سیستم بادبان کشتی.' }
    ],
    inclined: [
      { icon: '🏔️', title: 'سطح شیب‌دار', desc: 'برای بالا بردن اجسام سنگین روی ارتفاع — نیروی کمتری لازم است.' },
      { icon: '🛣️', title: 'جاده کوهستانی', desc: 'جاده مارپیچ = سطح شیب‌دار طولانی‌تر = نیروی کمتر.' },
      { icon: '♿', title: 'رمپ', desc: 'برای رفتن ویلچر یا کالسکه به ارتفاع.' },
      { icon: '📐', title: 'رابطه', desc: 'هر چه شیب کمتر، نیرو کمتر ولی مسافت بیشتر.' },
      { icon: '⛰️', title: 'مثال', desc: 'بردن بشکه به کامیون با سطح شیب‌دار آسان‌تر از بلند کردن است.' },
      { icon: '🚚', title: 'بارگیری', desc: 'بارگیری کامیون با سطح شیب‌دار.' }
    ],
    wedge: [
      { icon: '🔪', title: 'گوه', desc: 'دو سطح شیب‌دار که پشت به پشت قرار گرفته‌اند.' },
      { icon: '🪓', title: 'تبر', desc: 'گوه برای شکافتن چوب.' },
      { icon: '✂️', title: 'چاقو', desc: 'لبه نازک = گوه برای بریدن.' },
      { icon: '🔩', title: 'پیچ', desc: 'سطح شیب‌دار مارپیچ روی استوانه.' },
      { icon: '🪛', title: 'پیچ گوشتی', desc: 'برای چرخاندن پیچ — نیرو را زیاد می‌کند.' },
      { icon: '🔧', title: 'مهره و پیچ', desc: 'محکم کردن دو جسم به هم.' }
    ],
    wheel: [
      { icon: '🛞', title: 'چرخ و محور', desc: 'چرخ بزرگ با محور کوچک — نیرو را کم می‌کند.' },
      { icon: '🚗', title: 'فرمان ماشین', desc: 'چرخ بزرگ برای چرخاندن محور فرمان.' },
      { icon: '🖐️', title: 'چرخ‌دستی', desc: 'برای باز و بسته کردن شیر یا در.' },
      { icon: '🔑', title: 'دستگیره', desc: 'چرخ بزرگ‌تر، نیروی کمتر.' },
      { icon: '🍾', title: 'دریچه بطری', desc: 'چرخاندن درپوش بطری.' },
      { icon: '⚙️', title: 'چرخ‌دنده', desc: 'دو چرخ با دندانه که با هم می‌چرخند.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'ماشین ساده چیست؟', correct: 'ابزاری که کار را آسان‌تر می‌کند', pool: ['ابزاری که کار را آسان‌تر می‌کند', 'ابزاری که کار را کم می‌کند', 'ابزاری که انرژی تولید می‌کند', 'ابزاری که جرم را کم می‌کند'] },
    { q: 'ماشین‌ها چه کاری انجام می‌دهند؟', correct: 'کار را آسان‌تر می‌کنند', pool: ['کار را آسان‌تر می‌کنند', 'کار را کم می‌کنند', 'انرژی تولید می‌کنند', 'جرم را کم می‌کنند'] },
    { q: 'اهرم حول چه چیزی می‌چرخد؟', correct: 'تکیه‌گاه', pool: ['تکیه‌گاه', 'نیروی محرک', 'نیروی مقاوم', 'بازو'] },
    { q: 'در اهرم نوع اول، چه چیزی در وسط قرار دارد؟', correct: 'تکیه‌گاه', pool: ['تکیه‌گاه', 'نیروی مقاوم', 'نیروی محرک', 'بار'] },
    { q: 'در اهرم نوع دوم، چه چیزی در وسط قرار دارد؟', correct: 'نیروی مقاوم', pool: ['نیروی مقاوم', 'تکیه‌گاه', 'نیروی محرک', 'بازو'] },
    { q: 'در اهرم نوع سوم، چه چیزی در وسط قرار دارد؟', correct: 'نیروی محرک', pool: ['نیروی محرک', 'تکیه‌گاه', 'نیروی مقاوم', 'بازو'] },
    { q: 'قیچی چه نوع اهرمی است؟', correct: 'نوع اول', pool: ['نوع اول', 'نوع دوم', 'نوع سوم', 'هیچکدام'] },
    { q: 'فرغون چه نوع اهرمی است؟', correct: 'نوع دوم', pool: ['نوع دوم', 'نوع اول', 'نوع سوم', 'هیچکدام'] },
    { q: 'چوب ماهیگیری چه نوع اهرمی است؟', correct: 'نوع سوم', pool: ['نوع سوم', 'نوع اول', 'نوع دوم', 'هیچکدام'] },
    { q: 'قرقره ثابت چه فایده‌ای دارد؟', correct: 'تغییر جهت نیرو', pool: ['تغییر جهت نیرو', 'صرفه‌جویی نیرو', 'افزایش سرعت', 'کاهش اصطکاک'] },
    { q: 'قرقره متحرک چه فایده‌ای دارد؟', correct: 'نصف کردن نیرو', pool: ['نصف کردن نیرو', 'تغییر جهت', 'افزایش سرعت', 'کاهش جرم'] },
    { q: 'چرا جاده کوهستانی مارپیچ است؟', correct: 'برای کاهش شیب و نیرو', pool: ['برای کاهش شیب و نیرو', 'برای زیبایی', 'برای سرعت', 'برای کوتاه کردن مسیر'] },
    { q: 'گوه چیست؟', correct: 'دو سطح شیب‌دار پشت به پشت', pool: ['دو سطح شیب‌دار پشت به پشت', 'یک سطح شیب‌دار', 'چرخ', 'اهرم'] },
    { q: 'تبر چه نوع ماشین ساده‌ای است؟', correct: 'گوه', pool: ['گوه', 'اهرم', 'قرقره', 'سطح شیب‌دار'] },
    { q: 'پیچ چه نوع ماشین ساده‌ای است؟', correct: 'سطح شیب‌دار مارپیچ', pool: ['سطح شیب‌دار مارپیچ', 'اهرم', 'قرقره', 'گوه'] },
    { q: 'فرمان ماشین چه نوع ماشینی است؟', correct: 'چرخ و محور', pool: ['چرخ و محور', 'اهرم', 'قرقره', 'گوه'] },
    { q: 'مزیت مکانیکی یعنی چه؟', correct: 'نسبت نیروی مقاوم به نیروی محرک', pool: ['نسبت نیروی مقاوم به نیروی محرک', 'نسبت سرعت', 'نسبت زمان', 'نسبت جرم'] },
    { q: 'بازده ماشین همیشه چقدر است؟', correct: 'کمتر از ۱۰۰٪', pool: ['کمتر از ۱۰۰٪', 'برابر ۱۰۰٪', 'بیشتر از ۱۰۰٪', 'صفر'] },
    { q: 'علت بازده کمتر از ۱۰۰٪ چیست؟', correct: 'اصطکاک', pool: ['اصطکاک', 'جرم', 'سرعت', 'دما'] },
    { q: 'قانون طلایی مکانیک چیست؟', correct: 'هر چه نیرو کم شود، مسافت بیشتر می‌شود', pool: ['هر چه نیرو کم شود، مسافت بیشتر می‌شود', 'نیرو و مسافت ثابتند', 'هر چه نیرو کم شود، مسافت کمتر می‌شود', 'هیچ رابطه‌ای ندارند'] },
    { q: 'در اهرم نوع دوم چه مزیتی وجود دارد؟', correct: 'همیشه صرفه‌جویی نیرو', pool: ['همیشه صرفه‌جویی نیرو', 'افزایش سرعت', 'تغییر جهت', 'کاهش اصطکاک'] },
    { q: 'در اهرم نوع سوم چه مزیتی وجود دارد؟', correct: 'افزایش سرعت و مسافت', pool: ['افزایش سرعت و مسافت', 'صرفه‌جویی نیرو', 'تغییر جهت', 'کاهش اصطکاک'] },
    { q: 'آچار پیچ گوشتی چه نوع ماشینی است؟', correct: 'چرخ و محور', pool: ['چرخ و محور', 'اهرم', 'قرقره', 'گوه'] },
    { q: 'کدام‌یک ماشین ساده نیست؟', correct: 'موتور ماشین', pool: ['موتور ماشین', 'اهرم', 'قرقره', 'گوه'] },
    { q: 'در اهرم، فاصله تکیه‌گاه تا نیرو چه نام دارد؟', correct: 'بازوی اهرم', pool: ['بازوی اهرم', 'طول اهرم', 'ارتفاع', 'قطر'] },
    { q: 'پیچ گوشتی چه کمکی می‌کند؟', correct: 'نیرو را زیاد می‌کند', pool: ['نیرو را زیاد می‌کند', 'نیرو را کم می‌کند', 'سرعت را کم می‌کند', 'جرم را کم می‌کند'] }
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
  // تب ۳: ماشین‌های دیگر
  // ============================================================
  const othersList = document.getElementById('othersList');
  let currentType = 'pulley';

  function renderOthers(type) {
    othersList.innerHTML = '';
    others[type].forEach(p => {
      const card = document.createElement('div');
      card.className = 'prop-card';
      card.innerHTML = `
        <div class="prop-icon">${p.icon}</div>
        <div class="prop-title">${p.title}</div>
        <div class="prop-desc">${p.desc}</div>
      `;
      othersList.appendChild(card);
    });
  }

  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentType = tab.dataset.type;
      renderOthers(currentType);
    };
  });

  renderOthers('pulley');

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
  document.querySelectorAll('.prop-card, .option-btn, .motel-tab, .lever-card, .part-card').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();