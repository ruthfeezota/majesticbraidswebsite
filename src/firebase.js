// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwXkOgBYv3V8vHu7dKvtUr4eXVvQnjkJo",
  authDomain: "majesticbraidswebsite.firebaseapp.com",
  projectId: "majesticbraidswebsite",
  storageBucket: "majesticbraidswebsite.firebasestorage.app",
  messagingSenderId: "563265890122",
  appId: "1:563265890122:web:b94ba197c214193fb883b3",
  measurementId: "G-MEHWDERJ4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);