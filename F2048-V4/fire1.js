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

  // Expose globally
  window.auth = auth;
  window.db = db;
  window.GoogleAuthProvider = GoogleAuthProvider;
  window.signInWithPopup = signInWithPopup;
  window.signInWithEmailAndPassword = signInWithEmailAndPassword;
  window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
  window.signOut = signOut;

  let currentUser = null;

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
      .then(() => handleLoginComplete())  // ← changed
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
        document.getElementById('email-modal').style.display = 'none';
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
    const username = document.getElementById('username-input').value.trim();
    const error = document.getElementById('username-error');
    const modal = document.getElementById('username-modal');

    error.textContent = '';

    if (username.length < 5) {
      error.textContent = "Username must be at least 5 characters";
      modal.classList.add('shake');
      setTimeout(() => modal.classList.remove('shake'), 500);
      return;
    }

    const taken = await isUsernameTaken(username);
    if (taken) {
      error.textContent = "Username already taken";
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
    currentUser = user;

    if (user) {
      // Load saved username if exists
      const userRef = doc(db, "users", user.uid);
      const snap = await getDoc(userRef);
      if (snap.exists() && snap.data().username) {
        currentUser.username = snap.data().username;
      }
    }

    updateUserDisplay();
  });

  // Initial display
  updateUserDisplay();