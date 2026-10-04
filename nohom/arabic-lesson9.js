// ============================================================
// درس ۹ عربی نهم — قواعد پیشرفته
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده‌های مثال‌ها
  // ============================================================
  const examples = {
    marefe: [
      { ar: "كِتابٌ ← الكِتابُ", fa: "کتابی ← کتاب", note: "با «ال» معرفه می‌شود" },
      { ar: "طالِبٌ ← الطّالِبُ", fa: "دانش‌آموزی ← دانش‌آموز", note: "تنوین حذف می‌شود" },
      { ar: "بَيتٌ ← البَيتُ", fa: "خانه‌ای ← خانه", note: "معرفه با «ال»" },
      { ar: "مُعَلِّمٌ ← المُعَلِّمُ", fa: "معلمی ← معلم", note: "دو حالت اسم" },
      { ar: "قَلَمٌ ← القَلَمُ", fa: "قلمی ← قلم", note: "نکره ← معرفه" },
      { ar: "مَدرَسَةٌ ← المَدرَسَةُ", fa: "مدرسه‌ای ← مدرسه", note: "مؤنث با تاء" }
    ],
    ezafe: [
      { ar: "كِتابُ الطّالِبِ", fa: "کتاب دانش‌آموز", note: "مضاف: كِتابُ | مضاف‌الیه: الطّالِبِ" },
      { ar: "بابُ المَدرَسَةِ", fa: "درِ مدرسه", note: "مضاف بدون ال" },
      { ar: "قَلَمُ المُعَلِّمِ", fa: "قلم معلم", note: "ترکیب اضافی" },
      { ar: "دارُ العِلمِ", fa: "خانه دانش", note: "مضاف‌الیه معرفه" },
      { ar: "وَقتُ الصَّلاةِ", fa: "وقت نماز", note: "دو اسم با هم" },
      { ar: "رَأيُ الأُستاذِ", fa: "نظر استاد", note: "مضاف‌الیه مجرور" }
    ],
    sifat: [
      { ar: "طالِبٌ مُجتَهِدٌ", fa: "دانش‌آموز تلاشگر", note: "هر دو نکره" },
      { ar: "بَيتٌ كَبيرٌ", fa: "خانه بزرگ", note: "موصوف + صفت" },
      { ar: "الطّالِبُ المُجتَهِدُ", fa: "دانش‌آموز تلاشگر", note: "هر دو معرفه" },
      { ar: "المَدينَةُ الجَميلَةُ", fa: "شهر زیبا", note: "مؤنث — هردو با ال" },
      { ar: "رَجُلٌ عالِمٌ", fa: "مردی دانا", note: "مذکر نکره" },
      { ar: "طَريقٌ طَويلٌ", fa: "راه طولانی", note: "صفت بعد از موصوف" }
    ],
    esmiye: [
      { ar: "العِلمُ نورٌ", fa: "دانش نور است", note: "مبتدا: العِلمُ | خبر: نورٌ" },
      { ar: "الطَّبيعَةُ جَميلَةٌ", fa: "طبیعت زیباست", note: "جمله اسمیه ساده" },
      { ar: "هُوَ طالِبٌ", fa: "او دانش‌آموز است", note: "مبتدا ضمیر" },
      { ar: "المُعَلِّمُ حاضِرٌ", fa: "معلم حاضر است", note: "خبر مشتق" },
      { ar: "البَيتُ كَبيرٌ", fa: "خانه بزرگ است", note: "مبتدا معرفه" },
      { ar: "الصَّلاةُ عِمادُ الدّينِ", fa: "نماز ستون دین است", note: "خبر اضافه" }
    ]
  };

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    // معرفه و نکره
    { q: 'کدام کلمه «نکره» است؟', correct: 'كِتابٌ', pool: ['كِتابٌ', 'الكِتابُ', 'كِتابُ الطّالِبِ', 'هذا الكِتابُ'] },
    { q: 'کدام کلمه «معرفه» است؟', correct: 'المَدرَسَةُ', pool: ['المَدرَسَةُ', 'مَدرَسَةٌ', 'مَدرَسَةُ وَلَدٍ', 'مَدرَسَتانِ'] },
    { q: 'راه معرفه کردن اسم چیست؟', correct: 'افزودن «ال»', pool: ['افزودن «ال»', 'افزودن تنوین', 'افزودن «ـة»', 'افزودن حرف جر'] },

    // اضافه
    { q: 'در «كِتابُ الطّالِبِ» مضاف کدام است؟', correct: 'كِتابُ', pool: ['كِتابُ', 'الطّالِبِ', 'كِتابُ الطّالِبِ', 'ال'] },
    { q: 'در «كِتابُ الطّالِبِ» مضاف‌الیه کدام است؟', correct: 'الطّالِبِ', pool: ['الطّالِبِ', 'كِتابُ', 'كِتابُ الطّالِبِ', 'كِتاب'] },
    { q: 'کدام ترکیب اضافی درست است؟', correct: 'بابُ المَدرَسَةِ', pool: ['بابُ المَدرَسَةِ', 'البابُ المَدرَسَةِ', 'بابٌ المَدرَسَةُ', 'البابُ مَدرَسَةٌ'] },
    { q: 'مضاف هرگز چه چیزی نمی‌گیرد؟', correct: '«ال»', pool: ['«ال»', 'تنوین', 'ضمه', 'حرف جر'] },

    // موصوف و صفت
    { q: 'در «طالِبٌ مُجتَهِدٌ» موصوف کدام است؟', correct: 'طالِبٌ', pool: ['طالِبٌ', 'مُجتَهِدٌ', 'طالِبٌ مُجتَهِدٌ', 'هیچکدام'] },
    { q: 'در «طالِبٌ مُجتَهِدٌ» صفت کدام است؟', correct: 'مُجتَهِدٌ', pool: ['مُجتَهِدٌ', 'طالِبٌ', 'طالِبٌ مُجتَهِدٌ', 'هیچکدام'] },
    { q: 'موصوف و صفت در کدام مورد هماهنگ نیستند؟', correct: 'طالِبٌ المُجتَهِدُ', pool: ['طالِبٌ المُجتَهِدُ', 'طالِبٌ مُجتَهِدٌ', 'الطّالِبُ المُجتَهِدُ', 'الطّالِبَةُ المُجتَهِدَةُ'] },
    { q: 'در «بَيتٌ كَبيرٌ» صفت کدام است؟', correct: 'كَبيرٌ', pool: ['كَبيرٌ', 'بَيتٌ', 'بَيتٌ كَبيرٌ', 'هیچکدام'] },

    // جمله اسمیه
    { q: 'در «العِلمُ نورٌ» مبتدا کدام است؟', correct: 'العِلمُ', pool: ['العِلمُ', 'نورٌ', 'العِلمُ نورٌ', 'هیچکدام'] },
    { q: 'در «العِلمُ نورٌ» خبر کدام است؟', correct: 'نورٌ', pool: ['نورٌ', 'العِلمُ', 'العِلمُ نورٌ', 'هیچکدام'] },
    { q: 'در «الطَّبيعَةُ جَميلَةٌ» خبر کدام است؟', correct: 'جَميلَةٌ', pool: ['جَميلَةٌ', 'الطَّبيعَةُ', 'الطَّبيعَةُ جَميلَةٌ', 'هیچکدام'] },
    { q: 'در «هُوَ طالِبٌ» مبتدا کدام است؟', correct: 'هُوَ', pool: ['هُوَ', 'طالِبٌ', 'هُوَ طالِبٌ', 'هیچکدام'] },
    { q: 'جمله اسمیه با چه چیزی شروع می‌شود؟', correct: 'اسم', pool: ['اسم', 'فعل', 'حرف', 'ضمیر'] },

    // معنی
    { q: 'معنی «كِتابُ الطّالِبِ» چیست؟', correct: 'کتاب دانش‌آموز', pool: ['کتاب دانش‌آموز', 'دانش‌آموز کتاب', 'کتابی برای دانش‌آموز', 'دانش‌آموزِ کتاب'] },
    { q: 'معنی «العِلمُ نورٌ» چیست؟', correct: 'دانش نور است', pool: ['دانش نور است', 'نور دانش است', 'دانا نور است', 'دانش در نور'] },
    { q: 'معنی «طالِبٌ مُجتَهِدٌ» چیست؟', correct: 'دانش‌آموز تلاشگر', pool: ['دانش‌آموز تلاشگر', 'تلاشگر دانش‌آموز', 'دانش‌آموزی تلاشگر', 'دانش‌آموز و تلاشگر'] }
  ];

  // ============================================================
  // تب‌ها
  // ============================================================
  document.querySelectorAll('.lesson-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.lesson-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.lesson-section').forEach(s => s.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector(`.lesson-section[data-section="${tab.dataset.tab}"]`).classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  });

  // ============================================================
  // تب ۳: مثال‌ها
  // ============================================================
  const exampleList = document.getElementById('exampleList');
  let currentType = 'marefe';

  function renderExamples(type) {
    exampleList.innerHTML = '';
    examples[type].forEach(ex => {
      const card = document.createElement('div');
      card.className = 'example-card';
      card.innerHTML = `
        <div class="example-arabic">${ex.ar}</div>
        <div class="example-meaning">${ex.fa}</div>
        <div class="example-note">${ex.note}</div>
      `;
      exampleList.appendChild(card);
    });
  }

  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentType = tab.dataset.type;
      renderExamples(currentType);
    };
  });

  renderExamples('marefe');

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
    quizQuestion.innerHTML = qCurrent.questionText;

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
  document.querySelectorAll('.review-card, .option-btn, .example-card, .motel-tab').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();