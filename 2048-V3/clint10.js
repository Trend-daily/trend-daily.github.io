document.addEventListener("DOMContentLoaded", () => {

window.initGame = initGame;
const sounds = {};
  const soundList = {
    spawn: 'sounds/spawn.mp3',
    swap: 'sounds/swap.wav',
    bomb: 'sounds/bomb.mp3',
    destroy: 'sounds/destroy.mp3',
    penalty: 'sounds/penalty.mp3',
    gem: 'sounds/gem.mp3',
    'gem-activate': 'sounds/activate.mp3',
    highscore: 'sounds/highscore.mp3',
    win: 'sounds/win.mp3',
    gameover: 'sounds/gameover.mp3',
    select: 'sounds/select.mp3',
    timer: 'sounds/timer.wav',
  };
  
  
  

  Object.entries(soundList).forEach(([name, src]) => {
    const audio = new Audio(src);
    audio.volume = 0.5;
    sounds[name] = audio;
  });
  
  window.playSound = function(type) {
    const audio = sounds[type];
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  };
  
   // ======================
    // TIMER LOGIC (NO LOOPS)
    // ======================

    let startTime = 0;
    let pausedAt = 0;
    let pausedTime = 0;
    let isRunning = false;
    let isPaused = false;
    let hasTimerStarted = false;
    window.resumeTimer = resumeTimer;
    window.pauseTimer = pauseTimer;
    window.startTimer = startTimer;
    window.getElapsedSeconds = getElapsedSeconds;
    
    
  const GRID_SIZE = 4;
  const grid = document.getElementById('grid');
  const scoreEl = document.getElementById('score');
  const bestEl = document.getElementById('best');
  window.bestEl = bestEl;

  const gemSwitcher = document.getElementById('gem-switcher');
  const gemGrider = document.getElementById('gem-grider');
  const gemBomb = document.getElementById('gem-bomb');

  const gemStatus = document.createElement('div');
  gemStatus.id = 'gem-status';
  gemStatus.style.cssText = 'color:#00ffff; margin:15px 0; font-size:1.1rem; min-height:24px; opacity:0; transition:opacity 0.3s; text-align:center;';
  document.querySelector('.gems-panel').after(gemStatus);

  // ==================== LEVEL SYSTEM ====================
  let gemCount = 0
  const LEVELS = {
    'super-easy': { name: 'Super-Easy', gems: gemCount, drops: true,  attacks: false },
    'normal':     { name: 'Normal',     gems: 3,        drops: false, attacks: false },
    'hard':       { name: 'Hard',       gems: 3,        drops: false, attacks: true,  chance: 0.15, time: 5000 }
  };
  
  
  /*=== Cut down the infinity trial ===*/
  
 
window.currentLevel = window.currentLevel || 'normal';
  let level = LEVELS[window.currentLevel];

  // Level display
  const levelDisplay = document.createElement('div');
  levelDisplay.id = 'level-display';
  levelDisplay.innerHTML = `Level: <span style="color:#00ffff;font-weight:bold;">${level.name}</span>`;
  levelDisplay.style.cssText = 'margin:10px 0; font-size:1.3rem; color:#aaa;';
  document.querySelector('.levelShow')?.appendChild(levelDisplay);

  // Expose for menu later
  window.setLevel = (lvl) => {
    if (!LEVELS[lvl]) return;
    window.currentLevel = lvl;
    level = LEVELS[lvl];
    localStorage.setItem('2048-level', lvl);
    levelDisplay.innerHTML = `Level: <span style="color:#00ffff;font-weight:bold;">${level.name}</span>`;
    
   const best = await getBestForLevel();   
bestEl.textContent = best.toLocaleString();   
    window.initGame();
  };

  // ==================== GAME STATE ====================
  let matrix = [];
  
  let score = 0;
  // PER-LEVEL BEST SCORES (Get best for level)
async function getBestForLevel() {
  // Anonymous user → only localStorage
  if (!window.currentUser) {
    const localKey = `best-${window.currentLevel}`;
    return parseInt(localStorage.getItem(localKey) || '0', 10);
  }

  // Logged-in user
  const cloudKey = `cloud-best-${window.currentUser.uid}-${window.currentLevel}`;
  let cloudScore = localStorage.getItem(cloudKey);

  
  if (cloudScore !== null) {
    cloudScore = parseInt(cloudScore, 10);
  } else {
    cloudScore = null; // null means "not loaded yet"
  }

  
  if (cloudScore === null) {
    try {
     
      const scoreFromCloud = await window.fetchCloudScores(level)
      
      cloudScore = scoreFromCloud !== undefined && scoreFromCloud !== null
        ? scoreFromCloud
        : 0;

     
      localStorage.setItem(cloudKey, cloudScore);
    } catch (error) {
      console.warn("Could not load best score from cloud:", error);
      cloudScore = 0;
    }
  }

  return cloudScore;
}
async function saveBestForLevel(newScore) {
  const localKey = `best-${window.currentLevel}`;
  let updated = false;

  if (window.currentUser) {
    // Save to Firestore
    await window.saveBestScoreToCloud(window.currentLevel, newScore);

    // Immediately update local cache so UI shows new best right away
    const cloudKey = `cloud-best-${window.currentUser.uid}-${window.currentLevel}`;
    localStorage.setItem(cloudKey, newScore);

    // Optionally update display if bestEl exists
    if (window.bestEl) {
      window.bestEl.textContent = newScore.toLocaleString();
    }

    updated = true; 

  } else {
    // Anonymous user → only localStorage
    const localScore = parseInt(localStorage.getItem(localKey) || '0', 10);
    if (newScore > localScore) {
      localStorage.setItem(localKey, newScore);
      updated = true;
    }
  }

  // Update menu UI
  if (window.updateMenuScores) {
    window.updateMenuScores();
  }

  return updated;
}
(async () => {
  const best = await getBestForLevel();
  bestEl.textContent = best;
})();

  let gems = { switcher: 0, grider: 0, bomb: 0 };
  let activeGem = null;
  let selectedCell = null;
  let wrongMovePenalty = false;
  let previousMatrix = [];

  // Hard mode attack
  let doomedCell = null;
  let attackTimer = null;

  window.initGame();

  // ==================== CORE FUNCTIONS ====================
    
    //====== Timer Function Start ========
    
    
  function startTimer() {
      startTime = performance.now();
      pausedTime = 0;
      isRunning = true;
      isPaused = false;
      updateUI("Game Started: ");
    }

    function pauseTimer() {
      if (!isRunning || isPaused) return;
      pausedAt = performance.now();
      isPaused = true;
      updateUI("Game Paused: ");
    }

    function resumeTimer() {
      if (!isRunning || !isPaused) return;
      pausedTime += performance.now() - pausedAt;
      isPaused = false;
      updateUI("Game Resumed at: ");
    }

    function resetTimer() {
      startTime = 0;
      pausedAt = 0;
      pausedTime = 0;
      isRunning = false;
      isPaused = false;
      
    }

    function getElapsedSeconds() {
      if (!isRunning) return 0;
      const now = isPaused ? pausedAt : performance.now();
      return Math.floor((now - startTime - pausedTime) / 1000);
    }
    
    function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

    function updateUI(msg = "") {
  const time = formatTime(getElapsedSeconds());
  document.getElementById("time").textContent =
    msg ? `${msg} ${time}` : `Time: ${time}`;
}
    //====== Timer Function End ========
  function initGame() {
    matrix = Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0));
    score = 0;
    scoreEl.textContent = 0;
    resetTimer();
    hasTimerStarted = false;
    gems = {
      switcher: level.gems === Infinity ? Infinity : level.gems,
      grider:   level.gems === Infinity ? Infinity : level.gems,
      bomb:     level.gems === Infinity ? Infinity : level.gems
    };
    activeGem = null;
    selectedCell = null;
    wrongMovePenalty = false;
    doomedCell = null;
    clearAttack();
    gemStatus.textContent = '';
    gemStatus.style.opacity = '0';
    previousMatrix = [];
    createTiles();
    spawnTile();
    spawnTile();
    render();
  }

  function createTiles() {
    grid.innerHTML = '';
    for (let i = 0; i < 16; i++) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      tile.dataset.index = i;
      grid.appendChild(tile);
    }
  }

  function spawnTile() {
    const empty = getEmptyCells();
    if (!empty.length) return false;
    const pos = empty[Math.floor(Math.random() * empty.length)];
    matrix[pos.r][pos.c] = Math.random() < 0.5 ? 2 : 4;
    playSound('spawn');
    return true;
  }

  function getEmptyCells() {
    const list = [];
    for (let r = 0; r < GRID_SIZE; r++)
      for (let c = 0; c < GRID_SIZE; c++)
        if (matrix[r][c] === 0) list.push({r, c});
    return list;
  }

  function render() {
    const tiles = grid.children;
    for (let i = 0; i < 16; i++) {
      const r = Math.floor(i / 4), c = i % 4;
      const val = matrix[r][c];
      const prev = previousMatrix[r]?.[c] || 0;
      const tile = tiles[i];

      tile.textContent = val || '';
      tile.className = 'tile';

      if (val) {
        if (val === 1) tile.classList.add('tile-1');
        else tile.classList.add(`tile-${val}`);
        if (prev === 0 && val !== 0) tile.classList.add('new');
        if (val === prev * 2 || (val === 2 && prev === 1)) tile.classList.add('merge');
      }

      if (selectedCell?.r === r && selectedCell?.c === c) tile.classList.add('selected');
      if (doomedCell?.r === r && doomedCell?.c === c) tile.classList.add('doomed');
    }
    updateGemsUI();
    setTimeout(() => previousMatrix = matrix.map(r => [...r]), 300);
  }

  function updateGemsUI() {
    ['switcher', 'grider', 'bomb'].forEach(type => {
      const el = document.getElementById(`gem-${type}`);
      const countEl = el.querySelector('.gem-count');
      const count = gems[type] === Infinity ? '∞' : gems[type];
      countEl.textContent = count;
      el.classList.toggle('has-count', gems[type] > 0 || gems[type] === Infinity);
      el.classList.toggle('dim', gems[type] === 0 && activeGem !== type);
      el.classList.toggle('active', activeGem === type);
    });
  }

  // ==================== GEM SYSTEM ====================
  ['switcher', 'grider', 'bomb'].forEach(type => {
    document.getElementById(`gem-${type}`).addEventListener('click', () => {
      if (gems[type] === 0 && activeGem !== type) return;
      activeGem === type ? deactivateGem() : activateGem(type);
    });
  });

  function activateGem(type) {
    activeGem = type;
    selectedCell = null;
    gemStatus.textContent = `${type.toUpperCase()} ACTIVATED — Tap grid`;
    gemStatus.style.opacity = '1';
    render();
    playSound('gem-activate');
  }

  function deactivateGem() {
    activeGem = null;
    selectedCell = null;
    gemStatus.style.opacity = '0';
    render();
  }

  // Effects
  function triggerGriderEffect(el) {
    const fx = document.createElement('div');
    fx.className = 'grider-effect';
    el.style.position = 'relative';
    el.appendChild(fx);
    setTimeout(() => fx.remove(), 600);
  }

  function triggerBombShockwave() {
    const wave = document.createElement('div');
    wave.className = 'bomb-shockwave';
    document.body.appendChild(wave);
    setTimeout(() => wave.remove(), 800);
  }

  grid.addEventListener('click', e => {
    if (!e.target.classList.contains('tile')) return;
    const i = Array.from(grid.children).indexOf(e.target);
    const r = Math.floor(i / 4), c = i % 4;

    if (activeGem === 'switcher') {
      if (!selectedCell) selectedCell = {r,c};
      else if (selectedCell.r === r && selectedCell.c === c) selectedCell = null;
      else {
        [matrix[selectedCell.r][selectedCell.c], matrix[r][c]] = [matrix[r][c], matrix[selectedCell.r][selectedCell.c]];
        if (gems.switcher !== Infinity) gems.switcher--;
        cancelDoomed();
        deactivateGem();
        playSound('swap');
      }
    }
    else if (activeGem === 'grider' && matrix[r][c] !== 0) {
      matrix[r][c] = 0;
      triggerGriderEffect(e.target);
      if (gems.grider !== Infinity) gems.grider--;
      cancelDoomed();
      deactivateGem();
      playSound('destroy');
    }
    else if (activeGem === 'bomb') {
      for (let i = 0; i < 4; i++) matrix[r][i] = 0;
      triggerBombShockwave();
      if (gems.bomb !== Infinity) gems.bomb--;
      cancelDoomed();
      deactivateGem();
      playSound('bomb');
    }
    render();
  });

  // ==================== MOVEMENT ====================
  function operateRow(row, rev = false) {
    let a = rev ? row.slice().reverse() : row.slice();
    a = a.filter(x => x);
    let gain = 0;
    for (let i = 0; i < a.length-1; i++) {
      if (a[i] === a[i+1] && a[i] !== 1) {
        a[i] *= 2; gain += a[i]; a[i+1] = 0; i++;
      }
    }
    a = a.filter(x => x);
    while (a.length < 4) a.push(0);
    if (rev) a.reverse();
    const changed = !row.every((v,j) => v === a[j]);
    return { newRow: a, changed, gain };
  }

  function transpose(m) { return m[0].map((_,i) => m.map(r => r[i])); }

  function move(dir) {
    if (activeGem) return;
    previousMatrix = matrix.map(r => [...r]);
    let moved = false, gain = 0;
    const old = matrix.map(r => [...r]);
    
    // === NEW: If the entire grid is empty, spawn tiles instead of game over ===
if (matrix.flat().every(v => v === 0)) {
  console.log("Grid empty — respawning tiles...");
  spawnTile();
  spawnTile(); 
  render();
  return;
}

    if (dir === 'left' || dir === 'right') {
      for (let r = 0; r < 4; r++) {
        const res = operateRow(matrix[r], dir === 'right');
        matrix[r] = res.newRow;
        if (res.changed) moved = true;
        gain += res.gain;
      }
    } else {
      matrix = transpose(matrix);
      for (let r = 0; r < 4; r++) {
        const res = operateRow(matrix[r], dir === 'down');
        matrix[r] = res.newRow;
        if (res.changed) moved = true;
        gain += res.gain;
      }
      matrix = transpose(matrix);
    }

    const changed = !matrix.flat().every((v,i) => v === old.flat()[i]);

    if (moved && changed) {
    // ▶ Start timer ONLY on first valid move
if (!hasTimerStarted) {
  startTimer();
  hasTimerStarted = true;
}
    
      score += gain; scoreEl.textContent = score;
    if (saveBestForLevel(score)) {
  best = score;
  bestEl.textContent = best;
  playSound('highscore');
  updateMenuDifficulty();

  // Cloud sync for logged-in users
  if (window.currentUser && typeof window.saveBestScoreToCloud === 'function') {
    const cloudKey = `cloud-best-${window.currentUser.uid}-${window.currentLevel}`;
    const cloudBest = parseInt(localStorage.getItem(cloudKey) || '0', 10);

    if (score > cloudBest) {
         window.saveBestScoreToCloud(window.currentLevel, score)
        .then?.(() => {
          localStorage.setItem(cloudKey, String(score));
          console.log("New cloud best score saved:", score);
        })
        .catch(err => {
         
          console.warn("Cloud save failed (non-blocking):", err);
        });
    } else {
      
      if (!localStorage.getItem(cloudKey)) localStorage.setItem(cloudKey, String(cloudBest));
    }
  }
}
      
      spawnTile();
      if (level.drops) trySpawnGem();
      if (level.attacks) setTimeout(maybeAttack, 600);
      checkWin();
    } else if (changed && !wrongMovePenalty) {
      spawnPenaltyOne(); wrongMovePenalty = true; playSound('penalty');
    } else wrongMovePenalty = false;

    render();
    if (!moved && getEmptyCells().length === 0 && !canMerge()) gameOver();
  }

  // ==================== HARD MODE ATTACKS ====================
  function maybeAttack() {
    if (doomedCell || Math.random() > level.chance) return;
    const high = [];
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) if (matrix[r][c] >= 2) high.push({r,c});
    if (!high.length) return;
    doomedCell = high[Math.floor(Math.random()*high.length)];
    render();
    startAttackTimer();
  }

  function startAttackTimer() {
    const timer = document.createElement('div');
    timer.className = 'attack-timer';
    timer.innerHTML = '<div class="timer-ring"></div><div class="timer-text">5</div>';
    document.body.appendChild(timer);
    let sec = 5;
    attackTimer = setInterval(() => {
      sec--;
      timer.querySelector('.timer-text').textContent = sec;
      playSound('timer')
      if (sec <= 0) { clearAttack(); executeAttack(); }
    }, 1000);
  }

  function cancelDoomed() {
    if (!doomedCell) return;
    doomedCell = null;
    clearAttack();
    render();
  }

  function clearAttack() {
    clearInterval(attackTimer);
    document.querySelector('.attack-timer')?.remove();
  }

/* ===== This is to execute attack Punishment =====*/
  
function executeAttack() {
  if (!doomedCell) return;

  const r = doomedCell.r;
  const c = doomedCell.c;
  const tileValue = matrix[r][c];

  // If player saved it OR it was already empty → no penalty!
  if (tileValue === 0) {
    doomedCell = null;
    render();
    playSound('win'); // Small victory sound
    return;
  }

  // BRUTAL PUNISHMENT: Lose 10× the tile value
  const penalty = tileValue * 10;
  score = Math.max(0, score - penalty);
  scoreEl.textContent = score;

  // Replace the tile with either 2 or 4
  
  matrix[r][c] = Math.random()*100 <= 50 ? 2:4;

  // DYNAMIC FLYING PENALTY TEXT
  const penaltyText = document.createElement('div');
  penaltyText.textContent = `-${penalty}`;
  penaltyText.style.cssText = `
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 6rem;
    font-weight: bold;
    color: #ff0044;
    text-shadow: 0 0 30px #ff0044;
    z-index: 9999;
    animation: flyUp 1.2s forwards;
    pointer-events: none;
  `;
  document.body.appendChild(penaltyText);
  setTimeout(() => penaltyText.remove(), 1200);

  // Reset attack
  doomedCell = null;
  render();
  playSound('penalty');
}


/* ===== Execute Attack End =====*/
  function spawnPenaltyOne() {
    const e = getEmptyCells();
    if (!e.length) return;
    const p = e[Math.floor(Math.random()*e.length)];
    matrix[p.r][p.c] = 1;
  }

  // ==================== GEM DROP ====================
  function trySpawnGem() {
    if (Math.random() < 0.18) {
      const r = Math.random()*100;
      const type = r < 40 ? 'switcher' : r < 79 ? 'grider' : 'bomb';
      const MaxGems = 3;
      gems[type] = gems[type] === MaxGems ? MaxGems : gems[type] + 1;
      animateGemDrop(type);
      playSound('gem');
      render();
    }
  }

  function animateGemDrop(type) {
    const emoji = { switcher:'Swap', grider:'Destroy', bomb:'Bomb' }[type];
    const color = { switcher:'#00ffaa', grider:'#ff6600', bomb:'#ff2e63' }[type];
    const drop = document.createElement('div');
    drop.className = 'gem-drop';
    drop.textContent = emoji;
    drop.style.color = color;
    drop.style.left = '50%'; drop.style.top = '50%';
    drop.style.transform = 'translate(-50%,-50%)';
    document.body.appendChild(drop);
    setTimeout(() => {
      const t = document.getElementById(`gem-${type}`).getBoundingClientRect();
      drop.style.left = t.left + t.width/2 + 'px';
      drop.style.top = t.top + t.height/2 + 'px';
      drop.style.fontSize = '2rem';
    }, 50);
    setTimeout(() => drop.remove(), 900);
  }

  // ==================== INPUT ====================
  document.addEventListener('keydown', e => {
    const map = { ArrowLeft:'left', ArrowRight:'right', ArrowUp:'up', ArrowDown:'down' };
    if (map[e.key]) { e.preventDefault(); move(map[e.key]); }
  });

  let tx = 0, ty = 0;
  grid.addEventListener('touchstart', e => { if(activeGem) return; e.preventDefault(); tx=e.touches[0].clientX; ty=e.touches[0].clientY; }, {passive:false});
  grid.addEventListener('touchend', e => {
    if(activeGem || !tx) return;
    e.preventDefault();
    const dx = e.changedTouches[0].clientX - tx;
    const dy = e.changedTouches[0].clientY - ty;
    if(Math.max(Math.abs(dx),Math.abs(dy))>50){
      if(Math.abs(dx)>Math.abs(dy)) move(dx>0?'right':'left');
      else move(dy>0?'down':'up');
    }
    tx=ty=0;
  });

  // ==================== WIN / LOSE ====================
  function checkWin() { if(matrix.flat().some(v=>v>=2048)) playSound('win'); }
  function canMerge() {
    for(let r=0;r<4;r++) for(let c=0;c<4;c++) {
      const v = matrix[r][c];
      if((c<3&&v===matrix[r][c+1])||(r<3&&v===matrix[r+1][c])) return true;
    }
    return false;
  }

 function gameOver() {
  pauseTimer();
  playSound('gameover');
  const time = formatTime(getElapsedSeconds());
  setTimeout(() => {
  const highestTile = Math.max(...matrix.flat().filter(v => v > 1));
    const ov = document.createElement('div');
    ov.className = 'overlay';
    ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.95);display:flex;flex-direction:column;align-items:center;justify-content:center;color:#00ffff;font-size:2rem;z-index:9999;';
    ov.innerHTML = `
      <h2 style="font-size:5rem; margin:20px;">GAME OVER</h2>
      <p style="margin:10px;">Score: <span style="color:#39ff14; font-size:2.5rem;">${score}</span></p>
      <p style="margin:10px;">Time: <span style="color:#39ff14; font-size:2.5rem;">${time}s</span></p>
       <p style="margin:10px;">Highest Tile:<span style="color:#39ff14; font-size:2.5rem;">${highestTile || '-'}</span></p>
      <p style="margin:20px 0; color:#aaa;">
        ${window.currentLevel === 'super-easy' ? 'Super-Easy' : window.currentLevel === 'normal' ? 'Normal' : 'Hard'} Mode
      </p>
      <button id="restart-game-over" style="margin:30px;padding:18px 50px;background:#00ffff;color:#000;font-size:1.6rem;border:none;border-radius:50px;cursor:pointer; box-shadow:0 0 30px #00ffff;">
        RESTART GRID
      </button>
    `;
document.body.appendChild(ov);
    ov.querySelector('#restart-game-over').addEventListener('click', () => {
      ov.remove();
      window.initGame();
    });
  }, 500);
}
  // ==================== SOUND ====================
  
  
// ——— DIFFICULTY MENU LOGIC ———
document.querySelectorAll('.diff-item').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.diff-item').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const level = btn.dataset.level;
    window.setLevel(level); // This calls the function from your game
  });
});

// Auto-highlight current level on load
document.querySelector(`.diff-item[data-level="${window.currentLevel}"]`)?.classList.add('active'); 

// UPDATE MENU SCORES + ACTIVE STATE
function updateMenuDifficulty() {
  document.querySelectorAll('.diff-item').forEach(item => {
    const lvl = item.dataset.level;
    
    // Update best score
   const best = window.currentUser
  ? parseInt(localStorage.getItem(`cloud-best-${window.currentUser.uid}-${lvl}`) || '0')
  : parseInt(localStorage.getItem(`best-${lvl}`) || '0');

const scoreSpan = item.querySelector('.best-score');
if (scoreSpan) scoreSpan.textContent = best.toLocaleString();
    
    // Highlight current level
    if (lvl === window.currentLevel) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Call it on load and after every high score
updateMenuDifficulty();  

// RESTART BUTTON
document.getElementById('restart-btn')?.addEventListener('click', () => {
  document.getElementById('menu-overlay').classList.remove('active');
  window.initGame();
});

});
