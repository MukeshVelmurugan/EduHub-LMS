// lms-dashboard/src/auth_system/firebase.js
// Firebase configuration and initialization
// This file sets up Firebase authentication and Firestore database for the LMS dashboard application.

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDJwMjg9mQIWocWBb_66yykCDWGzxnswOw",

authDomain: "1ms-dashboard-6584e.firebaseapp.com",

projectId: "1ms-dashboard-6584e",

storageBucket: "1ms-dashboard-6584e.appspot.com",

messagingSenderId: "864176192600",

appId: "1:864176192600:web:4c518321d44c75f6d51e2d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); 
