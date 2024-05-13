// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQndjSlBrT4fR6BX25ojfFZT7ivStUGO0",
  authDomain: "react-disney-plus-app-11d45.firebaseapp.com",
  projectId: "react-disney-plus-app-11d45",
  storageBucket: "react-disney-plus-app-11d45.appspot.com",
  messagingSenderId: "917307681624",
  appId: "1:917307681624:web:7886549a1117137759132d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
