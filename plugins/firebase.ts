// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import type { Analytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { defineNuxtPlugin } from '#app'

// Define the Firebase configuration type
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string; // Optional because measurementId is not always required
}

// Your web app's Firebase configuration
const firebaseConfig: FirebaseConfig = {
    apiKey: "AIzaSyCImq46-ObLLNdjsuXzWXl-20dlWJLzOzo",
  authDomain: "web-final-29a06.firebaseapp.com",
  projectId: "web-final-29a06",
  storageBucket: "web-final-29a06.firebasestorage.app",
  messagingSenderId: "303263586144",
  appId: "1:303263586144:web:f0386df926b0e062ae7005",
  measurementId: "G-R7HBMYMX5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics: Analytics | null = typeof window !== "undefined" ? getAnalytics(app) : null;
const auth = getAuth(app);


export default defineNuxtPlugin(() => {
  return {
    provide:{
      auth: () => auth,
      analytics: () => analytics
      }
  }
})
export {  analytics };