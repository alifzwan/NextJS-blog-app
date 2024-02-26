// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-application-503ab.firebaseapp.com",
  projectId: "blog-application-503ab",
  storageBucket: "blog-application-503ab.appspot.com",
  messagingSenderId: "139508013408",
  appId: "1:139508013408:web:bd72a04f20b603c63b6605"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);