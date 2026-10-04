// ============================================================
// درس ۸ عربی نهم — متن و ترجمه
// ============================================================

(function() {
  'use strict';

  // ============================================================
  // متن‌های بلند
  // ============================================================
  const texts = [
    {
      id: 1,
      title: "التّاجِرُ وَ المَكتوبُ",
      arabic: "كانَ تاجِرٌ غَنِيٌّ يَذهَبُ إِلَى بَلَدٍ بَعيدٍ. في الطَّريقِ وَجَدَ مَكتوباً عَلى الأَرضِ، فَأَخَذَهُ وَ قَرَأَهُ. كانَ فيهِ: اُكتُبْ ما تَشاءُ، فَإِنَّ عِلْمَكَ سَيَبقىٰ لَكَ.",
      translation: "تاجر ثروتمندی بود که به شهری دور می‌رفت. در راه، نامه‌ای روی زمین یافت و آن را برداشت و خواند. در آن نوشته بود: هر چه می‌خواهی بنویس، زیرا دانشت برای تو باقی می‌ماند.",
      wordByWord: "كانَ (بود) + تاجِرٌ (تاجر) + غَنِيٌّ (ثروتمند) + يَذهَبُ (می‌رود) + إِلى (به) + بَلَدٍ (شهر) + بَعيدٍ (دور) + في (در) + الطَّريقِ (راه) + وَجَدَ (یافت) + مَكتوباً (نامه) + عَلى (روی) + الأَرضِ (زمین) + أَخَذَهُ (آن را برداشت) + قَرَأَهُ (آن را خواند) + اُكتُبْ (بنویس) + ما (آنچه) + تَشاءُ (می‌خواهی) + عِلْمَكَ (دانشت) + سَيَبقىٰ (باقی می‌ماند) + لَكَ (برای تو)"
    },
    {
      id: 2,
      title: "الطَّبيعَةُ الخَلّابَةُ",
      arabic: "الطَّبيعَةُ جَميلَةٌ. فيها الجِبالُ العالِيَةُ وَ الأَنهارُ الطَّويلَةُ وَ الغاباتُ الواسِعَةُ. وَ فيها الحَيَواناتُ المُختَلِفَةُ وَ الطُّيورُ المُغَرِّدَةُ. يَجِبُ عَلَينا أَن نُحافِظَ عَلَيها.",
      translation: "طبیعت زیباست. در آن کوه‌های بلند و رودهای طولانی و جنگل‌های گسترده وجود دارد. و در آن حیوانات گوناگون و پرندگان آوازخوان هستند. بر ما لازم است که از آن محافظت کنیم.",
      wordByWord: "الطَّبيعَةُ (طبیعت) + جَميلَةٌ (زیباست) + الجِبالُ (کوه‌ها) + العالِيَةُ (بلند) + الأَنهارُ (رودها) + الطَّويلَةُ (طولانی) + الغاباتُ (جنگل‌ها) + الواسِعَةُ (گسترده) + الحَيَواناتُ (حیوانات) + المُختَلِفَةُ (گوناگون) + الطُّيورُ (پرندگان) + المُغَرِّدَةُ (آوازخوان) + يَجِبُ (لازم است) + نُحافِظَ (محافظت کنیم) + عَلَيها (از آن)"
    },
    {
      id: 3,
      title: "قالَ الإمامُ",
      arabic: "قالَ الإمامُ عَلِيٌّ (ع): العِلمُ خَيرٌ مِنَ المالِ. العِلمُ يَحرُسُكَ وَ أَنتَ تَحرُسُ المالَ. وَ قالَ: النَّاسُ نِيامٌ، إِذا ماتوا اِنتَبَهوا.",
      translation: "امام علی (ع) فرمود: دانش بهتر از ثروت است. دانش تو را نگهبانی می‌کند، ولی تو ثروت را نگهبانی می‌کنی. و فرمود: مردم خواب‌اند، هنگامی که بمیرند بیدار می‌شوند.",
      wordByWord: "قالَ (فرمود) + الإمامُ (امام) + العِلمُ (دانش) + خَيرٌ (بهتر است) + مِن (از) + المالِ (ثروت) + يَحرُسُكَ (تو را نگهبانی می‌کند) + أَنتَ (تو) + تَحرُسُ (نگهبانی می‌کنی) + النَّاسُ (مردم) + نِيامٌ (خواب‌اند) + إِذا (هنگامی که) + ماتوا (مردند) + اِنتَبَهوا (بیدار شدند)"
    },
    {
      id: 4,
      title: "الوَلَدُ المُجتَهِدُ",
      arabic: "في قَريَةٍ صَغيرَةٍ كانَ يَسكُنُ وَلَدٌ مُجتَهِدٌ. كانَ يَذهَبُ إِلَى المَدرَسَةِ كُلَّ يَومٍ سَيراً عَلى القَدَمَينِ. كانَ يُحِبُّ العِلمَ وَ كانَ مُعَلِّمُهُ يُحِبُّهُ كَثيراً.",
      translation: "در روستایی کوچک، پسری تلاشگر زندگی می‌کرد. هر روز پیاده به مدرسه می‌رفت. دانش را دوست داشت و معلمش او را بسیار دوست می‌داشت.",
      wordByWord: "في (در) + قَريَةٍ (روستا) + صَغيرَةٍ (کوچک) + يَسكُنُ (زندگی می‌کرد) + وَلَدٌ (پسر) + مُجتَهِدٌ (تلاشگر) + يَذهَبُ (می‌رفت) + المَدرَسَةِ (مدرسه) + كُلَّ (هر) + يَومٍ (روز) + سَيراً (پیاده) + عَلى القَدَمَينِ (با دو پا) + يُحِبُّ (دوست داشت) + العِلمَ (دانش) + مُعَلِّمُهُ (معلمش) + كَثيراً (بسیار)"
    },
    {
      id: 5,
      title: "الصَّديقُ الحَقيقيُّ",
      arabic: "الصَّديقُ الحَقيقيُّ هُوَ الَّذي يُساعِدُكَ في الشِّدَّةِ، وَ يَفرَحُ لِفَرَحِكَ، وَ يَحزَنُ لِحُزنِكَ. فَاختَرْ صَديقَكَ بِعِنايَةٍ.",
      translation: "دوست واقعی کسی است که در سختی به تو کمک می‌کند و برای شادی‌ات شاد می‌شود و برای غمت غمگین می‌شود. پس دوستت را با دقت انتخاب کن.",
      wordByWord: "الصَّديقُ (دوست) + الحَقيقيُّ (واقعی) + الَّذي (کسی که) + يُساعِدُكَ (به تو کمک می‌کند) + في (در) + الشِّدَّةِ (سختی) + يَفرَحُ (شاد می‌شود) + لِفَرَحِكَ (برای شادی‌ات) + يَحزَنُ (غمگین می‌شود) + لِحُزنِكَ (برای غمت) + فَاختَرْ (پس انتخاب کن) + صَديقَكَ (دوستت) + بِعِنايَةٍ (با دقت)"
    },
    {
      id: 6,
      title: "وَطَني",
      arabic: "أُحِبُّ وَطَني إيرانَ حُبّاً كَبيراً. وَطَني بِلادُ العُلَماءِ وَ الشُّعَراءِ. فيهِ آثارٌ تاريخِيَّةٌ عَظيمَةٌ. أُدافِعُ عَن وَطَني بِقَلَمي وَ عِلمي.",
      translation: "میهنم ایران را بسیار دوست دارم. میهنم سرزمین دانشمندان و شاعران است. در آن آثار تاریخی بزرگی وجود دارد. از میهنم با قلم و دانشم دفاع می‌کنم.",
      wordByWord: "أُحِبُّ (دوست دارم) + وَطَني (میهنم) + إيرانَ (ایران) + حُبّاً (دوستی) + كَبيراً (بزرگ) + بِلادُ (سرزمین) + العُلَماءِ (دانشمندان) + الشُّعَراءِ (شاعران) + فيهِ (در آن) + آثارٌ (آثار) + تاريخِيَّةٌ (تاریخی) + عَظيمَةٌ (بزرگ) + أُدافِعُ (دفاع می‌کنم) + عَن (از) + بِقَلَمي (با قلمم) + عِلمي (دانشم)"
    }
  ];

  // ============================================================
  // واژگان
  // ============================================================
  const vocabulary = [
    { arabic: "تاجِر", meaning: "تاجر" },
    { arabic: "غَنِيّ", meaning: "ثروتمند" },
    { arabic: "بَلَد", meaning: "شهر، کشور" },
    { arabic: "بَعيد", meaning: "دور" },
    { arabic: "طَريق", meaning: "راه" },
    { arabic: "أَرض", meaning: "زمین" },
    { arabic: "وَجَدَ", meaning: "یافت" },
    { arabic: "قَرَأَ", meaning: "خواند" },
    { arabic: "طَبيعَة", meaning: "طبیعت" },
    { arabic: "جَبَل", meaning: "کوه" },
    { arabic: "نَهر", meaning: "رود" },
    { arabic: "غابَة", meaning: "جنگل" },
    { arabic: "واسِع", meaning: "گسترده" },
    { arabic: "حَيَوان", meaning: "حیوان" },
    { arabic: "طَير", meaning: "پرنده" },
    { arabic: "يَجِبُ", meaning: "لازم است" },
    { arabic: "يُحافِظُ", meaning: "محافظت می‌کند" },
    { arabic: "خَير", meaning: "خوبی، بهتر" },
    { arabic: "يَحرُسُ", meaning: "نگهبانی می‌کند" },
    { arabic: "ناس", meaning: "مردم" },
    { arabic: "نِيام", meaning: "خواب‌ها" },
    { arabic: "اِنتَبَهَ", meaning: "بیدار شد" },
    { arabic: "قَريَة", meaning: "روستا" },
    { arabic: "صَغير", meaning: "کوچک" },
    { arabic: "سَيراً", meaning: "پیاده" },
    { arabic: "صَديق", meaning: "دوست" },
    { arabic: "حَقيقي", meaning: "واقعی" },
    { arabic: "شِدَّة", meaning: "سختی" },
    { arabic: "فَرِحَ", meaning: "شاد شد" },
    { arabic: "حَزِنَ", meaning: "غمگین شد" },
    { arabic: "وَطَن", meaning: "میهن" },
    { arabic: "بِلاد", meaning: "سرزمین" },
    { arabic: "عُلَماء", meaning: "دانشمندان" },
    { arabic: "شُعَراء", meaning: "شاعران" },
    { arabic: "آثار", meaning: "آثار" },
    { arabic: "تاريخي", meaning: "تاریخی" }
  ];

  // ============================================================
  // جملات برای تمرین
  // ============================================================
  const sentences = [
    { ar: "الطَّبيعَةُ جَميلَةٌ", fa: "طبیعت زیباست" },
    { ar: "العِلمُ خَيرٌ مِنَ المالِ", fa: "دانش بهتر از ثروت است" },
    { ar: "يَذهَبُ إِلَى المَدرَسَةِ", fa: "به مدرسه می‌رود" },
    { ar: "يَجِبُ عَلَينا أَن نُحافِظَ عَلَيها", fa: "بر ما لازم است که از آن محافظت کنیم" },
    { ar: "أُحِبُّ وَطَني", fa: "میهنم را دوست دارم" },
    { ar: "النَّاسُ نِيامٌ", fa: "مردم خواب‌اند" },
    { ar: "في الطَّريقِ وَجَدَ مَكتوباً", fa: "در راه نامه‌ای یافت" },
    { ar: "الصَّديقُ الحَقيقيُّ يُساعِدُكَ", fa: "دوست واقعی به تو کمک می‌کند" },
    { ar: "هُوَ يَقرَأُ الكِتابَ", fa: "او کتاب را می‌خواند" },
    { ar: "الوَلَدُ يَكتُبُ الدَّرسَ", fa: "پسر درس را می‌نویسد" },
    { ar: "قالَ المُعَلِّمُ", fa: "معلم گفت" },
    { ar: "المُعَلِّمُ يُحِبُّ الطّالِبَ", fa: "معلم دانش‌آموز را دوست دارد" },
    { ar: "كانَ في قَريَةٍ صَغيرَةٍ", fa: "در روستایی کوچک بود" },
    { ar: "الآثارُ التاريخِيَّةُ عَظيمَةٌ", fa: "آثار تاریخی بزرگی هستند" },
    { ar: "أَنتَ تَحرُسُ المالَ", fa: "تو ثروت را نگهبانی می‌کنی" }
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
  // تب ۲: متن‌ها
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
    card.innerHTML = `<h3>${text.title}</h3><p>${text.arabic.substring(0, 35)}...</p>`;
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
  // تب ۳: واژگان
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
  // ساخت سؤال
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
  document.querySelectorAll('.text-card, .option-btn, .vocab-card').forEach(el => {
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
    }, { passive: true });
  });

})();