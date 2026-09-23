(function () {
  "use strict";

  const DATA = window.QUIZ_DATA || {};
  const app = document.getElementById("app");

  const state = {
    screen: "setup",
    selected: new Set(),
    includeBonus: true,
    quiz: null, // { items: [...], index, score: {correct, wrong} }
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
      const qs = state.includeBonus ? v.questions.concat(v.bonusQuestions) : v.questions;
      for (const q of qs) {
        pool.push({ section: name, domain: v.domain, source: q });
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
      <h1>Security+ Study Quiz</h1>
      <p class="subtitle">Pick one or more sections, then test yourself. Questions and answer order are randomized every time.</p>

      <div class="panel">
        <h2>Choose Sections</h2>
        <div class="toolbar">
          <button id="btn-select-all">${allSelected ? "Clear All" : "Select All"}</button>
        </div>
        ${groupsHtml}
        <div class="controls-row">
          <label class="toggle-row">
            <input type="checkbox" id="chk-bonus" ${state.includeBonus ? "checked" : ""}>
            Include bonus questions
          </label>
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

    document.getElementById("btn-select-all").addEventListener("click", () => {
      if (allSelected) state.selected.clear();
      else allNames.forEach((n) => state.selected.add(n));
      renderSetup();
    });

    document.getElementById("chk-bonus").addEventListener("change", (e) => {
      state.includeBonus = e.target.checked;
      renderSetup();
    });

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
        <div class="question-domain">${escapeHtml(item.domain)}</div>
        <div class="question-text">${escapeHtml(item.question)}</div>
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

  // ---------- boot ----------

  if (!window.QUIZ_DATA) {
    app.innerHTML = `<div class="panel error">Could not find questions-data.js. Run "python build_data.py" to generate it from Questions.json.</div>`;
  } else {
    renderSetup();
  }
})();
