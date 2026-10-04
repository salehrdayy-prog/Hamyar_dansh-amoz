// ============================================================
// فصل ۳ علوم — به دنبال محیط فعال
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده انواع محیط‌های فعال
  // ============================================================
  const types = {
    acids: [
      { icon: '🧪', title: 'هیدروکلریک اسید (HCl)', desc: 'اسید قوی، در معده انسان — برای هضم غذا.' },
      { icon: '🟡', title: 'سولفوریک اسید (H₂SO₄)', desc: 'اسید قوی، در باتری ماشین.' },
      { icon: '🍋', title: 'سیتریک اسید', desc: 'اسید ضعیف، در لیمو و پرتقال.' },
      { icon: '🍶', title: 'استیک اسید', desc: 'اسید ضعیف، در سرکه — برای ترشی.' },
      { icon: '🥛', title: 'لاکتیک اسید', desc: 'اسید ضعیف، در ماست و شیر ترش.' },
      { icon: '🔋', title: 'نیتریک اسید (HNO₃)', desc: 'اسید قوی، در صنعت و آزمایشگاه.' }
    ],
    bases: [
      { icon: '🧼', title: 'سدیم هیدروکسید (NaOH)', desc: 'باز قوی، در ساخت صابون.' },
      { icon: '🧴', title: 'پتاسیم هیدروکسید (KOH)', desc: 'باز قوی، در باتری قلیایی.' },
      { icon: '🥛', title: 'منیزیم هیدروکسید', desc: 'باز ضعیف، در شربت معده.' },
      { icon: '🦷', title: 'کلسیم هیدروکسید', desc: 'باز، در خمیر دندان.' },
      { icon: '🧴', title: 'آمونیاک (NH₃)', desc: 'باز ضعیف، در مایع شیشه‌پاک‌کن.' },
      { icon: '🍞', title: 'جوش شیرین', desc: 'باز ضعیف، در آشپزی.' }
    ],
    indicators: [
      { icon: '📄', title: 'کاغذ pH', desc: 'کاغذ رنگی — با اسید قرمز و با باز آبی می‌شود.' },
      { icon: '🌺', title: 'فنل‌فتالئین', desc: 'در اسید بی‌رنگ، در باز صورتی می‌شود.' },
      { icon: '🧪', title: 'تورنسل', desc: 'در اسید قرمز، در باز آبی می‌شود.' },
      { icon: '🌿', title: 'کلم قرمز', desc: 'شناساگر طبیعی — در اسید قرمز، در باز سبز.' },
      { icon: '🌻', title: 'گل آفتابگردان', desc: 'شناساگر طبیعی، از گلبرگ‌های آن استفاده می‌شود.' },
      { icon: '🍵', title: 'چای', desc: 'شناساگر طبیعی، با اسید روشن‌تر می‌شود.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'محیط فعال چیست؟', correct: 'ماده‌ای که با مواد دیگر واکنش می‌دهد', pool: ['ماده‌ای که با مواد دیگر واکنش می‌دهد', 'ماده بی‌اثر', 'فقط فلزها', 'فقط آب'] },
    { q: 'طعم اسیدها چگونه است؟', correct: 'ترش', pool: ['ترش', 'تلخ', 'شیرین', 'شور'] },
    { q: 'طعم بازها چگونه است؟', correct: 'تلخ', pool: ['تلخ', 'ترش', 'شیرین', 'شور'] },
    { q: 'pH خنثی چقدر است؟', correct: '۷', pool: ['۷', '۰', '۱۴', '۱'] },
    { q: 'pH اسیدها چقدر است؟', correct: 'کمتر از ۷', pool: ['کمتر از ۷', 'بیشتر از ۷', 'برابر ۷', 'برابر ۱۴'] },
    { q: 'pH بازها چقدر است؟', correct: 'بیشتر از ۷', pool: ['بیشتر از ۷', 'کمتر از ۷', 'برابر ۷', 'برابر ۰'] },
    { q: 'کدام یک اسید است؟', correct: 'سرکه', pool: ['سرکه', 'صابون', 'جوش شیرین', 'آب خالص'] },
    { q: 'کدام یک باز است؟', correct: 'صابون', pool: ['صابون', 'سرکه', 'لیمو', 'آب پرتقال'] },
    { q: 'کدام یک خنثی است؟', correct: 'آب خالص', pool: ['آب خالص', 'سرکه', 'صابون', 'لیمو'] },
    { q: 'اسید با کاغذ pH چه رنگی می‌کند؟', correct: 'قرمز', pool: ['قرمز', 'آبی', 'سبز', 'زرد'] },
    { q: 'باز با کاغذ pH چه رنگی می‌کند؟', correct: 'آبی', pool: ['آبی', 'قرمز', 'سبز', 'زرد'] },
    { q: 'اسید + باز → ؟', correct: 'نمک + آب', pool: ['نمک + آب', 'فقط نمک', 'فقط آب', 'گاز'] },
    { q: 'اسید + فلز → ؟', correct: 'نمک + گاز هیدروژن', pool: ['نمک + گاز هیدروژن', 'نمک + آب', 'فقط گاز', 'فقط آب'] },
    { q: 'اسید + کربنات → ؟', correct: 'نمک + آب + گاز CO₂', pool: ['نمک + آب + گاز CO₂', 'نمک + هیدروژن', 'فقط آب', 'فقط نمک'] },
    { q: 'واکنش اسید + باز چه نام دارد؟', correct: 'خنثی‌سازی', pool: ['خنثی‌سازی', 'اکسایش', 'تبادل', 'تجزیه'] },
    { q: 'اسید معده چیست؟', correct: 'هیدروکلریک اسید', pool: ['هیدروکلریک اسید', 'سولفوریک اسید', 'نیتریک اسید', 'استیک اسید'] },
    { q: 'سرکه چه نوع اسیدی دارد؟', correct: 'استیک اسید', pool: ['استیک اسید', 'هیدروکلریک اسید', 'سولفوریک اسید', 'سیتریک اسید'] },
    { q: 'لیمو چه نوع اسیدی دارد؟', correct: 'سیتریک اسید', pool: ['سیتریک اسید', 'استیک اسید', 'لاکتیک اسید', 'نیتریک اسید'] },
    { q: 'شناساگر چیست؟', correct: 'ماده‌ای که با تغییر رنگ، اسید یا باز را تشخیص می‌دهد', pool: ['ماده‌ای که با تغییر رنگ، اسید یا باز را تشخیص می‌دهد', 'نوعی اسید', 'نوعی باز', 'نوعی فلز'] },
    { q: 'فنل‌فتالئین در باز چه رنگی می‌شود؟', correct: 'صورتی', pool: ['صورتی', 'قرمز', 'آبی', 'بی‌رنگ'] },
    { q: 'در مواجهه با اسید قوی چه باید کرد؟', correct: 'با احتیاط و وسایل ایمنی کار کرد', pool: ['با احتیاط و وسایل ایمنی کار کرد', 'با دست لمس کرد', 'خورد', 'بو کشید'] },
    { q: 'کدام یک باز ضعیف است؟', correct: 'جوش شیرین', pool: ['جوش شیرین', 'سولفوریک اسید', 'هیدروکلریک اسید', 'نیتریک اسید'] },
    { q: 'کدام یک اسید قوی است؟', correct: 'HCl', pool: ['HCl', 'سرکه', 'لیمو', 'ماست'] },
    { q: 'آب خالص چه نوع محیطی است؟', correct: 'خنثی', pool: ['خنثی', 'اسیدی', 'بازی', 'فعال'] },
    { q: 'محیطی که pH = ۳ دارد چه نوع است؟', correct: 'اسیدی', pool: ['اسیدی', 'بازی', 'خنثی', 'فعال'] },
    { q: 'محیطی که pH = ۱۰ دارد چه نوع است؟', correct: 'بازی', pool: ['بازی', 'اسیدی', 'خنثی', 'فعال'] }
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
  // تب ۲: انواع
  // ============================================================
  const typesList = document.getElementById('typesList');
  let currentType = 'acids';

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

  renderTypes('acids');

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
  document.querySelectorAll('.prop-card, .option-btn, .motel-tab, .compare-card, .reaction-card').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();