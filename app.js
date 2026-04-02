const STORAGE_KEY = "trap-answer-trainer-progress-v2";

const state = {
  sessionQuestions: [],
  currentIndex: 0,
  currentSelection: null,
  sessionResults: [],
  progress: loadProgress(),
};

const elements = {
  questionCount: document.getElementById("questionCount"),
  domainFilter: document.getElementById("domainFilter"),
  trapFilter: document.getElementById("trapFilter"),
  difficultyFilter: document.getElementById("difficultyFilter"),
  availableHint: document.getElementById("availableHint"),
  startBtn: document.getElementById("startBtn"),
  reshuffleBtn: document.getElementById("reshuffleBtn"),
  exportBtn: document.getElementById("exportBtn"),
  resetBtn: document.getElementById("resetBtn"),
  emptyState: document.getElementById("emptyState"),
  quizState: document.getElementById("quizState"),
  summaryState: document.getElementById("summaryState"),
  progressLabel: document.getElementById("progressLabel"),
  progressBar: document.getElementById("progressBar"),
  sessionCorrect: document.getElementById("sessionCorrect"),
  sessionWrong: document.getElementById("sessionWrong"),
  domainBadge: document.getElementById("domainBadge"),
  trapBadge: document.getElementById("trapBadge"),
  difficultyBadge: document.getElementById("difficultyBadge"),
  questionStem: document.getElementById("questionStem"),
  options: document.getElementById("options"),
  feedback: document.getElementById("feedback"),
  feedbackHeadline: document.getElementById("feedbackHeadline"),
  rationaleText: document.getElementById("rationaleText"),
  trapText: document.getElementById("trapText"),
  principleText: document.getElementById("principleText"),
  nextBtn: document.getElementById("nextBtn"),
  endBtn: document.getElementById("endBtn"),
  restartBtn: document.getElementById("restartBtn"),
  reviewList: document.getElementById("reviewList"),
  summaryScore: document.getElementById("summaryScore"),
  summaryCorrect: document.getElementById("summaryCorrect"),
  summaryMissed: document.getElementById("summaryMissed"),
  attemptsStat: document.getElementById("attemptsStat"),
  answeredStat: document.getElementById("answeredStat"),
  accuracyStat: document.getElementById("accuracyStat"),
  missedStat: document.getElementById("missedStat"),
  principlesList: document.getElementById("principlesList"),
};

init();

function init() {
  fillSelect(elements.domainFilter, ["All", ...unique(QUESTION_BANK.map(q => q.domain))]);
  fillSelect(elements.trapFilter, ["All", ...unique(QUESTION_BANK.map(q => q.trapFamily || q.trap))]);
  fillSelect(elements.difficultyFilter, ["All", ...unique(QUESTION_BANK.map(q => q.difficulty))]);

  [elements.domainFilter, elements.trapFilter, elements.difficultyFilter].forEach(el => {
    el.addEventListener("change", updateAvailableHint);
  });
  elements.questionCount.addEventListener("input", normalizeQuestionCount);

  renderAllTimeStats();
  renderPrinciples();
  updateAvailableHint();

  elements.startBtn.addEventListener("click", startSession);
  elements.reshuffleBtn.addEventListener("click", startSession);
  elements.nextBtn.addEventListener("click", nextQuestion);
  elements.endBtn.addEventListener("click", endSession);
  elements.restartBtn.addEventListener("click", startSession);
  elements.exportBtn.addEventListener("click", exportProgress);
  elements.resetBtn.addEventListener("click", resetProgress);
}

function fillSelect(select, values) {
  select.innerHTML = values.map(value => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("");
}

function unique(list) {
  return [...new Set(list)].sort((a, b) => a.localeCompare(b));
}

function updateAvailableHint() {
  const available = filteredQuestions().length;
  elements.questionCount.max = String(Math.max(1, available || QUESTION_BANK.length));
  normalizeQuestionCount();
  elements.availableHint.textContent = available
    ? `${available} question${available === 1 ? "" : "s"} match the current filters.`
    : "No questions match the current filters.";
}

function normalizeQuestionCount() {
  const available = Math.max(1, filteredQuestions().length || QUESTION_BANK.length);
  let value = Number(elements.questionCount.value) || 10;
  value = Math.max(1, Math.min(value, available));
  elements.questionCount.value = String(value);
}

function startSession() {
  const pool = filteredQuestions();
  if (!pool.length) {
    alert("No questions match the selected filters.");
    return;
  }

  const count = Math.max(1, Math.min(Number(elements.questionCount.value) || 10, pool.length));
  state.sessionQuestions = shuffle([...pool]).slice(0, count).map(prepareQuestionForSession);
  state.currentIndex = 0;
  state.currentSelection = null;
  state.sessionResults = [];

  elements.emptyState.classList.add("hidden");
  elements.summaryState.classList.add("hidden");
  elements.quizState.classList.remove("hidden");

  renderQuestion();
}

function filteredQuestions() {
  return QUESTION_BANK.filter(q => {
    const domainOk = elements.domainFilter.value === "All" || q.domain === elements.domainFilter.value;
    const trapValue = q.trapFamily || q.trap;
    const trapOk = elements.trapFilter.value === "All" || trapValue === elements.trapFilter.value;
    const diffOk = elements.difficultyFilter.value === "All" || q.difficulty === elements.difficultyFilter.value;
    return domainOk && trapOk && diffOk;
  });
}

function prepareQuestionForSession(question) {
  const indices = question.options.map((_, idx) => idx);
  shuffle(indices);
  const options = indices.map(idx => question.options[idx]);
  const answer = indices.indexOf(question.answer);

  return {
    ...question,
    displayTrap: question.trapFamily || question.trap,
    options,
    answer,
    originalAnswerIndex: question.answer,
  };
}

function renderQuestion() {
  const q = state.sessionQuestions[state.currentIndex];
  const total = state.sessionQuestions.length;
  const correctCount = state.sessionResults.filter(r => r.correct).length;
  const wrongCount = state.sessionResults.length - correctCount;

  elements.progressLabel.textContent = `Question ${state.currentIndex + 1} of ${total}`;
  elements.progressBar.style.width = `${(state.currentIndex / total) * 100}%`;
  elements.sessionCorrect.textContent = `${correctCount} correct`;
  elements.sessionWrong.textContent = `${wrongCount} missed`;
  elements.domainBadge.textContent = q.domain;
  elements.trapBadge.textContent = q.displayTrap;
  elements.difficultyBadge.textContent = q.difficulty;
  elements.questionStem.textContent = q.stem;
  elements.feedback.className = "feedback hidden";
  elements.nextBtn.disabled = true;
  elements.options.innerHTML = "";

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option";
    button.innerHTML = `<strong>${String.fromCharCode(65 + index)}.</strong> ${escapeHtml(option)}`;
    button.addEventListener("click", () => evaluateAnswer(index));
    elements.options.appendChild(button);
  });
}

function evaluateAnswer(index) {
  if (state.currentSelection !== null) return;
  const q = state.sessionQuestions[state.currentIndex];
  state.currentSelection = index;
  const correct = index === q.answer;

  [...elements.options.children].forEach((button, idx) => {
    button.classList.add("locked");
    if (idx === q.answer) button.classList.add("correct");
    if (idx === index && idx !== q.answer) button.classList.add("incorrect");
  });

  const result = { id: q.id, correct, selected: index };
  state.sessionResults.push(result);
  updateProgress(q.id, correct);

  elements.feedback.className = `feedback ${correct ? "correct" : "incorrect"}`;
  elements.feedback.classList.remove("hidden");
  elements.feedbackHeadline.textContent = correct ? "Correct" : "Not quite";
  elements.rationaleText.textContent = q.rationale;
  elements.trapText.textContent = q.trapRationale;
  elements.principleText.textContent = q.principle;
  elements.nextBtn.disabled = false;
  elements.progressBar.style.width = `${((state.currentIndex + 1) / state.sessionQuestions.length) * 100}%`;

  const correctCount = state.sessionResults.filter(r => r.correct).length;
  const wrongCount = state.sessionResults.length - correctCount;
  elements.sessionCorrect.textContent = `${correctCount} correct`;
  elements.sessionWrong.textContent = `${wrongCount} missed`;
}

function nextQuestion() {
  state.currentSelection = null;
  if (state.currentIndex >= state.sessionQuestions.length - 1) {
    endSession();
    return;
  }
  state.currentIndex += 1;
  renderQuestion();
}

function endSession() {
  elements.quizState.classList.add("hidden");
  elements.summaryState.classList.remove("hidden");

  const correct = state.sessionResults.filter(r => r.correct).length;
  const total = state.sessionResults.length;
  const missed = state.sessionResults.filter(r => !r.correct);
  const percent = total ? Math.round((correct / total) * 100) : 0;

  state.progress.attempts += total ? 1 : 0;
  saveProgress();
  renderAllTimeStats();
  renderPrinciples();

  elements.summaryScore.textContent = `${percent}%`;
  elements.summaryCorrect.textContent = String(correct);
  elements.summaryMissed.textContent = String(missed.length);
  elements.reviewList.innerHTML = missed.length
    ? missed.map(item => {
        const q = QUESTION_BANK.find(question => question.id === item.id);
        return `
          <article class="review-item">
            <p><strong>${escapeHtml(q.stem)}</strong></p>
            <p><strong>Correct answer:</strong> ${escapeHtml(q.options[q.answer])}</p>
            <p><strong>Trap family:</strong> ${escapeHtml(q.trapFamily || q.trap)}</p>
            <p><strong>Principle:</strong> ${escapeHtml(q.principle)}</p>
          </article>
        `;
      }).join("")
    : `<article class="review-item"><p>No misses in this session.</p></article>`;
}

function renderAllTimeStats() {
  const answered = Object.values(state.progress.questions).reduce((sum, q) => sum + q.attempts, 0);
  const correct = Object.values(state.progress.questions).reduce((sum, q) => sum + q.correct, 0);
  const missed = answered - correct;
  const accuracy = answered ? Math.round((correct / answered) * 100) : 0;

  elements.attemptsStat.textContent = String(state.progress.attempts || 0);
  elements.answeredStat.textContent = String(answered);
  elements.accuracyStat.textContent = `${accuracy}%`;
  elements.missedStat.textContent = String(missed);
}

function renderPrinciples() {
  const weakQuestions = Object.entries(state.progress.questions)
    .map(([id, data]) => {
      const q = QUESTION_BANK.find(question => question.id === Number(id));
      const accuracy = data.attempts ? data.correct / data.attempts : 0;
      return { q, accuracy, attempts: data.attempts };
    })
    .filter(item => item.q && item.attempts > 0)
    .sort((a, b) => a.accuracy - b.accuracy || b.attempts - a.attempts)
    .slice(0, 5);

  if (!weakQuestions.length) {
    elements.principlesList.innerHTML = `
      <li>Classify and assign ownership before selecting controls.</li>
      <li>Reduce standing privilege and scope access to the task.</li>
      <li>Preserve evidentiary integrity before deeper analysis.</li>
      <li>Reduce blast radius before broad restoration.</li>
      <li>Choose controls based on risk and fit, not maximum strength.</li>
    `;
    return;
  }

  elements.principlesList.innerHTML = weakQuestions
    .map(item => `<li>${escapeHtml(item.q.principle)}</li>`)
    .join("");
}

function updateProgress(id, correct) {
  if (!state.progress.questions[id]) {
    state.progress.questions[id] = { attempts: 0, correct: 0 };
  }
  state.progress.questions[id].attempts += 1;
  if (correct) state.progress.questions[id].correct += 1;
  saveProgress();
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { attempts: 0, questions: {} };
    const parsed = JSON.parse(raw);
    return {
      attempts: parsed.attempts || 0,
      questions: parsed.questions || {}
    };
  } catch {
    return { attempts: 0, questions: {} };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function resetProgress() {
  if (!confirm("Reset all stored progress on this device?")) return;
  state.progress = { attempts: 0, questions: {} };
  saveProgress();
  renderAllTimeStats();
  renderPrinciples();
}

function exportProgress() {
  const blob = new Blob([JSON.stringify(state.progress, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "trap-answer-trainer-progress.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
