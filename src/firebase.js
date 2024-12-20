import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR-APIKEY",
  authDomain: "YOUR-AUTHDOMAIN",
  projectId: "YOUR-PROJECTID",
  storageBucket: "YOUR-STORAGEBUCKET",
  messagingSenderId: "YOUR-MESSAGINGSENDERID",
  appId: "YOUR-APPID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;