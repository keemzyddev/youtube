// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCve29-ou38ss6t2Qs3CpB71J7n3ewvKa8",
  authDomain: "ecommerce-a0b9f.firebaseapp.com",
  projectId: "ecommerce-a0b9f",
  storageBucket: "ecommerce-a0b9f.appspot.com",
  messagingSenderId: "481819862860",
  appId: "1:481819862860:web:a1b3c022ceb643b68891e9",
  measurementId: "G-Z6115DD7LS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
