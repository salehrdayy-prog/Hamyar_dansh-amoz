// ============================================================
// فصل ۶ علوم — زمین‌ساخت ورقه‌ای
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده لایه‌های زمین
  // ============================================================
  const layers = [
    {
      icon: '🟫',
      title: 'پوسته (Crust)',
      desc: 'لایه نازک بیرونی زمین — ضخامت ۵ تا ۷۰ کیلومتر. از سنگ‌های سخت ساخته شده. قاره‌ها روی آن قرار دارند.'
    },
    {
      icon: '🔥',
      title: 'گوشته (Mantle)',
      desc: 'ضخیم‌ترین لایه — حدود ۲۹۰۰ کیلومتر. سنگ‌های نیمه‌مذاب به نام ماگما. جریان‌های همرفتی در آن ورقه‌ها را حرکت می‌دهد.'
    },
    {
      icon: '🌋',
      title: 'هسته بیرونی (Outer Core)',
      desc: 'از آهن و نیکل مذاب — دما حدود ۴۰۰۰-۵۰۰۰ درجه. جریان الکتریکی این لایه، میدان مغناطیسی زمین را می‌سازد.'
    },
    {
      icon: '⚛️',
      title: 'هسته داخلی (Inner Core)',
      desc: 'گوی جامد از آهن و نیکل — دما بیش از ۵۰۰۰ درجه. فشار بسیار زیاد آن را جامد نگه می‌دارد.'
    },
    {
      icon: '🧩',
      title: 'ورقه‌ها (Plates)',
      desc: 'پوسته زمین به قطعات بزرگ به نام ورقه تقسیم شده — حدود ۱۵ ورقه اصلی. روی گوشته نرم شناورند.'
    },
    {
      icon: '♨️',
      title: 'جریان همرفتی',
      desc: 'حرارت درون زمین باعث بالا آمدن ماگمای گرم و پایین رفتن ماگمای سرد می‌شود. این جریان، ورقه‌ها را حرکت می‌دهد.'
    }
  ];

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'زمین‌ساخت ورقه‌ای چیست؟', correct: 'نظریه حرکت ورقه‌های پوسته زمین', pool: ['نظریه حرکت ورقه‌های پوسته زمین', 'نظریه درباره ستاره‌ها', 'نظریه درباره آب', 'نظریه درباره هوا'] },
    { q: 'پوسته زمین از چه چیزی ساخته شده؟', correct: 'سنگ', pool: ['سنگ', 'گاز', 'مایع', 'فلز مذاب'] },
    { q: 'ضخیم‌ترین لایه زمین چیست؟', correct: 'گوشته', pool: ['گوشته', 'پوسته', 'هسته بیرونی', 'هسته داخلی'] },
    { q: 'هسته زمین از چه موادی است؟', correct: 'آهن و نیکل', pool: ['آهن و نیکل', 'سنگ', 'آب', 'گاز'] },
    { q: 'دما در مرکز زمین چقدر است؟', correct: 'بیش از ۵۰۰۰ درجه', pool: ['بیش از ۵۰۰۰ درجه', 'حدود ۱۰۰ درجه', 'حدود ۱۰۰۰ درجه', 'حدود صفر'] },
    { q: 'ورقه‌های زمین روی چه چیزی حرکت می‌کنند؟', correct: 'گوشته نیمه‌مذاب', pool: ['گوشته نیمه‌مذاب', 'هسته', 'پوسته', 'جو'] },
    { q: 'علت حرکت ورقه‌ها چیست؟', correct: 'جریان همرفتی در گوشته', pool: ['جریان همرفتی در گوشته', 'وزش باد', 'جزر و مد', 'نیروی خورشید'] },
    { q: 'حدود چند ورقه اصلی داریم؟', correct: '۱۵', pool: ['۱۵', '۵', '۵۰', '۱۰۰'] },
    { q: 'ورقه‌های واگرا چه حرکتی دارند؟', correct: 'از هم دور می‌شوند', pool: ['از هم دور می‌شوند', 'به هم نزدیک می‌شوند', 'کنار هم می‌لغزند', 'ساکن‌اند'] },
    { q: 'ورقه‌های همگرا چه حرکتی دارند؟', correct: 'به هم نزدیک می‌شوند', pool: ['به هم نزدیک می‌شوند', 'از هم دور می‌شوند', 'کنار هم می‌لغزند', 'ساکن‌اند'] },
    { q: 'ورقه‌های امتدادلغز چه حرکتی دارند؟', correct: 'کنار هم می‌لغزند', pool: ['کنار هم می‌لغزند', 'به هم نزدیک می‌شوند', 'از هم دور می‌شوند', 'ساکن‌اند'] },
    { q: 'کوه‌های هیمالیا چگونه ایجاد شده‌اند؟', correct: 'برخورد دو ورقه قاره‌ای', pool: ['برخورد دو ورقه قاره‌ای', 'حرکت واگرا', 'زمین‌لرزه', 'آتشفشان'] },
    { q: 'ماگما چیست؟', correct: 'سنگ مذاب درون زمین', pool: ['سنگ مذاب درون زمین', 'آب داغ', 'گاز', 'سنگ سخت'] },
    { q: 'گدازه چیست؟', correct: 'ماگمای خارج‌شده روی سطح', pool: ['ماگمای خارج‌شده روی سطح', 'سنگ رسوبی', 'آب داغ', 'گاز'] },
    { q: 'زمین‌لرزه به چه دلیل رخ می‌دهد؟', correct: 'آزاد شدن انرژی از گسل', pool: ['آزاد شدن انرژی از گسل', 'بارش باران', 'وزش باد', 'حرکت ماه'] },
    { q: 'دستگاه اندازه‌گیری زلزله چیست؟', correct: 'ریشتر', pool: ['ریشتر', 'دماسنج', 'فشارسنج', 'ترازو'] },
    { q: 'زلزله ۸ ریشتر چه اثری دارد؟', correct: 'تخریب گسترده', pool: ['تخریب گسترده', 'حس نمی‌شود', 'خسارت کم', 'فقط احساس می‌شود'] },
    { q: 'سونامی چگونه ایجاد می‌شود؟', correct: 'زمین‌لرزه زیر دریا', pool: ['زمین‌لرزه زیر دریا', 'وزش باد', 'جزر و مد', 'آتشفشان'] },
    { q: 'سرعت سونامی چقدر می‌تواند باشد؟', correct: 'تا ۸۰۰ کیلومتر بر ساعت', pool: ['تا ۸۰۰ کیلومتر بر ساعت', 'حدود ۵ کیلومتر بر ساعت', 'حدود ۵۰ کیلومتر بر ساعت', 'حدود ۱۰۰ کیلومتر بر ساعت'] },
    { q: 'سرعت حرکت ورقه‌ها چقدر است؟', correct: '۱ تا ۱۰ سانتی‌متر در سال', pool: ['۱ تا ۱۰ سانتی‌متر در سال', '۱ متر در سال', '۱ کیلومتر در سال', '۱۰ متر در سال'] },
    { q: 'میدان مغناطیسی زمین از کجا می‌آید؟', correct: 'از هسته بیرونی مذاب', pool: ['از هسته بیرونی مذاب', 'از پوسته', 'از گوشته', 'از خورشید'] },
    { q: 'پشته میان‌اقیانوسی نمونه کدام حرکت است؟', correct: 'واگرا', pool: ['واگرا', 'همگرا', 'امتدادلغز', 'ساکن'] },
    { q: 'گسل سان‌آندریاس نمونه کدام حرکت است؟', correct: 'امتدادلغز', pool: ['امتدادلغز', 'واگرا', 'همگرا', 'ساکن'] },
    { q: 'کدام ورقه در ایران وجود دارد؟', correct: 'ورقه ایران', pool: ['ورقه ایران', 'ورقه آفریقا', 'ورقه استرالیا', 'ورقه آمریکای شمالی'] },
    { q: 'آتشفشان چگونه ایجاد می‌شود؟', correct: 'خروج ماگما از درون زمین', pool: ['خروج ماگما از درون زمین', 'برخورد شهاب‌سنگ', 'بارش باران', 'حرکت باد'] }
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
  // تب ۲: لایه‌ها
  // ============================================================
  const layersList = document.getElementById('layersList');

  function renderLayers() {
    layersList.innerHTML = '';
    layers.forEach(l => {
      const card = document.createElement('div');
      card.className = 'prop-card';
      card.innerHTML = `
        <div class="prop-icon">${l.icon}</div>
        <div class="prop-title">${l.title}</div>
        <div class="prop-desc">${l.desc}</div>
      `;
      layersList.appendChild(card);
    });
  }

  renderLayers();

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
  document.querySelectorAll('.prop-card, .option-btn, .plate-card, .event-card').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();