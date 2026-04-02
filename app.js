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
  fillSelect(elements.trapFilter, ["All", ...unique(QUESTION_BANK.map(q => getTrapFamily(q.trap)))]);
  fillSelect(elements.difficultyFilter, ["All", ...unique(QUESTION_BANK.map(q => q.difficulty))]);

  [elements.domainFilter, elements.trapFilter, elements.difficultyFilter, elements.questionCount].forEach(element => {
    element.addEventListener("change", updateAvailableHint);
    element.addEventListener("input", updateAvailableHint);
  });

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

function getTrapFamily(trap) {
  const rules = [
    {
      family: "Governance before speed",
      includes: [
        "Fix fast",
        "Technical fix",
        "Awareness",
        "Risk register",
        "Security owns everything",
        "Full shutdown"
      ]
    },
    {
      family: "Evidence and containment first",
      includes: [
        "Analyze now",
        "Restore speed",
        "Jump to remediation",
        "Root cause later",
        "Backups exist"
      ]
    },
    {
      family: "Least privilege and lifecycle control",
      includes: [
        "Operational convenience",
        "Access fast",
        "Shared admin",
        "Authentication strength",
        "Faster deprovisioning"
      ]
    },
    {
      family: "Architecture and defense in depth",
      includes: [
        "Strongest control",
        "Redundancy assumption",
        "Segmented equals secure",
        "Single control trust",
        "Confidentiality focus"
      ]
    },
    {
      family: "Secure by design",
      includes: [
        "Deadline pressure",
        "Patch later",
        "Testing at the end",
        "Scan clean"
      ]
    },
    {
      family: "Accountability and due diligence",
      includes: [
        "Ownership confusion",
        "Vendor promise",
        "business ownership"
      ]
    },
    {
      family: "Assessment and control effectiveness",
      includes: [
        "More findings",
        "Compliance pass"
      ]
    },
    {
      family: "Data handling and recoverability",
      includes: [
        "Encrypt everything"
      ]
    }
  ];

  for (const rule of rules) {
    if (rule.includes.some(token => trap.includes(token))) return rule.family;
  }

  return "Other trap patterns";
}

function filteredQuestions() {
  return QUESTION_BANK.filter(q => {
    const domainOk = elements.domainFilter.value === "All" || q.domain === elements.domainFilter.value;
    const trapOk = elements.trapFilter.value === "All" || getTrapFamily(q.trap) === elements.trapFilter.value;
    const diffOk = elements.difficultyFilter.value === "All" || q.difficulty === elements.difficultyFilter.value;
    return domainOk && trapOk && diffOk;
  });
}

function updateAvailableHint() {
  const pool = filteredQuestions();
  const maxQuestions = Math.max(1, pool.length);
  elements.questionCount.max = String(Math.max(30, maxQuestions));

  if (!pool.length) {
    elements.availableHint.textContent = "No questions match this filter combination in the current sample bank.";
    return;
  }

  const requested = normalizeRequestedCount(pool.length);
  const message = `${pool.length} question${pool.length === 1 ? "" : "s"} available in this filter set. Session will use ${requested}.`;
  elements.availableHint.textContent = message;
}

function normalizeRequestedCount(poolLength) {
  const requested = Number(elements.questionCount.value) || 10;
  return Math.max(1, Math.min(requested, poolLength));
}

function startSession() {
  const pool = filteredQuestions();
  if (!pool.length) {
    alert("No questions match this filter combination in the current sample bank.");
    return;
  }

  const count = normalizeRequestedCount(pool.length);
  state.sessionQuestions = buildSessionQuestions(pool, count);
  state.currentIndex = 0;
  state.currentSelection = null;
  state.sessionResults = [];

  elements.emptyState.classList.add("hidden");
  elements.summaryState.classList.add("hidden");
  elements.quizState.classList.remove("hidden");

  renderQuestion();
}

function buildSessionQuestions(pool, count) {
  const selected = shuffle([...pool]).slice(0, count);
  const targetPositions = buildBalancedTargets(selected.length);
  return selected.map((question, index) => prepareQuestion(question, targetPositions[index]));
}

function buildBalancedTargets(count) {
  const targets = [];
  while (targets.length < count) {
    targets.push(...shuffle([0, 1, 2, 3]));
  }
  return targets.slice(0, count);
}

function prepareQuestion(question, targetAnswerIndex) {
  const correctOption = question.options[question.answer];
  const wrongOptions = shuffle(question.options.filter((_, index) => index !== question.answer));
  const displayOptions = [];
  let wrongIndex = 0;

  for (let index = 0; index < question.options.length; index += 1) {
    if (index === targetAnswerIndex) {
      displayOptions.push(correctOption);
    } else {
      displayOptions.push(wrongOptions[wrongIndex]);
      wrongIndex += 1;
    }
  }

  return {
    ...question,
    displayOptions,
    displayAnswer: targetAnswerIndex,
  };
}

function renderQuestion() {
  const q = state.sessionQuestions[state.currentIndex];
  const total = state.sessionQuestions.length;
  const correctCount = state.sessionResults.filter(r => r.correct).length;
  const wrongCount = state.sessionResults.length - correctCount;

  elements.progressLabel.textContent = `Question ${state.currentIndex + 1} of ${total}`;
  elements.progressBar.style.width = `${((state.currentIndex) / total) * 100}%`;
  elements.sessionCorrect.textContent = `${correctCount} correct`;
  elements.sessionWrong.textContent = `${wrongCount} missed`;
  elements.domainBadge.textContent = q.domain;
  elements.trapBadge.textContent = `${getTrapFamily(q.trap)} · ${q.trap}`;
  elements.difficultyBadge.textContent = q.difficulty;
  elements.questionStem.textContent = q.stem;
  elements.feedback.className = "feedback hidden";
  elements.nextBtn.disabled = true;
  elements.options.innerHTML = "";

  q.displayOptions.forEach((option, index) => {
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
  const correct = index === q.displayAnswer;

  [...elements.options.children].forEach((button, idx) => {
    button.classList.add("locked");
    if (idx === q.displayAnswer) button.classList.add("correct");
    if (idx === index && idx !== q.displayAnswer) button.classList.add("incorrect");
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
            <p><strong>Trap family:</strong> ${escapeHtml(getTrapFamily(q.trap))}</p>
            <p><strong>Trap detail:</strong> ${escapeHtml(q.trap)}</p>
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
      <li>Classify first, then control.</li>
      <li>Preserve evidence before deep analysis.</li>
      <li>Right-sized control beats strongest control.</li>
      <li>Risk ownership belongs with the business.</li>
      <li>Prove effectiveness, not just activity.</li>
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
  for (let i = array.length - 1; i > 0; i -= 1) {
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
