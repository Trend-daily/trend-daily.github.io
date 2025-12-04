import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

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

// Expose to global window for classic scripts
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

// ---------------- SAVE BEST SCORE ----------------
async function saveBestScoreToCloud(level, score) {
  if (!window.currentUser) return;
  try {
    await setDoc(
      doc(db, "scores", `${window.currentUser.uid}-${level}`),
      {
        uid: window.currentUser.uid,
        level,
        best: score,
        updated: serverTimestamp()
      },
      { merge: true }
    );
    console.log("🔥 Cloud score saved:", level, score);
  } catch(err) {
    console.error("❌ Failed to save cloud score:", err);
  }
}
window.saveBestScoreToCloud = saveBestScoreToCloud;

// ---------------- FETCH CLOUD SCORES ----------------
async function fetchCloudScores() {
  if (!window.currentUser) return;
  const userRef = doc(db, "scores", `${window.currentUser.uid}-${window.currentLevel}`);
  try {
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      const score = data.best || 0;
      localStorage.setItem(`cloud-best-${window.currentUser.uid}-${window.currentLevel}`, score);
      window.updateMenuScores();
      console.log("Cloud score loaded:", score);
    }
  } catch(err) {
    console.error("❌ Error fetching cloud score:", err);
  }
}

// ---------------- UPDATE MENU DISPLAY ----------------
function updateUserDisplay() {
  const display = document.getElementById('user-display');
  const signinBtn = document.getElementById('google-signin');
  const signoutBtn = document.getElementById('signout-btn');

  if (window.currentUser) {
    display.innerHTML = `
      <img src="${window.currentUser.photoURL}" style="width:40px;height:40px;border-radius:50%;margin-right:10px;">
      <strong>@${window.currentUser.displayName.split(' ')[0]}</strong>
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

onAuthStateChanged(auth, (user) => {
  window.currentUser = user;
  updateUserDisplay();
  window.updateMenuScores();
  fetchCloudScores();
  if (typeof window.initGame === "function") window.initGame(); // restart game on login
});

// ---------------- UPDATE MENU SCORES ----------------
window.updateMenuScores = function() {
  document.querySelectorAll('.diff-item').forEach(item => {
    const lvl = item.dataset.level;
    const span = item.querySelector('.best-score');

    if (window.currentUser) {
      const key = `cloud-best-${window.currentUser.uid}-${lvl}`;
      const score = localStorage.getItem(key) || 0;
      span.textContent = parseInt(score).toLocaleString();
    } else {
      const score = localStorage.getItem(`best-${lvl}`) || 0;
      span.textContent = parseInt(score).toLocaleString();
    }
  });
};