// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG0tFJ-HQTxwa5fcIWXHuqw7SUIEQQTZ4",
  authDomain: "wanderlust-3dda8.firebaseapp.com",
  projectId: "wanderlust-3dda8",
  storageBucket: "wanderlust-3dda8.appspot.com",
  messagingSenderId: "692398163500",
  appId: "1:692398163500:web:7a0fe8c13735da9eef3389"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);