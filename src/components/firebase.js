// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyFoZV7-chWw9ckJKh9S2tuNL42IW5wJc",
  authDomain: "food-d1fe6.firebaseapp.com",
  projectId: "food-d1fe6",
  storageBucket: "food-d1fe6.appspot.com",
  messagingSenderId: "763479984275",
  appId: "1:763479984275:web:dce6de48f1fb96184c2566",
  measurementId: "G-DK9SPYKMM3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
