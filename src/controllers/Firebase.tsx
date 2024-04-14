// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOfHAqUdZPPKI3gWK7LwUzsyRlXe36USs",
  authDomain: "my-portfolio-c6133.firebaseapp.com",
  projectId: "my-portfolio-c6133",
  storageBucket: "my-portfolio-c6133.appspot.com",
  messagingSenderId: "707871745276",
  appId: "1:707871745276:web:661d2de5b65b4f50d02379"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore service
export const dataBase = getFirestore(app);

// Obtener la referencia de la raiz para el almacenamiento de firebase
export const firebase_storage = getStorage(app);