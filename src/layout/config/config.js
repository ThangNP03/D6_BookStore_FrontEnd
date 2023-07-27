// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVNJ16VLHl06HQ72kXnwD6K1VMqeSW-NI",
  authDomain: "npthangcom.firebaseapp.com",
  projectId: "npthangcom",
  storageBucket: "npthangcom.appspot.com",
  messagingSenderId: "933018219301",
  appId: "1:933018219301:web:95ea62633678673039e0cc",
  measurementId: "G-VY5JLQ76MZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);