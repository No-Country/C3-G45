import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBv0cZhEYqJZ0xmIo4QibbUuCxhFXDiFnQ",
    authDomain: "no-country-project-60b40.firebaseapp.com",
    projectId: "no-country-project-60b40",
    storageBucket: "no-country-project-60b40.appspot.com",
    messagingSenderId: "481863726999",
    appId: "1:481863726999:web:c1ca8549cec5e420f4f6d2"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}