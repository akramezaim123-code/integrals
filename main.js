  // WORLD 5: TRIGONOMETRIC SUBSTITUTION
  "5-0": {
    integral: "∫ sqrt(4-x²) dx",
    steps: [
      { title: "Identify the Form", hint: "sqrt(a²-x²) suggests x = a*sin(θ).",
        choices: [
          { text: "x = 2*sec(θ)", correct: false, feedback: "That's for sqrt(x²-a²)." },
          { text: "x = 2*sin(θ)", correct: true, feedback: "Correct! a=2, so x = 2*sin(θ)." },
          { text: "x = 2*tan(θ)", correct: false, feedback: "That's for sqrt(a²+x²)." },
          { text: "x = 2*cos(θ)", correct: false, feedback: "That would give sqrt(4-4cos²) = 2*sin, but standard form uses sin." }
        ], insight: "For sqrt(a²-x²), use x = a*sin(θ). Then sqrt(a²-x²) = a*cos(θ)."
      },
      { title: "Compute dx", hint: "x = 2*sin(θ), so dx = ?",
        choices: [
          { text: "dx = 2*cos(θ) dθ", correct: true, feedback: "Correct!" },
          { text: "dx = -2*sin(θ) dθ", correct: false, feedback: "That's the derivative of cos." },
          { text: "dx = 2*sec²(θ) dθ", correct: false, feedback: "That's for x = 2*tan(θ)." },
          { text: "dx = 2*sin(θ) dθ", correct: false, feedback: "Wrong derivative." }
        ], insight: "dx = 2*cos(θ) dθ."
      },
      { title: "Transform the Integral", hint: "sqrt(4-x²) = 2*cos(θ), dx = 2*cos(θ) dθ",
        choices: [
          { text: "∫ 2*cos(θ) * 2*cos(θ) dθ = ∫ 4*cos²(θ) dθ", correct: true, feedback: "Correct!" },
          { text: "∫ 2*cos(θ) dθ", correct: false, feedback: "You forgot to substitute dx." },
          { text: "∫ 4*sin²(θ) dθ", correct: false, feedback: "sqrt(4-x²) = 2*cos(θ), not 2*sin(θ)." },
          { text: "∫ 2*cos(θ) * 2*sin(θ) dθ", correct: false, feedback: "dx = 2*cos(θ) dθ, not 2*sin(θ)." }
        ], insight: "∫ sqrt(4-x²) dx = ∫ 2*cos(θ) * 2*cos(θ) dθ = ∫ 4*cos²(θ) dθ."
      },
      { title: "Integrate cos²(θ)", hint: "Use half-angle: cos²(θ) = (1+cos(2θ))/2",
        choices: [
          { text: "4 * (1/2)(θ + sin(2θ)/2) = 2θ + sin(2θ)", correct: true, feedback: "Correct!" },
          { text: "4*sin(θ)*cos(θ)", correct: false, feedback: "That's the derivative of sin², not the integral of cos²." },
          { text: "4*(θ/2 + sin(θ)/2)", correct: false, feedback: "Wrong half-angle application." },
          { text: "2θ + 2*sin(2θ)", correct: false, feedback: "Coefficient error." }
        ], insight: "∫ 4*cos²(θ) dθ = 4 * (θ/2 + sin(2θ)/4) = 2θ + sin(2θ) = 2θ + 2*sin(θ)*cos(θ)."
      },
      { title: "Final Answer (back-substitute)", hint: "sin(θ) = x/2, cos(θ) = sqrt(4-x²)/2, θ = arcsin(x/2)",
        choices: [
          { text: "2*arcsin(x/2) + (x/2)*sqrt(4-x²) + C", correct: true, feedback: "BOSS DEFEATED! 🎉" },
          { text: "2*arcsin(x/2) + x*sqrt(4-x²) + C", correct: false, feedback: "Missing the 1/2 factor on the second term." },
          { text: "arcsin(x/2) + 2*x*sqrt(4-x²) + C", correct: false, feedback: "Wrong coefficients." },
          { text: "2*arcsin(x) + x*sqrt(1-x²) + C", correct: false, feedback: "Wrong substitution back." }
        ], insight: "Final: 2*arcsin(x/2) + (x*sqrt(4-x²))/2 + C. Area of a semicircle formula!"
      }
    ]
  },

  // WORLD 6: IMPROPER INTEGRALS
  "6-0": {
    integral: "∫ from 1 to ∞ of 1/x² dx",
    steps: [
      { title: "Identify the Type", hint: "Infinite upper limit.",
        choices: [
          { text: "Proper integral", correct: false, feedback: "The upper limit is infinity." },
          { text: "Type I Improper Integral (infinite limit)", correct: true, feedback: "Correct!" },
          { text: "Type II Improper Integral (unbounded integrand)", correct: false, feedback: "The integrand is bounded on [1,∞)." },
          { text: "Undefined integral", correct: false, feedback: "It may converge or diverge - we need to evaluate." }
        ], insight: "Type I: infinite limit. Type II: unbounded integrand. Here we have Type I."
      },
      { title: "Set Up Limit", hint: "∫₁^∞ 1/x² dx = lim(b→∞) ∫₁^b 1/x² dx",
        choices: [
          { text: "lim(b→∞) [-1/x]₁^b", correct: true, feedback: "Correct! ∫ 1/x² dx = -1/x." },
          { text: "lim(b→∞) [ln(x)]₁^b", correct: false, feedback: "That's for 1/x, not 1/x²." },
          { text: "lim(b→∞) [1/x]₁^b", correct: false, feedback: "Sign error - derivative of 1/x is -1/x²." },
          { text: "lim(b→∞) [-1/(2x³)]₁^b", correct: false, feedback: "Wrong antiderivative." }
        ], insight: "∫ x⁻² dx = -x⁻¹ = -1/x."
      },
      { title: "Evaluate the Limit", hint: "lim(b→∞) [-1/b - (-1/1)] = lim(b→∞) [-1/b + 1]",
        choices: [
          { text: "0 + 1 = 1", correct: true, feedback: "Correct! -1/b → 0 as b → ∞." },
          { text: "-∞ + 1 = -∞", correct: false, feedback: "-1/b approaches 0, not -∞." },
          { text: "∞", correct: false, feedback: "The limit is finite." },
          { text: "Diverges", correct: false, feedback: "It converges to 1." }
        ], insight: "lim(b→∞) -1/b = 0. So the value is 0 + 1 = 1."
      },
      { title: "Conclusion", hint: "The integral converges to 1.",
        choices: [
          { text: "Converges to 1", correct: true, feedback: "Correct!" },
          { text: "Diverges to ∞", correct: false, feedback: "The limit exists and is finite." },
          { text: "Diverges to -∞", correct: false, feedback: "Wrong sign and conclusion." },
          { text: "Converges to 0", correct: false, feedback: "The value is 1, not 0." }
        ], insight: "∫₁^∞ 1/x² dx = 1. This is a convergent p-integral with p=2 > 1."
      },
      { title: "Final Answer", hint: "The value of the improper integral.",
        choices: [
          { text: "1", correct: true, feedback: "BOSS DEFEATED! 🎉" },
          { text: "0", correct: false, feedback: "Wrong." },
          { text: "∞", correct: false, feedback: "It converges." },
          { text: "Diverges", correct: false, feedback: "It converges to 1." }
        ], insight: "Final answer: 1. p-integrals ∫₁^∞ 1/x^p dx converge when p > 1."
      }
    ]
  }
};
// ─── SCREEN NAVIGATION ───
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
  window.scrollTo(0,0);
}

function goToTitle() { showScreen('title'); }
function goToWorlds() { renderWorlds(); showScreen('worlds'); }

function renderWorlds() {
  const container = document.getElementById('worlds-container');
  container.innerHTML = '';
  WORLDS.forEach(world => {
    const unlocked = STATE.unlockedWorlds.includes(world.id);
    const progress = STATE.worldProgress[world.id] || 0;
    const total = world.levels.length;
    const card = document.createElement('div');
    card.className = 'world-card' + (unlocked ? '' : ' locked');
    card.innerHTML = `
      <div class="world-icon">${world.icon}</div>
      <h3>${world.name}</h3>
      <p>${world.desc}</p>
      <div class="world-progress"><div class="world-progress-bar" style="width:${(progress/total)*100}%"></div></div>
      <div class="world-status">${unlocked ? `${progress}/${total} completed` : 'Locked'}</div>
    `;
    if (unlocked) card.onclick = () => goToLevels(world.id);
    container.appendChild(card);
  });
}

function goToLevels(worldId) {
  STATE.currentWorld = worldId;
  const world = WORLDS[worldId];
  document.getElementById('levels-world-title').textContent = world.icon + ' ' + world.name;
  document.getElementById('levels-world-desc').textContent = world.desc;
  
  const container = document.getElementById('levels-container');
  container.innerHTML = '';
  
  const unlocked = STATE.unlockedLevels[worldId] || [0];
  
  world.levels.forEach((level, idx) => {
    const node = document.createElement('div');
    const isUnlocked = unlocked.includes(idx);
    const isCompleted = (STATE.levelProgress[worldId+'-'+idx] || 0) > 0;
    
    node.className = 'level-node ' + (isCompleted ? 'completed' : (isUnlocked ? 'available' : 'locked'));
    node.innerHTML = (idx+1) + (isCompleted ? '<div class="stars">⭐</div>' : '');
    node.onclick = () => { if (isUnlocked) startLevel(worldId, idx); };
    container.appendChild(node);
  });
  
  showScreen('levels');
}

// ─── GAME LOGIC ───
let currentQuestion = null;
let stepStartTime = 0;

function startLevel(worldId, levelIdx) {
  STATE.currentWorld = worldId;
  STATE.currentLevel = levelIdx;
  STATE.currentStep = 0;
  STATE.correctSteps = 0;
  STATE.mistakes = 0;
  STATE.hintUsed = false;
  STATE.startTime = Date.now();
  
  const key = worldId + '-' + levelIdx;
  currentQuestion = QUESTIONS[key];
  
  if (!currentQuestion) {
    // Fallback question generator for missing data
    currentQuestion = generateFallbackQuestion(worldId, levelIdx);
  }
  
  const world = WORLDS[worldId];
  const level = world.levels[levelIdx];
  
  document.getElementById('game-world-title').textContent = world.icon + ' ' + world.name;
  document.getElementById('game-level-num').textContent = (levelIdx+1);
  document.getElementById('integral-display').textContent = currentQuestion.integral;
  
  // Boss banner
  document.getElementById('boss-banner').classList.toggle('hidden', !level.isBoss);
  
  // Timer for hard levels
  const isHard = level.difficulty === 'Hard';
  document.getElementById('timer-container').classList.toggle('hidden', !isHard);
  if (isHard) startTimer(60);
  
  renderStepTrack();
  loadStep(0);
  showScreen('game');
}

function generateFallbackQuestion(worldId, levelIdx) {
  // Simple fallback to prevent crashes
  return {
    integral: "∫ x dx",
    steps: [
      { title: "Identify the Method", hint: "Basic power rule.",
        choices: [
          { text: "Power Rule", correct: true, feedback: "Correct!" },
          { text: "Parts", correct: false, feedback: "Not needed." },
          { text: "Substitution", correct: false, feedback: "Not needed." },
          { text: "Partial Fractions", correct: false, feedback: "Not needed." }
        ], insight: "∫ x dx = x²/2 + C"
      },
      { title: "Apply Power Rule", hint: "Increase exponent by 1, divide by new exponent.",
        choices: [
          { text: "x²/2 + C", correct: true, feedback: "Correct!" },
          { text: "x² + C", correct: false, feedback: "Divide by 2." },
          { text: "x + C", correct: false, feedback: "Increase exponent." },
          { text: "2x + C", correct: false, feedback: "That's the derivative." }
        ], insight: "∫ x dx = x²/2 + C"
      },
      { title: "Verify", hint: "Differentiate your answer.",
        choices: [
          { text: "d/dx(x²/2) = x ✓", correct: true, feedback: "Correct!" },
          { text: "d/dx(x²) = 2x", correct: false, feedback: "Wrong." },
          { text: "d/dx(x) = 1", correct: false, feedback: "Wrong." },
          { text: "d/dx(2x) = 2", correct: false, feedback: "Wrong." }
        ], insight: "Verification confirms the answer."
      },
      { title: "General Form", hint: "∫ x^n dx = ?",
        choices: [
          { text: "x^(n+1)/(n+1) + C", correct: true, feedback: "Correct!" },
          { text: "x^n/n + C", correct: false, feedback: "Wrong." },
          { text: "nx^(n-1) + C", correct: false, feedback: "That's derivative." },
          { text: "x^(n+1) + C", correct: false, feedback: "Missing division." }
        ], insight: "Power rule formula."
      },
      { title: "Final Answer", hint: "The antiderivative.",
        choices: [
          { text: "x²/2 + C", correct: true, feedback: "Excellent!" },
          { text: "x² + C", correct: false, feedback: "Wrong." },
          { text: "2x + C", correct: false, feedback: "Wrong." },
          { text: "x + C", correct: false, feedback: "Wrong." }
        ], insight: "Final: x²/2 + C"
      }
    ]
  };
}

function renderStepTrack() {
  const track = document.getElementById('step-track');
  track.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const dot = document.createElement('div');
    dot.className = 'step-dot' + (i === STATE.currentStep ? ' active' : '') + (i < STATE.currentStep ? ' done' : '');
    track.appendChild(dot);
  }
}

function loadStep(stepIdx) {
  STATE.currentStep = stepIdx;
  const step = currentQuestion.steps[stepIdx];
  
  document.getElementById('step-title').textContent = `Step ${stepIdx+1}: ${step.title}`;
  document.getElementById('current-step-num').textContent = stepIdx+1;
  
  const choicesContainer = document.getElementById('choices-container');
  choicesContainer.innerHTML = '';
  
  const labels = ['A','B','C','D'];
  step.choices.forEach((choice, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `<div class="choice-label">${labels[idx]}</div><div>${choice.text}</div>`;
    btn.onclick = () => selectChoice(idx, btn);
    choicesContainer.appendChild(btn);
  });
  
  // Reset UI
  document.getElementById('hint-btn').disabled = false;
  document.getElementById('hint-text').classList.remove('show');
  document.getElementById('feedback-box').classList.remove('show', 'correct', 'wrong');
  document.getElementById('mistake-card').classList.remove('show');
  document.getElementById('next-step-btn').classList.add('hidden');
  document.getElementById('finish-btn').classList.add('hidden');
  
  stepStartTime = Date.now();
}

function selectChoice(choiceIdx, btnElement) {
  const step = currentQuestion.steps[STATE.currentStep];
  const choice = step.choices[choiceIdx];
  
  // Disable all buttons
  document.querySelectorAll('.choice-btn').forEach(b => {
    b.classList.add('disabled');
    b.disabled = true;
  });
  
  const feedbackBox = document.getElementById('feedback-box');
  feedbackBox.classList.add('show');
  
  if (choice.correct) {
    btnElement.classList.add('correct');
    feedbackBox.classList.add('correct');
    document.getElementById('fb-title').textContent = '✅ Correct!';
    document.getElementById('fb-message').textContent = choice.feedback;
    document.getElementById('fb-insight').textContent = step.insight;
    
    STATE.correctSteps++;
    STATE.streak++;
    if (STATE.streak > STATE.bestStreak) STATE.bestStreak = STATE.streak;
    
    // Score calculation
    const timeBonus = Math.max(0, 20 - Math.floor((Date.now() - stepStartTime)/1000));
    const hintPenalty = STATE.hintUsed ? 5 : 0;
    const streakBonus = Math.min(STATE.streak * 2, 10);
    const stepScore = 20 + timeBonus - hintPenalty + streakBonus;
    STATE.score += stepScore;
    
    // Combo popup
    if (STATE.streak >= 3) showComboPopup(STATE.streak);
    
    updateHeader();
    
    if (STATE.currentStep < 4) {
      document.getElementById('next-step-btn').classList.remove('hidden');
    } else {
      document.getElementById('finish-btn').classList.remove('hidden');
    }
  } else {
    btnElement.classList.add('wrong');
    feedbackBox.classList.add('wrong');
    document.getElementById('fb-title').textContent = '❌ Not quite right';
    document.getElementById('fb-message').textContent = choice.feedback;
    document.getElementById('fb-insight').textContent = step.insight;
    
    STATE.streak = 0;
    STATE.mistakes++;
    updateHeader();
    
    // Show mistake detector
    const mistakeCard = document.getElementById('mistake-card');
    mistakeCard.classList.add('show');
    document.getElementById('mistake-text').textContent = `You selected "${choice.text}". ${choice.feedback} ${step.insight} Try again!`;
    
    // Allow retry after delay
    setTimeout(() => {
      document.querySelectorAll('.choice-btn').forEach(b => {
        b.classList.remove('disabled', 'correct', 'wrong');
        b.disabled = false;
      });
      btnElement.classList.add('disabled');
      btnElement.disabled = true;
    }, 2000);
  }
}

function showHint() {
  const step = currentQuestion.steps[STATE.currentStep];
  document.getElementById('hint-text').textContent = step.hint;
  document.getElementById('hint-text').classList.add('show');
  document.getElementById('hint-btn').disabled = true;
  STATE.hintUsed = true;
}

function nextStep() {
  STATE.hintUsed = false;
  renderStepTrack();
  loadStep(STATE.currentStep + 1);
}

function finishLevel() {
  stopTimer();
  
  const totalTime = Math.floor((Date.now() - STATE.startTime)/1000);
  const timeBonus = Math.max(0, 60 - totalTime);
  const stars = STATE.correctSteps === 5 ? (timeBonus > 30 ? 3 : 2) : (STATE.correctSteps >= 3 ? 2 : 1);
  
  // Save progress
  const key = STATE.currentWorld + '-' + STATE.currentLevel;
  STATE.levelProgress[key] = Math.max(STATE.levelProgress[key]||0, stars);
  
  // Update world progress
  let worldCompleted = 0;
  WORLDS[STATE.currentWorld].levels.forEach((_, idx) => {
    if (STATE.levelProgress[STATE.currentWorld+'-'+idx]) worldCompleted++;
  });
  STATE.worldProgress[STATE.currentWorld] = worldCompleted;
  
  // Unlock next level
  const nextLevel = STATE.currentLevel + 1;
  if (nextLevel < WORLDS[STATE.currentWorld].levels.length) {
    if (!STATE.unlockedLevels[STATE.currentWorld]) STATE.unlockedLevels[STATE.currentWorld] = [];
    if (!STATE.unlockedLevels[STATE.currentWorld].includes(nextLevel)) {
      STATE.unlockedLevels[STATE.currentWorld].push(nextLevel);
    }
  }
  
  // Unlock next world if all levels complete
  if (worldCompleted === WORLDS[STATE.currentWorld].levels.length) {
    const nextWorld = STATE.currentWorld + 1;
    if (nextWorld < WORLDS.length && !STATE.unlockedWorlds.includes(nextWorld)) {
      STATE.unlockedWorlds.push(nextWorld);
      STATE.unlockedLevels[nextWorld] = [0];
    }
  }
  
  // Show results
  document.getElementById('results-trophy').textContent = stars === 3 ? '🏆' : (stars === 2 ? '🥈' : '🥉');
  document.getElementById('results-title').textContent = stars === 3 ? 'Perfect!' : (stars === 2 ? 'Great Job!' : 'Level Complete!');
  document.getElementById('results-stars').textContent = '⭐'.repeat(stars);
  document.getElementById('results-score').textContent = STATE.score;
  document.getElementById('res-correct').textContent = STATE.correctSteps + '/5';
  document.getElementById('res-time').textContent = totalTime + 's';
  document.getElementById('res-streak').textContent = STATE.bestStreak;
  
  showScreen('results');
}

function nextLevel() {
  const world = WORLDS[STATE.currentWorld];
  if (STATE.currentLevel + 1 < world.levels.length) {
    startLevel(STATE.currentWorld, STATE.currentLevel + 1);
  } else {
    goToWorlds();
  }
}

function retryLevel() {
  startLevel(STATE.currentWorld, STATE.currentLevel);
}

function showHowToPlay() {
  showModal('How to Play', 
    '🎮 Solve integrals step-by-step through 5 stages:\n\n' +
    '1️⃣ Identify the integration method\n' +
    '2️⃣ Choose the correct transformation\n' +
    '3️⃣ Select key components (u, dv, etc.)\n' +
    '4️⃣ Perform intermediate steps\n' +
    '5️⃣ Find the final answer\n\n' +
    '💡 Use hints when stuck (-5 points)\n' +
    '🔥 Build streaks for bonus points\n' +
    '⏱️ Hard levels have time limits\n' +
    '👹 Boss levels test multiple techniques!'
  );
}

function showLeaderboard() {
  const container = document.getElementById('leaderboard-container');
  container.innerHTML = '';
  
  const scores = [
    { name: 'MathWizard', score: 2450 },
    { name: 'IntegralHero', score: 2100 },
    { name: 'CalcMaster', score: 1850 },
    { name: STATE.playerName, score: STATE.score },
    { name: 'Newbie', score: 300 }
  ].sort((a,b) => b.score - a.score);
  
  scores.forEach((entry, idx) => {
    const row = document.createElement('div');
    row.className = 'lb-row';
    row.innerHTML = `
      <div class="lb-rank">${idx+1}</div>
      <div class="lb-name">${entry.name}</div>
      <div class="lb-score">${entry.score}</div>
    `;
    container.appendChild(row);
  });
  
  showScreen('leaderboard');
}

function showModal(title, body) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').textContent = body;
  document.getElementById('modal-overlay').classList.add('active');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
}

function showComboPopup(streak) {
  const popup = document.getElementById('combo-popup');
  popup.textContent = `🔥 ${streak}x STREAK! +${Math.min(streak*2, 10)} pts`;
  popup.classList.remove('show');
  void popup.offsetWidth; // trigger reflow
  popup.classList.add('show');
}

function updateHeader() {
  document.getElementById('header-score').textContent = STATE.score;
  document.getElementById('header-streak').textContent = STATE.streak;
  document.getElementById('header-level').textContent = STATE.level;
}

// ─── TIMER ───
function startTimer(seconds) {
  STATE.timeLeft = seconds;
  STATE.timeMode = true;
  updateTimer();
  STATE.timer = setInterval(() => {
    STATE.timeLeft--;
    updateTimer();
    if (STATE.timeLeft <= 0) {
      stopTimer();
      showModal('Time\'s Up!', 'You ran out of time! The integral escapes... Try again!');
      setTimeout(() => {
        closeModal();
        retryLevel();
      }, 2000);
    }
  }, 1000);
}

function stopTimer() {
  if (STATE.timer) {
    clearInterval(STATE.timer);
    STATE.timer = null;
  }
  STATE.timeMode = false;
}

function updateTimer() {
  document.getElementById('timer-display').textContent = STATE.timeLeft;
  const pct = (STATE.timeLeft / 60) * 100;
  document.getElementById('timer-fill').style.width = pct + '%';
}

// ─── PARTICLE BACKGROUND ───
function initParticles() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let width, height;
  
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  
  const particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.1
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  updateHeader();
});
</script>
</body>
</html>
