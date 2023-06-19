// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRk-ybzZRwYBtdAimez1UHym3ASV8BKSk",
  authDomain: "stackoverflow-clone-36101.firebaseapp.com",
  projectId: "stackoverflow-clone-36101",
  storageBucket: "stackoverflow-clone-36101.appspot.com",
  messagingSenderId: "50830494591",
  appId: "1:50830494591:web:17633c95b264d5b955a84a",
  measurementId: "G-WV8435QSYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth , provider};