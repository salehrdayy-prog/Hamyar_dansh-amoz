// ============================================================
// درس ۴ نقاشی — طراحی چهره
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده اجزای صورت
  // ============================================================
  const parts = {
    eyes: [
      { visual: '👁️', title: 'شکل چشم', desc: 'چشم مثل یک بادام است. از دو کمان (بالا و پایین) تشکیل می‌شود.' },
      { visual: '◉', title: 'مردمک', desc: 'دایره‌ی سیاه وسط چشم. داخلش یک نقطه سفید برای نور.' },
      { visual: '👁️◯', title: 'عنبیه', desc: 'دایره‌ی رنگی دور مردمک. رنگ چشم به این بستگی دارد.' },
      { visual: '〰️', title: 'پلک', desc: 'خط بالای چشم. ضخیم‌تر از خط پایین است.' },
      { visual: '👁️👁️', title: 'فاصله چشم‌ها', desc: 'به اندازه یک چشم بین دو چشم فاصله بگذار.' },
      { visual: '✨', title: 'برق چشم', desc: 'نقطه سفید ریز که به چشم زندگی می‌دهد.' }
    ],
    nose: [
      { visual: '△', title: 'شکل پایه', desc: 'بینی از یک مثلث ساده شروع می‌شود.' },
      { visual: '👃', title: 'تیغه بینی', desc: 'خط میانی بینی از بالای بینی تا نوک کشیده می‌شود.' },
      { visual: '◯', title: 'پره‌های بینی', desc: 'دو دایره کوچک در پایین بینی.' },
      { visual: '⩕', title: 'نوک بینی', desc: 'گرد و نرم. از دو طرف به پره‌ها وصل می‌شود.' },
      { visual: '👃', title: 'سایه بینی', desc: 'سمت مخالف نور را سایه بزن تا بینی حجم بگیرد.' },
      { visual: '◯◯', title: 'سوراخ‌های بینی', desc: 'در پایین، دو نقطه کوچک تیره.' }
    ],
    mouth: [
      { visual: '👄', title: 'شکل لب', desc: 'لب از دو قسمت ساخته: لب بالا نازک، لب پایین ضخیم‌تر.' },
      { visual: '〰️', title: 'خط وسط لب', desc: 'خطی که لب بالا و پایین را جدا می‌کند.' },
      { visual: '😊', title: 'حالت لب', desc: 'برای لبخند، گوشه‌ها را بالا ببر.' },
      { visual: '˘', title: 'فرورفتگی', desc: 'بالای لب یک فرورفتگی کوچک (کمان کوپید) دارد.' },
      { visual: '👄', title: 'سایه لب', desc: 'زیر لب پایین سایه بزن.' },
      { visual: '😄', title: 'خنده', desc: 'در خنده، دهان باز می‌شود و دندان‌ها دیده می‌شوند.' }
    ],
    ears: [
      { visual: '👂', title: 'جای گوش', desc: 'از خط ابرو تا نوک بینی امتداد دارد.' },
      { visual: '𝓒', title: 'شکل گوش', desc: 'مثل یک C بزرگ با چند خط داخلی.' },
      { visual: '👂', title: 'قسمت بالا', desc: 'پهن‌تر و به سمت بیرون.' },
      { visual: '◯', title: 'نرمه گوش', desc: 'پایین گوش، نرم و گرد.' },
      { visual: '👂', title: 'خطوط داخلی', desc: 'چند خط منحنی داخل گوش.' },
      { visual: '👂👂', title: 'تقارن', desc: 'هر دو گوش در دو طرف صورت به یک اندازه هستند.' }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    { q: 'چشم‌ها در کجای صورت قرار دارند؟', correct: 'وسط صورت', pool: ['وسط صورت', 'بالای صورت', 'پایین صورت', 'کنار صورت'] },
    { q: 'فاصله دو چشم چقدر است؟', correct: 'به اندازه یک چشم', pool: ['به اندازه یک چشم', 'به اندازه دو چشم', 'به اندازه نیم چشم', 'خیلی کم'] },
    { q: 'عرض صورت به اندازه چند چشم است؟', correct: '۵ چشم', pool: ['۵ چشم', '۳ چشم', '۲ چشم', '۷ چشم'] },
    { q: 'فاصله چشم تا ابرو چقدر است؟', correct: 'به اندازه یک چشم', pool: ['به اندازه یک چشم', 'به اندازه نیم چشم', 'به اندازه دو چشم', 'خیلی زیاد'] },
    { q: 'نوک بینی در کجاست؟', correct: 'وسط فاصله چشم تا چانه', pool: ['وسط فاصله چشم تا چانه', 'بالای چشم‌ها', 'روی لب', 'روی چانه'] },
    { q: 'دهان کجاست؟', correct: 'بین بینی و چانه', pool: ['بین بینی و چانه', 'بالای بینی', 'روی چشم', 'روی چانه'] },
    { q: 'گوش‌ها از کجا تا کجا امتداد دارند؟', correct: 'از خط ابرو تا نوک بینی', pool: ['از خط ابرو تا نوک بینی', 'از مو تا چانه', 'از چشم تا لب', 'از گوش تا گوش'] },
    { q: 'عرض بینی به اندازه چیست؟', correct: 'فاصله دو گوشه داخلی چشم', pool: ['فاصله دو گوشه داخلی چشم', 'عرض دهان', 'عرض گوش', 'نصف صورت'] },
    { q: 'شکل چشم شبیه چیست؟', correct: 'بادام', pool: ['بادام', 'مربع', 'دایره کامل', 'مثلث'] },
    { q: 'در مرکز چشم چه چیزی قرار دارد؟', correct: 'مردمک', pool: ['مردمک', 'سفیدی', 'پلک', 'مژه'] },
    { q: 'برق چشم چیست؟', correct: 'نقطه سفید کوچک', pool: ['نقطه سفید کوچک', 'دایره سیاه', 'خط منحنی', 'رنگ چشم'] },
    { q: 'بینی از چه شکلی شروع می‌شود؟', correct: 'مثلث', pool: ['مثلث', 'دایره', 'مربع', 'بیضی'] },
    { q: 'لب بالا نسبت به لب پایین چطور است؟', correct: 'نازک‌تر', pool: ['نازک‌تر', 'ضخیم‌تر', 'برابر', 'نامشخص'] },
    { q: 'در خنده چه اتفاقی می‌افتد؟', correct: 'دهان باز می‌شود و دندان دیده می‌شود', pool: ['دهان باز می‌شود و دندان دیده می‌شود', 'لب‌ها جمع می‌شوند', 'چشم‌ها بسته می‌شوند', 'بینی بزرگ می‌شود'] },
    { q: 'اولین گام طراحی چهره چیست؟', correct: 'کشیدن بیضی صورت', pool: ['کشیدن بیضی صورت', 'کشیدن چشم', 'کشیدن بینی', 'کشیدن دهان'] },
    { q: 'خطوط راهنما چه فایده‌ای دارند؟', correct: 'جای اجزا را مشخص می‌کنند', pool: ['جای اجزا را مشخص می‌کنند', 'زیبایی می‌دهند', 'رنگ می‌دهند', 'فرقی ندارند'] },
    { q: 'با کدام مداد شروع می‌کنیم؟', correct: 'مداد H', pool: ['مداد H', 'مداد B', 'مداد 2B', 'مداد رنگی'] },
    { q: 'سایه بینی کجا زده می‌شود؟', correct: 'سمت مخالف نور', pool: ['سمت مخالف نور', 'سمت نور', 'بالای بینی', 'زیر لب'] },
    { q: 'کدام یک از اجزای صورت نیست؟', correct: 'زانو', pool: ['زانو', 'چشم', 'بینی', 'دهان'] },
    { q: 'تقارن در صورت یعنی چه؟', correct: 'دو طرف صورت مثل هم', pool: ['دو طرف صورت مثل هم', 'صورت گرد', 'صورت کشیده', 'صورت کوچک'] }
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
  // تب ۳: اجزا
  // ============================================================
  const partsList = document.getElementById('partsList');
  let currentType = 'eyes';

  function renderParts(type) {
    partsList.innerHTML = '';
    parts[type].forEach(p => {
      const card = document.createElement('div');
      card.className = 'part-card';
      card.innerHTML = `
        <div class="part-visual">${p.visual}</div>
        <div class="part-title">${p.title}</div>
        <div class="part-desc">${p.desc}</div>
      `;
      partsList.appendChild(card);
    });
  }

  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentType = tab.dataset.type;
      renderParts(currentType);
    };
  });

  renderParts('eyes');

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
  document.querySelectorAll('.part-card, .option-btn, .motel-tab').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();