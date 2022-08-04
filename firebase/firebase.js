import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'dotenv/config'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "fir-app-40f13.firebaseapp.com",
  projectId: "fir-app-40f13",
  storageBucket: "fir-app-40f13.appspot.com",
  messagingSenderId: "989011033890",
  appId: "1:989011033890:web:a37608cc4fb9a479a0af7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)