// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9cd9a.firebaseapp.com",
  projectId: "mern-estate-9cd9a",
  storageBucket: "mern-estate-9cd9a.appspot.com",
  messagingSenderId: "947251663344",
  appId: "1:947251663344:web:7b5d3faaf8f04c14028d35"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);