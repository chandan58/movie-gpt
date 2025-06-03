// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9Fi93WHD8TXhTNZH-t43kL7twEl1gVzE",
  authDomain: "moviegpt-c2cd8.firebaseapp.com",
  projectId: "moviegpt-c2cd8",
  storageBucket: "moviegpt-c2cd8.firebasestorage.app",
  messagingSenderId: "715334123891",
  appId: "1:715334123891:web:c646693f1884f81fcb0506",
  measurementId: "G-S1VK2RY97Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();