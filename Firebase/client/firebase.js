// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdt2CnSuwaFCStVOsn0EmYxj__AdZIK3A",
  authDomain: "todo-test-c0cd2.firebaseapp.com",
  projectId: "todo-test-c0cd2",
  storageBucket: "todo-test-c0cd2.appspot.com",
  messagingSenderId: "20910509966",
  appId: "1:20910509966:web:4762dc2b6fce3a86a19edf",
  measurementId: "G-T0PDRE5TEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
