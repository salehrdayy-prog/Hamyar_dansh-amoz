// ============================================================
// درس ۶ نقاشی — طراحی خلاقانه
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده سبک‌ها
  // ============================================================
  const styles = {
    classic: [
      { visual: '🖼️', title: 'رئالیسم', desc: 'کشیدن واقعیت همان‌طور که هست. دقیق و پرجزئیات.', artists: 'مثال: داوینچی' },
      { visual: '🎨', title: 'امپرسیونیسم', desc: 'تأکید بر نور و رنگ. با ضربه‌های سریع قلم‌مو.', artists: 'مثال: مونه' },
      { visual: '🌟', title: 'باروک', desc: 'پر از تزئینات و شکوه. نور و سایه قوی.', artists: 'مثال: رامبراند' },
      { visual: '🏛️', title: 'کلاسیسیسم', desc: 'الهام از هنر یونان و روم باستان. ساده و متعادل.', artists: 'مثال: داوید' }
    ],
    modern: [
      { visual: '🔷', title: 'کوبیسم', desc: 'شکستن اشیا به شکل‌های هندسی. نمای همزمان از چند زاویه.', artists: 'مثال: پیکاسو' },
      { visual: '🌀', title: 'سورئالیسم', desc: 'دنیای رویا و تخیل. اشیای غیرمنتظره کنار هم.', artists: 'مثال: دالی' },
      { visual: '🎭', title: 'اکسپرسیونیسم', desc: 'بیان احساسات قوی. رنگ‌های تند و خطوط کج.', artists: 'مثال: مونک' },
      { visual: '🎪', title: 'پاپ آرت', desc: 'الهام از فرهنگ عامه، تبلیغات و کمیک. رنگ‌های روشن.', artists: 'مثال: وارهول' }
    ],
    cartoon: [
      { visual: '😄', title: 'کارتون', desc: 'شکل‌های اغراق‌شده. چشم‌های بزرگ، سر بزرگ.', artists: 'مثال: دیزنی' },
      { visual: '🇯🇵', title: 'انیمه', desc: 'سبک ژاپنی. موهای بلند، چشم‌های بزرگ براق.', artists: 'مثال: میازاکی' },
      { visual: '🎭', title: 'چیبی', desc: 'سبک ژاپنی کوچک و بامزه. سر بزرگ، بدن کوچک.', artists: 'سبک ژاپنی' },
      { visual: '🤡', title: 'کاریکاتور', desc: 'اغراق ویژگی‌های یک شخص برای طنز.', artists: 'سبک روزنامه‌ای' }
    ]
  };

  // ============================================================
  // داده ایده‌ها
  // ============================================================
  const ideas = [
    { title: 'دنیای درون یک قطره', desc: 'یک قطره باران را بزرگ کن و دنیایی کوچک داخلش بکش.' },
    { title: 'درختی از کتاب‌ها', desc: 'درختی که به جای برگ، کتاب دارد.' },
    { title: 'خانه‌ای روی ماهی', desc: 'خانه‌ای که روی پشت یک ماهی غول‌آسا ساخته شده.' },
    { title: 'کفشی که راه می‌رود', desc: 'کفشی با پا که خودش راه می‌رود.' },
    { title: 'شهر شناور', desc: 'شهری که روی ابرها شناور است.' },
    { title: 'گربه فضانورد', desc: 'گربه‌ای با لباس فضایی روی ماه.' },
    { title: 'چشم‌هایی که درخت هستند', desc: 'چشم‌های بزرگ که به جای مژه، درخت دارند.' },
    { title: 'پله‌ای به آسمان', desc: 'پله‌ای که از زمین به ستاره‌ها می‌رسد.' },
    { title: 'ساعت با بال', desc: 'ساعتی که بال دارد و پرواز می‌کند.' },
    { title: 'قلب از گل', desc: 'قلبی که از گل‌های ریز ساخته شده.' },
    { title: 'دنیای زیر دریا', desc: 'شهر زیر دریا با ماهی‌های رنگی.' },
    { title: 'پرنده با کلید', desc: 'پرنده‌ای که به جای دم، کلید دارد.' },
    { title: 'خورشید و ماه دوست', desc: 'خورشید و ماه که دست هم را گرفته‌اند.' },
    { title: 'کتابی که می‌روید', desc: 'کتابی که از آن گیاه سبز می‌شود.' },
    { title: 'پروانه با بال کتاب', desc: 'پروانه‌ای که بالش از صفحه کتاب ساخته شده.' },
    { title: 'کوهی از آبنبات', desc: 'کوهی که تمامش از آبنبات رنگی است.' },
    { title: 'آدم برفی در تابستان', desc: 'آدم برفی که زیر آفتاب ایستاده.' },
    { title: 'خونه‌ای از میوه', desc: 'خانه‌ای که از میوه‌های غول‌آسا ساخته شده.' },
    { title: 'رودخانه‌ای از رنگ', desc: 'رودخانه‌ای که به جای آب، رنگ‌های زیبا دارد.' },
    { title: 'دنیای داخل آینه', desc: 'دنیایی متفاوت که فقط در آینه دیده می‌شود.' }
  ];

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'خلاقیت چیست؟', correct: 'ترکیب تخیل و مهارت', pool: ['ترکیب تخیل و مهارت', 'کپی کردن', 'رنگ زدن', 'کشیدن دقیق'] },
    { q: 'خلاقیت مثل چه چیزی است؟', correct: 'عضله', pool: ['عضله', 'سنگ', 'کاغذ', 'خواب'] },
    { q: 'برای خلاق بودن، از چه چیزی استفاده می‌کنیم؟', correct: 'دنیای اطراف', pool: ['دنیای اطراف', 'فقط کتاب', 'فقط اینترنت', 'فقط تخیل'] },
    { q: 'طوفان فکری چیست؟', correct: 'نوشتن همه ایده‌ها حتی مسخره', pool: ['نوشتن همه ایده‌ها حتی مسخره', 'پاک کردن ایده‌ها', 'انتخاب یک ایده', 'کشیدن ایده'] },
    { q: 'کدام سبک هنری بر نور و رنگ تأکید دارد؟', correct: 'امپرسیونیسم', pool: ['امپرسیونیسم', 'کوبیسم', 'سورئالیسم', 'رئالیسم'] },
    { q: 'کدام سبک اشیا را به شکل هندسی می‌شکند؟', correct: 'کوبیسم', pool: ['کوبیسم', 'امپرسیونیسم', 'رئالیسم', 'باروک'] },
    { q: 'کدام سبک دنیای رویا و تخیل را نشان می‌دهد؟', correct: 'سورئالیسم', pool: ['سورئالیسم', 'کوبیسم', 'رئالیسم', 'امپرسیونیسم'] },
    { q: 'کدام سبک شبیه واقعیت است؟', correct: 'رئالیسم', pool: ['رئالیسم', 'کوبیسم', 'سورئالیسم', 'پاپ آرت'] },
    { q: 'سبک انیمه از کدام کشور است؟', correct: 'ژاپن', pool: ['ژاپن', 'چین', 'فرانسه', 'آمریکا'] },
    { q: 'در سبک چیبی چه ویژگی است؟', correct: 'سر بزرگ، بدن کوچک', pool: ['سر بزرگ، بدن کوچک', 'واقع‌گرایانه', 'بدون رنگ', 'فقط سیاه و سفید'] },
    { q: 'کاریکاتور چیست؟', correct: 'اغراق ویژگی‌های یک شخص برای طنز', pool: ['اغراق ویژگی‌های یک شخص برای طنز', 'کشیدن واقعی', 'کشیدن منظره', 'کشیدن اشیا'] },
    { q: 'پیکاسو در کدام سبک معروف است؟', correct: 'کوبیسم', pool: ['کوبیسم', 'سورئالیسم', 'امپرسیونیسم', 'رئالیسم'] },
    { q: 'دالی در کدام سبک معروف است؟', correct: 'سورئالیسم', pool: ['سورئالیسم', 'کوبیسم', 'رئالیسم', 'پاپ آرت'] },
    { q: 'پاپ آرت از چه چیزی الهام می‌گیرد؟', correct: 'فرهنگ عامه و تبلیغات', pool: ['فرهنگ عامه و تبلیغات', 'طبیعت', 'تاریخ', 'مذهب'] },
    { q: 'برای خلاقیت، اول چه کاری باید کرد؟', correct: 'نگاه کردن به اطراف', pool: ['نگاه کردن به اطراف', 'کشیدن سریع', 'رنگ زدن', 'خرید ابزار'] },
    { q: 'ترکیب دو شیء نامرتبط چه چیزی می‌سازد؟', correct: 'ایده خلاقانه', pool: ['ایده خلاقانه', 'سردرگمی', 'کپی', 'خطا'] },
    { q: 'سبک باروک چه ویژگی دارد؟', correct: 'پر از تزئینات و شکوه', pool: ['پر از تزئینات و شکوه', 'ساده و مینیمال', 'فقط خط', 'بدون رنگ'] },
    { q: 'خلاقیت با چه چیزی قوی‌تر می‌شود؟', correct: 'تمرین هر روز', pool: ['تمرین هر روز', 'یک بار تمرین', 'خرید کتاب', 'تماشای فیلم'] },
    { q: 'خطای ناخواسته در طراحی چه فایده‌ای دارد؟', correct: 'گاهی ایده جدید می‌دهد', pool: ['گاهی ایده جدید می‌دهد', 'طراحی را خراب می‌کند', 'فایده ندارد', 'باید پاک شود'] },
    { q: 'بهترین راه یادگیری طراحی خلاقانه چیست؟', correct: 'تمرین + نگاه به اطراف', pool: ['تمرین + نگاه به اطراف', 'فقط تخیل', 'فقط رنگ', 'فقط ابزار گران'] }
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
  // تب ۲: سبک‌ها
  // ============================================================
  const stylesList = document.getElementById('stylesList');
  let currentType = 'classic';

  function renderStyles(type) {
    stylesList.innerHTML = '';
    styles[type].forEach(s => {
      const card = document.createElement('div');
      card.className = 'style-card';
      card.innerHTML = `
        <div class="style-visual">${s.visual}</div>
        <div class="style-title">${s.title}</div>
        <div class="style-desc">${s.desc}</div>
        <div class="style-artists">${s.artists}</div>
      `;
      stylesList.appendChild(card);
    });
  }

  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentType = tab.dataset.type;
      renderStyles(currentType);
    };
  });

  renderStyles('classic');

  // ============================================================
  // تب ۳: ایده‌ها
  // ============================================================
  const ideasGrid = document.getElementById('ideasGrid');
  ideas.forEach((idea, idx) => {
    const card = document.createElement('div');
    card.className = 'idea-card';
    card.innerHTML = `
      <div class="idea-number">${idx + 1}</div>
      <div class="idea-content">
        <div class="idea-title">${idea.title}</div>
        <div class="idea-desc">${idea.desc}</div>
      </div>
    `;
    ideasGrid.appendChild(card);
  });

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
  document.querySelectorAll('.style-card, .idea-card, .option-btn, .motel-tab').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();