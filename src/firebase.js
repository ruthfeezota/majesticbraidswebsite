// firebaseConfig.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics"; // You can uncomment this if you need analytics

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
const db = getFirestore(app); // Initialize Firestore and export it
// const analytics = getAnalytics(app); // Uncomment if you need analytics

export { app, db }; // Export both app and db