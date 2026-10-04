// ============================================================
// فصل ۷ ریاضی — هندسه (تشابه و تالس)
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده تشابه
  // ============================================================
  const similar = {
    concept: [
      { icon: '🔷', title: 'تشابه چیست؟', desc: 'دو شکل هم‌شکل ولی با اندازه‌های متفاوت.' },
      { icon: '📌', title: 'شرط تشابه', desc: 'زوایای متناظر برابر + اضلاع متناظر متناسب' },
      { icon: '△', title: 'علامت تشابه', desc: '∼  (مثال: △ABC ∼ △DEF)' },
      { icon: '📏', title: 'نسبت تشابه', desc: 'نسبت اضلاع متناظر — مثلاً ۱:۲ یا ۲:۳' },
      { icon: '🎯', title: 'مثال روزمره', desc: 'نقشه و ساختمان واقعی' },
      { icon: '💡', title: 'نکته', desc: 'تشابه با تساوی فرق دارد — تساوی یعنی همه چیز یکسان.' }
    ],
    cases: [
      { icon: 'ز ز', title: 'حالت زز (دو زاویه)', desc: 'اگر دو زاویه از دو مثلث برابر باشند، متشابه‌اند.' },
      { icon: 'ض ز ض', title: 'حالت ضزض (دو ضلع و زاویه بین)', desc: 'اگر دو ضلع متناسب و زاویه بین برابر باشند.' },
      { icon: 'ض ض ض', title: 'حالت ضضض (سه ضلع)', desc: 'اگر سه ضلع متناسب باشند، متشابه‌اند.' },
      { icon: '🎯', title: 'حالت رایج', desc: 'زز رایج‌ترین حالت در حل مسائل است.' },
      { icon: '💡', title: 'نکته', desc: 'در هر سه حالت، مثلث‌ها متشابه‌اند.' },
      { icon: '📐', title: 'کاربرد', desc: 'برای محاسبه ارتفاع ساختمان، فاصله غیرقابل اندازه‌گیری.' }
    ],
    ratio: [
      { icon: '📏', title: 'نسبت اضلاع', desc: 'AB/DE = BC/EF = AC/DF' },
      { icon: '📐', title: 'نسبت محیط', desc: 'محیط‌ها به همان نسبت اضلاع هستند.' },
      { icon: '📊', title: 'نسبت مساحت', desc: 'مساحت‌ها به مربع نسبت تشابه هستند.' },
      { icon: '🎯', title: 'مثال ۱', desc: 'اگر نسبت اضلاع ۱:۲ باشد، نسبت مساحت‌ها ۱:۴ است.' },
      { icon: '🎯', title: 'مثال ۲', desc: 'اگر نسبت اضلاع ۲:۳ باشد، نسبت مساحت‌ها ۴:۹ است.' },
      { icon: '💡', title: 'کاربرد', desc: 'برای محاسبه مساحت شکل‌های بزرگ با استفاده از کوچک.' }
    ]
  };

  // ============================================================
  // داده قضیه تالس
  // ============================================================
  const thales = {
    statement: [
      { icon: '📝', title: 'صورت قضیه تالس', desc: 'اگر خطی موازی یک ضلع مثلث رسم شود و دو ضلع دیگر را قطع کند، پاره‌های متناظر متناسب می‌شوند.' },
      { icon: '△', title: 'شکل', desc: '△ABC با خط موازی BC به نام DE' },
      { icon: '📏', title: 'نسبت', desc: 'AD/DB = AE/EC' },
      { icon: '📐', title: 'نسبت دیگر', desc: 'AD/AB = AE/AC = DE/BC' },
      { icon: '💡', title: 'نام دیگر', desc: 'قضیه تقسیم اضلاع مثلث' },
      { icon: '🎓', title: 'کاربرد', desc: 'اثبات تشابه، محاسبه طول‌های ناشناخته.' }
    ],
    example: [
      { icon: '🎯', title: 'مثال ۱', desc: 'در △ABC، DE ∥ BC. اگر AD=2، DB=3، AE=4، EC چقدر است؟' },
      { icon: '📝', title: 'حل ۱', desc: 'AD/DB = AE/EC → 2/3 = 4/EC → EC = 6' },
      { icon: '🎯', title: 'مثال ۲', desc: 'در △ABC، DE ∥ BC. اگر AD=3، AB=5، AE=4، AC چقدر است؟' },
      { icon: '📝', title: 'حل ۲', desc: 'AD/AB = AE/AC → 3/5 = 4/AC → AC = 20/3 ≈ 6.67' },
      { icon: '🎯', title: 'مثال ۳', desc: 'AD=4، DB=2، AE=6، EC=3 → بررسی تالس' },
      { icon: '📝', title: 'حل ۳', desc: '4/2 = 6/3 = 2 ✓ پس DE ∥ BC' }
    ],
    uses: [
      { icon: '🏔️', title: 'اندازه‌گیری ارتفاع کوه', desc: 'با استفاده از سایه و قضیه تالس.' },
      { icon: '🏛️', title: 'محاسبه ارتفاع ساختمان', desc: 'بدون نیاز به بالا رفتن.' },
      { icon: '🌉', title: 'ساخت پل', desc: 'محاسبه طول‌های مورد نیاز.' },
      { icon: '📐', title: 'نقشه‌برداری', desc: 'اندازه‌گیری فاصله‌های غیرقابل دسترسی.' },
      { icon: '🎯', title: 'مسائل مثلثی', desc: 'پیدا کردن طول پاره‌های متناظر.' },
      { icon: '💡', title: 'نکته', desc: 'تالس یکی از مهم‌ترین قضیه‌های هندسه است.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    // تشابه
    { q: 'دو مثلث متشابه چه ویژگی دارند؟', correct: 'زوایای برابر و اضلاع متناسب', pool: ['زوایای برابر و اضلاع متناسب', 'فقط زوایای برابر', 'فقط اضلاع برابر', 'همه چیز برابر'] },
    { q: 'علامت تشابه چیست؟', correct: '∼', pool: ['∼', '≅', '=', '∥'] },
    { q: 'حالات تشابه مثلث‌ها چندتا هستند؟', correct: '۳', pool: ['۳', '۲', '۴', '۵'] },
    { q: 'حالت زز یعنی چه؟', correct: 'دو زاویه برابر', pool: ['دو زاویه برابر', 'دو ضلع برابر', 'سه ضلع برابر', 'دو ضلع متناسب'] },
    { q: 'حالت ضضض یعنی چه؟', correct: 'سه ضلع متناسب', pool: ['سه ضلع متناسب', 'سه زاویه برابر', 'سه ضلع برابر', 'دو زاویه برابر'] },
    { q: 'در دو مثلث متشابه با نسبت اضلاع ۱:۲، نسبت مساحت‌ها چقدر است؟', correct: '۱:۴', pool: ['۱:۴', '۱:۲', '۲:۴', '۱:۱'] },
    { q: 'در دو مثلث متشابه با نسبت اضلاع ۲:۳، نسبت مساحت‌ها چقدر است؟', correct: '۴:۹', pool: ['۴:۹', '۲:۳', '۴:۶', '۸:۲۷'] },

    // تالس
    { q: 'قضیه تالس درباره چیست؟', correct: 'خط موازی یک ضلع مثلث', pool: ['خط موازی یک ضلع مثلث', 'دایره', 'مربع', 'کره'] },
    { q: 'در قضیه تالس، AD/DB = ؟', correct: 'AE/EC', pool: ['AE/EC', 'AD/AE', 'DB/EC', 'DE/BC'] },
    { q: 'در △ABC، DE ∥ BC. اگر AD=2، DB=3، AE=4، EC چقدر است؟', correct: '۶', pool: ['۶', '۵', '۳', '۲'] },
    { q: 'در △ABC، DE ∥ BC. اگر AD=3، AB=5، AE=4، AC چقدر است؟', correct: '۲۰/۳', pool: ['۲۰/۳', '۵', '۶', '۸'] },
    { q: 'در △ABC، DE ∥ BC. اگر AD=4، DB=2، AE=6، EC چقدر است؟', correct: '۳', pool: ['۳', '۴', '۲', '۶'] },
    { q: 'اگر AD=3، DB=6، AE=2، EC=4، آیا DE ∥ BC است؟', correct: 'بله', pool: ['بله', 'خیر', 'شاید', 'نامشخص'] },
    { q: 'اگر AD=2، DB=5، AE=3، EC=4، آیا DE ∥ BC است؟', correct: 'خیر', pool: ['خیر', 'بله', 'شاید', 'نامشخص'] },
    { q: 'قضیه تالس به چه نام دیگری معروف است؟', correct: 'تقسیم اضلاع مثلث', pool: ['تقسیم اضلاع مثلث', 'نسبت طلایی', 'فیثاغورس', 'تشابه مثلث'] },
    { q: 'کاربرد اصلی قضیه تالس چیست؟', correct: 'محاسبه طول‌های ناشناخته', pool: ['محاسبه طول‌های ناشناخته', 'رسم دایره', 'محاسبه حجم', 'محاسبه زاویه'] },

    // مثلث
    { q: 'مجموع زوایای مثلث چقدر است؟', correct: '۱۸۰ درجه', pool: ['۱۸۰ درجه', '۹۰ درجه', '۲۷۰ درجه', '۳۶۰ درجه'] },
    { q: 'مثلث متساوی‌الاضلاع چند درجه هر زاویه؟', correct: '۶۰', pool: ['۶۰', '۹۰', '۴۵', '۱۲۰'] },
    { q: 'در مثلث قائم‌الزاویه یک زاویه چند درجه است؟', correct: '۹۰', pool: ['۹۰', '۶۰', '۴۵', '۱۸۰'] },
    { q: 'مساحت مثلث چگونه محاسبه می‌شود؟', correct: '(قاعده × ارتفاع) ÷ ۲', pool: ['(قاعده × ارتفاع) ÷ ۲', 'قاعده × ارتفاع', 'قاعده + ارتفاع', '(قاعده + ارتفاع) × ۲'] },
    { q: 'فیثاغورس در کدام مثلث برقرار است؟', correct: 'قائم‌الزاویه', pool: ['قائم‌الزاویه', 'متساوی‌الاضلاع', 'متساوی‌الساقین', 'هر مثلثی'] },
    { q: 'در مثلث قائم‌الزاویه با ضلع‌های ۳ و ۴، وتر چقدر است؟', correct: '۵', pool: ['۵', '۷', '۱۲', '۶'] },
    { q: 'در مثلث قائم‌الزاویه با ضلع‌های ۵ و ۱۲، وتر چقدر است؟', correct: '۱۳', pool: ['۱۳', '۱۷', '۶۰', '۱۵'] },

    // حل‌های متنوع
    { q: 'اگر AD=6، DB=4، AE=9، AC چقدر است؟', correct: '۱۵', pool: ['۱۵', '۱۳', '۶', '۴'] },
    { q: 'اگر نسبت تشابه دو مثلث ۳:۴ باشد، نسبت محیط‌ها چقدر است؟', correct: '۳:۴', pool: ['۳:۴', '۹:۱۶', '۳:۸', '۶:۸'] }
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
  const similarList = document.getElementById('similarList');
  const thalesList = document.getElementById('thalesList');

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

      if (section === 'similar') {
        renderCards(similarList, similar[type]);
      } else if (section === 'thales') {
        renderCards(thalesList, thales[type]);
      }
    };
  });

  renderCards(similarList, similar.concept);
  renderCards(thalesList, thales.statement);

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