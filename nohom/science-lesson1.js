// ============================================================
// فصل ۱ علوم — مواد و نقش آنها
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده خواص مواد
  // ============================================================
  const properties = {
    physical: [
      { icon: '🎨', title: 'رنگ', desc: 'ظاهر رنگی ماده — مثلاً مس قرمز و طلا زرد است.' },
      { icon: '👃', title: 'بو', desc: 'بوی ماده — مثلاً نفت بوی تند دارد.' },
      { icon: '🍬', title: 'مزه', desc: 'طعم ماده — شیرین، شور، ترش، تلخ.' },
      { icon: '⚖️', title: 'چگالی', desc: 'جرم در واحد حجم. آهن چگالی بالاتری از چوب دارد.' },
      { icon: '💎', title: 'سختی', desc: 'مقاومت در برابر خراش. الماس سخت‌ترین ماده است.' },
      { icon: '🌡️', title: 'نقطه ذوب', desc: 'دمایی که جامد به مایع تبدیل می‌شود. یخ در ۰ درجه ذوب می‌شود.' },
      { icon: '💨', title: 'نقطه جوش', desc: 'دمایی که مایع به گاز تبدیل می‌شود. آب در ۱۰۰ درجه می‌جوشد.' },
      { icon: '⚡', title: 'رسانایی', desc: 'توانایی انتقال برق یا گرما. مس رسانای خوب برق است.' }
    ],
    chemical: [
      { icon: '🔥', title: 'اشتعال', desc: 'توانایی سوختن در برابر آتش. کاغذ می‌سوزد.' },
      { icon: '⚙️', title: 'زنگ‌زدن', desc: 'ترکیب آهن با اکسیژن و رطوبت. آهن زنگ می‌زند.' },
      { icon: '⚗️', title: 'واکنش‌پذیری', desc: 'تمایل ماده برای واکنش با مواد دیگر.' },
      { icon: '💥', title: 'ترکیب با اکسیژن', desc: 'مثلاً سدیم به شدت با اکسیژن واکنش می‌دهد.' }
    ],
    mechanical: [
      { icon: '💪', title: 'استحکام', desc: 'توانایی تحمل نیرو بدون شکستن. فولاد مقاوم است.' },
      { icon: '🧵', title: 'کشش', desc: 'توانایی کشیده شدن. لاستیک کشش دارد.' },
      { icon: '🔨', title: 'چکش‌خواری', desc: 'توانایی شکل گرفتن با چکش. طلا چکش‌خوار است.' },
      { icon: '🌊', title: 'شکل‌پذیری', desc: 'توانایی تبدیل به ورق یا سیم.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'ماده چیست؟', correct: 'چیزی که جرم دارد و فضا اشغال می‌کند', pool: ['چیزی که جرم دارد و فضا اشغال می‌کند', 'فقط جامدها', 'فقط مایع‌ها', 'فقط گازها'] },
    { q: 'کدام حالت ماده شکل ثابت دارد؟', correct: 'جامد', pool: ['جامد', 'مایع', 'گاز', 'پلاسما'] },
    { q: 'کدام حالت ماده حجم ثابت و شکل متغیر دارد؟', correct: 'مایع', pool: ['مایع', 'جامد', 'گاز', 'پلاسما'] },
    { q: 'کدام حالت ماده نه شکل و نه حجم ثابت دارد؟', correct: 'گاز', pool: ['گاز', 'جامد', 'مایع', 'پلاسما'] },
    { q: 'چگالی یعنی چه؟', correct: 'جرم در واحد حجم', pool: ['جرم در واحد حجم', 'وزن ماده', 'حجم ماده', 'رنگ ماده'] },
    { q: 'سخت‌ترین ماده طبیعی چیست؟', correct: 'الماس', pool: ['الماس', 'آهن', 'طلا', 'سنگ'] },
    { q: 'آب در چه دمایی می‌جوشد؟', correct: '۱۰۰ درجه', pool: ['۱۰۰ درجه', '۰ درجه', '۵۰ درجه', '۲۰۰ درجه'] },
    { q: 'یخ در چه دمایی ذوب می‌شود؟', correct: '۰ درجه', pool: ['۰ درجه', '۱۰۰ درجه', '۵۰ درجه', '-۱۰ درجه'] },
    { q: 'کدام ماده رسانای خوب برق است؟', correct: 'مس', pool: ['مس', 'چوب', 'شیشه', 'پلاستیک'] },
    { q: 'زنگ‌زدن آهن چه نوع تغییری است؟', correct: 'شیمیایی', pool: ['شیمیایی', 'فیزیکی', 'مکانیکی', 'هیچکدام'] },
    { q: 'ذوب یخ چه نوع تغییری است؟', correct: 'فیزیکی', pool: ['فیزیکی', 'شیمیایی', 'مکانیکی', 'هیچکدام'] },
    { q: 'سوختن چوب چه نوع تغییری است؟', correct: 'شیمیایی', pool: ['شیمیایی', 'فیزیکی', 'مکانیکی', 'هیچکدام'] },
    { q: 'پاره کردن کاغذ چه نوع تغییری است؟', correct: 'فیزیکی', pool: ['فیزیکی', 'شیمیایی', 'مکانیکی', 'هیچکدام'] },
    { q: 'در تغییر شیمیایی چه اتفاقی می‌افتد؟', correct: 'ماده جدید ساخته می‌شود', pool: ['ماده جدید ساخته می‌شود', 'فقط شکل عوض می‌شود', 'رنگ عوض می‌شود', 'هیچ تغییری نیست'] },
    { q: 'کدام ماده در ساخت هواپیما استفاده می‌شود؟', correct: 'آلومینیوم', pool: ['آلومینیوم', 'آهن', 'سرب', 'طلا'] },
    { q: 'کدام ماده در سیم‌کشی برق استفاده می‌شود؟', correct: 'مس', pool: ['مس', 'چوب', 'شیشه', 'کاغذ'] },
    { q: 'خاصیت چکش‌خواری یعنی چه؟', correct: 'توانایی شکل گرفتن با چکش', pool: ['توانایی شکل گرفتن با چکش', 'شکستن با چکش', 'سخت بودن', 'نرم بودن'] },
    { q: 'کدام‌یک خاصیت فیزیکی نیست؟', correct: 'زنگ‌زدن', pool: ['زنگ‌زدن', 'رنگ', 'بو', 'چگالی'] },
    { q: 'کدام‌یک خاصیت شیمیایی است؟', correct: 'اشتعال', pool: ['اشتعال', 'رنگ', 'چگالی', 'سختی'] },
    { q: 'کدام‌یک از مواد زیر عایق برق است؟', correct: 'پلاستیک', pool: ['پلاستیک', 'مس', 'آهن', 'آلومینیوم'] }
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
  // تب ۲: خواص
  // ============================================================
  const propsList = document.getElementById('propsList');
  let currentType = 'physical';

  function renderProps(type) {
    propsList.innerHTML = '';
    properties[type].forEach(p => {
      const card = document.createElement('div');
      card.className = 'prop-card';
      card.innerHTML = `
        <div class="prop-icon">${p.icon}</div>
        <div class="prop-title">${p.title}</div>
        <div class="prop-desc">${p.desc}</div>
      `;
      propsList.appendChild(card);
    });
  }

  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentType = tab.dataset.type;
      renderProps(currentType);
    };
  });

  renderProps('physical');

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
  document.querySelectorAll('.prop-card, .option-btn, .motel-tab, .change-card').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();