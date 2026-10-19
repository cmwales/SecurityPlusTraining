(function () {
  "use strict";

  const DATA = window.QUIZ_DATA || {};
  const CARDS = window.FLASHCARD_DATA || {};
  const FLASH_STORAGE_KEY = "secplus.flashSections";
  const app = document.getElementById("app");

  const state = {
    screen: "home",
    selected: new Set(),
    includeBonus: true,
    quiz: null, // { items: [...], index, score: {correct, wrong} }
    flashSelected: new Set(loadFlashSelection()),
    flashShuffle: true,
    flash: null, // { items: [...], index, revealed, got: [], missed: [] }
  };

  // ---------- helpers ----------

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Page numbers refer to the "Course Notes - Page N" footer in the Messer PDF
  function pageLabel(page) {
    if (!page) return "";
    return `Messer notes ${String(page).includes("-") ? "pp." : "p."} ${escapeHtml(page)}`;
  }

  function sectionsGroupedByDomain() {
    const groups = new Map(); // domain -> [sectionName,...]
    for (const [name, v] of Object.entries(DATA)) {
      if (!groups.has(v.domain)) groups.set(v.domain, []);
      groups.get(v.domain).push(name);
    }
    return groups;
  }

  function sectionQuestionCount(name) {
    const v = DATA[name];
    return v.questions.length + (state.includeBonus ? v.bonusQuestions.length : 0);
  }

  // Build the randomized quiz item list from currently selected sections
  function buildQuizItems() {
    let pool = [];
    for (const name of state.selected) {
      const v = DATA[name];
      for (const q of v.questions) {
        pool.push({ section: name, domain: v.domain, page: q.page || v.page, scenario: false, source: q });
      }
      // bonusQuestions holds the scenario-style ("which is BEST") questions
      if (state.includeBonus) {
        for (const q of v.bonusQuestions) {
          pool.push({ section: name, domain: v.domain, page: q.page || v.page, scenario: true, source: q });
        }
      }
    }
    pool = shuffle(pool);

    return pool.map((item) => {
      const q = item.source;
      const wrongCount = Math.min(3, q.incorrectAnswers.length);
      const wrongs = shuffle(q.incorrectAnswers).slice(0, wrongCount);
      const options = shuffle([q.correctAnswer, ...wrongs]);
      return {
        section: item.section,
        domain: item.domain,
        page: item.page,
        scenario: item.scenario,
        question: q.question,
        explanation: q.explanation,
        correctAnswer: q.correctAnswer,
        options,
        selected: null,
      };
    });
  }

  // ---------- rendering: setup screen ----------

  function renderSetup() {
    const groups = sectionsGroupedByDomain();
    const allNames = Object.keys(DATA);
    const allSelected = allNames.every((n) => state.selected.has(n));
    const hasBonus = allNames.some((n) => DATA[n].bonusQuestions.length > 0);

    let groupsHtml = "";
    for (const [domain, names] of groups) {
      groupsHtml += `<div class="domain-group">
        <div class="domain-title">${escapeHtml(domain)}</div>`;
      for (const name of names) {
        const checked = state.selected.has(name) ? "checked" : "";
        groupsHtml += `
          <div class="section-row">
            <label>
              <input type="checkbox" data-section="${escapeHtml(name)}" ${checked}>
              <span>${escapeHtml(name)}</span>
            </label>
            <span class="count">${sectionQuestionCount(name)} q</span>
          </div>`;
      }
      groupsHtml += `</div>`;
    }

    const totalSelected = [...state.selected].reduce(
      (sum, n) => sum + sectionQuestionCount(n),
      0
    );

    app.innerHTML = `
      <button class="link" id="btn-home">&larr; Home</button>
      <h1>Security+ Study Quiz</h1>
      <p class="subtitle">Pick one or more sections, then test yourself. Questions and answer order are randomized every time.</p>

      <div class="panel">
        <h2>Choose Sections</h2>
        <div class="toolbar">
          <button id="btn-select-all">${allSelected ? "Clear All" : "Select All"}</button>
        </div>
        ${groupsHtml}
        <div class="controls-row">
          ${hasBonus ? `<label class="toggle-row">
            <input type="checkbox" id="chk-bonus" ${state.includeBonus ? "checked" : ""}>
            Include scenario questions
          </label>` : "<span></span>"}
          <div>
            <button class="primary" id="btn-start" ${totalSelected === 0 ? "disabled" : ""}>
              Start Test (${totalSelected} question${totalSelected === 1 ? "" : "s"})
            </button>
          </div>
        </div>
        ${totalSelected === 0 ? '<div class="error">Select at least one section to begin.</div>' : ""}
      </div>
    `;

    app.querySelectorAll("input[data-section]").forEach((cb) => {
      cb.addEventListener("change", (e) => {
        const name = e.target.getAttribute("data-section");
        if (e.target.checked) state.selected.add(name);
        else state.selected.delete(name);
        renderSetup();
      });
    });

    document.getElementById("btn-home").addEventListener("click", renderHome);

    document.getElementById("btn-select-all").addEventListener("click", () => {
      if (allSelected) state.selected.clear();
      else allNames.forEach((n) => state.selected.add(n));
      renderSetup();
    });

    if (hasBonus) {
      document.getElementById("chk-bonus").addEventListener("change", (e) => {
        state.includeBonus = e.target.checked;
        renderSetup();
      });
    }

    const startBtn = document.getElementById("btn-start");
    if (startBtn) {
      startBtn.addEventListener("click", () => {
        const items = buildQuizItems();
        if (items.length === 0) return;
        state.quiz = { items, index: 0, score: { correct: 0, wrong: 0 } };
        state.screen = "quiz";
        renderQuiz();
      });
    }
  }

  // ---------- rendering: quiz screen ----------

  function renderQuiz() {
    const quiz = state.quiz;
    const item = quiz.items[quiz.index];
    const total = quiz.items.length;
    const answered = item.selected !== null;

    const pct = Math.round((quiz.index / total) * 100);

    let optionsHtml = "";
    item.options.forEach((opt, i) => {
      let cls = "option";
      if (answered) {
        if (opt === item.correctAnswer) cls += " correct";
        else if (opt === item.selected) cls += " incorrect";
      }
      optionsHtml += `<button class="${cls}" data-opt="${i}" ${answered ? "disabled" : ""}>${escapeHtml(opt)}</button>`;
    });

    let feedbackHtml = "";
    let explanationHtml = "";
    if (answered) {
      const wasCorrect = item.selected === item.correctAnswer;
      feedbackHtml = `<div class="feedback-banner ${wasCorrect ? "correct" : "incorrect"}">${wasCorrect ? "Correct!" : "Incorrect."}</div>`;
      explanationHtml = `<div class="explanation"><strong>Explanation:</strong> ${escapeHtml(item.explanation)}</div>`;
    }

    const isLast = quiz.index === total - 1;

    app.innerHTML = `
      <div class="quiz-header">
        <span>Question ${quiz.index + 1} of ${total}</span>
        <span>${escapeHtml(item.section)}</span>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>

      <div class="panel">
        <div class="question-domain">${escapeHtml(item.domain)}${item.scenario ? ' <span class="scenario-tag">Scenario</span>' : ""}</div>
        <div class="question-text">${escapeHtml(item.question)}</div>
        <div class="page-ref">${pageLabel(item.page)}</div>
        <div class="options">${optionsHtml}</div>
        ${feedbackHtml}
        ${explanationHtml}
        <div class="quiz-actions">
          <span class="score-live">Score so far: ${quiz.score.correct} correct / ${quiz.score.wrong} wrong</span>
          <div>
            ${answered ? `<button class="primary" id="btn-next">${isLast ? "See Results" : "Next Question"}</button>` : ""}
          </div>
        </div>
      </div>
      <button class="link" id="btn-abandon">Cancel test &amp; return to section picker</button>
    `;

    if (!answered) {
      app.querySelectorAll(".option").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = Number(btn.getAttribute("data-opt"));
          const chosen = item.options[idx];
          item.selected = chosen;
          if (chosen === item.correctAnswer) quiz.score.correct++;
          else quiz.score.wrong++;
          renderQuiz();
        });
      });
    } else {
      document.getElementById("btn-next").addEventListener("click", () => {
        if (isLast) {
          state.screen = "results";
          renderResults();
        } else {
          quiz.index++;
          renderQuiz();
        }
      });
    }

    document.getElementById("btn-abandon").addEventListener("click", () => {
      state.quiz = null;
      state.screen = "setup";
      renderSetup();
    });
  }

  // ---------- rendering: results screen ----------

  function renderResults() {
    const quiz = state.quiz;
    const total = quiz.items.length;
    const correct = quiz.score.correct;
    const wrong = quiz.score.wrong;
    const pct = total === 0 ? 0 : Math.round((correct / total) * 100);
    const passClass = pct >= 80 ? "pass" : "fail";

    const wrongItems = quiz.items.filter((it) => it.selected !== it.correctAnswer);

    let reviewHtml = "";
    if (wrongItems.length > 0) {
      reviewHtml = `<details class="review-details">
        <summary>Review ${wrongItems.length} missed question${wrongItems.length === 1 ? "" : "s"}</summary>`;
      for (const it of wrongItems) {
        reviewHtml += `
          <div class="review-item wrong">
            <div class="review-q">${escapeHtml(it.question)}</div>
            <div class="review-line your-wrong">Your answer: ${escapeHtml(it.selected)}</div>
            <div class="review-line correct-answer">Correct answer: ${escapeHtml(it.correctAnswer)}</div>
            <div class="review-line">${escapeHtml(it.explanation)}</div>
            <div class="review-line">${escapeHtml(it.section)} &middot; ${pageLabel(it.page)}</div>
          </div>`;
      }
      reviewHtml += `</details>`;
    }

    app.innerHTML = `
      <h1>Results</h1>
      <div class="panel">
        <div class="results-score ${passClass}">${pct}%</div>
        <div class="results-sub">${correct} of ${total} correct</div>
        <div class="results-grid">
          <div class="stat-box"><div class="num" style="color:var(--good)">${correct}</div><div class="label">Correct</div></div>
          <div class="stat-box"><div class="num" style="color:var(--bad)">${wrong}</div><div class="label">Wrong</div></div>
        </div>
        ${reviewHtml}
        <div class="controls-row">
          <button class="primary" id="btn-retake">Retake This Test</button>
          <button id="btn-new-selection">Choose Different Sections</button>
        </div>
      </div>
    `;

    document.getElementById("btn-retake").addEventListener("click", () => {
      const items = buildQuizItems(); // rebuild = re-shuffle order + option positions
      state.quiz = { items, index: 0, score: { correct: 0, wrong: 0 } };
      state.screen = "quiz";
      renderQuiz();
    });

    document.getElementById("btn-new-selection").addEventListener("click", () => {
      state.quiz = null;
      state.screen = "setup";
      renderSetup();
    });
  }

  // ---------- rendering: home screen ----------

  function renderHome() {
    state.screen = "home";
    const quizCount = Object.values(DATA).reduce(
      (sum, v) => sum + v.questions.length + v.bonusQuestions.length,
      0
    );
    const cardCount = Object.values(CARDS).reduce((sum, v) => sum + v.cards.length, 0);

    app.innerHTML = `
      <h1>Security+ Study</h1>
      <p class="subtitle">Choose how you want to study.</p>
      <div class="mode-grid">
        <button class="mode-card" id="btn-mode-quiz">
          <span class="mode-title">Multiple-Choice Quiz</span>
          <span class="mode-desc">Pick sections and answer randomized multiple-choice questions with explanations.</span>
          <span class="mode-meta">${quizCount} questions</span>
        </button>
        <button class="mode-card" id="btn-mode-flash">
          <span class="mode-title">Flashcards</span>
          <span class="mode-desc">Short questions from the study notes. Answer in your head, then flip to check.</span>
          <span class="mode-meta">${cardCount} cards</span>
        </button>
      </div>
    `;

    document.getElementById("btn-mode-quiz").addEventListener("click", () => {
      state.screen = "setup";
      renderSetup();
    });
    document.getElementById("btn-mode-flash").addEventListener("click", renderFlashSetup);
  }

  // ---------- flashcards: helpers ----------

  function loadFlashSelection() {
    try {
      const saved = JSON.parse(localStorage.getItem(FLASH_STORAGE_KEY) || "[]");
      return Array.isArray(saved) ? saved.filter((n) => n in (window.FLASHCARD_DATA || {})) : [];
    } catch (e) {
      return [];
    }
  }

  function saveFlashSelection() {
    try {
      localStorage.setItem(FLASH_STORAGE_KEY, JSON.stringify([...state.flashSelected]));
    } catch (e) {
      // storage unavailable - selection just won't be remembered
    }
  }

  function flashSectionsGroupedByDomain() {
    const groups = new Map(); // domain -> [sectionName,...]
    for (const [name, v] of Object.entries(CARDS)) {
      if (!groups.has(v.domain)) groups.set(v.domain, []);
      groups.get(v.domain).push(name);
    }
    return groups;
  }

  function buildFlashItems() {
    const items = [];
    for (const name of Object.keys(CARDS)) {
      if (!state.flashSelected.has(name)) continue;
      for (const c of CARDS[name].cards) {
        items.push({ section: name, domain: CARDS[name].domain, page: c.page || CARDS[name].page, q: c.q, a: c.a });
      }
    }
    return state.flashShuffle ? shuffle(items) : items;
  }

  function startFlash(items) {
    if (items.length === 0) return;
    state.flash = { items, index: 0, revealed: false, got: [], missed: [] };
    state.screen = "flash";
    renderFlash();
  }

  // ---------- flashcards: setup screen ----------

  function renderFlashSetup() {
    state.screen = "flash-setup";
    const groups = flashSectionsGroupedByDomain();
    const allNames = Object.keys(CARDS);
    const allSelected = allNames.length > 0 && allNames.every((n) => state.flashSelected.has(n));

    let groupsHtml = "";
    for (const [domain, names] of groups) {
      const selCount = names.filter((n) => state.flashSelected.has(n)).length;
      const domainChecked = selCount === names.length ? "checked" : "";
      const cardTotal = names.reduce((s, n) => s + CARDS[n].cards.length, 0);
      const open = state.flashOpenDomains && state.flashOpenDomains.has(domain) ? "open" : "";

      let rows = "";
      for (const name of names) {
        const checked = state.flashSelected.has(name) ? "checked" : "";
        rows += `
          <div class="section-row">
            <label>
              <input type="checkbox" data-flash-section="${escapeHtml(name)}" ${checked}>
              <span>${escapeHtml(name)}</span>
            </label>
            <span class="count">${CARDS[name].cards.length} cards</span>
          </div>`;
      }

      groupsHtml += `
        <details class="domain-details" data-domain="${escapeHtml(domain)}" ${open}>
          <summary>
            <input type="checkbox" data-flash-domain="${escapeHtml(domain)}" ${domainChecked}
              aria-label="Select all of ${escapeHtml(domain)}">
            <span class="domain-title">${escapeHtml(domain)}</span>
            <span class="count">${selCount}/${names.length} sections &middot; ${cardTotal} cards</span>
          </summary>
          <div class="domain-body">${rows}</div>
        </details>`;
    }

    const totalSelected = [...state.flashSelected].reduce(
      (sum, n) => sum + (CARDS[n] ? CARDS[n].cards.length : 0),
      0
    );

    app.innerHTML = `
      <button class="link" id="btn-home">&larr; Home</button>
      <h1>Flashcards</h1>
      <p class="subtitle">Pick sections from the study notes. Expand a domain to choose individual sections, or tick the domain to take all of it.</p>

      <div class="panel">
        <h2>Choose Sections</h2>
        <div class="toolbar">
          <button id="btn-flash-all">${allSelected ? "Clear All" : "Select All"}</button>
        </div>
        ${groupsHtml}
        <div class="controls-row">
          <label class="toggle-row">
            <input type="checkbox" id="chk-flash-shuffle" ${state.flashShuffle ? "checked" : ""}>
            Shuffle cards
          </label>
          <button class="primary" id="btn-flash-start" ${totalSelected === 0 ? "disabled" : ""}>
            Start (${totalSelected} card${totalSelected === 1 ? "" : "s"})
          </button>
        </div>
        ${totalSelected === 0 ? '<div class="error">Select at least one section to begin.</div>' : ""}
      </div>
    `;

    // Remember which domains are expanded so re-renders don't collapse them
    app.querySelectorAll("details.domain-details").forEach((d) => {
      d.addEventListener("toggle", () => {
        if (!state.flashOpenDomains) state.flashOpenDomains = new Set();
        const domain = d.getAttribute("data-domain");
        if (d.open) state.flashOpenDomains.add(domain);
        else state.flashOpenDomains.delete(domain);
      });
    });

    app.querySelectorAll("input[data-flash-domain]").forEach((cb) => {
      // Clicking the checkbox inside <summary> shouldn't toggle the details open/closed
      cb.addEventListener("click", (e) => e.stopPropagation());
      cb.addEventListener("change", (e) => {
        const names = groups.get(e.target.getAttribute("data-flash-domain"));
        names.forEach((n) =>
          e.target.checked ? state.flashSelected.add(n) : state.flashSelected.delete(n)
        );
        saveFlashSelection();
        renderFlashSetup();
      });
    });

    app.querySelectorAll("input[data-flash-section]").forEach((cb) => {
      cb.addEventListener("change", (e) => {
        const name = e.target.getAttribute("data-flash-section");
        if (e.target.checked) state.flashSelected.add(name);
        else state.flashSelected.delete(name);
        saveFlashSelection();
        renderFlashSetup();
      });
    });

    document.getElementById("btn-home").addEventListener("click", renderHome);

    document.getElementById("btn-flash-all").addEventListener("click", () => {
      if (allSelected) state.flashSelected.clear();
      else allNames.forEach((n) => state.flashSelected.add(n));
      saveFlashSelection();
      renderFlashSetup();
    });

    document.getElementById("chk-flash-shuffle").addEventListener("change", (e) => {
      state.flashShuffle = e.target.checked;
    });

    document.getElementById("btn-flash-start").addEventListener("click", () => {
      startFlash(buildFlashItems());
    });
  }

  // ---------- flashcards: card screen ----------

  function revealFlash() {
    if (state.screen !== "flash" || state.flash.revealed) return;
    state.flash.revealed = true;
    renderFlash();
  }

  function gradeFlash(gotIt) {
    const flash = state.flash;
    if (state.screen !== "flash" || !flash.revealed) return;
    const item = flash.items[flash.index];
    (gotIt ? flash.got : flash.missed).push(item);
    if (flash.index === flash.items.length - 1) {
      renderFlashResults();
    } else {
      flash.index++;
      flash.revealed = false;
      renderFlash();
    }
  }

  function renderFlash() {
    const flash = state.flash;
    const item = flash.items[flash.index];
    const total = flash.items.length;
    const pct = Math.round((flash.index / total) * 100);

    const answerHtml = flash.revealed
      ? `<div class="flash-answer">${escapeHtml(item.a)}<div class="page-ref">${pageLabel(item.page)}</div></div>
         <div class="flash-actions">
           <button class="grade bad" id="btn-missed">Missed it</button>
           <button class="grade good" id="btn-got">Got it</button>
         </div>`
      : `<div class="flash-actions">
           <button class="primary" id="btn-reveal">See Answer</button>
         </div>`;

    app.innerHTML = `
      <div class="quiz-header">
        <span>Card ${flash.index + 1} of ${total}</span>
        <span>${flash.got.length} got it &middot; ${flash.missed.length} missed</span>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>

      <div class="panel flash-card">
        <div class="question-domain">${escapeHtml(item.section)}</div>
        <div class="flash-question">${escapeHtml(item.q)}</div>
        ${answerHtml}
      </div>
      <button class="link" id="btn-flash-quit">End session &amp; see results</button>
    `;

    if (flash.revealed) {
      document.getElementById("btn-got").addEventListener("click", () => gradeFlash(true));
      document.getElementById("btn-missed").addEventListener("click", () => gradeFlash(false));
    } else {
      document.getElementById("btn-reveal").addEventListener("click", revealFlash);
    }

    document.getElementById("btn-flash-quit").addEventListener("click", renderFlashResults);
  }

  // ---------- flashcards: results screen ----------

  function renderFlashResults() {
    state.screen = "flash-results";
    const flash = state.flash;
    const seen = flash.got.length + flash.missed.length;
    const pct = seen === 0 ? 0 : Math.round((flash.got.length / seen) * 100);
    const unseen = flash.items.length - seen;

    let reviewHtml = "";
    if (flash.missed.length > 0) {
      reviewHtml = `<details class="review-details" open>
        <summary>Review ${flash.missed.length} missed card${flash.missed.length === 1 ? "" : "s"}</summary>`;
      for (const it of flash.missed) {
        reviewHtml += `
          <div class="review-item wrong">
            <div class="review-q">${escapeHtml(it.q)}</div>
            <div class="review-line correct-answer">${escapeHtml(it.a)}</div>
            <div class="review-line">${escapeHtml(it.section)} &middot; ${pageLabel(it.page)}</div>
          </div>`;
      }
      reviewHtml += `</details>`;
    }

    app.innerHTML = `
      <h1>Flashcard Results</h1>
      <div class="panel">
        <div class="results-score ${pct >= 80 ? "pass" : "fail"}">${pct}%</div>
        <div class="results-sub">${flash.got.length} of ${seen} cards known${unseen > 0 ? ` (${unseen} not reached)` : ""}</div>
        <div class="results-grid">
          <div class="stat-box"><div class="num" style="color:var(--good)">${flash.got.length}</div><div class="label">Got it</div></div>
          <div class="stat-box"><div class="num" style="color:var(--bad)">${flash.missed.length}</div><div class="label">Missed</div></div>
        </div>
        ${reviewHtml}
        <div class="controls-row">
          ${flash.missed.length > 0 ? `<button class="primary" id="btn-flash-missed">Study Missed Cards (${flash.missed.length})</button>` : ""}
          <button id="btn-flash-restart">Restart All Cards</button>
          <button id="btn-flash-sections">Choose Different Sections</button>
          <button id="btn-home">Home</button>
        </div>
      </div>
    `;

    const missedBtn = document.getElementById("btn-flash-missed");
    if (missedBtn) {
      missedBtn.addEventListener("click", () =>
        startFlash(state.flashShuffle ? shuffle(flash.missed) : flash.missed.slice())
      );
    }
    document.getElementById("btn-flash-restart").addEventListener("click", () =>
      startFlash(state.flashShuffle ? shuffle(flash.items) : flash.items.slice())
    );
    document.getElementById("btn-flash-sections").addEventListener("click", renderFlashSetup);
    document.getElementById("btn-home").addEventListener("click", renderHome);
  }

  // Keyboard shortcuts on the flashcard screen: Space/Enter = reveal, 1 = got it, 2 = missed
  document.addEventListener("keydown", (e) => {
    if (state.screen !== "flash" || e.ctrlKey || e.metaKey || e.altKey) return;
    if (!state.flash.revealed && (e.key === " " || e.key === "Enter")) {
      e.preventDefault();
      revealFlash();
    } else if (state.flash.revealed && e.key === "1") {
      gradeFlash(true);
    } else if (state.flash.revealed && e.key === "2") {
      gradeFlash(false);
    }
  });

  // ---------- boot ----------

  if (!window.QUIZ_DATA || !window.FLASHCARD_DATA) {
    app.innerHTML = `<div class="panel error">Could not find questions-data.js or flashcards-data.js. Run "python build_data.py" to generate them from Questions.json and Flashcards.json.</div>`;
  } else {
    renderHome();
  }
})();
