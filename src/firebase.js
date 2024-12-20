// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlXTSc2FQwu_MehU2lYN9JqJdGxiXQM7A",
  authDomain: "daily-panel-app.firebaseapp.com",
  projectId: "daily-panel-app",
  storageBucket: "daily-panel-app.firebasestorage.app",
  messagingSenderId: "402882152017",
  appId: "1:402882152017:web:209940419eb23b191a1a70",
  measurementId: "G-G4QR7TF3QZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; // Named export
export default app; // Default export


