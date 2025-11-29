document.addEventListener("DOMContentLoaded",()=>{
    

// =============================================
// 2048 EVOLVED — FULL JS ENGINE (2025 EDITION)
// =============================================

const GRID_SIZE = 4;
const grid = document.getElementById('grid');
const scoreEl = document.getElementById('score');
const bestEl = document.getElementById('best');

// Gem DOM elements
const gemSwitcher = document.getElementById('gem-switcher');
const gemGrider = document.getElementById('gem-grider');
const gemBomb = document.getElementById('gem-bomb');

// Add this span in your HTML inside .gems-panel or below it for activation text
const gemStatus = document.createElement('div');
gemStatus.id = 'gem-status';
gemStatus.style.cssText = 'color:#00ffff; margin:15px 0; font-size:1.1rem; min-height:24px; opacity:0; transition:opacity 0.3s;';
document.querySelector('.gems-panel').after(gemStatus);

let matrix = [];
let score = 0;
let best = parseInt(localStorage.getItem('best2048') || '0');
bestEl.textContent = best;

let gems = { switcher: 0, grider: 0, bomb: 0 };
let activeGem = null;        // 'switcher' | 'grider' | 'bomb' | null
let selectedCell = null;     // {r,c} for switcher
let wrongMovePenalty = false;

initGame();

// =============================================
// INITIALIZATION
// =============================================
function initGame() {
  matrix = Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0));
  score = 0;
  scoreEl.textContent = 0;
  gems = { switcher: 0, grider: 0, bomb: 0 };
  activeGem = null;
  selectedCell = null;
  wrongMovePenalty = false;
  gemStatus.textContent = '';
  gemStatus.style.opacity = '0';
  createTiles();
  spawnTile();
  spawnTile();
  render();
}

// Create 16 tile divs
function createTiles() {
  grid.innerHTML = '';
  for (let i = 0; i < 16; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.dataset.index = i;
    grid.appendChild(tile);
  }
}

// =============================================
// CORE SPAWN & RENDER
// =============================================
function spawnTile() {
  const empty = getEmptyCells();
  if (empty.length === 0) return false;
  const {r, c} = empty[Math.floor(Math.random() * empty.length)];
  matrix[r][c] = Math.random() < 0.9 ? 2 : 4;
  playSound('spawn');
  return true;
}

function getEmptyCells() {
  const empty = [];
  for (let r = 0; r < GRID_SIZE; r++)
    for (let c = 0; c < GRID_SIZE; c++)
      if (matrix[r][c] === 0) empty.push({r, c});
  return empty;
}

function render() {
  const tiles = grid.children;
  for (let i = 0; i < 16; i++) {
    const r = Math.floor(i / 4), c = i % 4;
    const val = matrix[r][c];
    const tile = tiles[i];
    tile.textContent = val || '';
    tile.className = 'tile';
    if (val) {
      if (val === 1) tile.classList.add('tile-1');
      else if (val >= 2) tile.classList.add(`tile-${val}`);
    }
    if (selectedCell && selectedCell.r === r && selectedCell.c === c) {
      tile.classList.add('selected');
    }
  }
  updateGemsUI();
}

function updateGemsUI() {
  // Update counts
  document.querySelectorAll('.gem-count').forEach(el => {
    const type = el.parentElement.id.split('-')[1];
    el.textContent = gems[type];
    el.parentElement.classList.toggle('has-count', gems[type] > 0);
  });

  // Dim inactive, glow active
  [gemSwitcher, gemGrider, gemBomb].forEach(gem => {
    const type = gem.id.split('-')[1];
    gem.classList.toggle('dim', gems[type] === 0 && activeGem !== type);
    gem.classList.toggle('active', activeGem === type);
  });
}

// =============================================
// GEM SYSTEM
// =============================================
[gemSwitcher, gemGrider, gemBomb].forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('dim') && !btn.classList.contains('active')) return;
    const type = btn.id.split('-')[1];
    if (activeGem === type) {
      deactivateGem();
    } else {
      activateGem(type);
    }
  });
});

function activateGem(type) {
  if (gems[type] === 0 && activeGem !== type) return;
  activeGem = type;
  selectedCell = null;
  gemStatus.textContent = `${type.toUpperCase()} ACTIVATED — Tap grid to use`;
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

// Click on grid
grid.addEventListener('click', (e) => {
  if (!e.target.classList.contains('tile')) return;
  const index = Array.from(grid.children).indexOf(e.target);
  const r = Math.floor(index / 4), c = index % 4;

  if (activeGem === 'switcher') {
    if (!selectedCell) {
      selectedCell = {r, c};
      playSound('select');
    } else if (selectedCell.r === r && selectedCell.c === c) {
      selectedCell = null;
    } else {
      // SWAP
      [matrix[selectedCell.r][selectedCell.c], matrix[r][c]] = 
       [matrix[r][c], matrix[selectedCell.r][selectedCell.c]];
      gems.switcher--;
      deactivateGem();
      playSound('swap');
    }
  }
  else if (activeGem === 'grider') {
    if (matrix[r][c] !== 0) {
      matrix[r][c] = 0;
      gems.grider--;
      deactivateGem();
      playSound('destroy');
    }
  }
  else if (activeGem === 'bomb') {
    for (let i = 0; i < GRID_SIZE; i++) matrix[r][i] = 0;
    gems.bomb--;
    deactivateGem();
    playSound('bomb');
  }
  render();
});

// =============================================
// MOVEMENT & MERGE LOGIC
// =============================================
function operateRow(row, reverse = false) {
  let arr = reverse ? row.slice().reverse() : row.slice();
  arr = arr.filter(x => x);
  let gained = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i+1] && arr[i] !== 1) {
      arr[i] *= 2;
      gained += arr[i];
      arr[i+1] = 0;
      i++;
    }
  }
  arr = arr.filter(x => x);
  while (arr.length < 4) arr.push(0);
  if (reverse) arr.reverse();
  const changed = !row.every((v, i) => v === arr[i]);
  return { newRow: arr, changed, gained };
}

function move(dir) {
  if (activeGem) return;

  let moved = false;
  let totalGain = 0;
  const oldMatrix = matrix.map(r => [...r]);

  if (dir === 'left' || dir === 'right') {
    for (let r = 0; r < GRID_SIZE; r++) {
      const res = operateRow(matrix[r], dir === 'right');
      matrix[r] = res.newRow;
      if (res.changed) moved = true;
      totalGain += res.gained;
    }
  } else {
    matrix = transpose(matrix);
    for (let r = 0; r < GRID_SIZE; r++) {
      const res = operateRow(matrix[r], dir === 'down');
      matrix[r] = res.newRow;
      if (res.changed) moved = true;
      totalGain += res.gained;
    }
    matrix = transpose(matrix);
  }

  const actuallyMoved = !matrix.flat().every((v, i) => v === oldMatrix.flat()[i]);

  if (moved && actuallyMoved) {
    score += totalGain;
    scoreEl.textContent = score;
    if (score > best) {
      best = score;
      bestEl.textContent = best;
      localStorage.setItem('best2048', best);
      playSound('highscore');
    }
    spawnTile();
    trySpawnGem();
    checkWin();
  } else if (actuallyMoved) {
    // Wrong move penalty: spawn a 1
    if (!wrongMovePenalty) {
      spawnPenaltyOne();
      wrongMovePenalty = true;
      playSound('penalty');
    }
  } else {
    wrongMovePenalty = false; // reset if valid move
  }
  render();
  if (!moved && getEmptyCells().length === 0 && !canMerge()) gameOver();
}

function transpose(m) {
  return m[0].map((_, i) => m.map(row => row[i]));
}

function spawnPenaltyOne() {
  const empty = getEmptyCells();
  if (empty.length === 0) return;
  const pos = empty[Math.floor(Math.random() * empty.length)];
  matrix[pos.r][pos.c] = 1;
}

// =============================================
// INPUT: Keyboard + Mobile Swipe
// =============================================
document.addEventListener('keydown', e => {
  if (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) {
    e.preventDefault();
    move(e.key.replace('Arrow', '').toLowerCase());
  }
});

let touchStartX = 0, touchStartY = 0;
grid.addEventListener('touchstart', e => {
  if (activeGem) return;
  e.preventDefault();
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: false });

grid.addEventListener('touchend', e => {
  if (activeGem || !touchStartX) return;
  e.preventDefault();
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  const absX = Math.abs(dx), absY = Math.abs(dy);
  if (Math.max(absX, absY) > 50) {
    if (absX > absY) move(dx > 0 ? 'right' : 'left');
    else move(dy > 0 ? 'down' : 'up');
  }
  touchStartX = 0;
});

// =============================================
// GEM DROP ON MERGE
// =============================================
function trySpawnGem() {
  if (Math.random() < 0.18) { // ~18% chance per valid move
    const rand = Math.random() * 100;
    let type;
    if (rand < 90) type = 'switcher';
    else if (rand < 99) type = 'grider';
    else type = 'bomb';
    gems[type]++;
    playSound('gem');
    render();
  }
}

// =============================================
// WIN / GAME OVER
// =============================================
function checkWin() {
  if (matrix.flat().some(v => v >= 2048)) {
    playSound('win');
    setTimeout(() => alert(`You reached ${matrix.flat().find(v => v >= 2048)}! You win!`), 300);
  }
}

function canMerge() {
  for (let r = 0; r < GRID_SIZE; r++)
    for (let c = 0; c < GRID_SIZE; c++) {
      const v = matrix[r][c];
      if (c < 3 && v === matrix[r][c+1]) return true;
      if (r < 3 && v === matrix[r+1][c]) return true;
    }
  return false;
}

function gameOver() {
  playSound('gameover');
  const highest = Math.max(...matrix.flat().filter(v => v > 1));
  setTimeout(() => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = `
      <h2>GAME OVER</h2>
      <p>Score: ${score}</p>
      <p>Highest Tile: ${highest || '—'}</p>
      <button onclick="location.reload()" style="margin-top:20px;padding:15px 30px;font-size:1.2rem;background:#00ffff;color:black;border:none;border-radius:50px;cursor:pointer;">
        RESTART
      </button>
    `;
    document.body.appendChild(overlay);
  }, 500);
}

// =============================================
// SOUND SYSTEM (just add your files later)
// =============================================
function playSound(type) {
  const sounds = {
    spawn: 'sounds/spawn.mp3',
    move: 'sounds/move.mp3',
    merge: 'sounds/merge.mp3',
    gem: 'sounds/gem.mp3',
    'gem-activate': 'sounds/activate.mp3',
    swap: 'sounds/swap.mp3',
    destroy: 'sounds/destroy.mp3',
    bomb: 'sounds/bomb.mp3',
    penalty: 'sounds/penalty.mp3',
    highscore: 'sounds/highscore.mp3',
    win: 'sounds/win.mp3',
    gameover: 'sounds/gameover.mp3',
    select: 'sounds/select.mp3'
  };
  if (sounds[type]) {
    const audio = new Audio(sounds[type]);
    audio.volume = 0.4;
    audio.play().catch(() => {});
  }
}

})