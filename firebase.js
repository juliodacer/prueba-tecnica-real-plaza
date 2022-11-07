import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCXuVyUf9ZqszN-0_9mOR5qBiwSSp-5yOQ",
    authDomain: "prueba-tecnica-real-plaza.firebaseapp.com",
    projectId: "prueba-tecnica-real-plaza",
    storageBucket: "prueba-tecnica-real-plaza.appspot.com",
    messagingSenderId: "403904547091",
    appId: "1:403904547091:web:37f19a85230dc43f7c72e6",
    measurementId: "G-KKRE6Q1J8R"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}