import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { 
  getAuth, GoogleAuthProvider, signInWithPopup, 
  onAuthStateChanged, signOut 
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { 
  getFirestore, doc, setDoc, getDoc, serverTimestamp 
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// ---------------- FIREBASE CONFIG ----------------
const firebaseConfig = {
  apiKey: "AIzaSyAjQJzabhJEBuOWl-EmZfn09kMa6FOIsUc",
  authDomain: "grid-evolution.firebaseapp.com",
  projectId: "grid-evolution",
  storageBucket: "grid-evolution.firebasestorage.app",
  messagingSenderId: "134962959534",
  appId: "1:134962959534:web:9a93aa90473bb5acbac93f",
  measurementId: "G-MZMGQM9VJQ"
};

// ---------------- INIT FIREBASE ----------------
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Make Firestore + Auth globally visible
window.auth = auth;
window.db = db;
window.GoogleAuthProvider = GoogleAuthProvider;
window.signInWithPopup = signInWithPopup;
window.signOut = signOut;
window.onAuthStateChanged = onAuthStateChanged;
window.doc = doc;
window.setDoc = setDoc;
window.getDoc = getDoc;
window.serverTimestamp = serverTimestamp;

// ---------------- GLOBAL VARIABLES ----------------
window.currentUser = null;
window.currentLevel = localStorage.getItem('2048-level') || 'super-easy';
window.currentUsername = null;   // NEW

// ---------------- USERNAME HANDLING ----------------
async function ensureUsername(user) {
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);

  if (snap.exists() && snap.data().username) {
    window.currentUsername = snap.data().username;
    return;
  }

  // Ask user for a username (only once)
  let name = "";
  while (!name) {
    name = prompt("Choose a username (letters & numbers only):")?.trim() || "";
    if (!/^[a-zA-Z0-9_]+$/.test(name)) name = "";
  }

  window.currentUsername = name;

  // Save username to Firestore
  await setDoc(userRef, {
    uid: user.uid,
    username: name,
    created: serverTimestamp()
  }, { merge: true });

  console.log("⭐ Username saved:", name);
}
window.ensureUsername = ensureUsername;

// ---------------- SAVE BEST SCORE ----------------
async function saveBestScoreToCloud(level, score) {
  if (!window.currentUser) return;

  try {
    await setDoc(
      doc(db, "scores", `${window.currentUser.uid}-${level}`),
      {
        uid: window.currentUser.uid,
        username: window.currentUsername || null,   // NEW
        level,
        best: score,
        updated: serverTimestamp()
      },
      { merge: true }
    );

    localStorage.setItem(
      `cloud-best-${window.currentUser.uid}-${level}`, 
      score
    );

    console.log("🔥 Cloud score saved:", level, score);
  } catch(err) {
    console.error("❌ Failed to save cloud score:", err);
  }
}
window.saveBestScoreToCloud = saveBestScoreToCloud;

// ---------------- FETCH CLOUD SCORES ----------------
async function fetchCloudScores(level = window.currentLevel) {
  if (!window.currentUser) return 0;

  const cloudKey = `cloud-best-${window.currentUser.uid}-${level}`;
  const userRef = doc(db, "scores", `${window.currentUser.uid}-${level}`);

  try {
    const snap = await getDoc(userRef);
    let score = snap.exists() ? (snap.data().best || 0) : 0;

    localStorage.setItem(cloudKey, score);

    if (window.bestEl) window.bestEl.textContent = score;
    if (window.updateMenuScores) window.updateMenuScores();

    console.log("☁️ Cloud score loaded:", level, score);
    return score;
  } catch(err) {
    console.error("❌ Error fetching cloud score:", err);
    return 0;
  }
}
window.fetchCloudScores = fetchCloudScores;

// ---------------- UPDATE MENU UI ----------------
function updateUserDisplay() {
  const display = document.getElementById('user-display');
  const signinBtn = document.getElementById('google-signin');
  const signoutBtn = document.getElementById('signout-btn');

  if (window.currentUser) {
    display.innerHTML = `
      <img src="${window.currentUser.photoURL}" style="width:40px;height:40px;border-radius:50%;margin-right:10px;">
      <strong>@${window.currentUsername || window.currentUser.displayName?.split(' ')[0]}</strong>
    `;
    signinBtn.style.display = 'none';
    signoutBtn.style.display = 'block';
  } else {
    display.innerHTML = '<p>Guest Player</p>';
    signinBtn.style.display = 'block';
    signoutBtn.style.display = 'none';
  }

  window.updateMenuScores();
}

// ---------------- LOGIN / LOGOUT ----------------
document.getElementById('google-signin')?.addEventListener('click', () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
});

document.getElementById('signout-btn')?.addEventListener('click', () => {
  signOut(auth);
});

// ---------------- AUTH STATE CHANGE ----------------
onAuthStateChanged(auth, async (user) => {
  window.currentUser = user;

  if (user) {
    await ensureUsername(user);      // NEW!!!
    await fetchCloudScores(window.currentLevel);
  }

  updateUserDisplay();

  if (window.initGame) window.initGame();
});

// ---------------- UPDATE MENU SCORE UI ----------------
window.updateMenuScores = function() {
  document.querySelectorAll('.diff-item').forEach(item => {
    const lvl = item.dataset.level;
    const span = item.querySelector('.best-score');

    let score = 0;
    if (window.currentUser) {
      score = parseInt(
        localStorage.getItem(`cloud-best-${window.currentUser.uid}-${lvl}`) || '0', 
        10
      );
    } else {
      score = parseInt(localStorage.getItem(`best-${lvl}`) || '0', 10);
    }

    span.textContent = score.toLocaleString();
  });
};