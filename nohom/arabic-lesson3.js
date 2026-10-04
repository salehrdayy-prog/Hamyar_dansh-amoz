// ============================================================
// درس ۳ عربی نهم — فعل امر و نهی
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // داده‌های افعال امر و نهی
  // ============================================================
  const amrVerbs = [
    {
      root: "كَتَبَ", meaning: "نوشتن", type: "امر",
      data: {
        "أَنْتَ": { form: "اُكْتُبْ", fa: "بنویس" },
        "أَنْتِ": { form: "اُكْتُبِي", fa: "بنویس (مؤنث)" },
        "أَنْتُمَا": { form: "اُكْتُبَا", fa: "بنویسید (۲ نفر)" },
        "أَنْتُمْ": { form: "اُكْتُبُوا", fa: "بنویسید" },
        "أَنْتُنَّ": { form: "اُكْتُبْنَ", fa: "بنویسید (مؤنث)" }
      }
    },
    {
      root: "ذَهَبَ", meaning: "رفتن", type: "امر",
      data: {
        "أَنْتَ": { form: "اِذْهَبْ", fa: "برو" },
        "أَنْتِ": { form: "اِذْهَبِي", fa: "برو (مؤنث)" },
        "أَنْتُمَا": { form: "اِذْهَبَا", fa: "بروید (۲ نفر)" },
        "أَنْتُمْ": { form: "اِذْهَبُوا", fa: "بروید" },
        "أَنْتُنَّ": { form: "اِذْهَبْنَ", fa: "بروید (مؤنث)" }
      }
    },
    {
      root: "عَلِمَ", meaning: "دانستن", type: "امر",
      data: {
        "أَنْتَ": { form: "اِعْلَمْ", fa: "بدان" },
        "أَنْتِ": { form: "اِعْلَمِي", fa: "بدان (مؤنث)" },
        "أَنْتُمَا": { form: "اِعْلَمَا", fa: "بدانید (۲ نفر)" },
        "أَنْتُمْ": { form: "اِعْلَمُوا", fa: "بدانید" },
        "أَنْتُنَّ": { form: "اِعْلَمْنَ", fa: "بدانید (مؤنث)" }
      }
    },
    {
      root: "نَصَرَ", meaning: "یاری کردن", type: "امر",
      data: {
        "أَنْتَ": { form: "اُنْصُرْ", fa: "یاری کن" },
        "أَنْتِ": { form: "اُنْصُرِي", fa: "یاری کن (مؤنث)" },
        "أَنْتُمَا": { form: "اُنْصُرَا", fa: "یاری کنید (۲ نفر)" },
        "أَنْتُمْ": { form: "اُنْصُرُوا", fa: "یاری کنید" },
        "أَنْتُنَّ": { form: "اُنْصُرْنَ", fa: "یاری کنید (مؤنث)" }
      }
    },
    {
      root: "فَتَحَ", meaning: "باز کردن", type: "امر",
      data: {
        "أَنْتَ": { form: "اِفْتَحْ", fa: "باز کن" },
        "أَنْتِ": { form: "اِفْتَحِي", fa: "باز کن (مؤنث)" },
        "أَنْتُمَا": { form: "اِفْتَحَا", fa: "باز کنید (۲ نفر)" },
        "أَنْتُمْ": { form: "اِفْتَحُوا", fa: "باز کنید" },
        "أَنْتُنَّ": { form: "اِفْتَحْنَ", fa: "باز کنید (مؤنث)" }
      }
    },
    {
      root: "سَمِعَ", meaning: "شنیدن", type: "امر",
      data: {
        "أَنْتَ": { form: "اِسْمَعْ", fa: "بشنو" },
        "أَنْتِ": { form: "اِسْمَعِي", fa: "بشنو (مؤنث)" },
        "أَنْتُمَا": { form: "اِسْمَعَا", fa: "بشنوید (۲ نفر)" },
        "أَنْتُمْ": { form: "اِسْمَعُوا", fa: "بشنوید" },
        "أَنْتُنَّ": { form: "اِسْمَعْنَ", fa: "بشنوید (مؤنث)" }
      }
    }
  ];

  const nahiVerbs = [
    {
      root: "كَتَبَ", meaning: "ننوشتن", type: "نهی",
      data: {
        "أَنْتَ": { form: "لا تَكْتُبْ", fa: "ننویس" },
        "أَنْتِ": { form: "لا تَكْتُبِي", fa: "ننویس (مؤنث)" },
        "أَنْتُمَا": { form: "لا تَكْتُبَا", fa: "ننویسید (۲ نفر)" },
        "أَنْتُمْ": { form: "لا تَكْتُبُوا", fa: "ننویسید" },
        "أَنْتُنَّ": { form: "لا تَكْتُبْنَ", fa: "ننویسید (مؤنث)" }
      }
    },
    {
      root: "ذَهَبَ", meaning: "نرفتن", type: "نهی",
      data: {
        "أَنْتَ": { form: "لا تَذْهَبْ", fa: "نرو" },
        "أَنْتِ": { form: "لا تَذْهَبِي", fa: "نرو (مؤنث)" },
        "أَنْتُمَا": { form: "لا تَذْهَبَا", fa: "نروید (۲ نفر)" },
        "أَنْتُمْ": { form: "لا تَذْهَبُوا", fa: "نروید" },
        "أَنْتُنَّ": { form: "لا تَذْهَبْنَ", fa: "نروید (مؤنث)" }
      }
    },
    {
      root: "عَلِمَ", meaning: "ندانستن", type: "نهی",
      data: {
        "أَنْتَ": { form: "لا تَعْلَمْ", fa: "ندان" },
        "أَنْتِ": { form: "لا تَعْلَمِي", fa: "ندان (مؤنث)" },
        "أَنْتُمَا": { form: "لا تَعْلَمَا", fa: "ندانید (۲ نفر)" },
        "أَنْتُمْ": { form: "لا تَعْلَمُوا", fa: "ندانید" },
        "أَنْتُنَّ": { form: "لا تَعْلَمْنَ", fa: "ندانید (مؤنث)" }
      }
    },
    {
      root: "نَصَرَ", meaning: "یاری نکردن", type: "نهی",
      data: {
        "أَنْتَ": { form: "لا تَنْصُرْ", fa: "یاری نکن" },
        "أَنْتِ": { form: "لا تَنْصُرِي", fa: "یاری نکن (مؤنث)" },
        "أَنْتُمَا": { form: "لا تَنْصُرَا", fa: "یاری نکنید (۲ نفر)" },
        "أَنْتُمْ": { form: "لا تَنْصُرُوا", fa: "یاری نکنید" },
        "أَنْتُنَّ": { form: "لا تَنْصُرْنَ", fa: "یاری نکنید (مؤنث)" }
      }
    },
    {
      root: "فَتَحَ", meaning: "باز نکردن", type: "نهی",
      data: {
        "أَنْتَ": { form: "لا تَفْتَحْ", fa: "باز نکن" },
        "أَنْتِ": { form: "لا تَفْتَحِي", fa: "باز نکن (مؤنث)" },
        "أَنْتُمَا": { form: "لا تَفْتَحَا", fa: "باز نکنید (۲ نفر)" },
        "أَنْتُمْ": { form: "لا تَفْتَحُوا", fa: "باز نکنید" },
        "أَنْتُنَّ": { form: "لا تَفْتَحْنَ", fa: "باز نکنید (مؤنث)" }
      }
    },
    {
      root: "سَمِعَ", meaning: "نشنیدن", type: "نهی",
      data: {
        "أَنْتَ": { form: "لا تَسْمَعْ", fa: "نشنو" },
        "أَنْتِ": { form: "لا تَسْمَعِي", fa: "نشنو (مؤنث)" },
        "أَنْتُمَا": { form: "لا تَسْمَعَا", fa: "نشنوید (۲ نفر)" },
        "أَنْتُمْ": { form: "لا تَسْمَعُوا", fa: "نشنوید" },
        "أَنْتُنَّ": { form: "لا تَسْمَعْنَ", fa: "نشنوید (مؤنث)" }
      }
    }
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
  let currentType = 'amr';

  function renderVerbs(type) {
    motelVerbList.innerHTML = '';
    motelConjCard.style.display = 'none';
    const list = type === 'amr' ? amrVerbs : nahiVerbs;
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
    motelVerbTitle.textContent = `صرف «${verb.root}» (${verb.meaning}) — ${verb.type}`;
    const data = verb.data;
    let html = `<div class="table-wrapper"><table class="conj-table">
      <thead><tr><th>#</th><th>ضمیر</th><th>${verb.type}</th><th>معنی</th></tr></thead><tbody>`;
    let i = 1;
    for (const [pronoun, obj] of Object.entries(data)) {
      html += `<tr>
        <td>${i}</td>
        <td class="pronoun">${pronoun}</td>
        <td class="arabic">${obj.form}</td>
        <td class="meaning-cell">${obj.fa}</td>
      </tr>`;
      i++;
    }
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

  renderVerbs('amr');

  // ============================================================
  // ساخت سؤال تصادفی
  // ============================================================
  const allVerbs = [...amrVerbs, ...nahiVerbs];

  function makeQuestion() {
    const verb = allVerbs[Math.floor(Math.random() * allVerbs.length)];
    const pronouns = Object.keys(verb.data);
    const pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    const correctObj = verb.data[pronoun];
    const qType = Math.floor(Math.random() * 3);

    let questionText = '';
    let correctAnswer = '';
    let pool = [];

    if (qType === 0) {
      questionText = `فعل <b>${verb.type}</b> «${verb.root}» برای «<b>${pronoun}</b>» چیست؟`;
      correctAnswer = correctObj.form;
      pool = Object.values(verb.data).map(o => o.form);
    } else if (qType === 1) {
      questionText = `معنی «<b>${correctObj.form}</b>» چیست؟`;
      correctAnswer = correctObj.fa;
      pool = [...new Set(Object.values(verb.data).map(o => o.fa))];
    } else {
      questionText = `فعل «<b>${correctObj.form}</b>» مربوط به کدام ضمیر است؟`;
      correctAnswer = pronoun;
      pool = pronouns;
    }

    const options = new Set([correctAnswer]);
    let attempts = 0;
    while (options.size < 4 && attempts < 100) {
      const r = pool[Math.floor(Math.random() * pool.length)];
      if (r) options.add(r);
      attempts++;
    }

    const allForms = allVerbs.flatMap(v => Object.values(v.data).map(o => qType === 1 ? o.fa : o.form));
    while (options.size < 4) {
      options.add(allForms[Math.floor(Math.random() * allForms.length)]);
    }

    return {
      verb, pronoun, correct: correctAnswer,
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