// ============================================================
// فصل ۲ ریاضی — عددهای حقیقی
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده مجموعه‌های عددی
  // ============================================================
  const sets = {
    basic: [
      { icon: 'ℕ', title: 'اعداد طبیعی', desc: 'اعداد شمارش — {1, 2, 3, 4, ...}' },
      { icon: '𝕎', title: 'اعداد حسابی', desc: 'طبیعی + صفر — {0, 1, 2, 3, ...}' },
      { icon: 'ℤ', title: 'اعداد صحیح', desc: 'مثبت، منفی، صفر — {..., -2, -1, 0, 1, 2, ...}' },
      { icon: '➕', title: 'رابطه', desc: 'ℕ ⊂ 𝕎 ⊂ ℤ — هر طبیعی، حسابی است؛ هر حسابی، صحیح است.' },
      { icon: '📏', title: 'محور اعداد', desc: 'همه این اعداد روی محور اعداد قرار می‌گیرند.' },
      { icon: '🔢', title: 'علامت', desc: 'ℕ = Natural، 𝕎 = Whole، ℤ = Integer' }
    ],
    rational: [
      { icon: 'ℚ', title: 'گویا', desc: 'هر عددی که به شکل a/b نوشته شود (a و b صحیح، b≠0).' },
      { icon: '🎯', title: 'مثال ۱', desc: '3 = 3/1 — عدد صحیح هم گویاست.' },
      { icon: '🎯', title: 'مثال ۲', desc: '0.5 = 1/2 — اعشاری متناهی گویاست.' },
      { icon: '🎯', title: 'مثال ۳', desc: '0.333... = 1/3 — اعشاری متناوب گویاست.' },
      { icon: '📝', title: 'نکته', desc: 'همه اعداد صحیح، گویا هستند.' },
      { icon: '💡', title: 'علامت', desc: 'ℚ از کلمه Quotient (خارج قسمت) گرفته شده.' }
    ],
    irrational: [
      { icon: '𝕀', title: 'گنگ', desc: 'اعدادی که کسری نیستند — اعشار پایان‌ناپذیر بدون تکرار.' },
      { icon: '√', title: 'رادیکال غیرکامل', desc: '√2، √3، √5، √7 — جذر آنها کامل نیست.' },
      { icon: 'π', title: 'عدد پی', desc: 'π ≈ 3.14159... — نسبت محیط دایره به قطر.' },
      { icon: '🎯', title: 'مثال', desc: '√2 ≈ 1.41421356... (بدون تکرار)' },
      { icon: '📝', title: 'نکته', desc: 'رادیکال‌های کامل (مثل √4=2) گنگ نیستند.' },
      { icon: '💡', title: 'علامت', desc: '𝕀 = Irrational' }
    ],
    real: [
      { icon: 'ℝ', title: 'حقیقی', desc: 'مجموعه همه اعداد روی محور — ℚ ∪ 𝕀 = ℝ' },
      { icon: '📏', title: 'محور اعداد', desc: 'هر عدد حقیقی یک نقطه روی محور دارد.' },
      { icon: '🎯', title: 'مثال', desc: '3، -2، 0.5، √2، π — همه حقیقی‌اند.' },
      { icon: '🔗', title: 'رابطه', desc: 'ℚ ⊂ ℝ و 𝕀 ⊂ ℝ — حقیقی = گویا + گنگ' },
      { icon: '⚖️', title: 'مقایسه', desc: 'هر دو عدد حقیقی را می‌توان مقایسه کرد.' },
      { icon: '📝', title: 'نکته', desc: 'حقیقی، بزرگ‌ترین مجموعه عددی در مدرسه است.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    // مجموعه‌های عددی
    { q: 'کدام نماد مجموعه اعداد طبیعی است؟', correct: 'ℕ', pool: ['ℕ', 'ℤ', 'ℚ', 'ℝ'] },
    { q: 'کدام نماد مجموعه اعداد صحیح است؟', correct: 'ℤ', pool: ['ℤ', 'ℕ', 'ℚ', '𝕀'] },
    { q: 'کدام نماد مجموعه اعداد گویا است؟', correct: 'ℚ', pool: ['ℚ', 'ℤ', 'ℕ', 'ℝ'] },
    { q: 'کدام نماد مجموعه اعداد حقیقی است؟', correct: 'ℝ', pool: ['ℝ', 'ℚ', 'ℤ', 'ℕ'] },
    { q: 'کدام نماد مجموعه اعداد گنگ است؟', correct: '𝕀', pool: ['𝕀', 'ℚ', 'ℝ', 'ℤ'] },
    { q: 'اعداد طبیعی کدامند؟', correct: '{1, 2, 3, ...}', pool: ['{1, 2, 3, ...}', '{0, 1, 2, ...}', '{..., -1, 0, 1, ...}', '{ }'] },
    { q: 'اعداد حسابی کدامند؟', correct: '{0, 1, 2, ...}', pool: ['{0, 1, 2, ...}', '{1, 2, 3, ...}', '{..., -1, 0, 1, ...}', '{ }'] },
    { q: 'اعداد صحیح کدامند؟', correct: '{..., -2, -1, 0, 1, 2, ...}', pool: ['{..., -2, -1, 0, 1, 2, ...}', '{1, 2, 3, ...}', '{0, 1, 2, ...}', '{ }'] },

    // گویا و گنگ
    { q: 'عدد گویا چیست؟', correct: 'a/b که a و b صحیح باشند', pool: ['a/b که a و b صحیح باشند', 'رادیکالی', 'اعشاری بی‌پایان', 'طبیعی'] },
    { q: 'آیا ۳ گویاست؟', correct: 'بله (3/1)', pool: ['بله (3/1)', 'خیر', 'شاید', 'نامشخص'] },
    { q: 'آیا ۰.۵ گویاست؟', correct: 'بله (1/2)', pool: ['بله (1/2)', 'خیر', 'شاید', 'گنگ'] },
    { q: 'آیا ۰.۳۳۳... گویاست؟', correct: 'بله (1/3)', pool: ['بله (1/3)', 'خیر', 'گنگ', 'نامشخص'] },
    { q: 'کدام عدد گنگ است؟', correct: '√2', pool: ['√2', '√4', '√9', '√16'] },
    { q: 'کدام عدد گنگ است؟', correct: 'π', pool: ['π', '3', '0.5', '1/2'] },
    { q: 'آیا √4 گنگ است؟', correct: 'خیر (2 گویاست)', pool: ['خیر (2 گویاست)', 'بله', 'شاید', 'نامشخص'] },
    { q: 'کدام گویاست؟', correct: '√9', pool: ['√9', '√2', '√3', '√5'] },
    { q: 'کدام گنگ است؟', correct: '√3', pool: ['√3', '√4', '√16', '√25'] },

    // رادیکال
    { q: '√16 چقدر است؟', correct: '۴', pool: ['۴', '۸', '۲', '۱۶'] },
    { q: '√25 چقدر است؟', correct: '۵', pool: ['۵', '۵۰', '۲.۵', '۱۲.۵'] },
    { q: '√36 چقدر است؟', correct: '۶', pool: ['۶', '۱۸', '۳', '۹'] },
    { q: '√49 چقدر است؟', correct: '۷', pool: ['۷', '۲۴.۵', '۱۴', '۹۸'] },
    { q: '√12 ساده‌شده کدام است؟', correct: '2√3', pool: ['2√3', '3√2', '√6', '6√2'] },
    { q: '√50 ساده‌شده کدام است؟', correct: '5√2', pool: ['5√2', '2√5', '25√2', '10√5'] },
    { q: '√18 ساده‌شده کدام است؟', correct: '3√2', pool: ['3√2', '2√3', '6√3', '9√2'] },
    { q: '√8 ساده‌شده کدام است؟', correct: '2√2', pool: ['2√2', '4√2', '2√4', '8√2'] },
    { q: '√2 تقریباً چقدر است؟', correct: '≈ 1.41', pool: ['≈ 1.41', '≈ 2.14', '≈ 3.14', '≈ 1.73'] },
    { q: 'π تقریباً چقدر است؟', correct: '≈ 3.14', pool: ['≈ 3.14', '≈ 1.41', '≈ 2.71', '≈ 1.73'] }
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
  // تب ۲: مجموعه‌ها
  // ============================================================
  const setsList = document.getElementById('setsList');
  let currentSet = 'basic';

  function renderSets(type) {
    setsList.innerHTML = '';
    sets[type].forEach(p => {
      const card = document.createElement('div');
      card.className = 'prop-card';
      card.innerHTML = `
        <div class="prop-icon">${p.icon}</div>
        <div class="prop-title">${p.title}</div>
        <div class="prop-desc">${p.desc}</div>
      `;
      setsList.appendChild(card);
    });
  }

  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentSet = tab.dataset.type;
      renderSets(currentSet);
    };
  });

  renderSets('basic');

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
  document.querySelectorAll('.prop-card, .option-btn, .motel-tab').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();