/*
  ==========================
  LEADERBOARD UI CONTROLLER
  Firebase-ready (reads later)
  ==========================
*/
document.addEventListener('DOMContentLoaded',()=>{
    

const preloader = document.getElementById('loading-screen');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 2000); //
    

// ---------- STATE ----------
let state = {
  level: 'hard',
  metric: 'score',
  requestId: 0
};

// ---------- CONFIG ----------
const METRICS = {
  score: 'Score',
  highestTile: 'Highest Tile',
  fastest2048: 'FTTR2048',
  longestSession: 'Longest Session'
};

const LEVELS = {
  'super-easy': 'Super-Easy',
  'normal': 'Normal',
  'hard': 'Hard'
};

// ---------- DOM ----------
const tbody = document.querySelector('tbody');
const metricHeader = document.getElementById('metric-header');
const currentMetric = document.getElementById('current-metric');
const currentLevel = document.getElementById('current-level');

const levelDropdown = document.getElementById('level-dropdown');
const metricDropdown = document.getElementById('metric-dropdown');

// ---------- DROPDOWN TOGGLE ----------
document.addEventListener('click', e => {
  [levelDropdown, metricDropdown].forEach(dd => {
    if (!dd.contains(e.target)) dd.classList.remove('open');
  });
});

[levelDropdown, metricDropdown].forEach(dd => {
  dd.querySelector('button').addEventListener('click', e => {
    e.stopPropagation();
    dd.classList.toggle('open');
  });
});

// ---------- MENU SELECTION ----------
levelDropdown.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', () => {
    setLevel(li.dataset.level);
    levelDropdown.classList.remove('open');
  });
});

metricDropdown.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', () => {
    setMetric(li.dataset.metric);
    metricDropdown.classList.remove('open');
  });
});

// ---------- STATE SETTERS ----------
function setLevel(level) {
  if (state.level === level) return;
  state.level = level;
  currentLevel.textContent = LEVELS[level];
  reloadLeaderboard();
}

function setMetric(metric) {
  if (state.metric === metric) return;
  state.metric = metric;
  currentMetric.textContent = METRICS[metric];
  metricHeader.textContent = METRICS[metric];
  reloadLeaderboard();
}

// ---------- LOADING ----------
function showLoading() {
  tbody.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const tr = document.createElement('tr');
    tr.className = 'loading-row';
    tr.innerHTML = `
      <td><div class="skeleton" style="width:60%"></div></td>
      <td><div class="skeleton" style="width:40%"></div></td>
    `;
    tbody.appendChild(tr);
  }
}

function showEmpty() {
  tbody.innerHTML = `
    <tr>
      <td colspan="2" class="empty">
        No leaderboard data
        <span>Play games to appear here</span>
      </td>
    </tr>
  `;
}

// ---------- MAIN RELOAD ----------
async function reloadLeaderboard() {
  const id = ++state.requestId;
  showLoading();

  // 🔜 Firebase query will replace this
  // const data = await fetchLeaderboard(state.level, state.metric);

  // TEMP: simulate network delay
  await new Promise(r => setTimeout(r, 400));

  // Ignore stale responses
  if (id !== state.requestId) return;

  // No data yet
  showEmpty();
}

// ---------- INIT ----------
reloadLeaderboard();

})