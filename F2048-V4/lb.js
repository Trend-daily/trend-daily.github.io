/*
  ==========================
  LEADERBOARD UI CONTROLLER
  Firebase-ready (reads later)
  ==========================
*/
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";
//import { syncBestToCloud } from './fire1.js';
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
showEmpty()
// ===== Fetch Leaderboard From Firestore =======
async function fetchLeaderboard(level, metric, limitCount = 50) {
  const col = collection(
  db,
  'leaderboards',
  `${level}_${metric}`,
  'entries'
);

  const q = query(
    col,
    orderBy(
      'value',
      metric === 'fastest2048' ? 'asc' : 'desc'
    ),
    limit(limitCount)
  );

  const snap = await getDocs(q);

  return snap.docs.map((doc, index) => ({
    rank: index + 1,
    ...doc.data()
  }));
}

// ===== Metric formatting for Time ==========

function formatMetric(value, metric) {
  if (metric === 'fastest2048' || metric === 'longestSession') {
    const m = Math.floor(value / 60);
    const s = value % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
  }
  return value.toLocaleString();
}
// ---------- MAIN RELOAD ----------
async function reloadLeaderboard() {
  const id = ++state.requestId;
  showLoading();

  const [top, mine] = await Promise.all([
    fetchLeaderboard(state.level, state.metric),
    fetchMyRank(state.level, state.metric)
  ]);

  if (id !== state.requestId) return;

  tbody.innerHTML = '';

  if (!top.length) {
    showEmpty();
    return;
  }

  let isMeInTop = false;

  top.forEach((row, index) => {
    const tr = document.createElement('tr');

    if (window.currentUser && row.uid === window.currentUser.uid) {
      tr.classList.add('me');
      isMeInTop = true;
    }

    tr.innerHTML = `
       <td>${index + 1}</td>
      <td>${row.username}</td>
      <td>${formatMetric(row.value, state.metric)}</td>
    `;
    tbody.appendChild(tr);
  });

  // 👇 User not in top 50
  if (!isMeInTop && mine) {
    const sep = document.createElement('tr');
    sep.innerHTML = `<td colspan="2" style="height:14px"></td>`;
    tbody.appendChild(sep);

    const tr = document.createElement('tr');
    tr.classList.add('me');
    tr.innerHTML = `
      <td>— You (${mine.username})</td>
      <td>${formatMetric(mine.value, state.metric)}</td>
    `;
    tbody.appendChild(tr);
  }
}

reloadLeaderboard();

// ====== Fetch My Rank ========
async function fetchMyRank(level, metric) {
  if (!window.currentUser) return null;

  const ref = doc(
    db,
    'leaderboards',
    `${level}_${metric}`,
    'entries',
    window.currentUser.uid
  );

  const snap = await getDoc(ref);
  if (!snap.exists()) return null;

  return snap.data();
}

})