// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1Du9R2SBqF9qdaK1R1H7yzLz5900dfq4",
    authDomain: "db-app-9ecd2.firebaseapp.com",
    projectId: "db-app-9ecd2",
    storageBucket: "db-app-9ecd2.appspot.com",
    messagingSenderId: "879865459590",
    appId: "1:879865459590:web:bcfc5cce12d2f3fdfef207",
    measurementId: "G-5DDTTV7P9V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);