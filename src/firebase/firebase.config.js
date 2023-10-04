// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXFfgEbX7PatrLOR2L9VCuo6gRw4zqrw0",
  authDomain: "my-dragon-news-2f0a0.firebaseapp.com",
  projectId: "my-dragon-news-2f0a0",
  storageBucket: "my-dragon-news-2f0a0.appspot.com",
  messagingSenderId: "1008830033655",
  appId: "1:1008830033655:web:462ddc673d857d7bd8edf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;