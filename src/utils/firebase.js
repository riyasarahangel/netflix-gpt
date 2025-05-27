// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6VzjBb2w26ZjJ65kaK2YIvoIpMKtAbBc",
  authDomain: "netflixgpt-b7553.firebaseapp.com",
  projectId: "netflixgpt-b7553",
  storageBucket: "netflixgpt-b7553.firebasestorage.app",
  messagingSenderId: "133874583321",
  appId: "1:133874583321:web:a74ea1c6cafe3bc2856788",
  measurementId: "G-ZLGLM87BSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();