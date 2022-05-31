// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdXTizzydxzsW22Z7cTZWTGiLWnPMWqtU",
  authDomain: "proyectocoseres.firebaseapp.com",
  projectId: "proyectocoseres",
  storageBucket: "proyectocoseres.appspot.com",
  messagingSenderId: "695812982112",
  appId: "1:695812982112:web:ce3b89a01cf481ee280a05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app
}