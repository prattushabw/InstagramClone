// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXUBmOHZ0qpqkPRBf6r2YvZAlBIymm_hs",
  authDomain: "instagram-clone-959d9.firebaseapp.com",
  projectId: "instagram-clone-959d9",
  storageBucket: "instagram-clone-959d9.appspot.com",
  messagingSenderId: "48423627624",
  appId: "1:48423627624:web:a96b0d1793a8ad9af404dd",
  measurementId: "G-QHB5RGZFEK"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
//const analytics = getAnalytics(app);

export { app, db, storage };