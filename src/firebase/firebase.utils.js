import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyB-PEG6alpGam3-PTjtAVJF9vew-94mRwI",
    authDomain: "crwn-db-ef06a.firebaseapp.com",
    databaseURL: "https://crwn-db-ef06a.firebaseio.com",
    projectId: "crwn-db-ef06a",
    storageBucket: "crwn-db-ef06a.appspot.com",
    messagingSenderId: "965361315497",
    appId: "1:965361315497:web:ce5faa78294bc74ace03b8",
    measurementId: "G-8QY5JNGPZG"
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'prompt': 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

