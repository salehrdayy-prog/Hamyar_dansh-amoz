// ============================================================
// درس ۴ عربی نهم — اسم فاعل و مفعول
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده‌ها
  // ============================================================
  const mojarradVerbs = [
    {
      root: "كَتَبَ", meaning: "نوشتن",
      fael: "كاتِب", faelFa: "نویسنده",
      mafool: "مَكتوب", mafoolFa: "نوشته‌شده"
    },
    {
      root: "عَلِمَ", meaning: "دانستن",
      fael: "عالِم", faelFa: "دانا",
      mafool: "مَعلوم", mafoolFa: "دانسته‌شده"
    },
    {
      root: "نَصَرَ", meaning: "یاری کردن",
      fael: "ناصِر", faelFa: "یاری‌کننده",
      mafool: "مَنصور", mafoolFa: "یاری‌شده"
    },
    {
      root: "فَتَحَ", meaning: "باز کردن",
      fael: "فاتِح", faelFa: "بازکننده",
      mafool: "مَفتوح", mafoolFa: "بازشده"
    },
    {
      root: "سَمِعَ", meaning: "شنیدن",
      fael: "سامِع", faelFa: "شنونده",
      mafool: "مَسموع", mafoolFa: "شنیده‌شده"
    },
    {
      root: "ذَهَبَ", meaning: "رفتن",
      fael: "ذاهِب", faelFa: "رونده",
      mafool: "مَذهوب", mafoolFa: "رفته‌شده"
    }
  ];

  const mazidVerbs = [
    {
      root: "أَرسَلَ", meaning: "فرستاد",
      mozare: "يُرسِلُ",
      fael: "مُرسِل", faelFa: "فرستنده",
      mafool: "مُرسَل", mafoolFa: "فرستاده‌شده"
    },
    {
      root: "عَلَّمَ", meaning: "آموزش داد",
      mozare: "يُعَلِّمُ",
      fael: "مُعَلِّم", faelFa: "آموزگار",
      mafool: "مُعَلَّم", mafoolFa: "آموزش‌دیده"
    },
    {
      root: "أَخرَجَ", meaning: "بیرون آورد",
      mozare: "يُخرِجُ",
      fael: "مُخرِج", faelFa: "بیرون‌آورنده",
      mafool: "مُخرَج", mafoolFa: "بیرون‌آورده"
    },
    {
      root: "أَدخَلَ", meaning: "داخل کرد",
      mozare: "يُدخِلُ",
      fael: "مُدخِل", faelFa: "داخل‌کننده",
      mafool: "مُدخَل", mafoolFa: "داخل‌شده"
    },
    {
      root: "دَرَّسَ", meaning: "درس داد",
      mozare: "يُدَرِّسُ",
      fael: "مُدَرِّس", faelFa: "دبیر",
      mafool: "مُدَرَّس", mafoolFa: "درس‌داده‌شده"
    },
    {
      root: "أَكرَمَ", meaning: "گرامی داشت",
      mozare: "يُكرِمُ",
      fael: "مُكرِم", faelFa: "گرامی‌دارنده",
      mafool: "مُكرَم", mafoolFa: "گرامی‌داشته‌شده"
    }
  ];

  const allVerbs = [
    ...mojarradVerbs.map(v => ({ ...v, type: 'mojarrad' })),
    ...mazidVerbs.map(v => ({ ...v, type: 'mazid' }))
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
  const motelVerbList = document.getElementById('motelVerbList');
  const motelConjCard = document.getElementById('motelConjCard');
  const motelVerbTitle = document.getElementById('motelVerbTitle');
  const motelConjTable = document.getElementById('motelConjTable');
  let currentType = 'mojarrad';

  function renderVerbs(type) {
    motelVerbList.innerHTML = '';
    motelConjCard.style.display = 'none';
    const list = type === 'mojarrad' ? mojarradVerbs : mazidVerbs;
    list.forEach((verb) => {
      const btn = document.createElement('button');
      btn.className = 'verb-btn';
      btn.innerHTML = `${verb.root}<span class="meaning">${verb.meaning}</span>`;
      btn.onclick = () => selectVerb(verb, btn);
      motelVerbList.appendChild(btn);
    });
  }

  function selectVerb(verb, btn) {
    document.querySelectorAll('.verb-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    motelVerbTitle.textContent = `فعل «${verb.root}» (${verb.meaning})`;

    let html = `<div class="table-wrapper"><table class="conj-table">
      <thead><tr>
        <th>#</th>
        <th>نوع</th>
        <th>شکل عربی</th>
        <th>معنی</th>
      </tr></thead><tbody>`;

    html += `<tr>
      <td>۱</td>
      <td class="pronoun">🔵 اسم فاعل</td>
      <td class="arabic">${verb.fael}</td>
      <td class="meaning-cell">${verb.faelFa}</td>
    </tr>`;
    html += `<tr>
      <td>۲</td>
      <td class="pronoun">🟢 اسم مفعول</td>
      <td class="arabic">${verb.mafool}</td>
      <td class="meaning-cell">${verb.mafoolFa}</td>
    </tr>`;

    html += '</tbody></table></div>';
    motelConjTable.innerHTML = html;
    motelConjCard.style.display = 'block';
  }

  document.querySelectorAll('.motel-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.motel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentType = tab.dataset.type;
      renderVerbs(currentType);
    };
  });

  renderVerbs('mojarrad');

  // ============================================================
  // ساخت سؤال تصادفی
  // ============================================================
  function makeQuestion() {
    const verb = allVerbs[Math.floor(Math.random() * allVerbs.length)];
    const qType = Math.floor(Math.random() * 4);

    let questionText = '';
    let correctAnswer = '';
    let pool = [];

    if (qType === 0) {
      // اسم فاعل
      questionText = `اسم فاعل فعل «<b>${verb.root}</b>» (${verb.meaning}) چیست؟`;
      correctAnswer = verb.fael;
      pool = allVerbs.map(v => v.fael);
    } else if (qType === 1) {
      // اسم مفعول
      questionText = `اسم مفعول فعل «<b>${verb.root}</b>» (${verb.meaning}) چیست؟`;
      correctAnswer = verb.mafool;
      pool = allVerbs.map(v => v.mafool);
    } else if (qType === 2) {
      // معنی اسم فاعل
      const which = Math.random() < 0.5;
      const form = which ? verb.fael : verb.mafool;
      const meaning = which ? verb.faelFa : verb.mafoolFa;
      questionText = `معنی «<b>${form}</b>» چیست؟`;
      correctAnswer = meaning;
      pool = allVerbs.flatMap(v => [v.faelFa, v.mafoolFa]);
    } else {
      // نوع فعل
      questionText = `فعل «<b>${verb.root}</b>» از کدام نوع است؟`;
      correctAnswer = verb.type === 'mojarrad' ? 'ثلاثی مجرد' : 'ثلاثی مزید';
      pool = ['ثلاثی مجرد', 'ثلاثی مزید'];
    }

    const options = new Set([correctAnswer]);
    let attempts = 0;
    while (options.size < 4 && attempts < 100) {
      const r = pool[Math.floor(Math.random() * pool.length)];
      if (r) options.add(r);
      attempts++;
    }

    return {
      verb, correct: correctAnswer,
      options: [...options].sort(() => Math.random() - 0.5),
      questionText
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
  document.querySelectorAll('.verb-btn, .option-btn, .motel-tab').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();