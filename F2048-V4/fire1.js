  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

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

  window.auth = auth;
  window.GoogleAuthProvider = GoogleAuthProvider;
  window.signInWithPopup = signInWithPopup;
  window.signInWithEmailAndPassword = signInWithEmailAndPassword;
  window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
  window.signOut = signOut;

  let currentUser = null;

  function updateUserDisplay() {
    const display = document.getElementById('user-display');
    const signinButtons = document.getElementById('signin-buttons');
    const signoutBtn = document.getElementById('signout-btn');

    if (currentUser) {
      display.innerHTML = `
        <img src="${currentUser.photoURL || 'default.png'}" style="width:60px;height:60px;border-radius:50%;border:3px solid #00ffff;">
        <strong style="color:#39ff14;">@${currentUser.displayName || currentUser.email.split('@')[0]}</strong>
      `;
      signinButtons.style.display = 'none';
      signoutBtn.style.display = 'block';
    } else {
      display.innerHTML = '<p style="color:#888;">Guest Player</p>';
      signinButtons.style.display = 'flex';
      signoutBtn.style.display = 'none';
    }
  }

  // Show username modal after any login
  function showUsernameModal() {
    document.getElementById('username-modal').style.display = 'flex';
  }

  // GOOGLE LOGIN
  document.getElementById('google-signin')?.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => showUsernameModal())
      .catch(err => alert("Google login failed: " + err.message));
  });

  // EMAIL LOGIN
  document.getElementById('email-signin')?.addEventListener('click', () => {
    document.getElementById('email-modal').style.display = 'flex';
  });

  // EMAIL LOGIN BUTTON
  document.getElementById('email-login-btn')?.addEventListener('click', () => {
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
    const error = document.getElementById('email-error');

    if (!email || !password) {
      error.textContent = "Fill all fields";
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        document.getElementById('email-modal').style.display = 'none';
        showUsernameModal();
      })
      .catch(err => {
        if (err.code === 'auth/user-not-found') {
          if (confirm("No account. Create one?")) {
            createUserWithEmailAndPassword(auth, email, password)
              .then(() => {
                document.getElementById('email-modal').style.display = 'none';
                showUsernameModal();
              })
              .catch(createErr => error.textContent = createErr.message);
          }
        } else {
          error.textContent = err.message;
        }
      });
  });

  // CANCEL EMAIL
  document.getElementById('email-cancel-btn')?.addEventListener('click', () => {
    document.getElementById('email-modal').style.display = 'none';
  });

  // USERNAME SAVE
  document.getElementById('username-save-btn')?.addEventListener('click', () => {
    const username = document.getElementById('username-input').value.trim();
    if (!username) {
      document.getElementById('username-error').textContent = "Enter username";
      return;
    }
    // Save username to Firestore later
    document.getElementById('username-modal').style.display = 'none';
    initGame(); // Restart game after login complete
  });

  // CANCEL USERNAME → LOG OUT
  document.getElementById('username-cancel-btn')?.addEventListener('click', () => {
    document.getElementById('username-modal').style.display = 'none';
    signOut(auth); // Cancel login
  });

  // SIGN OUT
  document.getElementById('signout-btn')?.addEventListener('click', () => {
    signOut(auth);
  });

  // LISTEN FOR LOGIN
  onAuthStateChanged(auth, (user) => {
    currentUser = user;
    updateUserDisplay();
  });

