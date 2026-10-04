// ============================================================
// فصل ۲ علوم — رفتار اتم‌ها
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده ساختار اتم
  // ============================================================
  const structures = {
    particles: [
      { icon: '➕', title: 'پروتون', desc: 'ذره با بار مثبت در هسته. تعداد آن، عدد اتمی را تعیین می‌کند.' },
      { icon: '⚪', title: 'نوترون', desc: 'ذره بدون بار در هسته. جرم مشابه پروتون دارد.' },
      { icon: '➖', title: 'الکترون', desc: 'ذره با بار منفی در مدار. بسیار سبک‌تر از پروتون و نوترون.' },
      { icon: '🎯', title: 'هسته', desc: 'مرکز اتم شامل پروتون و نوترون. تقریباً تمام جرم اتم اینجاست.' },
      { icon: '🌐', title: 'مدار', desc: 'مسیر حرکت الکترون‌ها دور هسته. هر مدار ظرفیت مشخصی دارد.' },
      { icon: '⚡', title: 'بار اتم', desc: 'در حالت عادی، تعداد پروتون و الکترون برابر است — اتم خنثی.' }
    ],
    models: [
      { icon: '⚛️', title: 'مدل دالتون', desc: 'اتم را کره‌ای سخت و غیرقابل تقسیم می‌دانست.' },
      { icon: '🍮', title: 'مدل تامسون', desc: 'اتم مثل کیک کشمشی — الکترون‌ها درون ماده مثبت.' },
      { icon: '🌌', title: 'مدل رادرفورد', desc: 'هسته متمرکز در مرکز با بار مثبت، الکترون‌ها دور آن.' },
      { icon: '🎯', title: 'مدل بور', desc: 'الکترون‌ها در مدارهای مشخص دور هسته می‌چرخند.' },
      { icon: '☁️', title: 'مدل کوانتومی', desc: 'الکترون‌ها در ابر الکترونی — مدل امروزی اتم.' }
    ],
    ions: [
      { icon: '➕', title: 'کاتیون', desc: 'یون مثبت — اتمی که الکترون از دست داده است.' },
      { icon: '➖', title: 'آنیون', desc: 'یون منفی — اتمی که الکترون گرفته است.' },
      { icon: '🧂', title: 'NaCl (نمک)', desc: 'Na⁺ + Cl⁻ — کاتیون سدیم و آنیون کلر.' },
      { icon: '🔋', title: 'H⁺', desc: 'یون هیدروژن — در اسیدها یافت می‌شود.' },
      { icon: '🦴', title: 'Ca²⁺', desc: 'یون کلسیم — در استخوان و دندان.' },
      { icon: '💧', title: 'OH⁻', desc: 'یون هیدروکسید — در بازها یافت می‌شود.' }
    ]
  };

  // ============================================================
  // داده جدول تناوبی (۲۰ عنصر اول)
  // ============================================================
  const elements = [
    { z: 1, sym: 'H', name: 'هیدروژن', type: 'nonmetal', mass: '1.008', group: 1, period: 1, info: 'سبک‌ترین عنصر جهان' },
    { z: 2, sym: 'He', name: 'هلیم', type: 'noble', mass: '4.003', group: 18, period: 1, info: 'گاز نجیب، در بادکنک' },
    { z: 3, sym: 'Li', name: 'لیتیم', type: 'metal', mass: '6.94', group: 1, period: 2, info: 'فلز قلیایی، در باتری' },
    { z: 4, sym: 'Be', name: 'بریلیم', type: 'metal', mass: '9.012', group: 2, period: 2, info: 'فلز سبک و محکم' },
    { z: 5, sym: 'B', name: 'بور', type: 'metalloid', mass: '10.81', group: 13, period: 2, info: 'شبه فلز، در شیشه' },
    { z: 6, sym: 'C', name: 'کربن', type: 'nonmetal', mass: '12.011', group: 14, period: 2, info: 'پایه حیات — الماس و گرافیت' },
    { z: 7, sym: 'N', name: 'نیتروژن', type: 'nonmetal', mass: '14.007', group: 15, period: 2, info: '۷۸٪ هوا را تشکیل می‌دهد' },
    { z: 8, sym: 'O', name: 'اکسیژن', type: 'nonmetal', mass: '15.999', group: 16, period: 2, info: 'لازم برای تنفس و سوختن' },
    { z: 9, sym: 'F', name: 'فلوئور', type: 'nonmetal', mass: '18.998', group: 17, period: 2, info: 'در خمیردندان' },
    { z: 10, sym: 'Ne', name: 'نئون', type: 'noble', mass: '20.180', group: 18, period: 2, info: 'گاز نجیب، در لامپ‌های نئون' },
    { z: 11, sym: 'Na', name: 'سدیم', type: 'metal', mass: '22.990', group: 1, period: 3, info: 'فلز قلیایی، در نمک خوراکی' },
    { z: 12, sym: 'Mg', name: 'منیزیم', type: 'metal', mass: '24.305', group: 2, period: 3, info: 'فلز سبک، در آلیاژها' },
    { z: 13, sym: 'Al', name: 'آلومینیوم', type: 'metal', mass: '26.982', group: 13, period: 3, info: 'سبک، در قوطی و هواپیما' },
    { z: 14, sym: 'Si', name: 'سیلیسیم', type: 'metalloid', mass: '28.085', group: 14, period: 3, info: 'در تراشه‌های کامپیوتری' },
    { z: 15, sym: 'P', name: 'فسفر', type: 'nonmetal', mass: '30.974', group: 15, period: 3, info: 'در کبریت' },
    { z: 16, sym: 'S', name: 'گوگرد', type: 'nonmetal', mass: '32.06', group: 16, period: 3, info: 'زرد رنگ، در آتشفشان' },
    { z: 17, sym: 'Cl', name: 'کلر', type: 'nonmetal', mass: '35.45', group: 17, period: 3, info: 'گاز سبز، در ضدعفونی آب' },
    { z: 18, sym: 'Ar', name: 'آرگون', type: 'noble', mass: '39.948', group: 18, period: 3, info: 'گاز نجیب، در لامپ' },
    { z: 19, sym: 'K', name: 'پتاسیم', type: 'metal', mass: '39.098', group: 1, period: 4, info: 'فلز قلیایی، در کود' },
    { z: 20, sym: 'Ca', name: 'کلسیم', type: 'metal', mass: '40.078', group: 2, period: 4, info: 'در استخوان و دندان' }
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
  // تب ۲: ساختار
  // ============================================================
  const structureList = document.getElementById('structureList');
  let currentType = 'particles';

  function renderStructure(type) {
    structureList.innerHTML = '';
    structures[type].forEach(p => {
      const card = document.createElement('div');
      card.className = 'prop-card';
      card.innerHTML = `
        <div class="prop-icon">${p.icon}</div>
        <div class="prop-title">${p.title}</div>
        <div class="prop-desc">${p.desc}</div>
      `;
      structureList.appendChild(card);
    });
  }

  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentType = tab.dataset.type;
      renderStructure(currentType);
    };
  });

  renderStructure('particles');

  // ============================================================
  // تب ۴: جدول عنصرها
  // ============================================================
  const periodicTable = document.getElementById('periodicTable');
  const elementDetail = document.getElementById('elementDetail');

  const colorMap = {
    metal: { bg: 'linear-gradient(135deg, #fff3e0, #ffe0b2)', border: '#ff9800', color: '#e65100' },
    nonmetal: { bg: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)', border: '#4caf50', color: '#2e7d32' },
    noble: { bg: 'linear-gradient(135deg, #f3e5f5, #e1bee7)', border: '#9c27b0', color: '#6a1b9a' },
    metalloid: { bg: 'linear-gradient(135deg, #e3f2fd, #bbdefb)', border: '#2196f3', color: '#1565c0' }
  };

  const typeNames = {
    metal: 'فلز',
    nonmetal: 'نافلز',
    noble: 'گاز نجیب',
    metalloid: 'شبه فلز'
  };

  if (periodicTable) {
    elements.forEach(el => {
      const cell = document.createElement('div');
      cell.className = `element-cell ${el.type}`;
      cell.dataset.z = el.z;
      cell.innerHTML = `
        <span class="element-number">${el.z}</span>
        <span class="element-symbol">${el.sym}</span>
        <span class="element-name">${el.name}</span>
      `;
      cell.onclick = () => selectElement(el, cell);
      periodicTable.appendChild(cell);
    });
  }

  function selectElement(el, cell) {
    document.querySelectorAll('.element-cell').forEach(c => c.classList.remove('active'));
    cell.classList.add('active');

    const c = colorMap[el.type];

    elementDetail.innerHTML = `
      <div class="detail-card">
        <div class="detail-header">
          <div class="detail-symbol-big" style="background:${c.bg}; border-color:${c.border}; color:${c.color};">
            <span class="num">${el.z}</span>
            <span class="sym">${el.sym}</span>
          </div>
          <div class="detail-title">
            <h3>${el.name}</h3>
            <p>${typeNames[el.type]}</p>
          </div>
        </div>
        <div class="detail-info">
          <div class="info-item">
            <span class="info-label">عدد اتمی</span>
            <span class="info-value">${el.z}</span>
          </div>
          <div class="info-item">
            <span class="info-label">جرم اتمی</span>
            <span class="info-value">${el.mass}</span>
          </div>
          <div class="info-item">
            <span class="info-label">گروه</span>
            <span class="info-value">${el.group}</span>
          </div>
          <div class="info-item">
            <span class="info-label">دوره</span>
            <span class="info-value">${el.period}</span>
          </div>
        </div>
        <div class="tip-box" style="margin-top:14px;">
          <strong>💡 نکته</strong>
          <p>${el.info}</p>
        </div>
      </div>
    `;

    setTimeout(() => {
      elementDetail.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'اتم چیست؟', correct: 'کوچک‌ترین ذره سازنده ماده', pool: ['کوچک‌ترین ذره سازنده ماده', 'بزرگ‌ترین ذره', 'فقط در جامدها', 'نوعی مولکول'] },
    { q: 'کدام ذره بار مثبت دارد؟', correct: 'پروتون', pool: ['پروتون', 'نوترون', 'الکترون', 'فوتون'] },
    { q: 'کدام ذره بار منفی دارد؟', correct: 'الکترون', pool: ['الکترون', 'پروتون', 'نوترون', 'فوتون'] },
    { q: 'کدام ذره بدون بار است؟', correct: 'نوترون', pool: ['نوترون', 'پروتون', 'الکترون', 'فوتون'] },
    { q: 'هسته اتم شامل چه ذراتی است؟', correct: 'پروتون و نوترون', pool: ['پروتون و نوترون', 'الکترون و پروتون', 'فقط پروتون', 'فقط الکترون'] },
    { q: 'الکترون‌ها کجای اتم هستند؟', correct: 'در مدار دور هسته', pool: ['در مدار دور هسته', 'در هسته', 'روی پروتون', 'روی نوترون'] },
    { q: 'بیشتر جرم اتم کجاست؟', correct: 'در هسته', pool: ['در هسته', 'در الکترون‌ها', 'در مدار', 'پخش شده'] },
    { q: 'عدد اتمی چیست؟', correct: 'تعداد پروتون‌ها', pool: ['تعداد پروتون‌ها', 'تعداد نوترون‌ها', 'تعداد الکترون‌ها', 'جمع پروتون و نوترون'] },
    { q: 'عدد جرمی چیست؟', correct: 'جمع پروتون و نوترون', pool: ['جمع پروتون و نوترون', 'تعداد پروتون', 'تعداد الکترون', 'تعداد نوترون'] },
    { q: 'در اتم خنثی چه رابطه‌ای است؟', correct: 'تعداد پروتون = تعداد الکترون', pool: ['تعداد پروتون = تعداد الکترون', 'پروتون بیشتر', 'الکترون بیشتر', 'نوترون بیشتر'] },
    { q: 'یون چیست؟', correct: 'اتم باردار', pool: ['اتم باردار', 'اتم خنثی', 'مولکول', 'الکترون'] },
    { q: 'کاتیون چیست؟', correct: 'یون مثبت', pool: ['یون مثبت', 'یون منفی', 'اتم خنثی', 'نوترون'] },
    { q: 'آنیون چیست؟', correct: 'یون منفی', pool: ['یون منفی', 'یون مثبت', 'اتم خنثی', 'پروتون'] },
    { q: 'پیوند یونی بین چه اتم‌هایی است؟', correct: 'فلز و نافلز', pool: ['فلز و نافلز', 'نافلز و نافلز', 'فلز و فلز', 'گاز و مایع'] },
    { q: 'پیوند کووالانسی بین چه اتم‌هایی است؟', correct: 'نافلز و نافلز', pool: ['نافلز و نافلز', 'فلز و نافلز', 'فلز و فلز', 'گاز و مایع'] },
    { q: 'در پیوند کووالانسی چه اتفاقی می‌افتد؟', correct: 'الکترون‌ها به اشتراک گذاشته می‌شوند', pool: ['الکترون‌ها به اشتراک گذاشته می‌شوند', 'الکترون‌ها منتقل می‌شوند', 'پروتون منتقل می‌شود', 'نوترون منتقل می‌شود'] },
    { q: 'NaCl نمونه کدام پیوند است؟', correct: 'یونی', pool: ['یونی', 'کووالانسی', 'فلزی', 'هیدروژنی'] },
    { q: 'H₂O نمونه کدام پیوند است؟', correct: 'کووالانسی', pool: ['کووالانسی', 'یونی', 'فلزی', 'هیدروژنی'] },
    { q: 'در پیوند فلزی چه اتفاقی می‌افتد؟', correct: 'الکترون‌ها آزادانه حرکت می‌کنند', pool: ['الکترون‌ها آزادانه حرکت می‌کنند', 'الکترون‌ها منتقل می‌شوند', 'الکترون‌ها ثابت‌اند', 'الکترون‌ها حذف می‌شوند'] },
    { q: 'کدام مدل اتمی امروزی است؟', correct: 'مدل کوانتومی', pool: ['مدل کوانتومی', 'مدل دالتون', 'مدل تامسون', 'مدل رادرفورد'] },
    { q: 'سبک‌ترین عنصر جهان چیست؟', correct: 'هیدروژن', pool: ['هیدروژن', 'هلیم', 'اکسیژن', 'کربن'] },
    { q: 'کدام عنصر ۷۸٪ هوا را تشکیل می‌دهد؟', correct: 'نیتروژن', pool: ['نیتروژن', 'اکسیژن', 'کربن', 'هیدروژن'] },
    { q: 'عنصری که در تراشه کامپیوتری استفاده می‌شود؟', correct: 'سیلیسیم', pool: ['سیلیسیم', 'آهن', 'مس', 'طلا'] },
    { q: 'کدام گاز در لامپ‌های نئون است؟', correct: 'نئون', pool: ['نئون', 'آرگون', 'هلیم', 'اکسیژن'] },
    { q: 'عنصر لازم برای تنفس چیست؟', correct: 'اکسیژن', pool: ['اکسیژن', 'نیتروژن', 'کربن', 'هلیم'] }
  ];

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
  document.querySelectorAll('.prop-card, .option-btn, .motel-tab, .bond-card, .element-cell').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      if (!el.classList.contains('element-cell')) {
        el.style.transform = '';
      }
    }, { passive: true });
  });

})();