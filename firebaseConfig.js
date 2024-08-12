// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClv8M9kzylOmwChmnqWZzJBEB-KezogrY",
  authDomain: "professionalteachershub-24a14.firebaseapp.com",
  projectId: "professionalteachershub-24a14",
  storageBucket: "professionalteachershub-24a14.appspot.com",
  messagingSenderId: "365793195159",
  appId: "1:365793195159:web:508f3462db6ecd38fe65d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore();
export const storage = getStorage()