// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFfbhIH-r-EcSNs2pOrvKW8mByo1E34ZU",
  authDomain: "netflixgpt-a473f.firebaseapp.com",
  projectId: "netflixgpt-a473f",
  storageBucket: "netflixgpt-a473f.firebasestorage.app",
  messagingSenderId: "828541926976",
  appId: "1:828541926976:web:b64f7bc4b7cc013b1269a5",
  measurementId: "G-HM33920YH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
