// ============================================================
// فصل ۱۱ علوم — گوناگونی جانداران
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده ۵ سلسله جانداران
  // ============================================================
  const kingdoms = {
    monera: [
      { icon: '🦠', title: 'باکتری', desc: 'تک‌سلولی و بدون هسته — همه جا هستند، بعضی مفید و بعضی بیماری‌زا.' },
      { icon: '💚', title: 'سیانوباکتری', desc: 'باکتری‌های سبز-آبی که فتوسنتز می‌کنند.' },
      { icon: '🧪', title: 'ویژگی اصلی', desc: 'پروکاریوت (بدون هسته) — دیواره سلولی دارند.' },
      { icon: '🌡️', title: 'محل زندگی', desc: 'هر جا — خاک، آب، هوا، حتی درون بدن ما.' },
      { icon: '🍶', title: 'کاربرد', desc: 'در ماست، پنیر، سرکه و داروسازی.' },
      { icon: '⚠️', title: 'خطر', desc: 'بعضی باکتری‌ها بیماری ایجاد می‌کنند.' }
    ],
    protist: [
      { icon: '🔬', title: 'آمیب', desc: 'تک‌سلولی با هسته — با پای کاذب حرکت می‌کند.' },
      { icon: '🦠', title: 'پارامسی', desc: 'تک‌سلولی با مژک — در آب‌های شیرین.' },
      { icon: '🌿', title: 'جلبک', desc: 'آغازی فتوسنتزکننده — در آب زندگی می‌کند.' },
      { icon: '🌊', title: 'پلانکتون', desc: 'آغازی شناور در آب — غذای ماهی‌ها.' },
      { icon: '🧬', title: 'ویژگی اصلی', desc: 'یوکاریوت (با هسته) — اکثراً تک‌سلولی.' },
      { icon: '⚠️', title: 'مالاریا', desc: 'نوعی آغازی بیماری‌زا که توسط پشه منتقل می‌شود.' }
    ],
    fungi: [
      { icon: '🍄', title: 'قارچ چتری', desc: 'قارچ خوراکی — بعضی سمی هستند.' },
      { icon: '🧀', title: 'کپک', desc: 'روی نان و میوه کپک می‌زند — سبز یا آبی.' },
      { icon: '🍺', title: 'مخمر', desc: 'قارچ تک‌سلولی — در نان و نوشیدنی تخمیری.' },
      { icon: '🔬', title: 'ویژگی اصلی', desc: 'یوکاریوت — دیواره سلولی از کیتین.' },
      { icon: '♻️', title: 'نقش', desc: 'تجزیه‌کننده — بقایای جانداران را تجزیه می‌کنند.' },
      { icon: '🌱', title: 'همزیستی', desc: 'ریشه گیاهان با قارچ همزیستی دارند (میکوریزا).' }
    ],
    plant: [
      { icon: '🌱', title: 'خزه‌ها', desc: 'ساده‌ترین گیاهان خشکی — بدون ریشه، ساقه، برگ واقعی.' },
      { icon: '🌿', title: 'سرخس‌ها', desc: 'گیاهان آوندی بدون دانه — با هاگ تکثیر می‌شوند.' },
      { icon: '🌲', title: 'بازدانگان', desc: 'گیاهان دانه‌دار بدون گل — کاج، صنوبر.' },
      { icon: '🌸', title: 'نهاندانگان', desc: 'گیاهان گل‌دار — متنوع‌ترین گروه گیاهان.' },
      { icon: '🌞', title: 'ویژگی اصلی', desc: 'فتوسنتز می‌کنند — تولیدکننده هستند.' },
      { icon: '💧', title: 'سلولز', desc: 'دیواره سلولی از سلولز ساخته شده.' }
    ],
    animal: [
      { icon: '🦁', title: 'پستانداران', desc: 'مو دارند، بچه می‌زایند، به بچه شیر می‌دهند.' },
      { icon: '🐦', title: 'پرندگان', desc: 'پر دارند، تخم می‌گذارند، خون‌گرم هستند.' },
      { icon: '🦎', title: 'خزندگان', desc: 'پولک دارند، تخم می‌گذارند، خون‌سرد هستند.' },
      { icon: '🐟', title: 'ماهی‌ها', desc: 'آبشش دارند، در آب زندگی می‌کنند.' },
      { icon: '🐸', title: 'دوزیستان', desc: 'هم در آب، هم در خشکی — قورباغه.' },
      { icon: '🦋', title: 'بی‌مهرگان', desc: 'حشرات، عنکبوت‌ها، نرم‌تنان — بدون ستون فقرات.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'طبقه‌بندی جانداران برای چیست؟', correct: 'نظم‌دهی و مطالعه آسان‌تر', pool: ['نظم‌دهی و مطالعه آسان‌تر', 'کشتن جانداران', 'بازی کردن', 'پول درآوردن'] },
    { q: 'بزرگ‌ترین گروه طبقه‌بندی چیست؟', correct: 'سلسله', pool: ['سلسله', 'شاخه', 'رده', 'گونه'] },
    { q: 'کوچک‌ترین گروه طبقه‌بندی چیست؟', correct: 'گونه', pool: ['گونه', 'سلسله', 'شاخه', 'خانواده'] },
    { q: 'چند سلسله جانداران داریم؟', correct: '۵', pool: ['۵', '۳', '۴', '۶'] },
    { q: 'کدام یک از سلسله‌ها نیست؟', correct: 'ویروس‌ها', pool: ['ویروس‌ها', 'مونرها', 'قارچ‌ها', 'گیاهان'] },
    { q: 'باکتری در کدام سلسله است؟', correct: 'مونرها', pool: ['مونرها', 'آغازیان', 'قارچ‌ها', 'گیاهان'] },
    { q: 'آمیب در کدام سلسله است؟', correct: 'آغازیان', pool: ['آغازیان', 'مونرها', 'قارچ‌ها', 'جانوران'] },
    { q: 'قارچ در کدام سلسله است؟', correct: 'قارچ‌ها', pool: ['قارچ‌ها', 'گیاهان', 'آغازیان', 'مونرها'] },
    { q: 'گیاهان چه ویژگی دارند؟', correct: 'فتوسنتز می‌کنند', pool: ['فتوسنتز می‌کنند', 'تجزیه می‌کنند', 'شکار می‌کنند', 'پرواز می‌کنند'] },
    { q: 'باکتری چه نوع سلولی دارد؟', correct: 'پروکاریوت (بدون هسته)', pool: ['پروکاریوت (بدون هسته)', 'یوکاریوت', 'چند هسته‌ای', 'بدون غشاء'] },
    { q: 'آغازیان چه نوع سلولی دارند؟', correct: 'یوکاریوت (با هسته)', pool: ['یوکاریوت (با هسته)', 'پروکاریوت', 'بدون هسته', 'بدون غشاء'] },
    { q: 'قارچ‌ها چه نقشی در طبیعت دارند؟', correct: 'تجزیه‌کننده', pool: ['تجزیه‌کننده', 'تولیدکننده', 'مصرف‌کننده', 'بی‌اثر'] },
    { q: 'گیاهان چه نقشی دارند؟', correct: 'تولیدکننده', pool: ['تولیدکننده', 'تجزیه‌کننده', 'مصرف‌کننده', 'بی‌اثر'] },
    { q: 'جانوران چه نقشی دارند؟', correct: 'مصرف‌کننده', pool: ['مصرف‌کننده', 'تولیدکننده', 'تجزیه‌کننده', 'بی‌اثر'] },
    { q: 'نام علمی انسان چیست؟', correct: 'Homo sapiens', pool: ['Homo sapiens', 'Canis lupus', 'Felis catus', 'Rosa damascena'] },
    { q: 'نام علمی گربه اهلی چیست؟', correct: 'Felis catus', pool: ['Felis catus', 'Canis lupus', 'Homo sapiens', 'Rosa damascena'] },
    { q: 'نام علمی گرگ چیست؟', correct: 'Canis lupus', pool: ['Canis lupus', 'Felis catus', 'Homo sapiens', 'Rosa damascena'] },
    { q: 'نام علمی چند بخش دارد؟', correct: '۲', pool: ['۲', '۳', '۱', '۴'] },
    { q: 'بخش اول نام علمی چه چیزی را نشان می‌دهد؟', correct: 'سرده', pool: ['سرده', 'گونه', 'خانواده', 'راسته'] },
    { q: 'بخش دوم نام علمی چه چیزی را نشان می‌دهد؟', correct: 'گونه', pool: ['گونه', 'سرده', 'خانواده', 'راسته'] },
    { q: 'مالاریا توسط چه چیزی منتقل می‌شود؟', correct: 'پشه', pool: ['پشه', 'مگس', 'کنه', 'کک'] },
    { q: 'میکوریزا چیست؟', correct: 'همزیستی قارچ با ریشه گیاه', pool: ['همزیستی قارچ با ریشه گیاه', 'نوعی قارچ سمی', 'نوعی باکتری', 'نوعی جلبک'] },
    { q: 'پستانداران چه ویژگی دارند؟', correct: 'بچه می‌زایند و شیر می‌دهند', pool: ['بچه می‌زایند و شیر می‌دهند', 'تخم می‌گذارند', 'آبشش دارند', 'پر دارند'] },
    { q: 'پرندگان چه ویژگی دارند؟', correct: 'پر دارند، تخم می‌گذارند', pool: ['پر دارند، تخم می‌گذارند', 'مو دارند', 'شیر می‌دهند', 'آبشش دارند'] },
    { q: 'کدام گروه گیاهان ساده‌ترند؟', correct: 'خزه‌ها', pool: ['خزه‌ها', 'سرخس‌ها', 'کاج', 'گل'] },
    { q: 'کدام گروه گیاهان، گل دارند؟', correct: 'نهاندانگان', pool: ['نهاندانگان', 'بازدانگان', 'سرخس‌ها', 'خزه‌ها'] },
    { q: 'کدام گروه از بی‌مهرگان است؟', correct: 'حشرات', pool: ['حشرات', 'ماهی‌ها', 'پرندگان', 'پستانداران'] }
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
  // تب ۳: سلسله‌ها
  // ============================================================
  const kingdomsList = document.getElementById('kingdomsList');
  let currentKingdom = 'monera';

  function renderKingdoms(type) {
    kingdomsList.innerHTML = '';
    kingdoms[type].forEach(p => {
      const card = document.createElement('div');
      card.className = 'prop-card';
      card.innerHTML = `
        <div class="prop-icon">${p.icon}</div>
        <div class="prop-title">${p.title}</div>
        <div class="prop-desc">${p.desc}</div>
      `;
      kingdomsList.appendChild(card);
    });
  }

  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentKingdom = tab.dataset.type;
      renderKingdoms(currentKingdom);
    };
  });

  renderKingdoms('monera');

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
  document.querySelectorAll('.prop-card, .option-btn, .motel-tab, .name-card, .hierarchy-item').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();