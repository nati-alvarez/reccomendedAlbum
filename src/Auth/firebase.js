import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const userApp = firebase.initializeApp({
  
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

const firestore = userApp.firestore()
export const database = {
    label: firestore.collection('label'),
    artist: firestore.collection('artist'),
    title: firestore.collection('title'),
    topTen: firestore.collection('topTen')
}

export const auth = userApp.auth();

export default userApp;
