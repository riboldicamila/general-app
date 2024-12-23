import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDlXTSc2FQwu_MehU2lYN9JqJdGxiXQM7A",
  authDomain: "daily-panel-app.firebaseapp.com",
  projectId: "daily-panel-app",
  storageBucket: "daily-panel-app.firebasestorage.app",
  messagingSenderId: "402882152017",
  appId: "1:402882152017:web:209940419eb23b191a1a70",
  measurementId: "G-G4QR7TF3QZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; 
export default app; 

export {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
};
