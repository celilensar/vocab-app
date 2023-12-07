// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvig0FNg1yyv_CFebLZVZzbzccjVbRS4A",
  authDomain: "vocabapp-bf4a3.firebaseapp.com",
  projectId: "vocabapp-bf4a3",
  storageBucket: "vocabapp-bf4a3.appspot.com",
  messagingSenderId: "290829692529",
  appId: "1:290829692529:web:3db4a4dd7678941ee835d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)