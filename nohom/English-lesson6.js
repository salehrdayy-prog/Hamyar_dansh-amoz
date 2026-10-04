// ============================================================
// English Lesson 6 — Wonders of the World
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // واژگان
  // ============================================================
  const vocabulary = [
    { en: 'wonder', fa: 'شگفتی', ph: '/ˈwʌn.dər/' },
    { en: 'wonderful', fa: 'شگفت‌انگیز', ph: '/ˈwʌn.də.fəl/' },
    { en: 'ancient', fa: 'باستانی', ph: '/ˈeɪn.ʃənt/' },
    { en: 'pyramid', fa: 'هرم', ph: '/ˈpɪr.ə.mɪd/' },
    { en: 'temple', fa: 'معبد', ph: '/ˈtem.pəl/' },
    { en: 'statue', fa: 'مجسمه', ph: '/ˈstætʃ.uː/' },
    { en: 'wall', fa: 'دیوار', ph: '/wɔːl/' },
    { en: 'tower', fa: 'برج', ph: '/ˈtaʊ.ər/' },
    { en: 'building', fa: 'ساختمان', ph: '/ˈbɪl.dɪŋ/' },
    { en: 'famous', fa: 'مشهور', ph: '/ˈfeɪ.məs/' },
    { en: 'amazing', fa: 'حیرت‌انگیز', ph: '/əˈmeɪ.zɪŋ/' },
    { en: 'country', fa: 'کشور', ph: '/ˈkʌn.tri/' },
    { en: 'world', fa: 'جهان', ph: '/wɜːld/' },
    { en: 'visit', fa: 'بازدید کردن', ph: '/ˈvɪz.ɪt/' },
    { en: 'travel', fa: 'سفر کردن', ph: '/ˈtræv.əl/' },
    { en: 'build', fa: 'ساختن', ph: '/bɪld/' },
    { en: 'thousand', fa: 'هزار', ph: '/ˈθaʊ.zənd/' },
    { en: 'long', fa: 'طولانی', ph: '/lɒŋ/' },
    { en: 'high', fa: 'بلند', ph: '/haɪ/' },
    { en: 'could', fa: 'می‌توانست', ph: '/kʊd/' }
  ];

  // ============================================================
  // بانک سؤالات درس ۶
  // ============================================================
  const questions = [
    // واژگان
    { q: 'معنی «wonder» چیست؟', correct: 'شگفتی', pool: ['شگفتی', 'ساختمان', 'برج', 'کشور'] },
    { q: 'معنی «wonderful» چیست؟', correct: 'شگفت‌انگیز', pool: ['شگفت‌انگیز', 'زیبا', 'بزرگ', 'قدیمی'] },
    { q: 'معنی «ancient» چیست؟', correct: 'باستانی', pool: ['باستانی', 'جدید', 'مدرن', 'بزرگ'] },
    { q: 'معنی «pyramid» چیست؟', correct: 'هرم', pool: ['هرم', 'معبد', 'برج', 'مجسمه'] },
    { q: 'معنی «temple» چیست؟', correct: 'معبد', pool: ['معبد', 'هرم', 'کلیسا', 'مسجد'] },
    { q: 'معنی «statue» چیست؟', correct: 'مجسمه', pool: ['مجسمه', 'ساختمان', 'برج', 'نقاشی'] },
    { q: 'معنی «wall» چیست؟', correct: 'دیوار', pool: ['دیوار', 'سقف', 'کف', 'پنجره'] },
    { q: 'معنی «tower» چیست؟', correct: 'برج', pool: ['برج', 'دیوار', 'ساختمان', 'معبد'] },
    { q: 'معنی «building» چیست؟', correct: 'ساختمان', pool: ['ساختمان', 'برج', 'خانه', 'مدرسه'] },
    { q: 'معنی «famous» چیست؟', correct: 'مشهور', pool: ['مشهور', 'ناشناس', 'جدید', 'قدیمی'] },
    { q: 'معنی «amazing» چیست؟', correct: 'حیرت‌انگیز', pool: ['حیرت‌انگیز', 'خسته‌کننده', 'عادی', 'کوچک'] },
    { q: 'معنی «world» چیست؟', correct: 'جهان', pool: ['جهان', 'کشور', 'شهر', 'خانه'] },
    { q: 'معنی «thousand» چیست؟', correct: 'هزار', pool: ['هزار', 'صد', 'میلیون', 'ده'] },
    { q: 'معنی «high» چیست؟', correct: 'بلند', pool: ['بلند', 'کوتاه', 'بزرگ', 'کوچک'] },

    // گرامر could / was able to
    { q: '«می‌توانستم شنا کنم» کدام است؟', correct: 'I could swim.', pool: ['I could swim.', 'I can swim.', 'I could to swim.', 'I could swimming.'] },
    { q: '«نمی‌توانستم پیدا کنم» کدام است؟', correct: 'I couldn\'t find it.', pool: ['I couldn\'t find it.', 'I couldn\'t to find it.', 'I not could find it.', 'I can\'t find it.'] },
    { q: '«او توانست کار را تمام کند» (یک بار) کدام است؟', correct: 'He was able to finish the work.', pool: ['He was able to finish the work.', 'He could finish the work.', 'He was able finish the work.', 'He able to finish the work.'] },
    { q: '«آن‌ها توانستند بیایند» کدام است؟', correct: 'They were able to come.', pool: ['They were able to come.', 'They was able to come.', 'They could come.', 'They were able come.'] },
    { q: 'تفاوت could و was able to چیست؟', correct: 'could کلی، was able to یک بار خاص', pool: ['could کلی، was able to یک بار خاص', 'هیچ تفاوتی ندارند', 'could برای آینده، was able to برای گذشته', 'could منفی، was able to مثبت'] },

    // مجهول گذشته
    { q: 'مجهول «The Pyramids ... thousands of years ago.» کدام است؟', correct: 'The Pyramids were built thousands of years ago.', pool: ['The Pyramids were built thousands of years ago.', 'The Pyramids built thousands of years ago.', 'The Pyramids was built thousands of years ago.', 'The Pyramids are built thousands of years ago.'] },
    { q: 'مجهول «The Eiffel Tower ... in 1889.» کدام است؟', correct: 'The Eiffel Tower was built in 1889.', pool: ['The Eiffel Tower was built in 1889.', 'The Eiffel Tower built in 1889.', 'The Eiffel Tower were built in 1889.', 'The Eiffel Tower is built in 1889.'] },
    { q: 'قسمت سوم فعل «build» چیست؟', correct: 'built', pool: ['built', 'builded', 'building', 'builds'] },

    // معنی جملات
    { q: 'معنی «The Great Wall of China is one of the longest walls.» چیست؟', correct: 'دیوار چین یکی از طولانی‌ترین دیوارهاست.', pool: ['دیوار چین یکی از طولانی‌ترین دیوارهاست.', 'دیوار چین طولانی است.', 'دیوار چین بزرگ است.', 'دیوار چین در چین است.'] },
    { q: 'معنی «People could travel there on foot.» چیست؟', correct: 'مردم می‌توانستند پیاده به آنجا سفر کنند.', pool: ['مردم می‌توانستند پیاده به آنجا سفر کنند.', 'مردم پیاده سفر می‌کردند.', 'مردم با ماشین می‌رفتند.', 'مردم به آنجا نمی‌رفتند.'] },
    { q: 'معنی «If you visit these wonders, you will never forget them.» چیست؟', correct: 'اگر این شگفتی‌ها را ببینی، هرگز آن‌ها را فراموش نخواهی کرد.', pool: ['اگر این شگفتی‌ها را ببینی، هرگز آن‌ها را فراموش نخواهی کرد.', 'این شگفتی‌ها را ببین.', 'شگفتی‌ها را فراموش کن.', 'شگفتی‌ها جالب هستند.'] }
  ];

  // ============================================================
  // بانک سؤالات آزمون نهایی (از همه ۶ درس)
  // ============================================================
  const finalExamQuestions = [
    // Lesson 1
    { q: 'معنی «protect» چیست؟', correct: 'محافظت کردن', pool: ['محافظت کردن', 'کاشتن', 'انداختن', 'قطع کردن'] },
    { q: '«ما باید از طبیعت محافظت کنیم» کدام است؟', correct: 'We must protect nature.', pool: ['We must protect nature.', 'We protect must nature.', 'We nature protect must.', 'Protect we must nature.'] },
    { q: 'معنی «pollution» چیست؟', correct: 'آلودگی', pool: ['آلودگی', 'زباله', 'پاکیزگی', 'بازیافت'] },

    // Lesson 2
    { q: 'معنی «experience» چیست؟', correct: 'تجربه', pool: ['تجربه', 'سفر', 'شهر', 'ملاقات'] },
    { q: '«من اصفهان را دیده‌ام» کدام است؟', correct: 'I have visited Isfahan.', pool: ['I have visited Isfahan.', 'I visited Isfahan yesterday.', 'I visit Isfahan every year.', 'I will visit Isfahan.'] },
    { q: 'قسمت سوم فعل «go» چیست؟', correct: 'gone', pool: ['gone', 'went', 'goed', 'going'] },
    { q: 'معنی «ever» چیست؟', correct: 'تا حالا', pool: ['تا حالا', 'هرگز', 'قبلاً', 'هنوز'] },

    // Lesson 3
    { q: 'شکل مقایسه‌ای «old» چیست؟', correct: 'older', pool: ['older', 'more old', 'oldest', 'oldder'] },
    { q: 'شکل برتر «good» چیست؟', correct: 'the best', pool: ['the best', 'the goodest', 'the most good', 'better'] },
    { q: '«نوروز قدیمی‌ترین جشن در ایران است» کدام است؟', correct: 'Nowruz is the oldest festival in Iran.', pool: ['Nowruz is the oldest festival in Iran.', 'Nowruz is oldest festival in Iran.', 'Nowruz is the most old festival in Iran.', 'Nowruz is the older festival in Iran.'] },

    // Lesson 4
    { q: '«باید میوه بخوری» کدام است؟', correct: 'You should eat fruit.', pool: ['You should eat fruit.', 'You eat should fruit.', 'You fruit should eat.', 'Should you eat fruit.'] },
    { q: '«سیگار نکش» کدام است؟', correct: 'Don\'t smoke.', pool: ['Don\'t smoke.', 'Not smoke.', 'No smoke.', 'Don\'t to smoke.'] },
    { q: 'معنی «healthy» چیست؟', correct: 'سالم', pool: ['سالم', 'بیمار', 'خسته', 'قوی'] },

    // Lesson 5
    { q: 'ساختار Passive Voice چیست؟', correct: 'be + past participle', pool: ['be + past participle', 'have + past participle', 'will + verb', 'did + verb'] },
    { q: 'مجهول «News ... every day.» کدام است؟', correct: 'News is reported every day.', pool: ['News is reported every day.', 'News reports every day.', 'News is reporting every day.', 'News was reported every day.'] },
    { q: 'قسمت سوم فعل «write» چیست؟', correct: 'written', pool: ['written', 'wrote', 'writed', 'writing'] },

    // Lesson 6
    { q: 'معنی «wonder» چیست؟', correct: 'شگفتی', pool: ['شگفتی', 'ساختمان', 'برج', 'کشور'] },
    { q: '«می‌توانستم شنا کنم» کدام است؟', correct: 'I could swim.', pool: ['I could swim.', 'I can swim.', 'I could to swim.', 'I could swimming.'] },
    { q: 'مجهول «The Pyramids ... thousands of years ago.» کدام است؟', correct: 'The Pyramids were built thousands of years ago.', pool: ['The Pyramids were built thousands of years ago.', 'The Pyramids built thousands of years ago.', 'The Pyramids was built thousands of years ago.', 'The Pyramids are built thousands of years ago.'] },
    { q: '«او توانست کار را تمام کند» کدام است؟', correct: 'He was able to finish the work.', pool: ['He was able to finish the work.', 'He could finish the work.', 'He was able finish the work.', 'He able to finish the work.'] }
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

  function makeFinalQuestion() {
    const q = finalExamQuestions[Math.floor(Math.random() * finalExamQuestions.length)];
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
  // تب ۶: آزمون نهایی (۲۰ سؤال)
  // ============================================================
  const startQuiz = document.getElementById('startQuiz');
  const nextQuestion = document.getElementById('nextQuestion');
  const quizQuestion = document.getElementById('quizQuestion');
  const quizOptions = document.getElementById('quizOptions');
  const quizScoreEl = document.getElementById('quizScore');
  const quizTotalEl = document.getElementById('quizTotal');
  const examProgress = document.getElementById('examProgress');

  let qScore = 0, qTotal = 0, qAnswered = false, qCurrent = null;
  const FINAL_TOTAL = 20;

  startQuiz.onclick = () => {
    qScore = 0; qTotal = 0;
    quizScoreEl.textContent = 0;
    quizTotalEl.textContent = 0;
    examProgress.style.width = '0%';
    startQuiz.style.display = 'none';
    nextQuizQuestion();
  };

  function nextQuizQuestion() {
    if (qTotal >= FINAL_TOTAL) {
      const percent = Math.round((qScore / FINAL_TOTAL) * 100);
      let level = 'مبتدی';
      if (percent >= 90) level = 'استاد 🏆';
      else if (percent >= 75) level = 'پیشرفته ⭐';
      else if (percent >= 50) level = 'متوسط 👍';
      else if (percent >= 30) level = 'در حال یادگیری 📚';

      quizQuestion.innerHTML = `🎉 آزمون نهایی تمام شد!<br>امتیاز: <b>${qScore}</b> از ${FINAL_TOTAL}<br>درصد: <b>${percent}%</b><br>سطح: <b>${level}</b>`;
      quizOptions.innerHTML = '';
      nextQuestion.style.display = 'none';
      startQuiz.textContent = '🔄 آزمون مجدد';
      startQuiz.style.display = 'block';
      examProgress.style.width = '100%';
      return;
    }

    qAnswered = false;
    nextQuestion.style.display = 'none';
    quizOptions.innerHTML = '';
    qCurrent = makeFinalQuestion();
    quizQuestion.innerHTML = `<div style="font-size:0.85em;color:#999;margin-bottom:6px;">سؤال ${qTotal + 1} از ${FINAL_TOTAL}</div>${qCurrent.questionText}`;

    examProgress.style.width = `${(qTotal / FINAL_TOTAL) * 100}%`;

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
  // تب ۷: بازی نهایی (۹۰ ثانیه)
  // ============================================================
  const startGame = document.getElementById('startGame');
  const gameQuestion = document.getElementById('gameQuestion');
  const gameOptions = document.getElementById('gameOptions');
  const timerEl = document.getElementById('timer');
  const gameScoreEl = document.getElementById('gameScore');

  let gTime = 90, gScore = 0, gTimer = null, gRunning = false, gCurrent = null;

  startGame.onclick = () => {
    if (gRunning) return;
    gRunning = true;
    gTime = 90;
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
    // مخلوطی از سؤالات درس ۶ و آزمون نهایی
    gCurrent = Math.random() < 0.5 ? makeQuestion() : makeFinalQuestion();
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
    gameQuestion.innerHTML = `⏰ زمان تمام شد!<br>امتیاز نهایی: <b>${gScore}</b>`;
    gameOptions.innerHTML = '';
    startGame.textContent = '🔄 بازی مجدد';
    startGame.style.display = 'block';
  }

  // ============================================================
  // افکت کلیک
  // ============================================================
  document.querySelectorAll('.en-sentence, .review-card').forEach(el => {
    el.addEventListener('touchstart', () => { el.style.transform = 'scale(0.98)'; }, { passive: true });
    el.addEventListener('touchend', () => { el.style.transform = ''; }, { passive: true });
  });

})();