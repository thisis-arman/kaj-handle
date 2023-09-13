// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMt1p3JSXuhRZ5PWuJvjthLq3U5-RfDLo",
  authDomain: "handle-kaj.firebaseapp.com",
  projectId: "handle-kaj",
  storageBucket: "handle-kaj.appspot.com",
  messagingSenderId: "1060180131368",
  appId: "1:1060180131368:web:b1d980259a2f8881223f1d",
  measurementId: "G-ES96SVHBJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {app,analytics}