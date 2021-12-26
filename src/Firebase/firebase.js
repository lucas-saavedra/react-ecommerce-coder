// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPomodL-7OAF9FoLobMrWU7YxdhlrVDs8",
    authDomain: "react-ecommerce-bd-coderhouse.firebaseapp.com",
    projectId: "react-ecommerce-bd-coderhouse",
    storageBucket: "react-ecommerce-bd-coderhouse.appspot.com",
    messagingSenderId: "558326552478",
    appId: "1:558326552478:web:14b37e1897d32c8a6ee88f",
    measurementId: "G-0H95KQREZ6"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default function getFirestore() {
    return firebase.firestore(app)
} 
