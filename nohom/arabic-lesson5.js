// ============================================================
// درس ۵ عربی نهم — ترجمه متن
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده‌ها: متن‌های کوتاه با ترجمه
  // ============================================================
  const texts = [
    {
      id: 1,
      title: "العِلمُ نورٌ",
      arabic: "العِلمُ نورٌ وَ الجَهلُ ظَلامٌ.",
      translation: "دانش نور است و نادانی تاریکی.",
      wordByWord: "العِلمُ (دانش) + نورٌ (نور است) + وَ (و) + الجَهلُ (نادانی) + ظَلامٌ (تاریکی)"
    },
    {
      id: 2,
      title: "الطّالِبُ المُجتَهِدُ",
      arabic: "الطّالِبُ المُجتَهِدُ يَنجَحُ في الدَّرسِ.",
      translation: "دانش‌آموز تلاشگر در درس موفق می‌شود.",
      wordByWord: "الطّالِبُ (دانش‌آموز) + المُجتَهِدُ (تلاشگر) + يَنجَحُ (موفق می‌شود) + في (در) + الدَّرسِ (درس)"
    },
    {
      id: 3,
      title: "أُمّي",
      arabic: "أُمّي تُحِبُّني وَ أُحِبُّها.",
      translation: "مادرم مرا دوست دارد و من او را دوست دارم.",
      wordByWord: "أُمّي (مادرم) + تُحِبُّ (دوست دارد) + ني (مرا) + وَ (و) + أُحِبُّ (دوست دارم) + ها (او را)"
    },
    {
      id: 4,
      title: "في المَدرَسَةِ",
      arabic: "نَحنُ نَتَعَلَّمُ العُلومَ في المَدرَسَةِ.",
      translation: "ما در مدرسه علوم را یاد می‌گیریم.",
      wordByWord: "نَحنُ (ما) + نَتَعَلَّمُ (یاد می‌گیریم) + العُلومَ (علوم را) + في (در) + المَدرَسَةِ (مدرسه)"
    },
    {
      id: 5,
      title: "الوَداعُ",
      arabic: "قالَ المُعَلِّمُ: السَّلامُ عَلَيكُم يا تَلاميذي.",
      translation: "معلم گفت: سلام بر شما ای شاگردانم.",
      wordByWord: "قالَ (گفت) + المُعَلِّمُ (معلم) + السَّلامُ (سلام) + عَلَيكُم (بر شما) + يا (ای) + تَلاميذي (شاگردانم)"
    },
    {
      id: 6,
      title: "الصَّلاةُ",
      arabic: "الصَّلاةُ عِمادُ الدّينِ.",
      translation: "نماز ستون دین است.",
      wordByWord: "الصَّلاةُ (نماز) + عِمادُ (ستون) + الدّينِ (دین)"
    }
  ];

  // ============================================================
  // واژگان مهم
  // ============================================================
  const vocabulary = [
    { arabic: "عِلم", meaning: "دانش" },
    { arabic: "نور", meaning: "نور" },
    { arabic: "جَهل", meaning: "نادانی" },
    { arabic: "ظَلام", meaning: "تاریکی" },
    { arabic: "طالِب", meaning: "دانش‌آموز" },
    { arabic: "مُجتَهِد", meaning: "تلاشگر" },
    { arabic: "نَجَحَ", meaning: "موفق شد" },
    { arabic: "مَدرَسَة", meaning: "مدرسه" },
    { arabic: "أُم", meaning: "مادر" },
    { arabic: "أَب", meaning: "پدر" },
    { arabic: "مُعَلِّم", meaning: "معلم" },
    { arabic: "تِلميذ", meaning: "شاگرد" },
    { arabic: "كِتاب", meaning: "کتاب" },
    { arabic: "قَلَم", meaning: "قلم" },
    { arabic: "دَرس", meaning: "درس" },
    { arabic: "صَلاة", meaning: "نماز" },
    { arabic: "دين", meaning: "دین" },
    { arabic: "طَريق", meaning: "راه" },
    { arabic: "بَيت", meaning: "خانه" },
    { arabic: "مَدينَة", meaning: "شهر" },
    { arabic: "صَديق", meaning: "دوست" },
    { arabic: "حَياة", meaning: "زندگی" },
    { arabic: "عَمَل", meaning: "کار" },
    { arabic: "وَقت", meaning: "وقت" }
  ];

  // ============================================================
  // جملات برای تمرین و آزمون
  // ============================================================
  const sentences = [
    { ar: "ذَهَبَ الطّالِبُ إِلَى المَدرَسَةِ", fa: "دانش‌آموز به مدرسه رفت" },
    { ar: "يَكتُبُ الوَلَدُ الدَّرسَ", fa: "پسر درس را می‌نویسد" },
    { ar: "العِلمُ نورٌ", fa: "دانش نور است" },
    { ar: "أُمّي تُحِبُّني", fa: "مادرم مرا دوست دارد" },
    { ar: "نَحنُ نَتَعَلَّمُ العُلومَ", fa: "ما علوم را یاد می‌گیریم" },
    { ar: "الصَّلاةُ عِمادُ الدّينِ", fa: "نماز ستون دین است" },
    { ar: "المُعَلِّمُ في الصَّفِّ", fa: "معلم در کلاس است" },
    { ar: "القَلَمُ عَلى الطّاوِلَةِ", fa: "قلم روی میز است" },
    { ar: "أَحِبُّ وَطَني", fa: "میهنم را دوست دارم" },
    { ar: "يَقرَأُ الطّالِبُ الكِتابَ", fa: "دانش‌آموز کتاب را می‌خواند" },
    { ar: "البَيتُ كَبيرٌ", fa: "خانه بزرگ است" },
    { ar: "المَدينَةُ جَميلَةٌ", fa: "شهر زیباست" },
    { ar: "صَديقي مُجتَهِدٌ", fa: "دوستم تلاشگر است" },
    { ar: "الحَياةُ جَميلَةٌ", fa: "زندگی زیباست" },
    { ar: "الوَقتُ كَالسَّيفِ", fa: "وقت مانند شمشیر است" }
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
  // تب ۳: متن‌ها
  // ============================================================
  const textList = document.getElementById('textList');
  const textDetailCard = document.getElementById('textDetailCard');
  const textTitle = document.getElementById('textTitle');
  const arabicTextBox = document.getElementById('arabicTextBox');
  const translationBox = document.getElementById('translationBox');
  const wordByWordBox = document.getElementById('wordByWordBox');

  texts.forEach(text => {
    const card = document.createElement('button');
    card.className = 'text-card';
    card.innerHTML = `<h3>${text.title}</h3><p>${text.arabic.substring(0, 30)}...</p>`;
    card.onclick = () => showText(text, card);
    textList.appendChild(card);
  });

  function showText(text, card) {
    document.querySelectorAll('.text-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    textTitle.textContent = text.title;
    arabicTextBox.innerHTML = text.arabic;
    translationBox.innerHTML = text.translation;
    wordByWordBox.innerHTML = `<strong>کلمه به کلمه:</strong><br>${text.wordByWord}`;

    textDetailCard.style.display = 'block';
    setTimeout(() => textDetailCard.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  }

  // ============================================================
  // تب ۴: واژگان
  // ============================================================
  const vocabGrid = document.getElementById('vocabGrid');
  vocabulary.forEach(v => {
    const card = document.createElement('div');
    card.className = 'vocab-card';
    card.innerHTML = `
      <div class="vocab-arabic">${v.arabic}</div>
      <div class="vocab-meaning">${v.meaning}</div>
    `;
    vocabGrid.appendChild(card);
  });

  // ============================================================
  // ساخت سؤال تصادفی (ترجمه)
  // ============================================================
  function makeQuestion() {
    const s = sentences[Math.floor(Math.random() * sentences.length)];
    const isArToFa = Math.random() < 0.5;

    let questionText, correctAnswer, pool;

    if (isArToFa) {
      questionText = `ترجمه «<b>${s.ar}</b>» چیست؟`;
      correctAnswer = s.fa;
      pool = sentences.map(x => x.fa);
    } else {
      questionText = `کدام جمله عربی معنی «<b>${s.fa}</b>» را می‌دهد؟`;
      correctAnswer = s.ar;
      pool = sentences.map(x => x.ar);
    }

    const options = new Set([correctAnswer]);
    while (options.size < 4) {
      options.add(pool[Math.floor(Math.random() * pool.length)]);
    }

    return {
      correct: correctAnswer,
      options: [...options].sort(() => Math.random() - 0.5),
      questionText
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
  document.querySelectorAll('.text-card, .option-btn, .vocab-card').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();