// ============================================================
// فصل ۸ علوم — فشار و آثار آن
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده انواع فشار
  // ============================================================
  const types = {
    solid: [
      { icon: '🧱', title: 'فشار جامدات', desc: 'از وزن جسم روی سطح ایجاد می‌شود. نیرو عمود بر سطح است.' },
      { icon: '📐', title: 'فرمول', desc: 'P = F / A — فشار = نیرو ÷ سطح' },
      { icon: '⚖️', title: 'رابطه با نیرو', desc: 'نیرو بیشتر → فشار بیشتر (مستقیم)' },
      { icon: '🎯', title: 'رابطه با سطح', desc: 'سطح بیشتر → فشار کمتر (وارون)' },
      { icon: '🔪', title: 'مثال: چاقو', desc: 'لبه نازک، سطح کم → فشار زیاد → برش راحت.' },
      { icon: '🏂', title: 'مثال: اسکی', desc: 'تخته پهن، سطح زیاد → فشار کم → فرو نرفتن در برف.' }
    ],
    liquid: [
      { icon: '💧', title: 'فشار مایعات', desc: 'مایعات به همه جهات فشار وارد می‌کنند — نه فقط عمود.' },
      { icon: '📊', title: 'فرمول', desc: 'P = ρ × g × h — فشار = چگالی × شتاب گرانش × عمق' },
      { icon: '⬇️', title: 'با عمق', desc: 'هر چه عمق بیشتر، فشار بیشتر. عمق دو برابر → فشار دو برابر.' },
      { icon: '🎈', title: 'با چگالی', desc: 'مایع سنگین‌تر (چگالی بیشتر) → فشار بیشتر.' },
      { icon: '🌊', title: 'مثال: دریا', desc: 'فشار آب در عمق ۱۰ متر، حدود ۲ برابر سطح است.' },
      { icon: '🚰', title: 'مثال: لوله', desc: 'آب در لوله‌های باریک، فشار بیشتری دارد.' }
    ],
    gas: [
      { icon: '💨', title: 'فشار گازها', desc: 'از برخورد مولکول‌های گاز با دیواره ظرف ایجاد می‌شود.' },
      { icon: '🌡️', title: 'رابطه با دما', desc: 'دمای بیشتر → سرعت مولکول‌ها بیشتر → فشار بیشتر.' },
      { icon: '📦', title: 'رابطه با حجم', desc: 'حجم کمتر → مولکول‌ها فشرده‌تر → فشار بیشتر.' },
      { icon: '🏔️', title: 'با ارتفاع', desc: 'هر چه بالاتر، هوا رقیق‌تر و فشار کمتر.' },
      { icon: '🌍', title: 'فشار جو', desc: 'در سطح دریا حدود ۱۰۱۳۲۵ Pa (یک اتمسفر).' },
      { icon: '🫁', title: 'تنفس', desc: 'در کوهستان، فشار کم → تنفس سخت‌تر.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'فشار چیست؟', correct: 'نیروی وارد بر واحد سطح', pool: ['نیروی وارد بر واحد سطح', 'نیرو در زمان', 'سطح در حجم', 'جرم در حجم'] },
    { q: 'فرمول فشار چیست؟', correct: 'P = F / A', pool: ['P = F / A', 'P = A / F', 'P = F × A', 'P = F + A'] },
    { q: 'یکای فشار در SI چیست؟', correct: 'پاسکال', pool: ['پاسکال', 'نیوتن', 'متر مربع', 'کیلوگرم'] },
    { q: 'فشار با نیرو چه رابطه‌ای دارد؟', correct: 'مستقیم', pool: ['مستقیم', 'وارون', 'بی‌رابطه', 'لگاریتمی'] },
    { q: 'فشار با سطح چه رابطه‌ای دارد؟', correct: 'وارون', pool: ['وارون', 'مستقیم', 'بی‌رابطه', 'لگاریتمی'] },
    { q: 'اگر سطح دو برابر شود و نیرو ثابت بماند، فشار چه می‌شود؟', correct: 'نصف', pool: ['نصف', 'دو برابر', 'ثابت', 'چهار برابر'] },
    { q: 'اگر نیرو دو برابر شود و سطح ثابت بماند، فشار چه می‌شود؟', correct: 'دو برابر', pool: ['دو برابر', 'نصف', 'ثابت', 'چهار برابر'] },
    { q: 'چاقو چرا می‌برد؟', correct: 'سطح کم → فشار زیاد', pool: ['سطح کم → فشار زیاد', 'سطح زیاد → فشار کم', 'نیرو زیاد', 'گرم است'] },
    { q: 'اسکی چرا در برف فرو نمی‌رود؟', correct: 'سطح پهن → فشار کم', pool: ['سطح پهن → فشار کم', 'سطح کم → فشار زیاد', 'سبک است', 'سرد است'] },
    { q: 'فشار مایعات به چه چیزی بستگی دارد؟', correct: 'چگالی و عمق', pool: ['چگالی و عمق', 'رنگ', 'دما', 'حجم'] },
    { q: 'با افزایش عمق مایع، فشار چه می‌شود؟', correct: 'زیاد می‌شود', pool: ['زیاد می‌شود', 'کم می‌شود', 'ثابت می‌ماند', 'صفر می‌شود'] },
    { q: 'فشار مایعات در چه جهاتی وارد می‌شود؟', correct: 'همه جهات', pool: ['همه جهات', 'فقط پایین', 'فقط بالا', 'فقط کنار'] },
    { q: 'فشار گازها از چه چیزی ناشی می‌شود؟', correct: 'برخورد مولکول‌ها با دیواره', pool: ['برخورد مولکول‌ها با دیواره', 'وزن گاز', 'رنگ گاز', 'جنس گاز'] },
    { q: 'با افزایش دما، فشار گاز چه می‌شود؟', correct: 'زیاد می‌شود', pool: ['زیاد می‌شود', 'کم می‌شود', 'ثابت می‌ماند', 'صفر می‌شود'] },
    { q: 'فشار هوا در قله کوه چقدر است؟', correct: 'کمتر از سطح دریا', pool: ['کمتر از سطح دریا', 'بیشتر از سطح دریا', 'برابر سطح دریا', 'صفر'] },
    { q: 'قانون پاسکال چه می‌گوید؟', correct: 'فشار در مایع محبوس به همه نقاط منتقل می‌شود', pool: ['فشار در مایع محبوس به همه نقاط منتقل می‌شود', 'فشار با سطح متناسب است', 'فشار با عمق کم می‌شود', 'فشار ثابت است'] },
    { q: 'جک هیدرولیک بر اساس کدام قانون کار می‌کند؟', correct: 'قانون پاسکال', pool: ['قانون پاسکال', 'قانون نیوتن', 'قانون ارشمیدس', 'قانون برنولی'] },
    { q: 'یکای فشار در SI به نام چه کسی است؟', correct: 'بلز پاسکال', pool: ['بلز پاسکال', 'اسحاق نیوتن', 'آلبرت اینشتین', 'گالیله'] },
    { q: '۱ کیلوپاسکال چند پاسکال است؟', correct: '۱۰۰۰', pool: ['۱۰۰۰', '۱۰۰', '۱۰', '۱۰۰۰۰'] },
    { q: 'فشار جو در سطح دریا چقدر است؟', correct: 'حدود ۱۰۰۰۰۰ پاسکال', pool: ['حدود ۱۰۰۰۰۰ پاسکال', 'حدود ۱۰۰۰ پاسکال', 'حدود ۱۰ پاسکال', 'حدود یک میلیون پاسکال'] },
    { q: 'اگر نیروی ۱۰۰ N بر سطح ۲ m² وارد شود، فشار چقدر است؟', correct: '۵۰ Pa', pool: ['۵۰ Pa', '۲۰۰ Pa', '۱۰۲ Pa', '۹۸ Pa'] },
    { q: 'اگر فشار ۲۰۰ Pa و سطح ۰.۵ m² باشد، نیرو چقدر است؟', correct: '۱۰۰ N', pool: ['۱۰۰ N', '۴۰۰ N', '۲۰۰.۵ N', '۱۹۹.۵ N'] },
    { q: 'برای افزایش فشار چه باید کرد؟', correct: 'سطح را کم کنیم', pool: ['سطح را کم کنیم', 'سطح را زیاد کنیم', 'نیرو را کم کنیم', 'فشار ثابت است'] },
    { q: 'برای کاهش فشار چه باید کرد؟', correct: 'سطح را زیاد کنیم', pool: ['سطح را زیاد کنیم', 'سطح را کم کنیم', 'نیرو را زیاد کنیم', 'فشار ثابت است'] },
    { q: 'کدام‌یک کاربرد قانون پاسکال نیست؟', correct: 'سوزن', pool: ['سوزن', 'جک هیدرولیک', 'ترمز ماشین', 'بالابر هیدرولیک'] },
    { q: 'در عمق ۱۰ متری آب، فشار نسبت به سطح چند برابر است؟', correct: 'حدود ۲ برابر', pool: ['حدود ۲ برابر', 'برابر', 'نصف', '۱۰ برابر'] }
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
  // تب ۲: انواع فشار
  // ============================================================
  const typesList = document.getElementById('typesList');
  let currentType = 'solid';

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

  renderTypes('solid');

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
  document.querySelectorAll('.prop-card, .option-btn, .motel-tab, .app-card, .pascal-law').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();