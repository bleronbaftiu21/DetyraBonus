// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAHTu5q2DR1AmXnjAr89e-cmTviT8itys",
  authDomain: "task-manager---2b-c2723.firebaseapp.com",
  projectId: "task-manager---2b-c2723",
  storageBucket: "task-manager---2b-c2723.firebasestorage.app",
  messagingSenderId: "548001629343",
  appId: "1:548001629343:web:75646bb6eb6e75647d4eaa",
  measurementId: "G-EDMFN1KEEL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;
