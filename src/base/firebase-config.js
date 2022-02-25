import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBv0cZhEYqJZ0xmIo4QibbUuCxhFXDiFnQ",
    authDomain: "no-country-project-60b40.firebaseapp.com",
    projectId: "no-country-project-60b40",
    storageBucket: "no-country-project-60b40.appspot.com",
    messagingSenderId: "481863726999",
    appId: "1:481863726999:web:c1ca8549cec5e420f4f6d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    auth,
    signInWithPopup
}