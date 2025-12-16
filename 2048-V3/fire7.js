// window.cloudReady = false;

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { 
  getAuth, GoogleAuthProvider, signInWithPopup, 
  onAuthStateChanged, signOut 
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { 
  getFirestore, doc, setDoc, getDoc, serverTimestamp 
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

import { runTransaction } 
from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

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

// ---------------- GLOBAL ----------------
window.currentUser = null;
window.currentLevel = localStorage.getItem('2048-level') || 'super-easy';
window.currentUsername = null;

// ---------------- MODAL ELEMENTS ----------------
const modal = document.getElementById("usernameModal");
const modalContent = document.getElementById("usernameModalContent");
const usernameInput = document.getElementById("usernameInput");
const usernameError = document.getElementById("usernameError");
const usernameSubmit = document.getElementById("usernameSubmit");

// Hide modal by default
modal.style.display = "none";

// ---------------- OPEN + CLOSE HELPERS ----------------
function openModal() {
  modal.style.display = "flex";
  usernameInput.value = "";
  usernameError.textContent = "";
  usernameInput.focus();
}

function closeModal() {
  modal.style.display = "none";
}

// Shake animation helper
function shakeModal() {
  modalContent.classList.remove("shake");
  void modalContent.offsetWidth; 
  modalContent.classList.add("shake");
}

// ---------------- CHECK IF USERNAME TAKEN ----------------
async function usernameExists(name) {
  const snap = await getDoc(doc(db, "usernames", name.toLowerCase()));
  return snap.exists();
}

// ---------------- SAVE USERNAME FLOW ----------------
async function ensureUsername(user) {
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);

  // User already has a username stored → done
  if (snap.exists() && snap.data().username) {
    window.currentUsername = snap.data().username;
    return;
  }

  // Otherwise → open modal
  openModal();

  return new Promise((resolve) => {

  usernameSubmit.onclick = async () => {
    const name = usernameInput.value.trim();

    // Basic validation
    if (!/^[a-zA-Z0-9]{3,}$/.test(name)) {
      usernameError.textContent = "Only letters & numbers (min 3 chars).";
      shakeModal();
      return;
    }

    usernameSubmit.disabled = true;
    usernameError.textContent = "";

    const userRef = doc(db, "users", user.uid);
    const usernameRef = doc(db, "usernames", name.toLowerCase());

    try {
      await runTransaction(db, async (tx) => {
        const snap = await tx.get(usernameRef);

        if (snap.exists()) {
          throw new Error("USERNAME_TAKEN");
        }

        tx.set(usernameRef, {
          uid: user.uid,
          created: serverTimestamp()
        });

        tx.set(userRef, {
          uid: user.uid,
          username: name,
          created: serverTimestamp()
        }, { merge: true });
      });

      window.currentUsername = name;
      closeModal();
      resolve();

    } catch (err) {
      if (err.message === "USERNAME_TAKEN") {
        usernameError.textContent = "Username already taken. Try another.";
      } else {
        usernameError.textContent = "Something went wrong. Try again.";
      }

      shakeModal();
      usernameSubmit.disabled = false;
    }
  };
});

}
// ---------------- SAVE BEST SCORE ----------------

async function saveBestScoreToCloud(level, score) {
  if (!window.currentUser) return;

  const scoreRef = doc(db, "scores", `${window.currentUser.uid}-${level}`);

  try {
    await runTransaction(db, async (tx) => {
      const snap = await tx.get(scoreRef);
      const currentBest = snap.exists() ? snap.data().best || 0 : 0;

      // Only update if new score is higher
      if (score > currentBest) {
        tx.set(scoreRef, {
          uid: window.currentUser.uid,
          username: window.currentUsername || null,
          level,
          best: score,
          updated: serverTimestamp()
        }, { merge: true });

        // Update localStorage cache for UI
        localStorage.setItem(`cloud-best-${window.currentUser.uid}-${level}`, score);
        if (window.bestEl) window.bestEl.textContent = score;
        if (window.updateMenuScores) window.updateMenuScores();
        console.log("🔥 Cloud score saved:", level, score);
      }
    });
  } catch (err) {
    console.error("❌ Failed to save cloud score:", err);
  }
}
window.saveBestScoreToCloud = saveBestScoreToCloud;


// ---------------- FETCH CLOUD SCORES ----------------
async function fetchCloudScores(level = window.currentLevel) {
  if (!window.currentUser) return 0;

  try {
    const snap = await getDoc(doc(db, "scores", `${window.currentUser.uid}-${level}`));
    const score = snap.exists() ? (snap.data().best || 0) : 0;

    // Always mirror cloud → localStorage
    localStorage.setItem(`cloud-best-${window.currentUser.uid}-${level}`, score);

    // Update UI
    if (window.bestEl) window.bestEl.textContent = score;
    if (window.updateMenuScores) window.updateMenuScores();

    return score;

  } catch (err) {
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
      <img src="${window.currentUser.photoURL}" 
       style="width:40px;height:40px;border-radius:50%;margin-right:10px;">
      <strong>@${window.currentUsername || window.currentUser.displayName?.split(' ')[0]}</strong>
    `;
    signinBtn.style.display = 'none';
    signoutBtn.style.display = 'block';
  } else {
    display.innerHTML = `<p>Guest Player</p>`;
    signinBtn.style.display = 'block';
    signoutBtn.style.display = 'none';
  }

  window.updateMenuScores();
}

// ---------------- LOGIN / LOGOUT ----------------
document.getElementById('google-signin')?.addEventListener('click', () => {
  signInWithPopup(auth, new GoogleAuthProvider());
});

document.getElementById('signout-btn')?.addEventListener('click', () => {
  signOut(auth);
});

// ---------------- AUTH STATE CHANGE ----------------
onAuthStateChanged(auth, async (user) => {
  window.currentUser = user;
  window.cloudReady = false;

  if (user) {
    await ensureUsername(user);
    await fetchCloudScores(window.currentLevel);
  }

  window.cloudReady = true;
  updateUserDisplay();

  // 🚨 Start the game ONLY after hydration
  if (window.initGame) {
    window.initGame();
  }
});
// ---------------- UPDATE SCORES IN MENU ----------------
window.updateMenuScores = function() {
  document.querySelectorAll('.diff-item').forEach(item => {
    const lvl = item.dataset.level;
    const span = item.querySelector('.best-score');

    let score = 0;

    if (window.currentUser) {
      score = parseInt(
        localStorage.getItem(
          `cloud-best-${window.currentUser.uid}-${lvl}`
        ) || '0',
        10
      );
    } else {
      score = parseInt(localStorage.getItem(`best-${lvl}`) || '0', 10);
    }

    span.textContent = score.toLocaleString();
  });
};