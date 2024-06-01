// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAv-1rPYHdS2Zh1JhxQuZMNTU6VwYPKWLY",
  authDomain: "house-junction.firebaseapp.com",
  projectId: "house-junction",
  storageBucket: "house-junction.appspot.com",
  messagingSenderId: "957741580676",
  appId: "1:957741580676:web:3a8320db32e82239acddd1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
