// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage"; 

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoOCsEXNnpxJVMIQUSDx-Yv_5OnDx5fxQ",
  authDomain: "e-commerce-a0213.firebaseapp.com",
  databaseURL: "https://e-commerce-a0213-default-rtdb.firebaseio.com",
  projectId: "e-commerce-a0213",
  storageBucket: "e-commerce-a0213.appspot.com", // Fix this if incorrect
  messagingSenderId: "219263349769",
  appId: "1:219263349769:web:ce7380dc375032bfe5b4d8",
  measurementId: "G-4C6RC37H48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export modules
export const auth = getAuth(app); // Firebase Auth
export const db = getFirestore(app); // Firestore
// export const storage = getStorage(app); 
