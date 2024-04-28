import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxx8dbDiSn_PDg7KTOz_cC6JEwmt4x-dc",
  authDomain: "aston-8907b.firebaseapp.com",
  projectId: "aston-8907b",
  storageBucket: "aston-8907b.appspot.com",
  messagingSenderId: "291060549610",
  appId: "1:291060549610:web:3a18122c241863ed085493",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
