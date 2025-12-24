 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDX4eERQZVQaU6ebTqbYCYPpE9auzJr7tk",
    authDomain: "quantorv-games2048.firebaseapp.com",
    projectId: "quantorv-games2048",
    storageBucket: "quantorv-games2048.firebasestorage.app",
    messagingSenderId: "352136613598",
    appId: "1:352136613598:web:58d08f5db9518550c47c4f",
    measurementId: "G-P7E5K3YC8Y"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);