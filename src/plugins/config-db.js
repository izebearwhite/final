import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAV244LhVSk7-lki_KByy22KYSs7T0mzrU",
  authDomain: "pjfinal-4ea57.firebaseapp.com",
  projectId: "pjfinal-4ea57",
  storageBucket: "pjfinal-4ea57.appspot.com",
  messagingSenderId: "66415492672",
  appId: "1:66415492672:web:5de49072b0c1872822e9a5",
  measurementId: "G-LZ35PVDMDC",
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { db, auth };
