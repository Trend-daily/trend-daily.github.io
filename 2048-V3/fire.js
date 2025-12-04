import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
  import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAjQJzabhJEBuOWl-EmZfn09kMa6FOIsUc",
    authDomain: "grid-evolution.firebaseapp.com",
    projectId: "grid-evolution",
    storageBucket: "grid-evolution.firebasestorage.app",
    messagingSenderId: "134962959534",
    appId: "1:134962959534:web:9a93aa90473bb5acbac93f",
    measurementId: "G-MZMGQM9VJQ"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

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

  let currentUser = null;
  let currentLevel = localStorage.getItem('2048-level') || 'super-easy';
  window.currentLevel = currentLevel;

  // ================== SAVE BEST SCORE ==================
  async function saveBestScoreToCloud(level, score) {
    if (!currentUser) return;
    try {
      await setDoc(
        doc(db, "scores", `${currentUser.uid}-${level}`),
        {
          uid: currentUser.uid,
          level: level,
          best: score,
          updated: serverTimestamp()
        },
        { merge: true }
      );
      console.log("🔥 Cloud score saved:", level, score);
    } catch (err) {
      console.error("❌ Failed to save cloud score:", err);
    }
  }

  // ================== FETCH CLOUD SCORE ==================
  async function fetchCloudScores() {
    if (!currentUser) return;

    const userRef = doc(db, "scores", `${currentUser.uid}-${currentLevel}`);
    try {
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        const score = data.best || 0;
        localStorage.setItem(`cloud-best-${currentUser.uid}-${currentLevel}`, score);
        updateMenuScores();
        console.log("Cloud score loaded:", score);
      }
    } catch (err) {
      console.error("❌ Error fetching cloud score:", err);
    }
  }

  // ================== UPDATE MENU DISPLAY ==================
  function updateUserDisplay() {
    const display = document.getElementById('user-display');
    const signinBtn = document.getElementById('google-signin');
    const signoutBtn = document.getElementById('signout-btn');

    if (currentUser) {
      display.innerHTML = `
        <img src="${currentUser.photoURL}" style="width:40px;height:40px;border-radius:50%;margin-right:10px;">
        <strong>@${currentUser.displayName.split(' ')[0]}</strong>
      `;
      signinBtn.style.display = 'none';
      signoutBtn.style.display = 'block';
    } else {
      display.innerHTML = '<p>Guest Player</p>';
      signinBtn.style.display = 'block';
      signoutBtn.style.display = 'none';
    }
    updateMenuScores();
  }

  // ================== LOGIN / LOGOUT ==================
  document.getElementById('google-signin')?.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  });

  document.getElementById('signout-btn')?.addEventListener('click', () => {
    signOut(auth);
  });

  onAuthStateChanged(auth, (user) => {
    currentUser = user;
    updateUserDisplay();
    updateMenuScores();
    fetchCloudScores();
    initGame(); // restart game on login
  });

  // ================== UPDATE MENU SCORES ==================
  window.updateMenuScores = function() {
    document.querySelectorAll('.diff-item').forEach(item => {
      const lvl = item.dataset.level;
      const span = item.querySelector('.best-score');

      if (currentUser) {
        const key = `cloud-best-${currentUser.uid}-${lvl}`;
        const score = localStorage.getItem(key) || 0;
        span.textContent = parseInt(score).toLocaleString();
      } else {
        const score = localStorage.getItem(`best-${lvl}`) || 0;
        span.textContent = parseInt(score).toLocaleString();
      }
    });
  };