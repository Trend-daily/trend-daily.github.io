  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut 
  } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
  import { 
    getFirestore, 
    doc, 
    setDoc, 
    getDoc,  // ← ADDED: to read user document
    getDocs, 
    query, 
    collection, 
    where,
    serverTimestamp 
  } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";
  

  const firebaseConfig = {
   apiKey: "AIzaSyDX4eERQZVQaU6ebTqbYCYPpE9auzJr7tk",
    authDomain: "quantorv-games2048.firebaseapp.com",
    projectId: "quantorv-games2048",
    storageBucket: "quantorv-games2048.firebasestorage.app",
    messagingSenderId: "352136613598",
    appId: "1:352136613598:web:58d08f5db9518550c47c4f",
    measurementId: "G-P7E5K3YC8Y" };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  let currentUser = null;
  // Expose globally
  window.auth = auth;
  window.db = db;
  window.GoogleAuthProvider = GoogleAuthProvider;
  window.signInWithPopup = signInWithPopup;
  window.signInWithEmailAndPassword = signInWithEmailAndPassword;
  window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
  window.signOut = signOut;
  window.currentUser = currentUser;

  

// Firebase ready promise
window.firebaseReady = new Promise((resolve) => {
  onAuthStateChanged(auth, (user) => {
    currentUser = window.currentUser = user;
    resolve();
  });
});
  // UPDATE USER DISPLAY (unchanged)
  function updateUserDisplay() {
    const display = document.getElementById('user-display');
    const signinButtons = document.getElementById('signin-buttons');
    const signoutBtn = document.getElementById('signout-btn');

    if (currentUser) {
      display.innerHTML = `
        <img src="${currentUser.photoURL || 'default.png'}" style="width:60px;height:60px;border-radius:50%;border:3px solid #00ffff;">
        <strong style="color:#39ff14;">@${currentUser.username || currentUser.displayName || currentUser.email.split('@')[0]}</strong>
      `;
      signinButtons.style.display = 'none';
      signoutBtn.style.display = 'block';
    } else {
      display.innerHTML = '<p style="color:#888;">Guest Player</p>';
      signinButtons.style.display = 'flex';
      signoutBtn.style.display = 'none';
    }
  }
  
  // ====== Hydrate best scores on login =========
 async function hydrateBestScores() {
  // Helper to show error in UI
  const showError = (message) => {
    let el = document.getElementById('error-msg');
    if (!el) {
      el = document.createElement('div');
      el.id = 'error-msg';
      el.style.color = 'red';
      el.style.position = 'fixed';
      el.style.top = '10px';
      el.style.left = '50%';
      el.style.transform = 'translateX(-50%)';
      el.style.background = '#ffe6e6';
      el.style.padding = '10px 20px';
      el.style.border = '1px solid red';
      el.style.borderRadius = '5px';
      el.style.zIndex = '9999';
      document.body.appendChild(el);
    }
    el.textContent = message;
  };

  if (!window.currentUser) {
    showError("No current user logged in.");
    return;
  }

  try {
    const userRef = doc(db, "users", window.currentUser.uid);
    const snap = await getDoc(userRef);

    if (!snap.exists()) {
      // No user data, initialize localStorage to zeros
      document.querySelectorAll('.diff-item').forEach(item => {
        const lvl = item.dataset.level;
        if (!lvl) throw new Error("Missing level data attribute on .diff-item element.");
        localStorage.setItem(`best-${lvl}`, 0);
        localStorage.setItem(`tile-${lvl}`, 0);
        localStorage.setItem(`time-${lvl}`, 0);
      });
    } else {
      const best = snap.data().best || {};

      Object.entries(best).forEach(([lvl, data]) => {
        if (!lvl) throw new Error("Invalid level key in user best scores.");
        localStorage.setItem(`best-${lvl}`, data.score ?? 0);
        localStorage.setItem(`tile-${lvl}`, data.highestTile ?? 0);
        localStorage.setItem(`time-${lvl}`, data.longestTime ?? 0);
      });
    }

    // Update in-game best scoreboard
    if (typeof window.getBestForLevel !== "function") throw new Error("getBestForLevel is not defined.");
    window.best = window.getBestForLevel();

    if (!window.bestEl) throw new Error("bestEl element not found.");
    window.bestEl.textContent = window.best;

    if (typeof window.updateMenuDifficulty !== "function") throw new Error("updateMenuDifficulty is not defined.");
    window.updateMenuDifficulty();

  } catch (err) {
    console.error("Failed to hydrate best scores:", err);
    showError(`Error: ${err.message}`);
  }
}

// ======== hydrateBestScores function ends =========

  // Show username modal (unchanged)
  function showUsernameModal() {
    document.getElementById('username-modal').style.display = 'flex';
    document.getElementById('username-input').value = '';
    document.getElementById('username-error').textContent = '';
  }

  // Check if username is taken (unchanged)
  async function isUsernameTaken(username) {
    const q = query(collection(db, "users"), where("username", "==", username));
    const snapshot = await getDocs(q);
    return !snapshot.empty;
  }

  // ← NEW FUNCTION: Handle login complete — checks if username exists
  async function handleLoginComplete() {
    const userRef = doc(db, "users", currentUser.uid);
    const snap = await getDoc(userRef);

    if (snap.exists() && snap.data().username) {
      // Username already exists — skip modal
      currentUser.username = snap.data().username;
      updateUserDisplay();
      initGame(); // Restart game immediately
    } else {
      // No username — show modal
      showUsernameModal();
    }
  }

  // GOOGLE LOGIN — changed to use handleLoginComplete()
  document.getElementById('google-signin')?.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((cred) => {
    currentUser = auth.currentUser;
    window.currentUser = currentUser;  
    handleLoginComplete();
}) 
      .catch(err => alert("Google login failed: " + err.message));
  });

  // EMAIL LOGIN — changed to use handleLoginComplete()
 document.getElementById('email-signin')?.addEventListener('click', () => {
    document.getElementById('email-modal').style.display = 'flex';
    document.getElementById('email-error').textContent = '';
  });
  
   document.getElementById('email-login-btn')?.addEventListener('click', () => {
    const email = document.getElementById('email-input').value.trim();
    const password = document.getElementById('password-input').value;
    const error = document.getElementById('email-error');

    if (!email || !password) {
      error.textContent = "Fill all fields";
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
       currentUser = auth.currentUser;
    window.currentUser = currentUser; document.getElementById('email-modal').style.display = 'none';
        handleLoginComplete();  // ← changed
      })
      .catch(err => {
        if (err.code === 'auth/user-not-found') {
          if (confirm("No account. Create one?")) {
            createUserWithEmailAndPassword(auth, email, password)
              .then(() => {
                document.getElementById('email-modal').style.display = 'none';
                handleLoginComplete();  // ← changed
              })
              .catch(createErr => error.textContent = createErr.message);
          }
        } else {
          error.textContent = err.message;
        }
      });
  });

  // CANCEL EMAIL (unchanged)
  document.getElementById('email-cancel-btn')?.addEventListener('click', () => {
    document.getElementById('email-modal').style.display = 'none';
  });

  // USERNAME SAVE (unchanged — saves to Firestore)
  document.getElementById('username-save-btn')?.addEventListener('click', async () => {
  const spinner =
 document.getElementById('spinner');
 const svTxt =
 document.getElementById('svTxt');
 spinner.style.display = 'block';
 svTxt.style.display = 'none';
    const username = document.getElementById('username-input').value.trim();
    const error = document.getElementById('username-error');
    const modal = document.getElementById('username-modal');

    error.textContent = '';

    if (username.length < 5) {
      error.textContent = "Username must be at least 5 characters";
      if (spinner) {
          spinner.style.display = 'none';
      };
      if (svTxt) {
          svTxt.style.display = 'block';
      };
      modal.classList.add('shake');
      setTimeout(() => modal.classList.remove('shake'), 500);
      return;
    }

    const taken = await isUsernameTaken(username);
    if (taken) {
      error.textContent = "Username already taken";
       if (spinner) {
          spinner.style.display = 'none';
      };
      if (svTxt) {
          svTxt.style.display = 'block';
      };
      modal.classList.add('shake');
      setTimeout(() => modal.classList.remove('shake'), 500);
      return;
    }

    const userRef = doc(db, "users", currentUser.uid);
    setDoc(userRef, {
      username: username,
      createdAt: serverTimestamp()
    }, { merge: true })
    .then(() => {
      currentUser.username = username;
      document.getElementById('username-modal').style.display = 'none';
      updateUserDisplay();
      initGame();
    })
    .catch(err => {
      error.textContent = "Save failed: " + err.message;
    });
  });

  // CANCEL USERNAME → LOG OUT (unchanged)
  document.getElementById('username-cancel-btn')?.addEventListener('click', () => {
    document.getElementById('username-modal').style.display = 'none';
    signOut(auth);
  });

  // SIGN OUT (unchanged)
  document.getElementById('signout-btn')?.addEventListener('click', async () => {
    await signOut(auth);
    location.reload();
  });

  // LISTEN FOR LOGIN STATE — added async + getDoc to load username on reload
  onAuthStateChanged(auth, async (user) => {
    currentUser = window.currentUser = user;

    if (user) {
      // Load saved username if exists
      const userRef = doc(db, "users", user.uid);
      const snap = await getDoc(userRef);
      if (snap.exists() && snap.data().username) {
        currentUser.username = snap.data().username;
        
      }
      await hydrateBestScores();
 if (typeof window.getBestForLevel === 'function') {
  window.best = window.getBestForLevel();
}

if (window.bestEl) {
  window.bestEl.textContent = window.best;
}

if (typeof window.updateMenuDifficulty === 'function') {
  window.updateMenuDifficulty();
}

  updateUserDisplay();
    }

    updateUserDisplay();
  });

  // Initial display
  updateUserDisplay();
  
  // ========= Leaderboard ==========
  async function updateLeaderboardEntry({
  uid,
  username,
  level,
  metric,
  value
}) {
  if (value === null || value === undefined) return;

  const lbRef = doc(
    db,
    `leaderboards/${level}_${metric}`,
    uid
  );

  await setDoc(lbRef, {
    uid,
    username,
    level,
    metric,
    value,
    updatedAt: serverTimestamp()
  }, { merge: true });
}
  
  // ========= syncing best score to cloud ========
   export async function syncBestToCloud() {
  if (!window.currentUser) return;

  const uid = window.currentUser.uid;
  const username =
    window.currentUser.username ||
    window.currentUser.displayName ||
    window.currentUser.email.split('@')[0];

  const userRef = doc(db, "users", uid);

  // 🔹 Read previous cloud values ONCE
  const snap = await getDoc(userRef);
  const cloudBest = snap.exists() ? snap.data().best || {} : {};

  const best = {};

  document.querySelectorAll('.diff-item').forEach(item => {
    const lvl = item.dataset.level;

    const score = Number(localStorage.getItem(`best-${lvl}`)) || 0;
    const highestTile = Number(localStorage.getItem(`tile-${lvl}`)) || 0;
    const longestTime = Number(localStorage.getItem(`time-${lvl}`)) || 0;
    const fastest2048 = Number(localStorage.getItem(`fastest2048-${lvl}`)) || null;

    const prev = cloudBest[lvl] || {};

    best[lvl] = {
      score,
      highestTile,
      longestTime,
      fastest2048
    };

    // SCORE (higher is better)
    if (score > (prev.score ?? 0)) {
      updateLeaderboardEntry({ uid, username, level: lvl, metric: 'score', value: score });
    }

    // HIGHEST TILE (higher is better)
    if (highestTile > (prev.highestTile ?? 0)) {
      updateLeaderboardEntry({ uid, username, level: lvl, metric: 'highestTile', value: highestTile });
    }

    // LONGEST SESSION (higher is better)
    if (longestTime > (prev.longestTime ?? 0)) {
      updateLeaderboardEntry({ uid, username, level: lvl, metric: 'longestSession', value: longestTime });
    }

    // FASTEST 2048 (lower is better)
    if (
      fastest2048 !== null &&
      (prev.fastest2048 === undefined || fastest2048 < prev.fastest2048)
    ) {
      updateLeaderboardEntry({ uid, username, level: lvl, metric: 'fastest2048', value: fastest2048 });
    }
  });

  // 🔹 Persist updated bests to user profile
  await setDoc(userRef, {
    best,
    updatedAt: serverTimestamp()
  }, { merge: true });

  console.log("Cloud + leaderboard sync complete (guarded)");
}