// ============================================================
// فصل ۸ ریاضی — آمار و احتمال
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده آمار
  // ============================================================
  const stats = {
    central: [
      { icon: '📊', title: 'میانگین', desc: 'مجموع داده‌ها ÷ تعداد داده‌ها' },
      { icon: '🎯', title: 'مثال میانگین', desc: '(5+8+10+12) ÷ 4 = 35 ÷ 4 = 8.75' },
      { icon: '📌', title: 'میانه', desc: 'داده وسط بعد از مرتب کردن' },
      { icon: '🎯', title: 'مثال میانه (فرد)', desc: 'داده: 3، 5، 8، 10، 12 → میانه = 8' },
      { icon: '🎯', title: 'مثال میانه (زوج)', desc: 'داده: 3، 5، 8، 10 → (5+8)/2 = 6.5' },
      { icon: '📌', title: 'مد', desc: 'داده با بیشترین تکرار' }
    ],
    spread: [
      { icon: '📏', title: 'دامنه', desc: 'بزرگ‌ترین داده − کوچک‌ترین داده' },
      { icon: '🎯', title: 'مثال دامنه', desc: 'داده: 5، 8، 12، 15 → دامنه = 15−5 = 10' },
      { icon: '📊', title: 'واریانس', desc: 'میانگین مربع فاصله‌ها از میانگین' },
      { icon: '📐', title: 'انحراف معیار', desc: 'جذر واریانس — پراکندگی داده‌ها' },
      { icon: '💡', title: 'نکته', desc: 'هرچه پراکندگی کمتر، داده‌ها متمرکزتر.' },
      { icon: '🎓', title: 'کاربرد', desc: 'تحلیل نمرات، داده‌های علمی.' }
    ],
    charts: [
      { icon: '📊', title: 'نمودار ستونی', desc: 'برای نمایش مقایسه‌ای داده‌ها' },
      { icon: '🥧', title: 'نمودار دایره‌ای', desc: 'برای نمایش نسبتی از کل' },
      { icon: '📈', title: 'نمودار خطی', desc: 'برای نمایش تغییرات در طول زمان' },
      { icon: '📉', title: 'نمودار جعبه‌ای', desc: 'نمایش میانه، چارک‌ها و داده‌های پرت' },
      { icon: '💡', title: 'انتخاب نمودار', desc: 'بسته به نوع داده، نمودار مناسب انتخاب کن.' },
      { icon: '🎓', title: 'کاربرد', desc: 'ارائه اطلاعات به شکل قابل فهم.' }
    ]
  };

  // ============================================================
  // داده احتمال
  // ============================================================
  const probability = {
    basic: [
      { icon: '🎯', title: 'احتمال چیست؟', desc: 'اندازه شانس رخ دادن یک رویداد — عددی بین ۰ و ۱' },
      { icon: '📐', title: 'فرمول', desc: 'احتمال = تعداد حالت مطلوب ÷ تعداد کل حالت‌ها' },
      { icon: '🔴', title: 'رویداد حتمی', desc: 'احتمال = ۱ — مثل آمدن عددی بین ۱ تا ۶' },
      { icon: '⚫', title: 'رویداد غیرممکن', desc: 'احتمال = ۰ — مثل آمدن عدد ۷' },
      { icon: '🟡', title: 'رویداد ممکن', desc: 'احتمال بین ۰ و ۱ — مثل آمدن ۳' },
      { icon: '📝', title: 'نکته', desc: 'مجموع احتمال همه حالت‌ها = ۱' }
    ],
    dice: [
      { icon: '🎲', title: 'تاس شش‌وجهی', desc: 'اعداد ۱ تا ۶ — هر کدام احتمال ۱/۶' },
      { icon: '🪙', title: 'سکه', desc: 'شیر یا خط — هر کدام ۱/۲' },
      { icon: '🎯', title: 'تاس: عدد ۳', desc: '۱ حالت مطلوب از ۶ → ۱/۶' },
      { icon: '🎯', title: 'تاس: عدد زوج', desc: '۳ حالت مطلوب از ۶ → ۱/۲' },
      { icon: '🎯', title: 'دو تاس', desc: '۳۶ حالت — مثل مجموع ۷: ۶ حالت → ۱/۶' },
      { icon: '🎯', title: 'دو سکه', desc: '۴ حالت — (ش،ش)، (ش،خ)، (خ،ش)، (خ،خ)' }
    ],
    rules: [
      { icon: '➕', title: 'قاعده جمع', desc: 'P(A یا B) = P(A) + P(B) − P(A و B)' },
      { icon: '✖️', title: 'قاعده ضرب', desc: 'P(A و B) = P(A) × P(B) — اگر مستقل باشند' },
      { icon: '🔄', title: 'متمم', desc: "P(A') = ۱ − P(A)" },
      { icon: '🎯', title: 'مثال متمم', desc: 'اگر احتمال باران ۰.۳ باشد، احتمال نبودن باران ۰.۷ است.' },
      { icon: '💡', title: 'نکته', desc: 'دو رویداد مستقل: یکی بر دیگری تأثیر ندارد.' },
      { icon: '🎓', title: 'کاربرد', desc: 'پیش‌بینی، بازی، بیمه.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    // میانگین
    { q: 'میانگین 5، 8، 10، 12 چقدر است؟', correct: '8.75', pool: ['8.75', '8', '9', '10'] },
    { q: 'میانگین 10، 20، 30 چقدر است؟', correct: '۲۰', pool: ['۲۰', '۱۵', '۲۵', '۳۰'] },
    { q: 'میانگین 2، 4، 6، 8، 10 چقدر است؟', correct: '۶', pool: ['۶', '۵', '۷', '۸'] },
    { q: 'میانگین 7، 7، 7، 7 چقدر است؟', correct: '۷', pool: ['۷', '۲۸', '۱۴', '۰'] },

    // میانه
    { q: 'میانه 3، 5، 8، 10، 12 چقدر است؟', correct: '۸', pool: ['۸', '۵', '۱۰', '۶'] },
    { q: 'میانه 3، 5، 8، 10 چقدر است؟', correct: '6.5', pool: ['6.5', '8', '5', '7'] },
    { q: 'میانه 1، 2، 3، 4، 5، 6 چقدر است؟', correct: '3.5', pool: ['3.5', '3', '4', '2.5'] },
    { q: 'میانه 1، 5، 3، 7، 2 (بعد از مرتب) چقدر است؟', correct: '۳', pool: ['۳', '۵', '۲', '۷'] },

    // مد
    { q: 'مد 2، 3، 3، 5، 7 چقدر است؟', correct: '۳', pool: ['۳', '۲', '۵', '۷'] },
    { q: 'مد 1، 2، 2، 2، 3، 3 چقدر است؟', correct: '۲', pool: ['۲', '۳', '۱', 'دو مد'] },
    { q: 'مد 5، 5، 7، 7 چقدر است؟', correct: 'دو مد (5 و 7)', pool: ['دو مد (5 و 7)', '5', '7', 'هیچکدام'] },

    // دامنه
    { q: 'دامنه 5، 8، 12، 15 چقدر است؟', correct: '۱۰', pool: ['۱۰', '۱۵', '۵', '۲۰'] },
    { q: 'دامنه 20، 30، 15، 45 چقدر است؟', correct: '۳۰', pool: ['۳۰', '۴۵', '۱۵', '۲۵'] },

    // احتمال پایه
    { q: 'احتمال آمدن ۳ در تاس شش‌وجهی چقدر است؟', correct: '۱/۶', pool: ['۱/۶', '۱/۳', '۱/۲', '۳/۶'] },
    { q: 'احتمال آمدن عدد زوج در تاس چقدر است؟', correct: '۱/۲', pool: ['۱/۲', '۱/۳', '۱/۶', '۲/۳'] },
    { q: 'احتمال آمدن عدد ۷ در تاس چقدر است؟', correct: '۰', pool: ['۰', '۱/۶', '۱/۷', '۱'] },
    { q: 'احتمال آمدن عددی بین ۱ تا ۶ چقدر است؟', correct: '۱', pool: ['۱', '۱/۶', '۶', '۰'] },
    { q: 'احتمال شیر در پرتاب سکه چقدر است؟', correct: '۱/۲', pool: ['۱/۲', '۱', '۰', '۲'] },
    { q: 'احتمال آمدن عدد کمتر از ۳ در تاس چقدر است؟', correct: '۱/۳', pool: ['۱/۳', '۱/۲', '۲/۶', '۱/۶'] },
    { q: 'احتمال آمدن عدد بزرگ‌تر از ۴ در تاس چقدر است؟', correct: '۱/۳', pool: ['۱/۳', '۱/۲', '۲/۳', '۱/۶'] },

    // قواعد احتمال
    { q: "P(A') = ؟", correct: '۱ − P(A)', pool: ['۱ − P(A)', 'P(A) − ۱', 'P(A) + ۱', '۱ ÷ P(A)'] },
    { q: 'اگر احتمال باران ۰.۳ باشد، احتمال نبودنش چقدر است؟', correct: '۰.۷', pool: ['۰.۷', '۰.۳', '۱', '۰.۵'] },
    { q: 'احتمال یک رویداد حتمی چقدر است؟', correct: '۱', pool: ['۱', '۰', '۰.۵', 'نامشخص'] },
    { q: 'احتمال یک رویداد غیرممکن چقدر است؟', correct: '۰', pool: ['۰', '۱', '۰.۵', 'نامشخص'] },
    { q: 'دو سکه پرتاب می‌کنیم. چند حالت ممکن دارد؟', correct: '۴', pool: ['۴', '۲', '۳', '۶'] },
    { q: 'دو تاس پرتاب می‌کنیم. چند حالت ممکن دارد؟', correct: '۳۶', pool: ['۳۶', '۱۲', '۶', '۲۴'] },
    { q: 'احتمال هر حالت در پرتاب دو سکه چقدر است؟', correct: '۱/۴', pool: ['۱/۴', '۱/۲', '۱/۶', '۱'] }
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
  // رندر لیست‌ها
  // ============================================================
  const statsList = document.getElementById('statsList');
  const probList = document.getElementById('probList');

  function renderCards(container, data) {
    container.innerHTML = '';
    data.forEach(p => {
      const card = document.createElement('div');
      card.className = 'prop-card';
      card.innerHTML = `
        <div class="prop-icon">${p.icon}</div>
        <div class="prop-title">${p.title}</div>
        <div class="prop-desc">${p.desc}</div>
      `;
      container.appendChild(card);
    });
  }

  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      const parent = tab.parentElement;
      parent.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const type = tab.dataset.type;
      const parentSection = tab.closest('.lesson-section');
      const section = parentSection.dataset.section;

      if (section === 'stats') {
        renderCards(statsList, stats[type]);
      } else if (section === 'probability') {
        renderCards(probList, probability[type]);
      }
    };
  });

  renderCards(statsList, stats.central);
  renderCards(probList, probability.basic);

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
  document.querySelectorAll('.prop-card, .option-btn, .motel-tab, .coin-card, .example-row').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();