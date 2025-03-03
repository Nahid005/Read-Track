// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1g6OjTCmzDbNCL4CKI0qO-rsm7Lb9hHQ",
  authDomain: "read-track.firebaseapp.com",
  projectId: "read-track",
  storageBucket: "read-track.firebasestorage.app",
  messagingSenderId: "974255834958",
  appId: "1:974255834958:web:4ce4bbbb009313acdac01f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;