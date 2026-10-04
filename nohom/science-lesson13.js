// ============================================================
// فصل ۱۳ علوم — جانوران بی‌مهره
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده گروه‌های بی‌مهرگان
  // ============================================================
  const groups = {
    arthropod: [
      { icon: '🐝', title: 'حشرات', desc: '۶ پا، بدن ۳ بخش، معمولاً بال دارند — متنوع‌ترین گروه جانوران.' },
      { icon: '🕷️', title: 'عنکبوتیان', desc: '۸ پا، بدن ۲ بخش — عنکبوت، عقرب، کنه.' },
      { icon: '🦀', title: 'سخت‌پوستان', desc: 'بدن سخت‌پوش — خرچنگ، میگو، خرخاکی.' },
      { icon: '🐛', title: 'هزارپایان', desc: 'پاهای بسیار زیاد — هزارپا، صدپا.' },
      { icon: '🦐', title: 'آبزیان کوچک', desc: 'دافنی، کیک‌آب — غذای ماهی‌ها.' },
      { icon: '🦗', title: 'تنوع', desc: 'بندپایان بیشترین تعداد گونه را در بین جانوران دارند.' }
    ],
    mollusk: [
      { icon: '🐌', title: 'حلزون', desc: 'صدف مارپیچی — در خشکی و آب.' },
      { icon: '🐚', title: 'صدف‌ها', desc: 'دو کفه‌ای — مثل صدف خوراکی.' },
      { icon: '🐙', title: 'اختاپوس', desc: '۸ بازو، هوشمند، بدون صدف.' },
      { icon: '🦑', title: 'ماهی مرکب', desc: '۱۰ بازو، داخل دریا زندگی می‌کند.' },
      { icon: '🐌', title: 'لیسه', desc: 'حلزون بدون صدف — در باغ.' },
      { icon: '🦪', title: 'ویژگی', desc: 'بدن نرم، اغلب صدف آهکی، غالباً آبزی.' }
    ],
    worm: [
      { icon: '🪱', title: 'کرم خاکی', desc: 'در خاک زندگی می‌کند، خاک را حاصلخیز می‌کند.' },
      { icon: '🪱', title: 'پلاناریا', desc: 'کرم پهن آبزی — توانایی بازسازی دارد.' },
      { icon: '🪱', title: 'کرم کدو', desc: 'انگل روده — از غذای هضم‌شده میزبان تغذیه می‌کند.' },
      { icon: '🪱', title: 'زالو', desc: 'انگل خارجی — خون می‌خورد. در پزشکی استفاده می‌شود.' },
      { icon: '🪱', title: 'کرم لوله‌ای', desc: 'بدن لوله‌ای، در خاک و آب.' },
      { icon: '🪱', title: 'ویژگی', desc: 'بدن نرم و کشیده، بدون پا، بدون اسکلت سخت.' }
    ],
    other: [
      { icon: '🧽', title: 'اسفنج دریایی', desc: 'ساده‌ترین جانور — چسبیده به کف دریا، بدون اندام.' },
      { icon: '🎐', title: 'عروس دریایی', desc: 'کیسه‌ای با بازوهای نیش‌زننده — در دریا.' },
      { icon: '🪸', title: 'مرجان', desc: 'چسبیده به کف دریا، صخره می‌سازد.' },
      { icon: '⭐', title: 'ستاره دریایی', desc: 'تقارن ۵ گانه، بازوهای زیاد، در کف دریا.' },
      { icon: '🥒', title: 'خیار دریایی', desc: 'بدن کشیده و خاردار — در کف دریا.' },
      { icon: '🌊', title: 'خارپوستان', desc: 'بدن خاردار، تقارن ۵ گانه — همه آبزی.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'بی‌مهرگان چه جانورانی هستند؟', correct: 'بدون ستون فقرات', pool: ['بدون ستون فقرات', 'با ستون فقرات', 'فقط آبزی', 'فقط خشکی'] },
    { q: 'چند درصد جانوران بی‌مهره هستند؟', correct: 'حدود ۹۵٪', pool: ['حدود ۹۵٪', 'حدود ۵۰٪', 'حدود ۲۵٪', 'حدود ۷۵٪'] },
    { q: 'حشرات چند پا دارند؟', correct: '۶', pool: ['۶', '۸', '۱۰', '۴'] },
    { q: 'عنکبوتیان چند پا دارند؟', correct: '۸', pool: ['۸', '۶', '۱۰', '۴'] },
    { q: 'بدن حشرات چند بخش دارد؟', correct: '۳', pool: ['۳', '۲', '۴', '۵'] },
    { q: 'بدن عنکبوتیان چند بخش دارد؟', correct: '۲', pool: ['۲', '۳', '۴', '۵'] },
    { q: 'کدام گروه پاهای بسیار زیاد دارند؟', correct: 'هزارپایان', pool: ['هزارپایان', 'حشرات', 'عنکبوتیان', 'سخت‌پوستان'] },
    { q: 'کدام یک حشره است؟', correct: 'پروانه', pool: ['پروانه', 'عنکبوت', 'عقرب', 'خرچنگ'] },
    { q: 'کدام یک عنکبوتی است؟', correct: 'عقرب', pool: ['عقرب', 'پروانه', 'زنبور', 'مورچه'] },
    { q: 'کدام یک سخت‌پوست است؟', correct: 'خرچنگ', pool: ['خرچنگ', 'عنکبوت', 'زنبور', 'مورچه'] },
    { q: 'حلزون در کدام گروه است؟', correct: 'نرم‌تنان', pool: ['نرم‌تنان', 'بندپایان', 'کرم‌ها', 'خارپوستان'] },
    { q: 'اختاپوس چند بازو دارد؟', correct: '۸', pool: ['۸', '۶', '۱۰', '۴'] },
    { q: 'کرم خاکی چه نقشی در طبیعت دارد؟', correct: 'حاصلخیز کردن خاک', pool: ['حاصلخیز کردن خاک', 'گرده‌افشانی', 'تولید عسل', 'شکار حشرات'] },
    { q: 'ستاره دریایی در کدام گروه است؟', correct: 'خارپوستان', pool: ['خارپوستان', 'نرم‌تنان', 'بندپایان', 'کرم‌ها'] },
    { q: 'عروس دریایی در کدام گروه است؟', correct: 'کیسه‌تنان', pool: ['کیسه‌تنان', 'خارپوستان', 'نرم‌تنان', 'بندپایان'] },
    { q: 'کدام گروه ساده‌ترین جانوران هستند؟', correct: 'اسفنج‌ها', pool: ['اسفنج‌ها', 'کیسه‌تنان', 'کرم‌ها', 'بندپایان'] },
    { q: 'زنبور چه کمکی به گیاهان می‌کند؟', correct: 'گرده‌افشانی', pool: ['گرده‌افشانی', 'تجزیه', 'آبیاری', 'کوددهی'] },
    { q: 'کدام بی‌مهره بیماری منتقل می‌کند؟', correct: 'پشه', pool: ['پشه', 'زنبور', 'پروانه', 'کرم خاکی'] },
    { q: 'کرم کدو چه نوع جانوری است؟', correct: 'انگل', pool: ['انگل', 'شکارچی', 'گیاه‌خوار', 'تجزیه‌کننده'] },
    { q: 'زالو در کدام گروه است؟', correct: 'کرم‌ها', pool: ['کرم‌ها', 'بندپایان', 'نرم‌تنان', 'خارپوستان'] },
    { q: 'کدام بی‌مهره در پزشکی استفاده می‌شود؟', correct: 'زالو', pool: ['زالو', 'مورچه', 'پروانه', 'حلزون'] },
    { q: 'کدام یک از بی‌مهرگان نیست؟', correct: 'مار', pool: ['مار', 'عنکبوت', 'حلزون', 'کرم'] },
    { q: 'کدام بی‌مهره عسل تولید می‌کند؟', correct: 'زنبور عسل', pool: ['زنبور عسل', 'مورچه', 'پروانه', 'سوسک'] },
    { q: 'بندپایان چه ویژگی مشترکی دارند؟', correct: 'پاهای بندبند و اسکلت خارجی', pool: ['پاهای بندبند و اسکلت خارجی', 'بدن نرم', 'بدون پا', 'فقط آبزی'] },
    { q: 'نرم‌تنان چه ویژگی مشترکی دارند؟', correct: 'بدن نرم', pool: ['بدن نرم', 'پاهای بندبند', 'اسکلت خارجی', 'خار'] },
    { q: 'خارپوستان چه ویژگی دارند؟', correct: 'بدن خاردار، تقارن ۵ گانه', pool: ['بدن خاردار، تقارن ۵ گانه', 'بدن نرم', '۶ پا', 'بدون تقارن'] }
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
  // تب ۲: گروه‌ها
  // ============================================================
  const groupsList = document.getElementById('groupsList');
  let currentGroup = 'arthropod';

  function renderGroups(type) {
    groupsList.innerHTML = '';
    groups[type].forEach(p => {
      const card = document.createElement('div');
      card.className = 'prop-card';
      card.innerHTML = `
        <div class="prop-icon">${p.icon}</div>
        <div class="prop-title">${p.title}</div>
        <div class="prop-desc">${p.desc}</div>
      `;
      groupsList.appendChild(card);
    });
  }

  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentGroup = tab.dataset.type;
      renderGroups(currentGroup);
    };
  });

  renderGroups('arthropod');

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
  document.querySelectorAll('.prop-card, .option-btn, .motel-tab, .compare-card').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();