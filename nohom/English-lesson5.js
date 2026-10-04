// ============================================================
// English Lesson 5 — Media
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // واژگان
  // ============================================================
  const vocabulary = [
    { en: 'media', fa: 'رسانه‌ها', ph: '/ˈmiː.di.ə/' },
    { en: 'news', fa: 'خبر', ph: '/njuːz/' },
    { en: 'TV', fa: 'تلویزیون', ph: '/ˌtiːˈviː/' },
    { en: 'radio', fa: 'رادیو', ph: '/ˈreɪ.di.əʊ/' },
    { en: 'internet', fa: 'اینترنت', ph: '/ˈɪn.tə.net/' },
    { en: 'newspaper', fa: 'روزنامه', ph: '/ˈnjuːz.peɪ.pər/' },
    { en: 'magazine', fa: 'مجله', ph: '/ˌmæɡ.əˈziːn/' },
    { en: 'article', fa: 'مقاله', ph: '/ˈɑː.tɪ.kəl/' },
    { en: 'program', fa: 'برنامه', ph: '/ˈprəʊ.ɡræm/' },
    { en: 'channel', fa: 'کانال، شبکه', ph: '/ˈtʃæn.əl/' },
    { en: 'reporter', fa: 'خبرنگار', ph: '/rɪˈpɔː.tər/' },
    { en: 'journalist', fa: 'روزنامه‌نگار', ph: '/ˈdʒɜː.nə.lɪst/' },
    { en: 'website', fa: 'وب‌سایت', ph: '/ˈweb.saɪt/' },
    { en: 'online', fa: 'آنلاین', ph: '/ˌɒnˈlaɪn/' },
    { en: 'social media', fa: 'شبکه‌های اجتماعی', ph: '/ˈsəʊ.ʃəl ˈmiː.di.ə/' },
    { en: 'information', fa: 'اطلاعات', ph: '/ˌɪn.fəˈmeɪ.ʃən/' },
    { en: 'report', fa: 'گزارش دادن', ph: '/rɪˈpɔːt/' },
    { en: 'publish', fa: 'منتشر کردن', ph: '/ˈpʌb.lɪʃ/' },
    { en: 'show', fa: 'نمایش دادن', ph: '/ʃəʊ/' },
    { en: 'use', fa: 'استفاده کردن', ph: '/juːz/' }
  ];

  // ============================================================
  // بانک سؤالات
  // ============================================================
  const questions = [
    // واژگان
    { q: 'معنی «media» چیست؟', correct: 'رسانه‌ها', pool: ['رسانه‌ها', 'خبر', 'تلویزیون', 'اینترنت'] },
    { q: 'معنی «news» چیست؟', correct: 'خبر', pool: ['خبر', 'روزنامه', 'مجله', 'برنامه'] },
    { q: 'معنی «radio» چیست؟', correct: 'رادیو', pool: ['رادیو', 'تلویزیون', 'اینترنت', 'روزنامه'] },
    { q: 'معنی «newspaper» چیست؟', correct: 'روزنامه', pool: ['روزنامه', 'مجله', 'خبر', 'مقاله'] },
    { q: 'معنی «magazine» چیست؟', correct: 'مجله', pool: ['مجله', 'روزنامه', 'کتاب', 'برنامه'] },
    { q: 'معنی «article» چیست؟', correct: 'مقاله', pool: ['مقاله', 'خبر', 'برنامه', 'مجله'] },
    { q: 'معنی «program» چیست؟', correct: 'برنامه', pool: ['برنامه', 'کانال', 'خبر', 'مقاله'] },
    { q: 'معنی «channel» چیست؟', correct: 'کانال، شبکه', pool: ['کانال، شبکه', 'برنامه', 'رادیو', 'تلویزیون'] },
    { q: 'معنی «reporter» چیست؟', correct: 'خبرنگار', pool: ['خبرنگار', 'مجله', 'برنامه', 'کانال'] },
    { q: 'معنی «journalist» چیست؟', correct: 'روزنامه‌نگار', pool: ['روزنامه‌نگار', 'خبرنگار', 'مجله', 'برنامه'] },
    { q: 'معنی «website» چیست؟', correct: 'وب‌سایت', pool: ['وب‌سایت', 'اینترنت', 'ایمیل', 'شبکه اجتماعی'] },
    { q: 'معنی «online» چیست؟', correct: 'آنلاین', pool: ['آنلاین', 'آفلاین', 'اینترنتی', 'شبکه'] },
    { q: 'معنی «social media» چیست؟', correct: 'شبکه‌های اجتماعی', pool: ['شبکه‌های اجتماعی', 'تلویزیون', 'روزنامه', 'رادیو'] },
    { q: 'معنی «information» چیست؟', correct: 'اطلاعات', pool: ['اطلاعات', 'خبر', 'برنامه', 'مقاله'] },
    { q: 'معنی «report» چیست؟', correct: 'گزارش دادن', pool: ['گزارش دادن', 'خواندن', 'نوشتن', 'دیدن'] },
    { q: 'معنی «publish» چیست؟', correct: 'منتشر کردن', pool: ['منتشر کردن', 'نوشتن', 'خواندن', 'چاپ کردن'] },
    { q: 'معنی «show» چیست؟', correct: 'نمایش دادن', pool: ['نمایش دادن', 'دیدن', 'گرفتن', 'خریدن'] },

    // گرامر — Passive Voice
    { q: 'ساختار Passive Voice چیست؟', correct: 'be + past participle', pool: ['be + past participle', 'have + past participle', 'will + verb', 'did + verb'] },
    { q: 'حال ساده مجهول کدام است؟', correct: 'am/is/are + p.p', pool: ['am/is/are + p.p', 'was/were + p.p', 'have/has + p.p', 'will + p.p'] },
    { q: 'گذشته ساده مجهول کدام است؟', correct: 'was/were + p.p', pool: ['was/were + p.p', 'am/is/are + p.p', 'have/has + p.p', 'did + p.p'] },
    { q: 'مجهول «News ... every day.» کدام است؟', correct: 'News is reported every day.', pool: ['News is reported every day.', 'News reports every day.', 'News is reporting every day.', 'News was reported every day.'] },
    { q: 'مجهول «Many programs ... on TV.» کدام است؟', correct: 'Many programs are shown on TV.', pool: ['Many programs are shown on TV.', 'Many programs show on TV.', 'Many programs is shown on TV.', 'Many programs showing on TV.'] },
    { q: 'مجهول «The first newspaper ... many years ago.» کدام است؟', correct: 'The first newspaper was published many years ago.', pool: ['The first newspaper was published many years ago.', 'The first newspaper published many years ago.', 'The first newspaper is published many years ago.', 'The first newspaper were published many years ago.'] },
    { q: 'مجهول «The film ... in 2010.» کدام است؟', correct: 'The film was made in 2010.', pool: ['The film was made in 2010.', 'The film made in 2010.', 'The film is made in 2010.', 'The film were made in 2010.'] },
    { q: '«توسطِ» در انگلیسی مجهول کدام است؟', correct: 'by', pool: ['by', 'with', 'of', 'from'] },
    { q: 'قسمت سوم فعل «write» چیست؟', correct: 'written', pool: ['written', 'wrote', 'writed', 'writing'] },
    { q: 'قسمت سوم فعل «show» چیست؟', correct: 'shown', pool: ['shown', 'showed', 'showd', 'showing'] },
    { q: 'قسمت سوم فعل «make» چیست؟', correct: 'made', pool: ['made', 'maked', 'making', 'makes'] },
    { q: 'قسمت سوم فعل «build» چیست؟', correct: 'built', pool: ['built', 'builded', 'building', 'builds'] },
    { q: 'قسمت سوم فعل «speak» چیست؟', correct: 'spoken', pool: ['spoken', 'speaked', 'speaking', 'speaks'] },

    // معنی جملات
    { q: 'معنی «News is reported by journalists.» چیست؟', correct: 'خبر توسط خبرنگاران گزارش داده می‌شود.', pool: ['خبر توسط خبرنگاران گزارش داده می‌شود.', 'خبرنگاران خبر می‌دهند.', 'خبر در تلویزیون است.', 'خبرنگاران خبر می‌خوانند.'] },
    { q: 'معنی «English is spoken all over the world.» چیست؟', correct: 'انگلیسی در سراسر جهان صحبت می‌شود.', pool: ['انگلیسی در سراسر جهان صحبت می‌شود.', 'انگلیسی زبان جهانی است.', 'همه انگلیسی می‌خوانند.', 'انگلیسی آسان است.'] },
    { q: 'معنی «The book was written by Hemingway.» چیست؟', correct: 'این کتاب توسط همینگوی نوشته شد.', pool: ['این کتاب توسط همینگوی نوشته شد.', 'همینگوی کتاب نوشت.', 'همینگوی کتاب خواند.', 'کتاب همینگوی خوب است.'] },
    { q: 'معنی «Media plays an important role in our life.» چیست؟', correct: 'رسانه نقش مهمی در زندگی ما دارد.', pool: ['رسانه نقش مهمی در زندگی ما دارد.', 'رسانه در زندگی ما مهم است.', 'ما به رسانه نیاز داریم.', 'رسانه زندگی ما را تغییر می‌دهد.'] }
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
  // تابع پخش صدا
  // ============================================================
  function playWord(word) {
    if (typeof window.speakEnglish === 'function') {
      window.speakEnglish(word);
      return;
    }
    if (typeof window.speakText === 'function') {
      window.speakText(word);
      return;
    }
    if ('speechSynthesis' in window) {
      try {
        speechSynthesis.cancel();
        const utt = new SpeechSynthesisUtterance(word);
        utt.lang = 'en-US';
        utt.rate = 0.8;
        const voices = speechSynthesis.getVoices();
        const enVoice = voices.find(v => v.lang === 'en-US')
                     || voices.find(v => v.lang.startsWith('en'));
        if (enVoice) utt.voice = enVoice;
        speechSynthesis.speak(utt);
      } catch (err) {
        console.warn('صدا پخش نشد:', err);
      }
    }
  }

  // ============================================================
  // تب ۲: واژگان
  // ============================================================
  const vocabGrid = document.getElementById('vocabGrid');
  vocabulary.forEach(v => {
    const card = document.createElement('div');
    card.className = 'vocab-card';
    card.innerHTML = `
      <div class="vocab-english">${v.en}</div>
      <div class="vocab-phonetic">${v.ph}</div>
      <div class="vocab-meaning">${v.fa}</div>
    `;

    const speakBtn = document.createElement('button');
    speakBtn.className = 'vocab-speak-btn';
    speakBtn.type = 'button';
    speakBtn.innerHTML = '🔊';
    speakBtn.title = 'شنیدن تلفظ';
    speakBtn.setAttribute('aria-label', 'شنیدن تلفظ');

    speakBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      speakBtn.style.background = '#ff9800';
      speakBtn.style.color = 'white';
      speakBtn.style.transform = 'scale(1.15)';
      setTimeout(() => {
        speakBtn.style.background = '';
        speakBtn.style.color = '';
        speakBtn.style.transform = '';
      }, 300);
      playWord(v.en);
    };

    card.appendChild(speakBtn);
    vocabGrid.appendChild(card);
  });

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
  document.querySelectorAll('.en-sentence').forEach(el => {
    el.addEventListener('touchstart', () => { el.style.transform = 'scale(0.98)'; }, { passive: true });
    el.addEventListener('touchend', () => { el.style.transform = ''; }, { passive: true });
  });

})();